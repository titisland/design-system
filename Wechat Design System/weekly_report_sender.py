#!/usr/bin/env python3
"""
WeChat CRM Design System — 飞书周报发送脚本
每周一自动读取 Git 提交记录，生成周报并推送到飞书群。

用法：
  python3 weekly_report_sender.py

配置：
  修改下方 CONFIG 部分的参数即可。
"""

import json
import subprocess
import urllib.request
import urllib.error
from datetime import datetime, timedelta
from pathlib import Path
from collections import defaultdict

# ──────────────────────────────────────────────
# 配置区域（按需修改）
# ──────────────────────────────────────────────
CONFIG = {
    # 飞书机器人 Webhook URL
    "webhook_url": "https://open.feishu.cn/open-apis/bot/v2/hook/5d7244d3-c1d8-473a-b2b8-326fe48fba16",

    # 设计系统 Git 仓库路径
    "repo_path": "/Users/TingSu/Documents/Claude/Projects/Wechat Design System",

    # 统计过去多少天的提交（每日推送改为1天）
    "days_to_scan": 1,

    # 飞书消息中显示的设计系统名称
    "system_name": "WeChat CRM 设计系统",

    # Git 远程仓库名（用于拉取提示，留空则不显示）
    "git_remote": "origin",

    # GitHub 仓库地址（用于生成 Issues 链接）
    "github_repo_url": "https://github.com/VEEVASFA/Campaign-Demo---0529",

    # 问题收集飞书文档链接
    "feedback_doc_url": "https://veevasys.feishu.cn/sheets/RvTzsfpSnhACbctqAvRc6NiMnbg",
}
# ──────────────────────────────────────────────


