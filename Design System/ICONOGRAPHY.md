# Iconography

Veeva CRM Online 使用 iconfont.cn 项目 **291740**（font-family: `veev`，类名前缀 `.veev-`）作为统一图标库，包含 300+ 个专为 CRM 场景设计的图标。

线性图标（`-outline`）为默认风格；面性图标（`-solid`）用于激活/选中状态；彩色图标（`-color`）仅用于大尺寸展示或空状态插图。

---

## 使用方式

### 1. 引入字体（Font-class，推荐）

在页面 `<head>` 中加入：

```html
<link rel="stylesheet" href="assets/iconfont/iconfont.css">
```

然后用双类名渲染：

```html
<span class="veev veev-home-outline"></span>
<span class="veev veev-call-solid"></span>
```

### 2. SVG Symbol（颜色可控）

在 `</body>` 前引入：

```html
<script src="assets/iconfont/iconfont.js"></script>
```

然后用 `<use>` 引用：

```html
<svg class="v-icon" aria-hidden="true">
  <use xlink:href="#veev-home-outline"></use>
</svg>
```

配合通用样式：

```css
.v-icon {
  width: 1em; height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}
```

---

## 尺寸规范

| 上下文                        | 尺寸   |
|------------------------------|--------|
| 按钮 / 输入框内嵌              | 14 px  |
| 表格操作列 / 行内标签           | 16 px  |
| 顶栏 / 面包屑 / 次级导航        | 20 px  |
| 左侧导航栏                    | 24 px  |
| 空状态插图 / 空内容大图标        | 48–64 px |

---

## 颜色规范

- 默认跟随父级文字色（`currentColor`）；
- 导航图标默认 `--text-h2 (#333)`，激活时 `--veeva-orange`；
- 禁用状态使用 `--text-disabled (#CCC)`；
- 勿将 `-color` 彩色图标用于导航或密集列表。

---

## 图标目录

> 在线预览：打开 `preview/icons.html`

### 导航 & 应用框架

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-home-outline` | 首页（线性） | 默认状态导航首页 |
| `veev-home-solid` | 首页（面性） | 激活状态导航首页 |
| `veev-task-outline` | 任务（线性） | 任务队列导航 |
| `veev-task-solid` | 任务（面性） | 任务激活态 |
| `veev-calendar-outline` | 日程（线性） | 日历 / 日程导航 |
| `veev-calendar-solid` | 日程（面性） | 日程激活态 |
| `veev-dashbord-outline` | 仪表盘（线性） | 报表 / 看板导航 |
| `veev-dashbord-solid` | 仪表盘（面性） | 报表激活态 |
| `veev-hamburger` | 汉堡菜单 | 侧栏展开 / 收起 |
| `veev-back-home` | 返回主页 | 面包屑起点 |
| `veev-exit-left` | 退出（向左） | 关闭侧抽屉 |
| `veev-overview-outline` | 概览 | 总览页 |

---

### HCP / 医疗域

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-professional` | 医生 | HCP 人物图标 |
| `veev-professional-color` | 医生（彩色） | 空状态 / 大图 |
| `veev-professional-facet` | 医生（Facet） | 筛选器标签 |
| `veev-target-prof` | 目标医生 | 目标客户标记 |
| `veev-target-prof-color` | 目标医生（彩色） | 目标医生大图 |
| `veev-target-hcp-tag` | 目标 HCP 标签 | 行内标签 |
| `veev-hospital` | 医院 | 医院账户 |
| `veev-hospital-solid` | 医院（面性） | 医院激活 |
| `veev-hospital-color` | 医院（彩色） | 医院大图 |
| `veev-hospital-listing` | 医院目录 | 进院执行 |
| `veev-hospital-listing-color` | 医院目录（彩色） | 进院大图 |
| `veev-hospital-listing-dcr` | 医院目录 DCR | 医院目录变更 |
| `veev-hospital-metrics` | 医院指标 | 医院数据 |
| `veev-hospital-council-event` | 医院学术会 | 医院学术活动 |
| `veev-hospital-council-event-dcr` | 医院学术会 DCR | 医院学术变更 |
| `veev-pharmacy` | 药店 | 药店账户 |
| `veev-pharmacy-staff` | 药店员工 | 药店人员 |
| `veev-dcr` | DCR | 数据变更请求 |
| `veev-dcr-color` | DCR（彩色） | DCR 大图 |
| `veev-dcr-movements-color` | 医生动向（彩色） | 医生动向大图 |
| `veev-dcr-perspective-color` | 医生观念（彩色） | 医生观念大图 |
| `veev-medical-inquiry` | 医学询问 | 医学询问记录 |
| `veev-medical-inquiry-color` | 医学询问（彩色） | 询问大图 |
| `veev-medical-association-color` | 医学会（彩色） | 医学团体大图 |
| `veev-medical-association-dcr-color` | 医学会 DCR（彩色） | 医学团体变更 |
| `veev-add-medical-association` | 新增医学会 | 添加医学团体 |
| `veev-nrdl` | NRDL | 国家医保目录 |

