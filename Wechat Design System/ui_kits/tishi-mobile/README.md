# 提示 UI Kit — tishi-mobile

React JSX 实现的提示组件集，对应 `prompts.css` 中的五个反馈模式。375px 移动端画布。

## 文件

| 文件 | 组件 |
|---|---|
| `Icons.jsx` | `IconCheck` / `IconX` / `IconAlert` / `IconAlertSolid` |
| `Toast.jsx` | `Toast` + `ToastHost`（含进出场动画） |
| `Modal.jsx` | `Modal`，variants: `confirm` / `alert` / `multi` / `prompt` |
| `BottomBanner.jsx` | `BottomBanner`，variants: `info` / `warn` / `error` |
| `FieldHint.jsx` | `FieldHintInline` / `FieldHintPop` + `Field`（带提示的完整表单项） |
| `SoftReminder.jsx` | `SoftReminder`（橙色标题 + 橙点列表） |
| `App.jsx` | Demo playground，五类反馈触发示例 |
| `index.html` | 完整可交互预览，iPhone 外框包裹 |

## 用法速查

```jsx
// Toast — 触发即忘，2.2s 自动消失
const [toast, setToast] = React.useState(null);
<window.ToastHost toast={toast} onDone={() => setToast(null)} />
<button onClick={() => setToast({ status: 'success', text: '已保存' })}>保存</button>
// status: 'success' | 'fail' | 'warning' | 'hint'

// Modal — 受控开关
const [open, setOpen] = React.useState(false);
<window.Modal open={open} onClose={() => setOpen(false)}
  variant="confirm"
  title="请转至 ESM 系统操作备份"
  onConfirm={() => setToast({ status: 'success', text: '已发起备份' })}
/>
// variant: 'confirm' | 'alert' | 'multi' | 'prompt'

// BottomBanner — 布局固定，随表单状态切换
<window.BottomBanner status="warn">请确认所填字段后再提交</window.BottomBanner>
// status: 'info' | 'warn' | 'error'

// FieldHint — 字段下方
<window.Field label="主治医师" hint="医师必须为已注册执业人员" hintVariant="pop" />
// hintVariant: 'inline' | 'pop'

// SoftReminder — 页内软提醒
<window.SoftReminder items={['费用总额超过限制（8000 元），请注意']} />
```

## CSS 对照

JSX 组件与 `prompts.css` 中的 CSS 类一一对应：

| JSX 组件 | CSS 类 |
|---|---|
| `Toast` | `.ea-toast--{success\|fail\|warning\|hint}` |
| `Modal` | `.ea-dialog` |
| `BottomBanner` | `.ea-fixed-prompt--{gray\|warn\|fail}` |
| `FieldHintInline` | `.ea-field-prompt--inline` |
| `FieldHintPop` | `.ea-field-prompt--pop` |
| `SoftReminder` | `.ea-reminder` |

## 注意

- 动效（Toast 进出场、Modal 展开）规范在 `prompts.css` 末尾的 `/* === Motion ===*/` 区块
- 字体使用 `var(--font-han-sans)`，与主系统 `colors_and_type.css` 共享
- 图标为 Lucide 风格重绘，与主系统 `assets/icons/` 中的专属图标集不同，仅用于提示类组件
