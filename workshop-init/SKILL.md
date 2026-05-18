---
name: crm-init
description: WeChat CRM Design System 初始化 Skill。不管是 workshop、日常 demo、还是给新同事演示——只要开始用这套设计系统做界面，先跑一遍这个 Skill。运行后自动拉取并加载设计系统规范（README.md、SKILL.md、CSS token 文件、图标清单），把所有上下文装入工作记忆，然后就绪开干。触发词：「开始」「准备好了」「init」「setup」「加载设计系统」「我要开始做」「帮我做个 demo」「做个界面」以及任何要用 WeChat CRM 设计系统生成界面的开场指令。
---

# WeChat CRM Design System — Init

> 这个 Skill 的唯一目的：让 Claude 在 30 秒内装好全套规范上下文，不用手动粘贴 README，不用每次重新解释设计规则——不管是 workshop 现场、日常 demo 还是临时演示都适用。

---

## Step 1 — 定位设计系统根目录

先运行以下 bash，找到设计系统文件夹的实际位置，把结果存为 `$DS`：

```bash
# 按文件夹名搜索（最常见情况）
DS=$(find /Users -maxdepth 8 -type d -name "Wechat Design System" 2>/dev/null | head -1)

# 如果找不到，按特征文件兜底（颜色 token 文件在设计系统里是唯一的）
if [ -z "$DS" ]; then
  DS=$(find /Users -maxdepth 8 -name "colors_and_type.css" 2>/dev/null | head -1 | xargs dirname 2>/dev/null)
fi

echo "DS=$DS"
```

如果输出的 `DS` 是空的，说明用户还没把设计系统文件夹挂载到 Cowork——提示他们：「请在 Cowork 里选择 Wechat Design System 文件夹，然后再运行一次。」

`$DS` 找到后，后续所有步骤都用这个变量，不要硬编码路径。

---

## Step 2 — 读取设计系统核心文件

按顺序 Read 以下文件（全部读完再继续）：

1. **`$DS/README.md`** — 完整设计规范（颜色、字体、间距、组件、图标规则、两个 Agent 的所有细节）
2. **`$DS/SKILL.md`** — 设计硬规则速查（两个 Agent 的使用边界、图标强制规则、生产 vs 原型区别）
3. **`$DS/colors_and_type.css`** — 所有 CSS token（颜色、字体、间距、阴影、圆角）

这三个文件构成**最小完整上下文**。读完之后 Claude 应该已经能回答：品牌色是什么、哪个 Agent 用哪套 CSS、图标从哪里取。

---

## Step 3 — 扫描可用资产

运行下面这条命令，把结果记在工作记忆里（不需要展示给用户）：

```bash
find "$DS" -name "*.css" | sort
find "$DS/assets/icons" -name "*.svg" | wc -l
ls "$DS/ui_kits/"
```

目的：确认 CSS 文件清单、图标总数、UI Kit 目录都存在。如果某个路径 missing，后面生成代码时提前知道要回避。

---

## Step 4 — 就绪确认

用一段简洁的**中文确认消息**告诉用户加载完成，格式如下：

```
✅ 设计系统已就绪

已加载：
• README.md — [X] 行规范
• SKILL.md — 设计规则 & 图标强规
• colors_and_type.css — [N] 个 CSS token
• [X] 个图标（线性 / 面性 / Homepage 三类）
• UI Kits：event-agent / voice-call

两个 Agent：
① 会议小助手（Event Agent）— 企业 CRM 列表 / 表单 / 详情 / 首页
② 拜访助手（Voice Call）— 语音优先聊天面板

你想做什么？告诉我：
• 做哪个 Agent 的什么界面？
• 生产代码（Vue SFC）还是 快速原型（HTML）？
```

消息要简洁、直白，不超过 15 行。不要重复规范内容，不要解释 CSS token。

---

## Step 5 — 接收任务，立即开干

用户回答后，根据已加载的规则直接开始生成。**不要再问 README 里已经有答案的问题。**

常见的「已有答案，不必再问」的情况：
- 品牌色 → `#F7981D`（已在 README）
- 图标来源 → `assets/icons/`（已在 SKILL.md）
- 字体 → PingFang SC 系统字体，不下载（已在 README）
- 圆角体系 → 5个 token（已在 README）

如果任务涉及**具体业务字段**（如"帮我做一个拜访列表"但不知道字段名），再追一个精准问题，其余直接做。

**跨 session 复用**：这个 Skill 可以在同一个工作区的任何新对话开头跑一遍。每次跑都会重新加载最新版规范——设计系统有更新时不用手动通知 Claude，init 一遍自动同步。

---

## 持续生效的硬规则

Init 之后的整个 session 内，Claude 每次生成都必须自检这张表：

| 规则 | 说明 |
|------|------|
| **框架：Vue** | 所有项目基于 Vue 框架。生产代码输出 `.vue` 单文件组件（SFC），使用 Composition API（`<script setup>`）。快速原型可用独立 HTML + Vue CDN，但结构仍应贴近 SFC 习惯 |
| 图标只从 `assets/icons/` 取 | 491 个图标，分线性 / 面性 / Homepage 三类。绝不用 Lucide / Font Awesome / emoji |
| 橙色最多一处 | 每屏最多 1 个 `#F7981D` 元素，上限 2 个 |
| 无暗色模式 | 不生成 dark mode |
| 中文优先 | 界面文案用简体中文，不用 Arial / Roboto 渲染 CJK |
| 不发明新页面 | 只做 README 里有描述的界面，不自由创作不存在的 screen |
| NavBar 持有页面名 | 页面标题在 `.ea-navbar__title`，不另起 subheader |
| 单文件 HTML（原型） | 快速原型 = 一个自包含 `.html` + Vue CDN；图标路径相对于文件位置 |

---

## 文件路径参考

`$DS` = Step 1 动态定位的设计系统根目录（每台机器不同，由 bash 自动找到）

```
$DS/README.md                          ← 全量规范
$DS/SKILL.md                           ← 设计规则速查
$DS/colors_and_type.css                ← 全量 token
$DS/assets/icons/线性/*.svg             ← 284 个线性图标
$DS/assets/icons/面性/*.svg             ← 169 个面性图标
$DS/assets/icons/Homepage/*.svg        ← 38 个首页业务图标
$DS/preview/icons.html                 ← 图标浏览器（可搜索）
$DS/ui_kits/event-agent/               ← Event Agent React UI Kit
$DS/ui_kits/voice-call/                ← Voice Call React UI Kit
$DS/preview/home.html                  ← 首页参考
$DS/preview/detail.html                ← 详情页参考
```