---

### 拜访 / 通话

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-call` | 拜访 | 通用拜访图标 |
| `veev-call-solid` | 拜访（面性） | 拜访激活态 |
| `veev-call-color` | 拜访（彩色） | 拜访大图 |
| `veev-calling` | 通话中 | 正在通话状态 |
| `veev-call-amount` | 拜访次数 | 统计数字旁 |
| `veev-call-amount-orange` | 拜访次数（橙） | 橙色版次数 |
| `veev-call-completion-outline` | 拜访完成（线性） | 完成率指标 |
| `veev-call-track` | 拜访轨迹 | 行程追踪 |
| `veev-batch-create-call-outline` | 批量创建拜访 | 批量操作 |
| `veev-accompany-solid` | 同行拜访 | 协访 |
| `veev-detailing` | 讲解 | 产品详解 |
| `veev-audio-detailing` | 音频讲解 | 语音拜访 |
| `veev-video-detailing` | 视频讲解 | 视频拜访 |
| `veev-start-detailing` | 开始讲解 | 进入讲解 |
| `veev-communication-solid` | 沟通方式（面性） | 选择沟通渠道 |
| `veev-opening-solid` | 开场白（面性） | 拜访开场 |
| `veev-key-point-solid` | 要点（面性） | 拜访要点 |
| `veev-target-solid` | 核心目标（面性） | 目标设定 |
| `veev-file-star-solid` | 推荐资料（面性） | 拜访资料 |

---

### 辅导 / Coaching

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-coaching` | 辅导 | 辅导活动 |
| `veev-coaching-color` | 辅导（彩色） | 辅导大图 |
| `veev-coaching-coverd` | 辅导覆盖 | 辅导覆盖率 |
| `veev-coacher` | 辅导员 | 辅导者角色 |
| `veev-last-coach` | 上次辅导 | 最近辅导记录 |

---

### 活动 / Events

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-event` | 活动 | 通用活动 |
| `veev-event-solid` | 活动（面性） | 活动激活 |
| `veev-event-color` | 活动（彩色） | 活动大图 |
| `veev-serial-event` | 系列活动 | 系列会议 |
| `veev-sub-event` | 子活动 | 活动下子项 |
| `veev-close-event` | 关闭活动 | 结束活动 |
| `veev-secondary-meeting-outline` | 协办会（线性） | 辅助会议 |
| `veev-assist-meetting-outline` | 协助会议（线性） | 协助会议 |
| `veev-teamwork-council-event` | 团队学术会 | 团队活动 |
| `veev-teamwork-council-event-dcr` | 团队学术会 DCR | 团队活动变更 |
| `veev-teamwork-council-event-solid` | 团队学术会（面性） | 团队活动激活 |
| `veev-host` | 主持人 | 活动主持 |
| `veev-attendee` | 参会者 | 出席者 |
| `veev-attendance-details` | 出席详情 | 参会明细 |
| `veev-attendance-reconciliation-solid` | 出席核对（面性） | 签到核对 |
| `veev-attended-number-color` | 出席人数（彩色） | 出席统计 |
| `veev-sign-in-attendee` | 签到参会者 | 现场签到 |
| `veev-participant-collection` | 参会者收集 | 批量采集 |
| `veev-canhuicishutongji` | 参会次数统计 | 次数统计 |
| `veev-invitation` | 邀请 | 发送邀请 |
| `veev-agenda` | 议程 | 活动议程 |
| `veev-agenda-finished` | 议程完成 | 已完成议程 |
| `veev-speaker` | 演讲者 | 主要讲者 |
| `veev-speaker-color` | 演讲者（彩色） | 讲者大图 |
| `veev-new-speaker` | 新增演讲者 | 添加讲者 |
| `veev-main-speaker` | 主讲人 | 活动主讲 |
| `veev-common-speaker` | 普通演讲者 | 普通讲者 |
| `veev-set-common-speaker` | 设为普通讲者 | 角色切换 |
| `veev-speaker-change-request` | 讲者更换申请 | 更换申请 |
| `veev-speaker-change-request-color` | 讲者更换申请（彩色） | 申请大图 |

---

### 销售计划 & 目标

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-saletarget` | 销售目标 | 目标管理 |
| `veev-saletarget-color` | 销售目标（彩色） | 目标大图 |
| `veev-sales-data` | 销售数据 | 数据报表 |
| `veev-sales-data-management` | 销售数据管理 | 数据管理 |
| `veev-sales-forecast` | 销售预测 | 预测模块 |
| `veev-sales-mark` | 销售标记 | 标记功能 |
| `veev-mccp` | MCCP | 多渠道客户计划 |
| `veev-mccp-dcr` | MCCP DCR | MCCP 变更 |
| `veev-weekly-plan` | 周计划 | 周拜访计划 |
| `veev-weekly-plan-color` | 周计划（彩色） | 周计划大图 |
| `veev-weekly-plan-entry` | 周计划入口 | 进入周计划 |
| `veev-weekly-plan-solid` | 周计划（面性） | 周计划激活 |
| `veev-customer-coverage` | 客户覆盖 | 覆盖率指标 |
| `veev-territory-map` | 辖区地图 | 地图视图 |
| `veev-road-plan` | 拜访路线 | 行程规划 |
| `veev-road-plan-color` | 拜访路线（彩色） | 路线大图 |
| `veev-account-plan-color` | 客户计划（彩色） | 客户计划大图 |

