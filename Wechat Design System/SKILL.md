---
name: wechat-crm-design
description: Use this skill to generate well-branded interfaces and assets for the WeChat CRM design system — covering two AI agents inside Veeva China CRM (a Chinese pharma field-sales app inside WeChat Work): the Event Agent (会议小助手, event management + doctor profiles) and the Voice Call Voice Agent (拜访助手, voice-first visit-report dictation). Use for production code OR throwaway prototypes/mocks for either agent.
user-invocable: true
---

Read the README.md file within this skill first — it covers both agents, their shared tokens, and agent-specific rules. Then explore the relevant CSS files and UI kits.

**Two agents in this system:**
- **Event Agent** (会议小助手) — enterprise CRM surfaces: lists, forms, detail pages, filters, homepage. CSS files: `colors_and_type.css`, `forms.css`, `lists.css`, `navbar.css`, `home-*.css`, `actions.css`, `filters.css`, etc. UI kit: `ui_kits/event-agent/`.
- **Voice Call Voice Agent** (拜访助手) — voice-first chat panel: bubble chat, floating dock, report cards, AI 追问 modal. CSS files: `voice-shell.css`, `voice-bubbles.css`, `voice-dock.css`, `voice-report.css`, `voice-modal.css`, `voice-toasts.css`. Voice tokens in `colors_and_type.css` under `--vc-*`. UI kit: `ui_kits/voice-call/`. Assets: `assets/avatar-voice-call.png`, `assets/loading-orange.png`.

**Shared across both agents:**
- Orange `#F7981D` (`--color-brand-veeva` / `--vc-orange`) — the single primary brand color
- WeChat-blue `#3975C6` navbar — host chrome, not a product color
- PingFang SC system font — no webfont download
- 4px grid, 14px body, 17px navbar

**Hard rules (apply to BOTH agents):**
- Icons for the Event Agent MUST come from `assets/icons/` (491 icons, three folders). For Voice Call voice surfaces, use Lucide as a substitute (original paths stripped from Figma export) — replace with licensed set before production.
- No dark mode. No invented screens.
- Chinese first. Never use Arial / Roboto for CJK text.
- One brand orange element per screen; two is the ceiling.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy the tokens and read the rules to become an expert in designing with this brand.

If invoked without guidance, ask: which agent (Event Agent or Voice Call)? What surface or screen? Production code or throwaway prototype?

## ⚠️ Hard rule: icons

Anywhere a glyph is needed (button affix, list row, FAB, tab, status badge, empty state, file-type chip, homepage tile, etc.), **the icon MUST come from `assets/icons/`** in this design system. The kit has 491 icons in three folders, and every filename carries a category prefix so the file stays self-identifying when flattened: `线性/` → `线性-*.svg` (outline, 284 incl. `线性-角标-*` 6), `面性/` → `面性-*.svg` (filled, 169 incl. `面性-角标-*` 8), `Homepage/` → `Homepage-*.svg` (38 business tiles). Always reference an icon by its full prefixed filename (e.g. `面性-拜访.svg`, not `拜访.svg`).

- **State is communicated by color, not by style.** Selected vs unselected uses the same icon with `currentColor` switching (e.g. `#999` → primary blue/orange). Do **not** swap outline ↔ filled to indicate state. Pick **`线性/`** for general inline use (toolbars, list rows, navigation, body content) and **`面性/`** for marks that need their own visual weight (status badges, file-type chips, brand/AI marks, homepage business tiles). Stay consistent inside one component set — a tab bar or toolbar is all-line or all-fill, never mixed.
- Reference the file directly (`<img src="…/assets/icons/…svg">`, an `import`, or a sprite `<use>`); color is driven by `currentColor` on the parent, not a hardcoded hex.
- Browse / search the full kit in `preview/icons.html`.
- **No** Lucide / Heroicons / Material / Font Awesome / Iconify / CDN / icon font / emoji / Unicode-as-icon / hand-drawn SVG. If a needed icon is genuinely missing, cut it from the Figma source at the existing stroke weight and add it to the matching `线性/` or `面性/` folder before using it. See the ICONOGRAPHY section in `README.md` for the full rule.

## 首页 (Homepage) 组件规则