def run_git(args: list, cwd: str) -> str:
    """执行 git 命令并返回输出"""
    result = subprocess.run(
        ["git"] + args,
        cwd=cwd,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    if result.returncode != 0:
        raise RuntimeError(f"git 命令失败：{result.stderr.strip()}")
    return result.stdout.strip()


def get_week_number() -> int:
    return datetime.now().isocalendar()[1]


def get_date_range() -> tuple[str, str]:
    today = datetime.now()
    start = today - timedelta(days=today.weekday() + 7)  # 上周一
    end = start + timedelta(days=6)
    return start.strftime("%m月%d日"), end.strftime("%m月%d日")


def get_git_log(repo_path: str, days: int) -> list[dict]:
    """获取最近 N 天的 commit 列表，每条包含 hash、作者、时间、message"""
    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    # 格式：hash|作者|时间|提交信息
    raw = run_git(
        ["log", f"--since={since}", "--pretty=format:%h|%an|%ad|%s", "--date=short"],
        cwd=repo_path,
    )
    if not raw:
        return []
    commits = []
    for line in raw.splitlines():
        parts = line.split("|", 3)
        if len(parts) == 4:
            commits.append({
                "hash":    parts[0],
                "author":  parts[1],
                "date":    parts[2],
                "message": parts[3],
            })
    return commits


def get_changed_files(repo_path: str, days: int) -> dict[str, list[str]]:
    """获取最近 N 天内有变更的文件，按顶层目录分组"""
    since = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    raw = run_git(
        ["log", f"--since={since}", "--name-only", "--pretty=format:", "--diff-filter=ACMR"],
        cwd=repo_path,
    )
    by_category: dict[str, set[str]] = defaultdict(set)
    for line in raw.splitlines():
        line = line.strip()
        if not line:
            continue
        parts = Path(line).parts
        category = parts[0] if len(parts) > 1 else "根目录"
        by_category[category].add(Path(line).name)

    # set → 排序列表
    return {k: sorted(v) for k, v in by_category.items()}


def get_remote_url(repo_path: str, remote: str) -> str:
    """获取远程仓库 URL（用于消息中的链接提示）"""
    try:
        url = run_git(["remote", "get-url", remote], cwd=repo_path)
        # 简化显示：去掉 .git 后缀
        return url.removesuffix(".git")
    except RuntimeError:
        return ""


def format_feishu_message(commits: list[dict], by_category: dict[str, list[str]], remote_url: str) -> dict:
    """格式化飞书 rich text 消息"""
    week_num  = get_week_number()
    start_date, end_date = get_date_range()
    today     = datetime.now().strftime("%Y年%m月%d日")
    system_name = CONFIG["system_name"]
    total_commits = len(commits)
    total_files   = sum(len(v) for v in by_category.values())

    # ── 提交列表（最多展示8条）──
    commit_lines = []
    for c in commits[:8]:
        commit_lines.append(
            {"tag": "text", "text": f"  • [{c['date']}] {c['message']}（{c['author']}）"}
        )
    if total_commits > 8:
        commit_lines.append(
            {"tag": "text", "text": f"  …… 共 {total_commits} 条提交，详见仓库"}
        )

    # ── 文件变更摘要 ──
    file_summary_lines = []
    for category, files in by_category.items():
        names = "、".join(files[:4])
        if len(files) > 4:
            names += f" 等{len(files)}个文件"
        file_summary_lines.append(
            {"tag": "text", "text": f"  • 【{category}】{names}"}
        )

    # ── 拉取指引 ──
    pull_hint = "git pull"
    if remote_url:
        pull_hint = f"git pull  （仓库：{remote_url}）"

    # ── 组装消息体 ──
    content_blocks = [
        [{"tag": "text", "text": f"🗓  周期：{start_date} – {end_date}"}],
        [{"tag": "text", "text": f"🔢  本周共 {total_commits} 条提交，涉及 {total_files} 个文件"}],
        [{"tag": "text", "text": " "}],
    ]

    if commit_lines:
        content_blocks.append([{"tag": "text", "text": "📋  提交记录："}])
        for cl in commit_lines:
            content_blocks.append([cl])
        content_blocks.append([{"tag": "text", "text": " "}])

    if file_summary_lines:
        content_blocks.append([{"tag": "text", "text": "📂  变更文件："}])
        for fl in file_summary_lines:
            content_blocks.append([fl])
        content_blocks.append([{"tag": "text", "text": " "}])

    if total_commits == 0:
        content_blocks.append([{"tag": "text", "text": "✨  本周无提交记录，设计系统保持稳定。"}])
    else:
        content_blocks.append([{"tag": "text", "text": f"📥  请大家执行 {pull_hint} 拉取最新版本，保持设计规范一致。"}])

    # 问题收集链接
    github_url    = CONFIG.get("github_repo_url", "").removesuffix(".git")
    feedback_url  = CONFIG.get("feedback_doc_url", "")
    content_blocks.append([{"tag": "text", "text": " "}])
    feedback_line = [{"tag": "text", "text": "💬  有疑问或建议？"}]
    if github_url:
        feedback_line += [
            {"tag": "a", "text": "查看已有 Issues", "href": f"{github_url}/issues"},
            {"tag": "text", "text": "  或  "},
        ]
    if feedback_url:
        feedback_line.append({"tag": "a", "text": "填写问题收集表", "href": feedback_url})
    content_blocks.append(feedback_line)

    content_blocks.append([{"tag": "text", "text": " "}])
    content_blocks.append([{"tag": "text", "text": f"— 自动发送于 {today}"}])

    return {
        "msg_type": "post",
        "content": {
            "post": {
                "zh_cn": {
                    "title": f"📦 {system_name} | 今日更新日报（{datetime.now().strftime('%m月%d日')}）",
                    "content": content_blocks,
                }
            }
        },
    }


def send_to_feishu(webhook_url: str, message: dict) -> bool:
    """POST 消息到飞书 Webhook"""
    data = json.dumps(message).encode("utf-8")
    req  = urllib.request.Request(
        webhook_url,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            if result.get("code") == 0 or result.get("StatusCode") == 0:
                return True
            print(f"飞书返回错误：{result}")
            return False
    except urllib.error.URLError as e:
        print(f"网络请求失败：{e}")
        return False


def save_report_log(commits: list[dict], by_category: dict[str, list[str]]):
    """将本次周报存为 Markdown 文件，方便存档查阅"""
    week_num = get_week_number()
    today    = datetime.now().strftime("%Y-%m-%d")
    log_path = Path(CONFIG["repo_path"]) / "weekly_report_latest.md"

    lines = [
        f"# 周报存档 — 第{week_num}周（{today}）\n\n",
        f"本周共 **{len(commits)}** 条提交，涉及 **{sum(len(v) for v in by_category.values())}** 个文件。\n\n",
        "## 提交记录\n\n",
    ]
    for c in commits:
        lines.append(f"- `{c['hash']}` [{c['date']}] {c['message']}（{c['author']}）\n")

    if by_category:
        lines.append("\n## 变更文件\n")
        for category, files in by_category.items():
            lines.append(f"\n### {category}\n\n")
            for f in files:
                lines.append(f"- {f}\n")

    log_path.write_text("".join(lines), encoding="utf-8")
    print(f"周报存档已保存至：{log_path}")


def main():
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M')}] 开始生成周报...")

    repo   = CONFIG["repo_path"]
    days   = CONFIG["days_to_scan"]
    remote = CONFIG["git_remote"]

    # 检查是否为 git 仓库
    try:
        run_git(["rev-parse", "--git-dir"], cwd=repo)
    except RuntimeError:
        print(f"❌ 路径不是 git 仓库：{repo}")
        print("   请先执行 git init 并提交至少一次。")
        return

    commits     = get_git_log(repo, days)
    by_category = get_changed_files(repo, days)
    remote_url  = get_remote_url(repo, remote)

    print(f"Git 日志读取完成：{len(commits)} 条提交，{sum(len(v) for v in by_category.values())} 个变更文件。")

    message = format_feishu_message(commits, by_category, remote_url)
    save_report_log(commits, by_category)

    print("正在推送到飞书...")
    if send_to_feishu(CONFIG["webhook_url"], message):
        print("✅ 飞书周报推送成功！")
    else:
        print("❌ 推送失败，请检查 Webhook URL 或网络连接。")


if __name__ == "__main__":
    main()