---

### 操作 / Actions

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-add` | 新增 | 通用新增 |
| `veev-add-solid` | 新增（面性） | 悬浮按钮新增 |
| `veev-circle-add-solid` | 圆形新增 | 圆形新增按钮 |
| `veev-add-tag` | 添加标签 | 标签操作 |
| `veev-add-prof` | 添加 HCP | 关联医生 |
| `veev-add-child` | 添加子项 | 层级新增 |
| `veev-surface-add-solid` | 浮层新增（面性） | 面板内新增 |
| `veev-edit` | 编辑 | 行内编辑 |
| `veev-edit-solid` | 编辑（面性） | 编辑激活 |
| `veev-corner-edit` | 角标编辑 | 卡片角标 |
| `veev-delete` | 删除 | 行内删除 |
| `veev-delete-solid` | 删除（面性） | 危险操作 |
| `veev-circle-delete-solid` | 圆形删除 | 圆形删除按钮 |
| `veev-surface-delete-solid` | 浮层删除（面性） | 面板内删除 |
| `veev-corner-delete` | 角标删除 | 卡片角标 |
| `veev-copy` | 复制 | 内容复制 |
| `veev-copy-solid` | 复制（面性） | 复制激活 |
| `veev-clone` | 克隆 | 记录克隆 |
| `veev-batch-copy-save` | 批量复制保存 | 批量操作 |
| `veev-search` | 搜索 | 搜索框图标 |
| `veev-search-add` | 搜索新增 | 搜索并新增 |
| `veev-search-option` | 搜索选项 | 高级搜索 |
| `veev-filter` | 筛选 | 过滤条件 |
| `veev-filter-solid` | 筛选（面性） | 筛选已激活 |
| `veev-sort` | 排序 | 列排序双向 |
| `veev-sort-asc` | 升序 | 列升序 |
| `veev-sort-desc` | 降序 | 列降序 |
| `veev-save` | 保存 | 保存操作 |
| `veev-saving` | 保存中 | 保存动画 |
| `veev-save-back` | 保存并返回 | 保存退出 |
| `veev-save-complete` | 保存完成 | 保存成功 |
| `veev-save-reject` | 保存拒绝 | 保存失败 |
| `veev-save-submit` | 保存提交 | 保存并提交 |
| `veev-refresh` | 刷新 | 数据刷新 |
| `veev-download` | 下载 | 文件下载 |
| `veev-share` | 分享 | 内容分享 |
| `veev-transfer` | 转交 | 任务转交 |
| `veev-transfer-out-solid` | 转出（面性） | 转出操作 |
| `veev-exchange` | 交换 | 互换操作 |
| `veev-reassign` | 重分配 | 重新指派 |
| `veev-rotate` | 旋转 | 图片旋转 |
| `veev-erase` | 清除 | 擦除内容 |
| `veev-erase-solid` | 清除（面性） | 清除激活 |
| `veev-clean` | 清空 | 清空所有 |
| `veev-set-top` | 置顶 | 置顶操作 |
| `veev-pin-outline` | 固定（线性） | 固定内容 |
| `veev-unpin-outline` | 取消固定（线性） | 解除固定 |
| `veev-pushpin-outline` | 图钉（线性） | 固定/取消 |
| `veev-pushpin-solid` | 图钉（面性） | 已固定 |
| `veev-select-all` | 全选 | 表格全选 |
| `veev-part-selected` | 部分选中 | 表格半选 |
| `veev-fuzzy-match` | 模糊匹配 | 搜索模糊匹配 |
| `veev-match-professional` | 匹配医生 | 医生匹配 |
| `veev-match-professional-solid` | 匹配医生（面性） | 匹配已激活 |
| `veev-link` | 链接 | 超链接 |
| `veev-binding` | 绑定 | 绑定关系 |
| `veev-generate-report` | 生成报告 | 一键生成 |
| `veev-view-report` | 查看报告 | 报表查看 |
| `veev-screenshot` | 截图 | 页面截图 |
| `veev-print` (veev-cover-print) | 封面打印 | 打印封面 |
| `veev-zoom-in` | 放大 | 图片放大 |
| `veev-zoom-out` | 缩小 | 图片缩小 |

---

### 审批 / Approval

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-approval` | 审批 | 通用审批 |
| `veev-approval-approved` | 审批通过 | 已批准 |
| `veev-approval-pending` | 审批待处理 | 待审批 |
| `veev-approval-pending-words` | 审批待处理（文字） | 文字标注 |
| `veev-approval-invalidation` | 审批作废 | 审批失效 |
| `veev-approval-summary-color` | 审批总结（彩色） | 审批总结大图 |
| `veev-apply-add` | 申请新增 | 新增申请 |
| `veev-apply-feedback` | 申请反馈 | 申请回复 |
| `veev-appeal` | 申诉 | 提交申诉 |
| `veev-appeal-color` | 申诉（彩色） | 申诉大图 |
| `veev-acceptance` | 验收 | 验收操作 |
| `veev-reject` (veev-batch-reject) | 批量拒绝 | 批量拒绝 |
| `veev-quota-adjust` | 配额调整 | 指标调整 |
| `veev-quota-reject` | 配额拒绝 | 指标拒绝 |
| `veev-withdrawal` (veev-withdraw) | 撤回 | 撤回申请 |
| `veev-rolled-back` | 已回滚 | 回滚状态 |
| `veev-rejection-cancel` | 取消拒绝 | 撤销拒绝 |
| `veev-release-control` | 释放控制 | 解除控制 |
| `veev-electronic-document-border` | 电子文件边框 | 电子审批 |
| `veev-electronic-document-sending-request` | 电子文件发送申请 | 电子申请 |
| `veev-request-switch` | 申请切换 | 切换申请类型 |
| `veev-rule-detail` | 规则详情 | 查看规则 |
| `veev-spot-check` | 抽查 | 随机检查 |
| `veev-review` | 审查 | 复核操作 |

