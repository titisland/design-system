#!/usr/bin/env python3
"""
设计系统日报 — GitHub Actions 脚本
扫描两个设计系统子文件夹今天的 Git 提交，汇总后推送到飞书群。
"""

import json
import os
import subprocess
import urllib.request
import urllib.error
from datetime import datetime, timedelta, timezone
from collections import defaultdict

# ── 配置 ──────────────────────────────────────
FEISHU_WEBHOOK   = os.environ["FEISHU_WEBHOOK"]
SYSTEM_NAME      = "设计系统日报"
FEEDBACK_DOC_URL = "https://veevasys.feishu.cn/sheets/RvTzsfpSnhACbctqAvRc6NiMnbg"
GITHUB_REPO_URL  = "https://github.com/titisland/design-system"
SYSTEMS = [
    {"name": "Wechat Design System", "path": "Wechat Design System"},
    {"name": "Design System",        "path": "Design System"},
]
# ──────────────────────────────────────────────


def run_git(args: list) -> str:
    result = subprocess.run(
        ["git"] + args,
        capture_output=True, text=True, encoding="utf-8"
    )
    return result.stdout.strip()


def get_today_range() -> tuple[str, str]:
    """返回今天 00:00 ~ 现在的 ISO 时间段（UTC）"""
    now   = datetime.now(timezone.utc)
    start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    return start.isoformat(), now.isoformat()


def get_commits_for_path(path: str, since: str) -> list[dict]:
    """获取指定子目录今天的提交"""
    raw = run_git([
        "log", f"--since={since}",
        "--pretty=format:%h|%an|%ad|%s", "--date=short",
        "--", path
    ])
    if not raw:
        return []
    commits = []
    for line in raw.splitlines():
        parts = line.split("|", 3)
        if len(parts) == 4:
            commits.append({
                "hash": parts[0], "author": parts[1],
                "date": parts[2], "message": parts[3],
            })
    return commits


def get_changed_files_for_path(path: str, since: str) -> dict[str, list[str]]:
    """获取指定子目录今天变更的文件，按二级目录分组"""
    raw = run_git([
        "log", f"--since={since}",
        "--name-only", "--pretty=format:", "--diff-filter=ACMR",
        "--", path
    ])
    by_category = defaultdict(set)
    for line in raw.splitlines():
        line = line.strip()
        if not line:
            continue
        # 去掉子目录前缀后按第一级分类
        rel = line[len(path):].lstrip("/")
        parts = rel.split("/")
        category = parts[0] if len(parts) > 1 else "根目录"
        by_category[category].add(parts[-1])
    return {k: sorted(v) for k, v in by_category.items()}


def friendly_filename(name: str) -> str:
    """把文件名转成更易读的组件名"""
    name = name.replace(".css", "").replace(".json", "").replace(".md", "").replace("-", " ").replace("_", " ")
    return name.title()


def clean_commit_message(msg: str) -> str:
    """去掉技术前缀，返回干净的更新说明"""
    for prefix in ["feat:", "fix:", "chore:", "refactor:", "docs:", "style:", "update:", "init:"]:
        msg = msg.replace(prefix, "").strip()
    return msg


def build_system_block(system: dict, since: str) -> list[list]:
    """为单个设计系统生成 PM 友好的消息块，只展示更新说明"""
    commits = get_commits_for_path(system["path"], since)

    blocks = [[{"tag": "text", "text": f"▌ {system['name']}"}]]

    if not commits:
        blocks.append([{"tag": "text", "text": "   今日暂无更新"}])
        return blocks

    for c in commits[:6]:
        msg = clean_commit_message(c["message"])
        blocks.append([{"tag": "text", "text": f"   • {msg}"}])

    if len(commits) > 6:
        blocks.append([{"tag": "text", "text": f"   …… 以及另外 {len(commits) - 6} 项更新"}])

    return blocks


def format_message(since: str) -> dict:
    tz_cst     = timezone(timedelta(hours=8))
    now_cst    = datetime.now(tz_cst)
    today      = now_cst.strftime("%Y年%m月%d日")
    period     = "上午" if now_cst.hour < 12 else "下午"

    # 统计是否有任何更新
    total_updates = sum(
        len(get_commits_for_path(s["path"], since)) for s in SYSTEMS
    )

    if total_updates == 0:
        greeting = f"今日{period}设计系统暂无更新，规范保持稳定 ✨"
    else:
        greeting = f"设计系统今日{period}有新内容更新，请大家留意同步！"

    content = [
        [{"tag": "text", "text": f"🗓  {today}  {greeting}"}],
        [{"tag": "text", "text": " "}],
    ]

    for system in SYSTEMS:
        content += build_system_block(system, since)
        content.append([{"tag": "text", "text": " "}])

    content += [
        [{"tag": "text", "text": "📥  如何获取最新版本？联系设计同学同步文件，或自行前往下方链接下载。"}],
        [{"tag": "text", "text": " "}],
        [
            {"tag": "text", "text": "💬  有疑问或建议？"},
            {"tag": "a",    "text": "填写问题收集表", "href": FEEDBACK_DOC_URL},
            {"tag": "text", "text": "，我们会及时跟进。"},
        ],
        [{"tag": "text", "text": " "}],
        [{"tag": "text", "text": f"— 设计系统自动播报 · {today}"}],
    ]

    return {
        "msg_type": "post",
        "content": {"post": {"zh_cn": {"title": f"📦 设计系统更新播报", "content": content}}},
    }


def send(message: dict):
    data = json.dumps(message).encode("utf-8")
    req  = urllib.request.Request(
        FEISHU_WEBHOOK, data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        result = json.loads(resp.read().decode("utf-8"))
        if result.get("code") == 0 or result.get("StatusCode") == 0:
            print("✅ 飞书推送成功")
        else:
            print(f"❌ 飞书返回错误：{result}")


if __name__ == "__main__":
    since, _ = get_today_range()
    print(f"扫描范围：{since} 至今")

    total_commits = sum(len(get_commits_for_path(s["path"], since)) for s in SYSTEMS)
    if total_commits == 0:
        print("今日无更新，跳过推送。")
    else:
        message = format_message(since)
        send(message)