**Banner 头像** — 使用 `面性/面性-头像-wechat.svg`，通过 CSS mask 渲染为白色（与 navbar icon 做法一致）。结构为 `.ea-home-banner__avatar > span.ea-home-banner__avatar-icon`，`--icon` 传入 data URL。不使用 `<img>` 渲染，不保留多色。在 Vue 中需先用 `stripClipRefs()` 去除 clip-path 引用再 `encodeURIComponent` 编码。

**Home Grid tile padding** — `.ea-home-grid__tile` padding 为 `0`（CSS token `--hg-tile-pad-y / --hg-tile-pad-x` 均为 0），视觉间距由 grid 的 `row-gap` 和图标/文字自身尺寸撑开。

**TabBar FAB 图标** — 使用 `线性/线性-新建.svg`（纯加号十字），不使用 `线性-加.svg`（圆角方框内加号）。两者命名看似相反，注意区分。

**Voice Call 入口卡（必现模块）** — CSS 文件 `home-voice-entry.css`，类前缀 `.ea-home-voice`。**固定出现在 `.ea-home-banner` 正下方、`.ea-home-grid` 正上方**，不可移动、不可省略。任何首页实现都必须包含此模块。

结构：
```html
<section class="ea-home-voice" aria-label="Voice Call 小助手">
  <div class="ea-home-voice__hello">
    <img class="ea-home-voice__mascot" src="…/assets/voice-call-mascot.png" alt="">
    <span class="ea-home-voice__hello-text">Hi,我是小助手 Voice Call</span>
  </div>
  <button type="button" class="ea-home-voice__cta">
    <span class="ea-home-voice__cta-icon" style="--icon: url(…面性-魔法棒…)"></span>
    <span class="ea-home-voice__cta-label">点击记录拜访</span>
    <span class="ea-home-voice__cta-arrow-well">
      <span class="ea-home-voice__cta-arrow" style="--icon: url(…线性-向右方向…)"></span>
    </span>
  </button>
</section>
```

图标：魔法棒 — `面性/面性-魔法棒.svg`（18×18，白色 mask）；右箭头 — `线性/线性-向右方向.svg`（14×14，白色 mask）。吉祥物图片 — `assets/voice-call-mascot.png`（36×36，`<img>` 渲染）。

## 反馈提示组件 (Feedback / 提示)

**CSS：** `prompts.css`（全部五类组件的样式 + 末尾的 Motion 动效 keyframe）

**React JSX UI Kit：** `ui_kits/tishi-mobile/`（可交互 playground，见 `index.html`）

五类反馈组件及对应关系：

| 场景 | CSS 类 | JSX 组件 | 独立 preview |
|---|---|---|---|
| 全局轻量反馈 | `.ea-toast--{success\|fail\|warning\|hint}` | `Toast` + `ToastHost` | `preview/comp-toast.html` |
| 标准弹窗 | `.ea-dialog` + variant icon classes | `Modal` (confirm/alert/multi/prompt) | `preview/comp-modal-*.html` |
| 底部固定提示 | `.ea-fixed-prompt--{gray\|warn\|fail}` | `BottomBanner` | `preview/comp-banner.html` |
| 字段级提示 | `.ea-field-prompt--{inline\|pop}` | `FieldHintInline` / `FieldHintPop` | `preview/comp-field-hint.html` |
| 页内软提醒 | `.ea-reminder` | `SoftReminder` | `preview/comp-soft-reminder.html` |

**动效规则（CSS keyframe，`prompts.css` 末尾 `/* === Motion ===*/` 区块）：**
- Toast 入场：`.ea-toast--entering` → fade + 上移 8px，200ms，cubic-bezier(0.2, 0, 0, 1)
- Toast 出场：`.ea-toast--exiting` → fade，160ms linear
- Modal 入场：`.ea-dialog-backdrop.ea-dialog--open` → scrim fade 160ms + card scale(0.96→1) 200ms ease-out
- Modal 出场：`.ea-dialog-backdrop.ea-dialog--closing` → 反向，160ms

**图标例外：** 提示类组件（Toast、Dialog、FieldHint）内部的状态图标使用 `Icons.jsx` 中的 Lucide 风格重绘 SVG（`IconCheck` / `IconX` / `IconAlert` / `IconAlertSolid`），**不从 `assets/icons/` 取**。主系统 491 图标集仅用于 UI chrome（列表、导航、表单等），不包含这四个状态 icon。