---

### 状态 / Status

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-circle-correct` | 正确（圆形） | 成功 / 通过 |
| `veev-circle-wrong` | 错误（圆形） | 失败 / 拒绝 |
| `veev-circle-alert` | 警告（圆形） | 注意 |
| `veev-toast-success` | Toast 成功 | 成功提示图标 |
| `veev-toast-error` | Toast 错误 | 错误提示图标 |
| `veev-toast-info` | Toast 信息 | 信息提示图标 |
| `veev-warning` | 警告 | 警告标志 |
| `veev-state-passed` | 状态-通过 | 流程通过 |
| `veev-state-pending` | 状态-待定 | 流程待处理 |
| `veev-state-rejected` | 状态-拒绝 | 流程拒绝 |
| `veev-state-withdrawn` | 状态-撤回 | 流程撤回 |
| `veev-action-passed` | 操作-通过 | 操作通过 |
| `veev-action-rejected` | 操作-拒绝 | 操作拒绝 |
| `veev-completed` | 已完成 | 完成状态 |
| `veev-unfinished` | 未完成 | 未完成状态 |
| `veev-finish-solid` | 完成（面性） | 完成按钮 |
| `veev-suspend` | 暂停 | 暂停状态 |
| `veev-suspend-solid` | 暂停（面性） | 暂停激活 |
| `veev-suspended` | 已暂停 | 已被暂停 |
| `veev-process-suspend` | 流程暂停 | 流程暂停状态 |
| `veev-ban` | 禁止 | 禁止操作 |
| `veev-list-confirm` | 列表确认 | 列表确认操作 |
| `veev-list-cancel` | 列表取消 | 列表取消操作 |

---

### 通讯 / Communication

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-message` | 消息 | 站内消息 |
| `veev-email` | 邮件 | 通用邮件 |
| `veev-email-solid` | 邮件（面性） | 邮件激活 |
| `veev-email-info-outline` | 邮件信息（线性） | 邮件详情 |
| `veev-phone` | 电话 | 拨打电话 |
| `veev-phone-solid` | 电话（面性） | 电话激活 |
| `veev-tel-outline` | 座机（线性） | 座机电话 |
| `veev-mobile` | 手机 | 手机联系 |
| `veev-video` | 视频 | 视频通话 |
| `veev-video-off` | 关闭视频 | 关闭摄像头 |
| `veev-audio` | 音频 | 音频通话 |
| `veev-voice` | 声音 | 语音消息 |
| `veev-muted` | 静音 | 已静音 |
| `veev-hang-up` | 挂断 | 挂断通话 |
| `veev-hang-up-facet` | 挂断（Facet） | 挂断筛选 |
| `veev-notice` | 通知 | 系统通知 |
| `veev-bulletin` | 公告 | 组织公告 |
| `veev-company-notice-color` | 公司公告（彩色） | 公告大图 |
| `veev-reminder` | 提醒 | 时间提醒 |
| `veev-weixin` | 微信 | 微信渠道 |
| `veev-work-weixin` | 企业微信 | 企微渠道 |
| `veev-channel-solid` | 渠道（面性） | 渠道管理 |
| `veev-at` | @ 提及 | 提及成员 |
| `veev-small-trumpet` | 小喇叭 | 广播通知 |
| `veev-send` | 发送 | 发送消息 |
| `veev-send-solid` | 发送（面性） | 发送激活 |
| `veev-send-survey-outline` | 发送问卷（线性） | 问卷发送 |
| `veev-new-session-outline` | 新建对话（线性） | 创建会话 |

