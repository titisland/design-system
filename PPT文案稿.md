# UX AI：运用 Design System 和 crm-init 在 Claude 上的实践
## PPT 文案稿 · 共 17 张

---

## Slide 1 · 封面

**UX AI：运用 Design System 和 crm-init 在 Claude 上的实践**
产品经理工作坊

---

## Slide 2 · 现场 Demo

**Content Campaign 全流程 vibe coding 演示**

管理员（Online 端）创建 Campaign → 发送
销售代表（WeChat 端）接收 → 执行

*【现场演示】*

---

## Slide 3 · 揭晓

刚才看到的全流程——从管理员创建到代表执行，Online 端和 WeChat 端——

**全部用 Design System + crm-init，在 Claude 上 vibe coding 完成**
**没有一行代码是手写的**

---

## Slide 4 · 两套并行的设计规范

两套 Design System 并行构建中，分别覆盖两端：

**WeChat Design System**
初始版本，已可使用，持续迭代中

**Online Design System**
初始版本，已可使用，持续迭代中

Design System 是一个持续生长的系统，不是一次性交付物

---

## Slide 5 · 共同的三层结构

两套系统采用相同的框架逻辑：

**Foundation**
颜色、字体、间距、圆角、阴影、图标——设计语言的基础单元

**Components**
基于 Foundation 构建的 UI 组件——可以直接拿来拼接页面

**AI 产品设计规范**
AI 功能场景的专项设计语言——Chat、Insight、Voice

---

## Slide 6 · WeChat — Foundation

*【切到 WeChat index 走查】*

**颜色系统**
品牌橙 #F7981D（AI / 主操作）· 品牌蓝 #3975C6（导航栏）· 语义色（成功 / 警告 / 错误）· 中性色

**字体**
PingFang SC · 8 个字号刻度 · 14px 正文默认

**间距**
4px 基础栅格

**圆角**
5 个严格 token，不允许偏差

**阴影**
4 层高度体系

**图标库**
491 枚图标，线性 / 面性 / Homepage 业务图标三类

---

## Slide 7 · WeChat — Components

*【切到 WeChat index 走查】*

**页面框架类**
导航栏 · Tab 栏 · 列表壳

**内容展示类**
列表行 · 列表操作 · 状态徽章

**数据录入类**
表单 · 筛选器 · 搜索 · 数据范围选择

**反馈与操作类**
按钮 · Toast · 底部操作栏

---

## Slide 8 · WeChat — AI 产品设计规范

*【切到 WeChat index 走查】*

**Chat ✅**
FAB · AI 输入框 · 建议 chip · Bot 回复结构 · 思考流 · Info banner · 语音内容 · Pre-Call Planning · 对话壳 · 消息 · 卡片

**Voice ✅**
渐变背景 · 对话气泡 · Loading toast · 选项行 · 进度条 · 按钮与链接 · 标签 · 语音输入栏 · 拜访报告卡 · AI 追问 sheet · Logo & 形象

**Insight 🔜**
HCP Insights（构建中）

---

## Slide 9 · Online 端

*【切到 Online index 走查】*

与 WeChat 端采用相同的三层结构：
Foundation · Components · AI 产品设计规范

内容由同事补充中，结构框架已就位

---

## Slide 10 · 完整工作流概览

用这套系统做 demo，只需要三步：

**Step 1** 运行 crm-init · 准备好环境
**Step 2** 用 Claude Code vibe coding · 生成 Vue 组件
**Step 3** 提交到 Git · 协作与共享

---

## Slide 11 · crm-init 做了什么

**自动完成的 5 个步骤：**

**① 定位设计系统**
在本机自动找到 Design System 文件夹，不需要手动指定路径

**② 读取核心规范**
加载 README.md · SKILL.md · colors_and_type.css——颜色、字体、间距、组件规则全部进入 Claude 的工作记忆

**③ 扫描可用资产**
确认 CSS 文件清单、491 枚图标、UI Kit 目录都就位

**④ 就绪确认**
Claude 输出一条确认消息：已加载文件数、图标数、两个 Agent（会议小助手 / 拜访助手）

**⑤ 接收任务，立即开干**
告诉 Claude 你想做什么功能，直接生成——不需要再解释设计规则

**整个 session 内持续生效的硬规则：**
图标只从 Design System 取 · 颜色只用 token · 中文界面 · 不发明不存在的页面

---

## Slide 12 · Step 1 — 运行 crm-init

**crm-init 是什么**
一个 Skill 文件，告诉 Claude 如何加载并使用这套 Design System

**运行之后自动完成三件事**
① 在本机定位 Design System 文件夹
② 从 Git 拉取 / 更新最新版本
③ 加载规范上下文（README · SKILL · CSS token · 图标清单）——Claude 就绪，直接开始 vibe coding

**就绪后 Claude 会确认**
已加载的文件数、图标数、两个 Agent（会议小助手 / 拜访助手）——然后问你想做什么

---

## Slide 13 · Step 2 — Vue + Claude Code

**Claude Code 在哪里**
终端 或 VS Code——不是这个 App，是独立的命令行工具

**工作方式**
*【现场演示】*
① 打开终端，进入项目目录
② 告诉 Claude Code 你想做什么功能
③ Claude Code 调用 crm-init，生成符合 Design System 的 Vue 组件
④ 浏览器预览，调整，完成

---

## Slide 14 · Step 3 — Git 协作

**单人使用**
完成后 commit → push，保存到自己的分支

**多人协作**
创建分支 → 开发 → 提交 PR → merge

**每周更新设计系统**
收到 Designer Coco 通知后，重新运行 crm-init，自动拉取最新版本

---

## Slide 15 · 支持与更新机制

**Designer Coco Bot**
飞书 Bot，由 UX Team 配置，负责这套系统的所有通知与反馈

**每周更新**
Designer Coco 每周推送一次更新通知 → 点击通知中的链接 → 运行 crm-init 拉取最新版本

**遇到问题**
在 Designer Coco 推送的链接里直接填写问题 → UX Team 会收到通知并跟进解决

---

## Slide 16 · 注意事项

**① 建立一个固定的 Design System 目录**
在本地建一个专用文件夹存放 Design System，所有 demo 项目都引用这个目录，不要每次新建项目都重新下载一遍

**② 不要用系统外的图标**
只用 Design System 内的 491 枚图标，不引入 Lucide / Material / Font Awesome 等外部库

**③ 不要自定义颜色**
所有颜色来自 token 系统，不用色值，不用"差不多的蓝"

**④ 每次开始前先运行 crm-init**
确保用的是最新版本的设计系统，避免基于旧版本开发

---

## Slide 17 · 接下来

今天工作坊的后续环节：

现在大家来动手——
用 Design System + crm-init + Claude Code
做一个你自己的功能 demo