---

### AI & 智能

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-ai-solid` | AI（面性） | AI 功能入口 |
| `veev-robot-color` | 机器人（彩色） | AI 助手大图 |
| `veev-magic-notes-color` | Magic Notes（彩色） | AI 笔记大图 |
| `veev-magic-notes-outline` | Magic Notes（线性） | AI 笔记入口 |
| `veev-magic-stick-solid` | 魔法棒（面性） | AI 一键生成 |
| `veev-lamp-color` | 灵感（彩色） | AI 洞察大图 |
| `veev-lamp-solid` | 灵感（面性） | 智能建议 |
| `veev-insights-outline` | 洞察（线性） | AI 洞察入口 |
| `veev-magic-notes-outline` | 灵感观点（线性） | 观点记录 |
| `veev-agent` | 智能体 | AI Agent |
| `veev-agent-staff` | 智能体员工 | AI 员工 |
| `veev-intelligent-recognition` | 智能识别 | OCR / 识别 |
| `veev-book-color` | 知识库（彩色） | 知识库大图 |
| `veev-knowledge` | 知识 | 知识条目 |

---

### 数据图表

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-line-chart-outline` | 柱状图（线性） | 报表图表 |
| `veev-table-chart-outline` | 表格（线性） | 表格视图 |
| `veev-pie-chart-outline` | 饼图（线性） | 饼图视图 |
| `veev-sector-outline` | 扇形（线性） | 扇形图 |
| `veev-report-solid` | 报告（面性） | 报告查看 |
| `veev-view-solid` | 视图（面性） | 视图切换 |
| `veev-kanban` | 看板 | 看板视图 |
| `veev-map-mode` | 地图模式 | 地图视图 |
| `veev-daily-view-outline` | 日视图（线性） | 日历日视图 |
| `veev-weekly-view-outline` | 周视图（线性） | 日历周视图 |

---

### 文件 / 文档

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-document` | 文档 | 通用文档 |
| `veev-common-doc` | 普通文档 | 普通文件 |
| `veev-pdf` | PDF | PDF 文件 |
| `veev-word` | Word | Word 文件 |
| `veev-excel` | Excel | Excel 文件 |
| `veev-ppt` | PPT | PPT 文件 |
| `veev-audio-file` | 音频文件 | 音频资源 |
| `veev-video-file` | 视频文件 | 视频资源 |
| `veev-email-file` | 邮件文件 | 邮件附件 |
| `veev-zip-file` | ZIP 文件 | 压缩文件 |
| `veev-other-file` | 其他文件 | 未知类型 |
| `veev-empty-file-solid` | 空文件（面性） | 空文件占位 |
| `veev-picture` | 图片 | 图片资源 |
| `veev-pic-set` | 图片集 | 图片组 |
| `veev-video-upload` | 视频上传 | 上传视频 |
| `veev-library` | 资料库 | 内容库 |
| `veev-library-color` | 资料库（彩色） | 资料库大图 |
| `veev-content-solid` | 内容（面性） | 内容模块 |
| `veev-content-display` | 内容展示 | 展示内容 |
| `veev-doc-opened` | 已打开文档 | 已读标记 |
| `veev-reading` | 阅读中 | 阅读状态 |
| `veev-switch-file-format` | 切换文件格式 | 格式转换 |
| `veev-exist-version` | 已有版本 | 版本管理 |
| `veev-xpages-outline` | XPages（线性） | XPages |
| `veev-xpages-solid` | XPages（面性） | XPages 激活 |
| `veev-template` | 模板 | 模板选择 |
| `veev-electronic-learning` | 电子学习 | eLearning |

---

### 用户 / 组织

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-user` | 用户 | 通用用户 |
| `veev-user-facet` | 用户（Facet） | 用户筛选 |
| `veev-business-man-solid` | 商务人士（面性） | 账户联系人 |
| `veev-create-staff` | 创建员工 | 新增员工 |
| `veev-manager` | 经理 | 管理层角色 |
| `veev-department` | 部门 | 组织架构 |
| `veev-group` | 群组 | 用户分组 |
| `veev-group-solid` | 群组（面性） | 群组激活 |
| `veev-teamwork` | 团队协作 | 协作功能 |
| `veev-teamwork-contributor` | 团队贡献者 | 协作成员 |
| `veev-levels` | 层级 | 层级结构 |
| `veev-dealer` | 经销商 | 渠道经销商 |
| `veev-dealer-staff` | 经销商员工 | 经销商人员 |
| `veev-ext-contact` | 外部联系人 | 外部合作方 |
| `veev-ext-contact-color` | 外部联系人（彩色） | 外部联系大图 |
| `veev-external-contact-management` | 外部联系管理 | 管理外部 |
| `veev-account` | 账户 | 客户账户 |
| `veev-service-account` | 服务账户 | 服务类账户 |
| `veev-homepage-avatar` | 首页头像 | 顶栏头像带背景 |
| `veev-homepage-avatar-pure` | 首页头像（纯） | 顶栏头像无背景 |

---

### 布局 & 导航控件

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-left` | 向左 | 翻页 / 返回 |
| `veev-right` | 向右 | 翻页 / 前进 |
| `veev-up` | 向上 | 展开指示 |
| `veev-down` | 向下 | 收起指示 |
| `veev-left-back` | 左返回 | 返回上级 |
| `veev-right-back` | 右前进 | 前进 |
| `veev-turn-left` | 左旋 | 方向左旋 |
| `veev-turn-right` | 右旋 | 方向右旋 |
| `veev-popover-down` | 气泡下 | 下拉触发 |
| `veev-popover-up` | 气泡上 | 上弹触发 |
| `veev-down-expend` | 向下展开 | 可展开区域 |
| `veev-expend` | 展开 | 内容展开 |
| `veev-fold` | 收起 | 内容收起 |
| `veev-collapse` | 折叠 | 折叠面板 |
| `veev-collapse-all` | 全部折叠 | 一键折叠 |
| `veev-expand-all` | 全部展开 | 一键展开 |
| `veev-expand-solid` | 展开收起（面性） | 展开收起按钮 |
| `veev-full-screen` | 全屏 | 进入全屏 |
| `veev-exit-full-screen` | 退出全屏 | 退出全屏 |
| `veev-minimize` | 最小化 | 最小化窗口 |
| `veev-first-page-outline` | 首页（分页） | 跳到第一页 |
| `veev-last-page-outline` | 末页（分页） | 跳到末页 |
| `veev-previous-page` | 上一页 | 分页上一 |
| `veev-next-page` | 下一页 | 分页下一 |
| `veev-select-arrow` | 下拉箭头 | 选择器 |
| `veev-list-jump` | 列表跳转 | 快速跳转 |
| `veev-section` | 区域 | 布局区块 |
| `veev-layout-section` | 布局区域 | 分区布局 |
| `veev-layer-outline` | 层次（线性） | 图层 / 层级 |
| `veev-full-list` | 完整列表 | 完整列表视图 |
| `veev-short-list` | 简洁列表 | 简洁列表视图 |
| `veev-complex-list` | 复杂列表 | 复杂列表视图 |

---

### 表单 & 输入控件图标

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-checkbox` | 复选框（勾选） | 选中状态 |
| `veev-checkbox-outline` | 复选框（未选） | 未选中状态 |
| `veev-radio` | 单选框 | 单选状态 |
| `veev-input` | 输入框 | 输入字段 |
| `veev-longtext` | 长文本 | 多行文本 |
| `veev-number` | 数字 | 数字字段 |
| `veev-text` | 文本 | 文本字段 |
| `veev-percentage` | 百分比 | 百分比字段 |
| `veev-biaodashi-xianxing` | 表达式（线性） | 公式字段 |
| `veev-select-solid` | 选择（面性） | 下拉选择 |
| `veev-task-list-selected` | 任务列表（已选） | 任务勾选 |
| `veev-task-list-unselected` | 任务列表（未选） | 任务未选 |
| `veev-camera` | 摄像头 | 拍照输入 |
| `veev-signature-outline` | 签名（线性） | 手写签名 |
| `veev-cancel-signature-outline` | 取消签名（线性） | 清除签名 |
| `veev-signed` | 已签名 | 签名完成 |
| `veev-cosign` | 共签 | 联署 |
| `veev-disable-survey` (veev-disabled-survey) | 禁用问卷 | 问卷禁用 |
| `veev-survey` | 问卷 | 问卷调查 |
| `veev-survey-color` | 问卷（彩色） | 问卷大图 |
| `veev-survey-solid` | 问卷（面性） | 问卷激活 |

---

### 系统 & 设置

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-setting` | 设置 | 系统设置 |
| `veev-setting-hover` | 设置（悬停） | 设置 Hover 态 |
| `veev-setup` | 设置安装 | 初始化配置 |
| `veev-configure` | 配置 | 高级配置 |
| `veev-help` | 帮助 | 帮助文档 |
| `veev-language` | 语言 | 切换语言 |
| `veev-password` | 密码 | 密码字段 |
| `veev-verification-code` | 验证码 | 验证码输入 |
| `veev-lock` | 锁定 | 锁定功能 |
| `veev-locked` | 已锁定 | 已锁定状态 |
| `veev-unlock` | 解锁 | 解除锁定 |
| `veev-eye-open` | 显示密码 | 密码可见 |
| `veev-eye-open-outline` | 显示（线性） | 查看内容 |
| `veev-eye-close` | 隐藏密码 | 密码隐藏 |
| `veev-preview-solid` | 预览（面性） | 内容预览 |
| `veev-preview-disable-outline` | 预览禁用（线性） | 不可预览 |
| `veev-preview-transfer` | 预览转换 | 预览并转换 |
| `veev-history` | 历史 | 历史记录 |
| `veev-time` | 时间 | 时间显示 |
| `veev-holiday` | 假期 | 假日标记 |
| `veev-workday` | 工作日 | 工作日标记 |
| `veev-sandbox-environment` | 沙盒环境 | 测试环境标记 |
| `veev-platform-solid` | 平台（面性） | 平台管理 |
| `veev-shut-down` | 关机 | 退出登录 |
| `veev-quit` | 退出 | 退出应用 |
| `veev-mobile-move` | 移动端迁移 | 移动端功能 |
| `veev-online-move` | 线上迁移 | 线上功能 |
| `veev-maintenance-history` | 维护历史 | 系统维护记录 |
| `veev-QRcode` | 二维码 | 二维码扫描 |

---

### 其他通用图标

| 类名 | 中文名 | 用途 |
|------|--------|------|
| `veev-more` | 更多（竖） | 竖向溢出菜单 |
| `veev-more-solid` | 更多（面性） | 溢出菜单激活 |
| `veev-more-line` | 更多（线） | 横向更多 |
| `veev-more-function-outline` | 更多功能（线性） | 更多操作 |
| `veev-three-dot` | 三点 | 操作菜单 |
| `veev-star` | 星标 | 收藏 |
| `veev-hollow-star` | 空星 | 未收藏 |
| `veev-thumbs-up` | 点赞 | 赞同 |
| `veev-thumb` | 拇指 | 评价 |
| `veev-tag` (veev-add-tag) | 标签 | 标签功能 |
| `veev-location` | 位置 | 地理位置 |
| `veev-current-location` | 当前位置 | GPS 定位 |
| `veev-navigate` | 导航 | 路线导航 |
| `veev-connection` | 连接 | 关联关系 |
| `veev-relevance-outline` | 关联（线性） | 关联关系 |
| `veev-confirmation` (veev-confirm) | 确认 | 确认操作 |
| `veev-cancel` | 取消 | 取消操作 |
| `veev-cancel-sign-in` | 取消签到 | 撤销签到 |
| `veev-cancel-meeting` | 取消会议 | 撤销会议 |
| `veev-cancel-target-professional` | 取消目标 HCP | 移除目标 |
| `veev-comment-outline` | 评论（线性） | 发表评论 |
| `veev-suggestion` | 建议 | 提交建议 |
| `veev-product` | 产品 | 产品条目 |
| `veev-product-color` | 产品（彩色） | 产品大图 |
| `veev-sample-color` | 样品（彩色） | 样品大图 |
| `veev-sample-solid` | 样品（面性） | 样品模块 |
| `veev-budget` | 预算 | 费用预算 |
| `veev-expense-manage` | 费用管理 | 费用报销 |
| `veev-own-expense` | 自付费用 | 自费项目 |
| `veev-ticket` | 票据 | 费用凭证 |
| `veev-behavior-manage` | 行为管理 | 行为监控 |
| `veev-operation-m` | 操作 M | 移动端操作 |
| `veev-cooperation` | 合作 | 合作关系 |
| `veev-todo-invalid-outline` | 待办作废（线性） | 无效待办 |
| `veev-daily-report` | 日报 | 日报记录 |
| `veev-create-target-solid` | 创建目标（面性） | 新建目标 |
| `veev-clinic` (veev-clinical-project) | 临床项目 | 临床研究 |
| `veev-clinical-project-color` | 临床项目（彩色） | 临床大图 |
| `veev-tthdata` | TTH 数据 | 终端数据 |
| `veev-tot` | TOT | 目标达成率 |
| `veev-tot-color` | TOT（彩色） | TOT 大图 |
| `veev-work` | 工作 | 工作模块 |
| `veev-paint` | 画笔 | 编辑绘制 |
| `veev-paint-disable` | 画笔禁用 | 不可绘制 |
| `veev-drag-solid` | 拖拽（面性） | 拖拽排序 |
| `veev-spinner` | 加载中 | 加载动画 |
| `veev-recycle` | 回收 | 回收站 |
| `veev-circle-play` | 圆形播放 | 播放媒体 |
| `veev-play` | 播放 | 播放内容 |
| `veev-continue` | 继续 | 继续操作 |
| `veev-resume` | 恢复 | 恢复执行 |
| `veev-pristine` | 初始状态 | 未修改标记 |
| `veev-main` | 主体 | 主功能区 |
| `veev-update` | 更新 | 版本更新 |
| `veev-synchronize-application-phase-attendee` | 同步申请阶段参会者 | 批量同步 |
| `veev-calculate-attendee-validity` | 计算参会者有效性 | 有效性校验 |
| `veev-batch-reject` | 批量拒绝 | 批量操作 |
| `veev-vc-config-solid` | 视频会议配置（面性） | VC 配置 |
| `veev-guide-edit-solid` | 引导编辑（面性） | 引导步骤 |
| `veev-guide-overview-solid` | 引导概览（面性） | 引导总览 |
| `veev-guide-submit-solid` | 引导提交（面性） | 引导提交 |
| `veev-guide-tab-solid` | 引导标签（面性） | 引导 Tab |
| `veev-highlight-placeholder` | 高亮占位 | 高亮区域 |
| `veev-reference-index-solid` | 参考索引（面性） | 索引引用 |
| `veev-idea-solid` | 想法（面性） | 创意功能 |
| `veev-pc` | PC 端 | PC 模式 |
| `veev-default` | 默认 | 默认状态 |
| `veev-general-color` / `veev-custom-color` 等 | 自定义颜色系列 | 自定义分类图标 |

---

## 旧版 SVG 图标（已废弃）

原 `assets/icons/` 目录中的 34 个 SVG 文件已被 iconfont 替代。如需对应关系：

| 旧文件 | 新类名 |
|--------|--------|
| `home.svg` | `veev-home-outline` |
| `task.svg` | `veev-task-outline` |
| `schedule.svg` | `veev-calendar-outline` |
| `visit.svg` | `veev-call` |
| `user.svg` | `veev-user` |
| `expand.svg` | `veev-hamburger` |
| `doctor.svg` | `veev-professional` |
| `hospital.svg` | `veev-hospital` |
| `pharmacy.svg` | `veev-pharmacy` |
| `my-events.svg` | `veev-event` |
| `sales.svg` | `veev-sales-data` |
| `plus.svg` | `veev-add` |
| `eye.svg` | `veev-eye-open-outline` |
| `x.svg` | `veev-cancel` |
| `search.svg` | `veev-search` |
| `sort.svg` | `veev-sort` |
| `more.svg` | `veev-more` |
| `more-h.svg` | `veev-more-line` |
| `tag.svg` | `veev-add-tag` |
| `thumbs-up.svg` | `veev-thumbs-up` |
| `chevron-down.svg` | `veev-popover-down` |
| `chevron-left.svg` | `veev-left` |
| `circle-check.svg` | `veev-circle-correct` |
| `circle-warn.svg` | `veev-circle-alert` |
| `circle-error.svg` | `veev-circle-wrong` |
| `bar-chart.svg` | `veev-line-chart-outline` |
| `table.svg` | `veev-table-chart-outline` |
