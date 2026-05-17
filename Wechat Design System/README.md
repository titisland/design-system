# WeChat CRM Design System

A unified design system for **two AI agents** inside Veeva China CRM (a pharma field-sales app that runs as a WeCom / 企业微信 mini-program):

| Agent | Chinese name | Surface |
|---|---|---|
| **Event Agent** | 会议小助手 | Event lists, doctor profiles, approval flows, AI assistant FAB |
| **Voice Call Voice Agent** | 拜访助手 Voice Call | Voice-first visit-report dictation panel |

Both agents share the same host shell (WeChat-blue navbar, Veeva orange brand color, PingFang SC type, 4px grid) and the same base tokens. Voice-agent–only rules are clearly marked with `voice agent only` and live in `voice-*.css` files.

---

## Event Agent

A design system derived from a WeChat Work–style pharma field-sales mobile app ("Veeva China CRM") with an AI **Event Agent** (会议小助手) overlay. It covers a Chinese-language iOS interface for managing medical/pharma events (科室会, 产品研讨会) — doctor profiles, event lists, approval flows, and a floating AI assistant bot for things like adding attendees, summarizing past visits, and flagging unsubmitted medical inquiries.

## Source

- **Figma file (mounted):** `Event Agent_WeChat.fig`
  - Focused pages: `/Chat`, `/Chat/section`
  - Other pages referenced for shared components: `/external-shared/*`
- **Product context:** Veeva China CRM — a Chinese pharma sales-force automation app that lives inside WeCom (企业微信). Medical reps use it to plan visits, run events, and submit medical inquiries. The "Event Agent" is an AI helper layered on top.

## Index

- `README.md` — this file
- `colors_and_type.css` — raw + semantic color / type / spacing tokens
- `forms.css` — form-field component (一级表单): label/value rows, sparkle-required marker, hint, inline error, date/time triggers
- `lists.css` — standard list rows (avatar, title, status tag, secondary, key/value)
- `navbar.css` — top navigation bar (88px, brand-blue, white-only icons)
- `home-banner.css` — homepage user-info banner (orange gradient, avatar + name + role + settings)
- `home-grid.css` — homepage 4-col functional-entry grid (Homepage business icons)
- `home-announcement.css` — homepage single-line announcement strip
- `home-resource.css` — homepage secondary resource navigation card
- `home-dashboard.css` — homepage data cards (KPI / bar / donut placeholders)
- `home-tabbar.css` — homepage bottom fixed tab bar (4 locked tabs + FAB)
- `detail-identity.css` — detail page identity card (avatar + name + chips + meta + 关注 pill)
- `form-section.css` — form group section header (light-blue tinted strip "基本信息" / "联系方式")
- `prompts.css` — feedback & alerts (toast / dialog / fixed-bottom hint / field-level hint / inpage soft reminder)
- `actions.css` — bottom action bar (底部操作栏) + overflow popover
- `search.css` — list search pill (前端 / 后端 variants)
- `filters.css` — external filter bar + filter sheets (text/number/date/lookup/picklist)
- `list-actions.css` — per-row action chips (28-tall pill outline) + overflow popover
- `data-scope.css` — 数据范围 / 岗位数据 picker sheet (by-user / by-position)
- `list-shell.css` — list-page chrome (tabs / picker / month nav / count bar / empty state)
- `chat-shell.css` — Chat AI 浮层 shell：消息气泡、思考流（AI sparkle 星星图标）、composer 输入条、FAB、hint bubble
- `chat-cards.css` — Chat AI 卡片：structured card、source card（语义内容搜索）、info banners（normal/highlight/warn）、HITL 表单
- `voice-shell.css` / `voice-bubbles.css` / `voice-dock.css` / `voice-modal.css` / `voice-report.css` / `voice-toasts.css` — Voice Call Agent 专属
- `fonts/` — (empty) reserved. Primary type is the system-native **PingFang SC**; no webfont download needed.
- `assets/icons/` — SVGs from Figma; includes `ai-sparkle.svg`, `send.svg`, `mic-circle.svg`, `chevron-down.svg` (Chat spec)
- `preview/` — small HTML cards populating the Design System tab. `colors.html` shows the full 2026 token system. Chat-series previews use `_card.css` as their base shell:
  - `chat-composer.html` · `chat-suggestion-chips.html` · `chat-bot-reply.html` · `chat-thinking-stream.html`
  - `chat-list-card.html` · `chat-source-card.html` · `chat-card-styles.html`
  - `chat-header-chrome.html` · `chat-pre-call-plan.html` · `chat-info-banners.html` · `chat-fab.html` · `chat-content-voice.html`
- `ui_kits/event-agent/` — React (Babel) UI kit recreating the Chat / Event Agent screens
- `SKILL.md` — portable skill definition

### Retired tokens (Chat AI — 2026 Chat spec update)

| Retired | Reason | Replacement |
|---|---|---|
| user bubble `linear-gradient(90deg, #3FCFD3 → #4988F1)` | replaced by Chat spec | `linear-gradient(135deg, --color-chat-cyan → --color-chat-cyan-2 → --color-chat-mint)` |
| thinking stream `::before` 6px dot | replaced by Chat spec | `.ea-chat-thinking__dot` with `ai-sparkle.svg` mask-image |

## CONTENT FUNDAMENTALS

Primary language: **Simplified Chinese**. Tone is **professional, concise, task-oriented** — think enterprise SaaS, not consumer app. Sentences are short. The AI assistant uses polite "您" form ("您可以点击…", "您有一个医学问询尚未提交"). Opening greeting is casual-warm: "嗨！我是你的会议小助手，有什么能够帮您的么？比如…" then drops straight into quoted example prompts ("帮我批量添加参会人").

- **Casing:** N/A for Chinese; English words (Veeva, SFA, AI) keep product casing.
- **Person:** First person for the bot ("我"), second person "您" for the user (polite). Never "你们".
- **Punctuation:** Full-width CN punctuation inside CN strings (，。："" ！？). Colons always full-width `：` before values.
- **Copy patterns:**
  - Labels are noun phrases: `会议名称`, `会议类型`, `默认执行医院`, `关注数`.
  - Field values are plain — no "N/A"; missing is blank.
  - Action buttons are 2 characters where possible: `关注`, `保存`, `取消`, `忽略`, `搜索`, `新建`, `筛选`.
  - Status badges use colored text, 2–4 chars: `审批通过`, `草稿`, `微信已认证`, `公众号已关注`.
  - Count rows: `共计16条`.
- **Emoji:** **Never used.** The warm affect comes from the orange AI star, not emoji.
- **Unicode/symbols:** `｜` (full-width vertical bar) as inline separator in meta lines (`普外科 ｜ 主任医师 ｜ 北京市朝阳区`). `...` / ellipsis only for overflow.

## VISUAL FOUNDATIONS

### Vibe
Clean, clinical, enterprise Chinese mobile. Lots of white, tight gray dividers, blue header, green "verified" accents, **Brand-Veeva orange as the single AI/primary-action accent** (`--color-brand-veeva` `#F7981D`). Warning states are **yellow** (`--color-warning` `#FFCC00`) — distinct from brand orange. No gradients in the chrome — gradients appear only inside the AI hint bubble and the (out-of-scope) invitation-card page.

### Color

The color system follows the 2026 WeChat Design System spec (Figma `2026-WeChat-Design-System` 1:3429). Every color family except neutrals carries a `Base` plus 6 alpha tints (`light-0` 5% → `light-6` 65%). See `preview/colors.html` for the full ramps.

**Brand** (each with 7 tints, e.g. `--color-brand-veeva-light-2` = 15% wash):

- **Brand-Veeva** `#F7981D` — primary brand mark; FAB / AI star / approval status / highlight borders. (Was `--color-ai-orange` before — name retired in favor of explicit brand semantics.)
- **Brand-J&J** `#EB1700` · **Brand-MSD** `#00857C` · **Brand-Merck** `#503191` — partner brand identifiers.
- **Brand blue (legacy)** `#3975C6` — top NavigationBar fill (Veeva header chrome). Kept as `--color-brand-blue`.

**Secondary semantic** (each with 7 tints):

- **Veeva Blue** `#007AFF` — the canonical brand blue. Used for **hyperlinks** and primary blue accents. Token: `--color-veeva-blue` (alias `--color-blue`) / `--fg-link` / `--fg-veeva-blue`.
- **Section blue** `#2069D6` — **section text headers ONLY** (the previous Veeva blue, now scoped down). Token: `--color-section-blue` / `--fg-section`. Tab indicators / bullet markers continue to use this section accent.
- **Success** `#00DF93` — completed / verified / Toast success.
- **Warning** `#FFCC00` — yellow, distinct from brand orange. Use for warning states (Toast warning, 底部固定提示 warn, validation cautions).
- **Error** `#FF5543` — destructive / error only.
- **Info** `#7788A2` — slate, neutral notice / Toast hint text.

**Neutral · Text ramp:** `#000` H1 / `#333` H2 / `#666` H3 / `#999` H4 / `#B5B5B5` placeholder / `#CCC` disabled / `#5F646E` info-text / `#007AFF` link.

**Neutral · Border:** `#EEE` base hairline / `#E2E2E2` stronger divider (replaces old `#DADADA`) / `#CCC` hard border / `#F2F5FC` soft blue-tinted.

**Neutral · Background:** `#FFF` surface / `#FAFAFA` / `#F8F8F8` canvas / `#F5F5F5` input well / `#F2F2F2` deeper neutral / `#000 50%` modal overlay / 3 alpha-blue washes (`extra blue 0/1/2` at 15%/10%/5% of `#007AFF`).

**Color palette (charts / data viz)** — 9 hex-named tokens: `F26D5F`, `FF945A`, `FFCC00`, `C4E649`, `3EDDB1`, `43E3EB`, `39D3FF`, `88A8FF`, `ACA3FF`. Reference as `var(--color-palette-FFCC00)` etc.

**Alpha utility:** `--color-hairline: rgba(0,0,0,0.10)`.

### Type
- **Primary:** PingFang SC (system-native on iOS/macOS). Fallback chain: Hiragino Sans GB → Microsoft YaHei → Source Han Sans SC → Noto Sans SC → system-ui.
- **English:** SF Pro Text, Roboto. Mono: none.
- **Scale (px):** 10 micro / 12 caption / 13 body-sm / **14 body (default)** / 15 / **16 title** / 17 navbar / 20 section / 24 hero.
- **Weight pattern:** 14/Regular default. Medium reserved for titles, labels above values, and primary button text. Bold is rare.
- **Line-height:** `100%` for single-line labels, `18px`–`22px` for multi-line body.

### Spacing
4-px grid. Common paddings: 4, 8, 12, 16, 24. Card padding `12px 16px`. Row height 48–56. FAB bottom-right offset `right:20 bottom:126`.

### Radii

Base 5 tokens from 2026 spec, plus 2 mid-range values re-introduced by the Chat AI spec.

| Token | Value | Use |
|---|---|---|
| `--r-none` | 0 | sharp / no rounding |
| `--r-small` | 2px | chip微调 / tiny inline marks |
| `--r-base` | 4px | inputs, badges, small cards, default surfaces |
| `--r-md` | 8px | **chat cards, source cards** (Chat spec) |
| `--r-lg` | 12px | **chat composer pill, content pills** (Chat spec) |
| `--r-round` | 20px | large cards, Modals, sheets |
| `--r-circle` | 9999px | pills, FAB, circular avatars |

**Note:** `--r-md` and `--r-lg` are **chat-surface–only**. Do not use on CRM chrome (forms, lists, navbars). `--r-pill` (100) / `--r-fab` (80) / `--r-sheet` remain retired — use `--r-circle` for all pill/FAB shapes.

### Shadows / elevation

5 tiers: base 4 from 2026 spec + `--shadow-float` added for Chat AI surfaces.

| Token | Composition | Typical use |
|---|---|---|
| `--shadow-lighter` | `0 0 6px rgba(0,0,0,0.12)` | tooltip / micro popovers |
| `--shadow-light` | `0 0 12px rgba(0,0,0,0.12)` | AI hint bubble, soft popovers |
| `--shadow-float` | `0 0 20px rgba(0,0,0,0.15)` | **chat AI bubble, composer pill** (Chat spec) |
| `--shadow-base` | 2-layer drop (`0 8 20 / 8%` + `0 12 32 spread4 / 4%`) | Modals, dropdowns, default elevated surfaces |
| `--shadow-dark` | 3-layer drop (8 / 16 -8 + 12 / 32 + 16 / 48 spread16) | FAB, heavy floating panels, sheet bottoms |

**Migration note:** previous `--shadow-fab` → `--shadow-dark`, `--shadow-bubble` → `--shadow-light`, `--shadow-tab` → `--shadow-lighter`, `--shadow-card` → `--shadow-base`. Hairline-only cards continue to use `1px solid var(--color-border-base)` (no shadow).

### Backgrounds
No full-bleed photos in-app. Canvas is plain `var(--color-bg-f8)` `#F8F8F8`. The AI hint bubble uses a subtle top-to-bottom Brand-Veeva wash: `linear-gradient(var(--color-brand-veeva-light-2) 0%, transparent 100%)` over white.

### Animation
Not explicitly specified; inferred from iOS defaults — 200–300ms ease-out for tab/toast, spring for FAB press. The "思考流" (thinking stream) reveals rows one-by-one as each step completes. Use a subtle fade+slide for each.

### Hover / press
Native iOS: 0.6 opacity on tap. FAB: no shrink, subtle glow retained. Pills: no hover (touch). List rows: `#F5F5F5` press background.

### Borders
Hairline `1px solid var(--color-border-base)` `#EEE` everywhere. Stronger `1px solid var(--color-border-e2)` `#E2E2E2` for input focus (was `#DADADA`). Hard `1px solid var(--color-border-cc)` `#CCC` only when explicitly required. Brand highlight border `2px solid var(--color-brand-veeva-light-6)` only on AI hint bubble.

### Transparency / blur
None used on chrome. Slight opacity only on decorative BG ovals in the (out-of-scope) invitation card.

### Layout rules
- Top NavigationBar fixed 88px tall (44 status + 44 title).
- Bottom safe area 34px (home indicator).
- FAB stack bottom-right above safe area. Two stacked FABs: home (white, secondary) above AI (orange, primary) — 54px apart.
- Horizontal rules always full-bleed to edges on list rows.
- Dialog / sheet: sticky header. Top corners `var(--r-round)` (20px); bottom corners `var(--r-base)` (4px) when needed via explicit `border-radius: 20px 20px 4px 4px`.

### Cards
Rounded 8, 1px `#EEE` border, white fill, no shadow. Content uses 12px vertical padding. An accent row (colored status) sits top-right corner.

## LISTS — standard rows

A "标准列表" row has 4 zones (all optional except title):

1. **头像/标识** (`.ea-avatar`, 40×40, circle) — variants: `--soft` (hospital tint), `--neutral` (generic). Wrap in `.ea-avatar-wrap` to attach a 16×16 `.ea-avatar-badge` (target / wechat green check) at bottom-right; stack two badges via `--stacked-target` on the inner one. The glyph inside the avatar/badge is rendered with the `.ea-avatar__glyph` / `.ea-avatar-badge__glyph` helpers — they take a `--icon` CSS var pointing at a file in `assets/icons/` and inherit color from the wrapper, so library icons drive the shape and color stays in CSS.

   **⚠️ Avatar icon inheritance rule.** The avatar glyph is **not** freely chosen — it is inherited from the **Homepage business-icon entry** (`assets/icons/Homepage/Homepage-*.svg`) that the user tapped to enter the list. If they entered the list via "我的医生", every row's avatar uses `Homepage-我的医生.svg`; via "我的医院", `Homepage-我的医院.svg`; via "我的产品", `Homepage-我的产品.svg`; and so on. This keeps the entry → list visual handoff legible. Do **not** substitute a 面性/线性 icon "that looks similar" — go to `assets/icons/Homepage/` and use the matching file. (The Homepage configuration system that drives this mapping will be specified in a follow-up frame.)
2. **主要标题** (`.ea-list__title`, 16/500/#000, 24lh) — clamps to 2 lines by default; add `--single` for one-line ellipsis. Append `<span class="ea-list__wechat">@nickname</span>` for the inline 12/#06AE56 wechat name pattern.
3. **次要内容** (`.ea-list__sub`, 14/#333, 22lh) — `--link` for the #2069D6 link variant. Empty placeholder is `.ea-list__empty` with copy `未填写` (#CCC).
4. **状态标签** (`.ea-tag`, 14/20, radius 4, padding 1/4) — five colors: `--gray --orange --red --green --none`. Tinted bg @10% with matching fg. For multi-tag stacks (display-mode = aside) wrap in `.ea-list__status-aside`.

Two views:

- **简洁视图** — single row: title (+ inline status) and optional `.ea-list__sub` underneath.
- **复杂视图** — title row + `.ea-list__fields` grid (`.ea-list__fkey` / `.ea-list__fval`), plus optional inline `.ea-list__fval--link` and `--empty`.

Container: `.ea-list` is the surface. Add `.ea-list--card` to get a hairline-bordered, rounded-8 card. Rows are `.ea-list__row` (12/16 padding, #EEE divider). Use it for the empty state too — when title is blank the empty placeholder takes the title slot.

## FORMS — fields (一级表单)

Field row is fluid; only the label column has a fixed width — the value column flexes to fill the container.

```
┌────────────────── fluid ──────────────────┐
│ 15│ 105 (label)  10  value (flex)       │15│
└────────────────────────────────────────────┘
```

- **Row** (`.ff-row`): 45px default, 62px with inline error, 65px with hint. Hairline `#EEE` divider at the bottom. Tokenized via `--ff-row-px / --ff-label-w / --ff-gap / --ff-row-h*`.
- **Label** (`.ff-label`, 14/22, `#666`) sits in a 105px column. Required fields are prefixed by an 8-pointed sparkle (`.ff-required`, **not** an asterisk char) in `#FF5543`.
- **Value** (`.ff-value`, 14/100%, `#333`); placeholder `.ff-value__placeholder` is `#E5E5E5`; readonly is `#999`; error states use `#FF5543`.
- **Triggers** (date / time / select / picker): a value+icon row inside `.ff-trigger`. The icon is rendered by `<span class="ff-trigger__icon" style="--icon: url(../assets/icons/线性/线性-日历.svg)"></span>` — driven from the icon library via CSS mask, color inherits from `--ff-color-readonly` (#999). Calendar = `线性-日历`, time = `线性-时间`, select = `线性-向下展开`.
- **Hint / inline error** (`.ff-hint` 12/#999, `.ff-error` 12/#FF5543) sit beneath the value, expanding the row height.

## PROMPTS — feedback & alerts

Five feedback/alert components, sourced from the Figma "提示" file. All icons come from `assets/icons/` rendered via the CSS mask pattern (color = `currentColor`).

1. **Toast** (`.ea-toast`, Figma 2:24) — lightweight, non-blocking global feedback. Four states by modifier:
   - `--success` (绿 `var(--color-success)` `#00DF93` icon + tinted bg) using `面性-Toast-成功.svg`
   - `--fail` (红 `#FF5543` icon + tinted bg) using `面性-Toast-报错.svg`
   - `--warning` (橙 `#F7981D` icon + tinted bg) using `面性-警示-实色.svg`
   - `--hint` (灰 `var(--color-neutral-gray)` `#B5B5B5` icon, slate `#7788A2` text + neutral tint) using `面性-警示-实色.svg`

   Anatomy: `.ea-toast__icon` 16×16 + `.ea-toast__text`, gap 8, padding 12/16, radius 6, max-width 375 (mobile column). Multi-line wraps; height grows.

2. **Dialog** (`.ea-dialog`, Figma 2:54 + 158:276 + 94:48) — the canonical interrupting dialog. 300px wide white card, `--r-round` (20px), `--shadow-base` elevation. Anatomy: `.ea-dialog__body` (centered icon + title + optional `__desc`) above a `.ea-dialog__actions` row split by hairline dividers.

   **⚠️ Message-icon categories — 4 LOCKED variants (Figma 94:48).** The icon is always a filled solid circle with a cut-out glyph. Each category has a fixed color/icon pairing — do NOT freelance these:

   | Modifier | Color | Glyph | Icon file |
   |---|---|---|---|
   | `.ea-dialog__icon--confirm` (default) | `var(--color-fg-placeholder)` `#B5B5B5` gray | `!` | `面性/面性-警示-实色.svg` |
   | `.ea-dialog__icon--alert` | `var(--color-error)` `#FF5543` red | `!` | `面性/面性-警示-实色.svg` |
   | `.ea-dialog__icon--error` | `var(--color-error)` `#FF5543` red | `✕` | `面性/面性-Toast-报错.svg` |
   | `.ea-dialog__icon--success` | `var(--color-success)` `#00DF93` green | `✓` | `面性/面性-Toast-成功.svg` |

   Confirm and alert share the same `!` icon shape; only the color differs. Error and alert share the same red color; only the glyph differs. Both axes (icon shape + color) together identify the category.

   **Layout variants (Figma 158:276).** Any of the 4 message-icon categories above can pair with any of these layouts:
   - **confirm 布局** — body + side-by-side `[取消][主按钮名称]` (primary = `--color-brand-veeva`)
   - **alert 布局** — body + single full-width `[主按钮名称]`
   - **custom-message 布局** — body (with `__desc`) + `--stack` action row: 1+ stacked primary buttons, `取消` always last
   - **prompt 布局** (utility, no icon) — left-aligned `.ea-dialog__header` + `.ea-dialog__input` instead of icon/title; `[取消][确定]` actions

3. **底部固定提示** (`.ea-fixed-prompt`, Figma 2:160) — short single-line bar pinned above a form/list footer. White text on solid fill, 13px, ~25 tall. Three colors: `--gray` (neutral info), `--warn` (attention, orange), `--fail` (error, red). Keep copy ≤ 25 汉字.

4. **字段级提示** (`.ea-field-prompt`, Figma 2:178) — sits directly under a form field. Two variants, both **blue** (`var(--color-veeva-blue)` `#007AFF`):
   - `--inline` — small `线性-圈-警示.svg` + helper text in blue, no background. 12/18. Use when text is short and informational.
   - `--pop` — link-styled text in blue on a soft blue tint (`var(--color-bg-extra-blue-2)`), radius 4. Click opens a popup or external link. Use when the explanation is too long for inline or when there's somewhere to go.

5. **页面内软提醒** (`.ea-reminder`, Figma 2:195) — multi-line warning card placed inside a tab or section. Light gray surface (`#F5F5F5`, radius 8), orange "提示" title (12/medium/`#F7981D`), then a `.ea-reminder__list` of `.ea-reminder__item`s — each prefixed by a 6px solid orange dot, body text `#666` 13/18. Use for batch-triggered business-rule warnings ("费用总额超过限制" etc.).

When to pick which:

| Need | Component |
|---|---|
| Confirm an outcome of an action they just took | Toast |
| Block until they confirm a destructive / consequential action | Dialog (confirm / alert / custom-message) |
| Pin a persistent notice above a form footer (e.g. "审批中") | 底部固定提示 |
| Explain a single field | 字段级提示 inline (short) / pop (long or link) |
| Surface multiple validation warnings inside a tab | 页面内软提醒 |

## BOTTOM ACTION BAR (底部操作栏)

Source: Figma frames `1499:6948` / `2706:1191` / `2573:1210` / `2582:1410`. Pinned bar at the bottom of a form / detail page that hosts page-level actions. CSS lives in `actions.css`.

**Anatomy**

- `.ea-bab` — the bar. Hairline-top divider, white fill, 64px tall (excluding iOS safe-area). Add `--elevated` for the shadow variant.
- `.ea-bab__btn` — one action slot. Layout is **icon (24×24) above label (12px / 22 line-height)**, both centered, vertical stack. Each slot flexes equally (`flex: 1`). Icon is rendered via the CSS-mask pattern (`--icon: url(...)`); color inherits from the button's `color`.
- `.ea-bab__icon` / `.ea-bab__label` — child elements.
- `.ea-bab__btn--more` — the overflow button (no visual variant; just a hook for `aria-expanded` styling).

**States**

- Default — `#333` icon + label
- Pressed (`:active` / `aria-pressed="true"`) — light gray fill `#F5F5F5` (`--bab-press-bg`)
- Disabled (`:disabled` / `aria-disabled="true"`) — `#CCC` icon + label, not clickable
- More-open (`.ea-bab__btn--more[aria-expanded="true"]`) — same light gray fill as pressed

**Layout rules**

- **Max 5 buttons inline.** When the screen needs more, slot 5 becomes "更多" and the overflow goes into a popover.
- 2-character labels preferred (`新建` / `复制` / `更多` …). Longer labels truncate with ellipsis.
- **⚠️ Icons MUST be 线性 (outline) only** — pull strictly from `assets/icons/线性/线性-*.svg` (and `assets/icons/线性/角标/*` for sub-marks). Do **not** use 面性 (filled) variants, Homepage business icons, or any other source for `.ea-bab__btn` or `.ea-bab-popover__item`. The bottom bar reads as iOS-style navigation chrome — outline icons keep its visual weight balanced against the page's content avatars (which themselves use 面性 / Homepage icons).

**Overflow popover** (`.ea-bab-popover`)

Anchored above the bar. Use `position: absolute; right: 16px; bottom: calc(var(--bab-h) + 4px);` for a corner-anchored popover, or `left: 16px; right: 16px;` for a full-bleed one.

- Single column. Each row is `.ea-bab-popover__item` — icon (20px, left) + label (14px), height 48, hairline divider between items.
- **Max items**: 10 for list pages (`.ea-bab-popover` default cap), 15 for detail pages (`.ea-bab-popover--detail`). Beyond that the body scrolls — design should avoid it.
- Max width: full viewport minus 16px gutters on each side.
- Bottom row: `.ea-bab-popover__close` — orange (`--color-brand-veeva`) X icon, 56px tall, hairline divider above.

**Interaction (operator semantics)**

1. Tapping "更多" toggles the popover.
2. Tapping any popover item triggers its action **and** closes the popover.
3. Tapping outside the popover (anywhere else, including the page body) closes it without firing any action — same as filter / search popovers.
4. Tapping the bottom orange X closes the popover with no action.
5. Pressed feedback — light gray (`--bab-press-bg`) on items and bar buttons.

## NAVBAR (顶部导航栏)

Source: Figma WeChat_列表、搜索、筛选 (`XAOwZ67DO4lykc3lfB0pjR`) node **62:13869** — canonical 375×88 NavigationBar. CSS: `navbar.css`.

**Spec — non-negotiable:**
- Height **88px fixed** = **44 status + 44 nav row** (matches iPhone X+ tall status bar).
- Width **100% adaptive** — fills its container, no hardcoded 375.
- Background `var(--color-brand-blue)` `#3975C6`.
- Foreground (text + icons) **always pure white** `#FFFFFF`. Never tint, never opacity-fade.
- Title `17 / 500 / 24-lh`, single line, ellipsis on overflow, centered.
- Status time **15 / 700 (bold)** — `--font-en` family, tabular numerals.
- Outer gutter — status row `20px`, nav row `16px`.

**Standalone component — composition rule.** NavBar is its own component file (`navbar.css`) with its own preview (`preview/component-navbar.html`). When composing list / detail / any other page demo:

1. `<link rel="stylesheet" href=".../navbar.css">` — the only place NavBar styles live
2. Drop in the canonical `<header class="ea-navbar">` markup (template in `preview/component-navbar.html`)
3. **Do NOT** rewrite NavBar styles inside the page's own `<style>` block; **do NOT** bundle NavBar markup into another component (e.g. don't add it to `lists.css`). The page composes by reference, not by copy-merge.

**⚠️ HARD RULE — PAGE NAME LIVES IN THE NAVBAR.** The current page's title (`医生详情` / `我的医院` / `拜访详情` / …) ALWAYS goes in `.ea-navbar__title`. Do NOT introduce a secondary "sub-header" strip under the NavBar to host the page name; do NOT duplicate it inside the page's identity card / header card. This applies to ALL pages — list, detail, edit, settings. The NavBar is the sole owner of the current page name.

**Anatomy:**
- `.ea-navbar` — wrapper (column flex, 88px tall, full width).
- `.ea-navbar__status` — **44px** status-bar slot. `.ea-navbar__status-time` (left, 15/500) · `.ea-navbar__status-icons` (right, gap 6).
- `.ea-navbar__row` — **44px** nav row. Flex layout: `[leading auto][title 1fr][trailing auto]`, 14px outer padding.
- `.ea-navbar__leading` / `.ea-navbar__trailing` — side zones (`flex: 0 0 auto`, gap 8 between adjacent icons). Trailing right-aligned. Each side reserves at least one icon-width.
- `.ea-navbar__title` — centered, `flex: 1`, `min-width: 0` (so ellipsis works inside flex), 17/500/24-lh, white.
- `.ea-navbar__icon` — **20×20** icon button (iOS HIG nav size), white-only via CSS mask. The chevron back glyph renders ~12 wide inside the 20-square; the 3-dot more renders centered. `.ea-navbar__icon--empty` is a transparent placeholder to balance the row when a side has no action.

**⚠️ Locked icons** — only the **two** icons used in the reference frame are allowed:
- back chevron — `线性/线性-向左方向.svg`
- 3-dot more — `线性/线性-更多.svg`

Do NOT add search / edit / notification / share or any other icon to the NavBar. If the page genuinely needs another action, put it in the BAB or in the toolbar — not here.

## HOMEPAGE (首页)

Source: Figma 首页_WeChat (`JO8xVSc8EDUiyPWZizfGsu`) node 6:2026. Composed from 5 dedicated region files (per the system's "split-by-region" CSS structure). Reference page: `preview/home.html`.

| Region | CSS file | Top-level class |
|---|---|---|
| 用户信息区 (banner) | `home-banner.css` | `.ea-home-banner` |
| 功能入口 (entry grid) | `home-grid.css` | `.ea-home-grid` |
| 公告条 | `home-announcement.css` | `.ea-home-announcement` |
| 资源导航 | `home-resource.css` | `.ea-home-resource` |
| 看板 / 数据卡 | `home-dashboard.css` | `.ea-home-dashboard` + `.ea-hd-card` |
| 底部 tab bar (固定) | `home-tabbar.css` | `.ea-home-tabbar` |

### 1 · 用户信息区 (banner)

`.ea-home-banner` — top-of-page banner with the logged-in user's identity. **Background is composed of TWO LAYERS** (per Figma 6:5363 `底图渐变色` + project-supplied PNG overlay):

1. **Bottom layer — vertical gradient** `linear-gradient(180deg, #F7981D 0%, #FFFFFF 100%)`. Brand-Veeva orange at the top, fades cleanly to white at the bottom of the banner.
2. **Top layer — texture overlay** sourced from a PNG (or SVG fallback). Default asset: `assets/home-hero-bg.svg` (a placeholder approximation). Drop a real PNG at `assets/home-hero-bg.png` and override via `--hb-overlay-url` to swap.

Spec: 116px tall, 100% adaptive width. The user-info row sits inside `.ea-home-banner__row` (z-index above both background layers).

- `.ea-home-banner__avatar` — **36×36** round avatar. Render the icon-library file `面性/面性-首页头像.svg` as an `<img>` (NOT mask) — it's a multi-color SVG with its own white circle + figure, must be preserved as-is.
- `.ea-home-banner__name` — 16 / 500 / white.
- `.ea-home-banner__sub` — 12 / 400 / white at 85% opacity (department · role).
- `.ea-home-banner__action` — 20×20 mask-driven trailing icon, **always white**. **Only icon allowed**: `线性/线性-更多2.svg` (3 horizontal lines, matches Figma `线性/更多2`). Notification bell is intentionally NOT included — there's no bell icon in the library.

⚠️ **Banner icon usage rule**: avatar must be `面性-首页头像.svg` rendered as `<img>` (preserves multi-color); right action must be `线性-更多2.svg` rendered via CSS mask (locked to white). Don't substitute either.

### 首页卡片规范（功能区通用样式）

**所有功能区卡片（功能入口、资源导航等）共用同一套外框规范：**

> ⚠️ **无"更多"tile 规则：** 所有功能区均不设"更多"入口，所有功能项直接列出。
> ⚠️ **无"全部"链接规则：** 功能区标题行不显示"全部 ›"等跳转链接。

| 属性 | 值 |
|---|---|
| 左右外边距 | `margin: 0 16px` |
| 圆角 | `border-radius: 8px` |
| 阴影 | `box-shadow: 0 0 8px rgba(0,0,0,0.10)` (X:0 Y:0 Blur:8 Spread:0 Black@10%) |
| 背景 | `var(--color-bg-white)` 白色 |
| 无边框线 | 不使用 `border: 1px solid` |

首页整体背景为白色 `var(--color-bg-white)`，不使用灰色 canvas。

### 2 · 功能入口 (entry grid)

`.ea-home-grid` — fixed **4-column** grid of icon+label tiles. Each tile is a top-level domain entry (我的医生 / 我的医院 / 我的产品 / 拜访 / 活动 / 客户计划 / 销售指标 / …). Tap → routes to that list, and the list's avatar glyph **inherits this tile's icon** (see Lists → Avatar inheritance rule).

- 外框遵循首页卡片规范（见上方）。
- `.ea-home-grid__tile` — flex column, 12/4 padding, gap 8 between icon and label.
- `.ea-home-grid__icon` — `<img>` with the **Homepage-* business icon** (full color, 40×40). NOT a mask — these are the brand-tinted icons.
- `.ea-home-grid__label` — 12 / 400 / `--color-fg-h2` (#333), single line, ellipsis, max 4 chars preferred.
- 无"更多"tile — 所有入口直接列出。

`.ea-home-grid--6` modifier switches to a 6-col layout for tablet widths.

**⚠️ Icon rule:** all entry icons MUST come from `assets/icons/Homepage/Homepage-*.svg`. No 线性 / 面性 / inline SVG.

### 3 · 公告条 (announcement)

`.ea-home-announcement` — 32px single-line strip with light orange wash bg (`var(--color-brand-veeva-light-2)`). Hosts the current system notice / important update.

- `.ea-home-announcement__icon` — 16×16 leading speaker icon, mask-driven, colored brand-veeva. Use `面性/面性-公告.svg`.
- `.ea-home-announcement__body` — 13 / 400 / `--color-fg-h2`, single-line ellipsis (or marquee scroll if app supports).
- `.ea-home-announcement__chevron` — 12×12 trailing right-chevron, gray. Use `线性/线性-向右方向.svg`.
- Optional `.ea-home-announcement__link` — inline blue text link instead of (or in addition to) the chevron.

### 4 · 资源导航 (resource navigation)

`.ea-home-resource` — white card hosting a secondary 4-col tile grid. 外框遵循首页卡片规范（见上方）。Title row + tiles 与功能入口保持一致样式。

- `.ea-home-resource__head` — title row. `.ea-home-resource__title` (14/500/black) + optional `.ea-home-resource__link` ("全部 ›", 12/#999).
- `.ea-home-resource__grid` — 4-col grid, row-gap 16px.
- `.ea-home-resource__tile` — 与功能入口完全一致：icon 40×40, label 12/#333, gap 8. Same icon rule (Homepage-* business icons).

### 5 · 看板 / 数据卡 (dashboard)

`.ea-home-dashboard` — column container of `.ea-hd-card` cards. Each card is a white surface with a head row + chart slot.

- `.ea-home-dashboard__row` — 2-col grid for paired KPI cards.
- `.ea-hd-card` — white surface, `--r-base`, 1px border, 14px padding.
- `.ea-hd-card__head` — title row. `.ea-hd-card__title` (14/500/black), optional `.ea-hd-card__sub` (12/#999) inline, optional `.ea-hd-card__link` (12 / Veeva blue) on the right.
- `.ea-hd-chart` — body slot for chart content. Three height variants:
  - `.ea-hd-card--kpi` — 80px (just a big number)
  - `.ea-hd-card--bar` — 140px (bar / line chart)
  - `.ea-hd-card--donut` — 140px (donut + legend)
- `.ea-hd-kpi` — helper for KPI body: `__value` (32/medium tabular num) + `__delta--up/--down` (12/green or red) + `__caption` (12/#999).

**Chart rule:** the design system ships only **static SVG placeholders** for charts. Real data viz is the consumer's job — drop in Chart.js / d3 / etc. inside `.ea-hd-chart`.

### 6 · 底部 tab bar (Figma 6:5451)

`.ea-home-tabbar` — fixed-position bottom bar, **90px tall** (+ 34px home indicator below). White background, 1px `--color-border-base` top hairline. Layout splits into two children:

- `.ea-home-tabbar__tabs` (`flex: 1 1 0`) — left zone hosting the 4 fixed tabs. Each `.ea-home-tabbar__tab` takes `flex: 1 1 0` so the tabs **evenly split the remaining width** after the FAB.
- `.ea-home-tabbar__fab-zone` (`flex: 0 0 90px`) — right zone with the big "+" FAB. The button (56×56, `var(--color-brand-veeva)`, white "+", `--shadow-dark`) sits centered in this zone with a slight `-6px` upward offset to "pop" above the bar baseline.

**⚠️ Tabs are LOCKED — icon and function fixed mappings:**

| Tab | idle (线性) | active (面性) |
|---|---|---|
| 首页 | `线性/线性-首页.svg` | `面性/面性-首页.svg` |
| 日程 | `线性/线性-日程.svg` | `面性/面性-日程.svg` |
| 看板 | `线性/线性-看板.svg` | `面性/面性-看板.svg` |
| 工作 | `线性/线性-工作台.svg` | `面性/面性-工作.svg` |

Do NOT add a 5th tab, do NOT remove a tab, do NOT swap icons. The 4 are the fixed top-level routes of the app.

**Per-tab icon swap pattern:** each tab declares **both** icons inline so the swap is purely CSS-driven:

```html
<a class="ea-home-tabbar__tab ea-home-tabbar__tab--active" aria-current="page"
   style="--icon-idle: url(线性-首页.svg); --icon-active: url(面性-首页.svg)">
  <span class="ea-home-tabbar__icon"></span>
  <span class="ea-home-tabbar__label">首页</span>
</a>
```

The CSS reads `--icon-idle` by default and switches to `--icon-active` when the tab carries `--active` (or `aria-current="page"`). Color also flips: idle = `--color-fg-h4` (#999), active = `--color-brand-veeva`.

**FAB icon:** `线性/线性-加.svg` rendered via mask, locked to white. Don't substitute.

## DETAIL PAGE (详情页)

Source: Figma 详情页面 (`9I1NNGaRTsFFcAnWFzW5qe`) node 2481:62357. Reference page: `preview/detail.html`. The detail page composes from existing components plus 3 new dedicated regions.

### ⚠️ HARD RULE — Detail page view-mode composition

All detail pages in **view mode** (查看模式) MUST follow this exact stack, in this order, using these exact components. Do NOT invent new region components when an existing one fits — compose by reference.

```
┌──────────────────────────────────────────────┐
│ NavBar (88)                                  │ ← navbar.css · .ea-navbar
│   └── 页面名称 lives in .ea-navbar__title    │
├──────────────────────────────────────────────┤
│ Identity card (~160)                         │ ← detail-identity.css · .ea-detail-identity
│   avatar + name + 关注数 + 关注 pill         │
│   verification chips · meta line ｜ 分隔     │
├──────────────────────────────────────────────┤
│ Tab strip                                    │ ← list-shell.css · .ea-list-tabs
│   基本信息 / 我的战友 / … + hamburger 溢出   │
├──────────────────────────────────────────────┤
│ ┌── 分组 1 ────────────────────────────────┐ │
│ │  Section header (40)                     │ │ ← form-section.css · .ea-form-section
│ │  ┌─────────────────────────────────────┐ │ │
│ │  │ 基本信息                            │ │ │
│ │  └─────────────────────────────────────┘ │ │
│ │  ┌─ Field row (45) ────────────────────┐ │ │ ← forms.css · .ff-row + .ff-row__inner
│ │  │ 医生姓名      李大魁                │ │ │
│ │  └─────────────────────────────────────┘ │ │
│ │  ┌─ Field row (45) ────────────────────┐ │ │
│ │  │ 性别          男                    │ │ │
│ │  └─────────────────────────────────────┘ │ │
│ │  …                                       │ │
│ └──────────────────────────────────────────┘ │
│ ┌── 分组 2 ──── 联系方式 ──────────────────┐ │
│ │  …                                       │ │
│ └──────────────────────────────────────────┘ │
├──────────────────────────────────────────────┤
│ BAB (60) — 编辑 / 拜访 / 复制 …              │ ← actions.css · .ea-bab
├──────────────────────────────────────────────┤
│ Home indicator (34)                          │
└──────────────────────────────────────────────┘
```

**Mandatory composition table (reuse existing components — don't reinvent):**

| Region | Component to use | Class |
|---|---|---|
| 顶部导航 | `navbar.css` | `.ea-navbar` (page name in `.ea-navbar__title`) |
| 身份卡 | `detail-identity.css` | `.ea-detail-identity` |
| Tab 切换 | `list-shell.css` | `.ea-list-tabs` |
| 分组标题条 | `form-section.css` | `.ea-form-section` |
| 字段行 (view) | `forms.css` | `.ff-row > .ff-row__inner > .ff-label + .ff-value` |
| 底部操作 | `actions.css` | `.ea-bab` (1–5 个按钮均分) |

**Field row markup — left-right structure (LOCKED):**

Each form field is a strict left/right two-column row. Label column fixed 105px, value column flex. Required structure:

```html
<div class="ff-row">
  <div class="ff-row__inner">
    <div class="ff-label"><span class="ff-label__txt">医生姓名</span></div>
    <div class="ff-value"><span class="ff-value__text">李大魁</span></div>
  </div>
</div>
```

**Do NOT** skip `.ff-row__inner` — without it the children stack vertically (top-bottom). **Do NOT** invent new class structures for field rows; reuse `.ff-row` from `forms.css`.

**View-mode specifics:**

- `.ff-value__text` for plain text values
- `.ff-value__text` wrapped in `<a>` for clickable values (e.g. linked hospital name) — color via inline `style="color:var(--color-veeva-blue)"` or a `--link` modifier if you add one
- `.ff-value__placeholder` for empty fields ("未填写"), `.ff-value__readonly` for grayed out
- Multi-line values: add `.ff-row--longtext` modifier on the row

**Forbidden patterns:**

- ❌ Don't put the page name in a sub-header strip — page name lives in `.ea-navbar__title` (see NavBar section)
- ❌ Don't use a `.ea-detail-subheader` — that component was retired
- ❌ Don't use `.ff-row` without `.ff-row__inner` (renders top-bottom by mistake)
- ❌ Don't bake form-row styling into `detail-identity.css` or any other file — `forms.css` is the single source for field rows
- ❌ Don't add a texture overlay to the identity card — color-only gradient



| Region | CSS file (new ⭐ / reused 🔁) | Top-level class |
|---|---|---|
| 1. NavBar (88) — page name lives here | 🔁 `navbar.css` | `.ea-navbar` |
| 2. 身份卡 (~160) | ⭐ `detail-identity.css` | `.ea-detail-identity` |
| 3. Tab 条 | 🔁 `list-shell.css` | `.ea-list-tabs` |
| 4. 分组 section header | ⭐ `form-section.css` | `.ea-form-section` |
| 5. Form 字段行（view 模式） | 🔁 `forms.css` | `.ff-row` / `.ff-label` / `.ff-value` |
| 6. 底部 BAB（2 按钮） | 🔁 `actions.css` | `.ea-bab` |

⚠️ The detail page's title (`医生详情` / `拜访详情` / etc.) goes in **`.ea-navbar__title`** — not in a sub-header strip. The previously-proposed `detail-subheader.css` / `.ea-detail-subheader` has been **retired**.

### Detail identity card (`.ea-detail-identity`)

The orange-tinted identity block hosting the doctor/customer profile.

- Two-layer background (same pattern as home banner): vertical gradient `#F7981D → #FFFFFF` + optional texture overlay via `--dic-overlay-url` (defaults to none; pass an image URL to add).
- `.ea-detail-identity__row` — top row: 60×60 round white well avatar + name/count column + 关注 pill (right).
- `.ea-detail-identity__avatar` — 60×60 round, light-blue well (`--color-bg-extra-blue-1`), centers a 32×32 Homepage business icon (e.g. `Homepage-我的医生.svg`) rendered via `<img>`.
- `.ea-detail-identity__name` — 20/500/black, single-line ellipsis.
- `.ea-detail-identity__count` — 13/regular/#666 with the number in `--color-brand-veeva` orange (`__count-num`).
- `.ea-detail-identity__follow` — pill button, brand-veeva bg, white text, 28 tall, `--r-circle`. Leading 12×12 icon `面性/面性-五角星实心.svg` (mask, white).
- `.ea-detail-identity__tags` — verification chip row. Two locked variants:
  - `--wechat` — light green wash + `#06AE56` text (微信已认证)
  - `--pa` — light Veeva-blue wash + Veeva-blue text (公众号已关注)
- `.ea-detail-identity__meta` — single-line meta with full-width vertical bar `｜` separators (use `.ea-detail-identity__meta-sep` spans).

⚠️ **Avatar icon rule** — the inner glyph MUST come from `assets/icons/Homepage/Homepage-*.svg` (matches the Homepage entry that opened this detail). Same inheritance rule as list-row avatars.

### Form section header (`.ea-form-section`)

40-tall strip used between groups of form rows on detail (and edit) pages. White outer, with a 32-tall inner pill in soft blue wash (`--color-bg-extra-blue-2`) hosting a 14/500/black title (`基本信息` / `联系方式` / etc.). Optional `.ea-form-section__count` slot on the right for "(共 7 项)" or similar.

Pair with `forms.css` view-mode rows below: each `.ea-form-section` is followed by a stack of `.ff-row` value rows (label-left, value-right, hairline divider per row — exactly the same `forms.css` rows used in `forms-edit.html`, just with prepopulated `.ff-value` content).

## SEARCH (列表搜索框)

Source: Figma `XAOwZ67DO4lykc3lfB0pjR /page2/Placeholder`. CSS: `search.css`. Pill-shaped search row pinned above the filter bar.

- `.ea-search` — full-bleed white surface, 60 tall, 12/16 padding.
- `.ea-search__pill` — 36 tall, `--r-circle`, 1px `--color-border-base` border. Focus state (`.ea-search--focus`) flips border to `--color-brand-veeva`.
- `.ea-search__icon` — 14×14 `currentColor`, color `--color-fg-h4` (#999) at idle.
- `.ea-search__input` — 13/#333, placeholder `#CCC`.
- `.ea-search__clear` — 16×16 ✕ glyph in `#B5B5B5`, only shown when `.ea-search--has-value`.
- `.ea-search__action` — 14/500 brand-veeva, only present in `.ea-search--with-action` (后端搜索 variant).

**Variants:**
- 前端搜索 (real-time) — input only, no submit. Filter as user types.
- 后端搜索 (deferred) — input + 搜索 action button on the right. Submit on click / Enter.

## FILTERS — bar + sheets (筛选)

Source: Figma `XAOwZ67DO4lykc3lfB0pjR /page3`. CSS: `filters.css`. Sits below the search row, above the list rows.

**Filter bar** (`.ea-filterbar`) — flat row with quick-filter chips. **Edges:**
- **Top** — soft shadow `0 -2px 4px rgba(0, 0, 0, 0.05)` (separates the bar from the search row above).
- **Bottom** — 1px `var(--color-border-base)` `#EEE` hairline divider (separates from the list rows below).

Layout splits into two flex children: the chip strip on the left (scrollable), the trailing tools cluster pinned right.

**⚠️ Layout rule — max 4 external chips:**
- Up to **4** chips fit at standard mobile width (375px).
- If chip labels are long enough to push some chips behind the trailing tools cluster, the chip strip becomes **horizontally swipeable** (`overflow-x: auto`, scrollbar hidden).
- The trailing tools cluster (`.ea-fb__tools` — funnel + view toggle) is **always visible**, pinned right via `flex: 0 0 auto` + vertical 1px hairline on its left edge. Chips never push it off-screen.

**Anatomy:**
- `.ea-fb__chips` — scrollable wrapper for the chip group (`flex: 1`, `overflow-x: auto`, scrollbar hidden).
- `.ea-fb__chip` — quick filter (sort / field name / "下属数据"). `.ea-fb__chip-label` text is `#333` idle, `--color-brand-veeva` when active. `.ea-fb__chip-caret` is a 14×14 round well; the triangle inside comes from the icon library — `面性/面性-Popover向下箭头.svg` (idle, gray) / `面性/面性-Popover向上箭头.svg` (active, brand-veeva orange on a 15% wash).
- `.ea-fb__tools` — pinned-right cluster, vertical 1px `--color-border-base` hairline on its left edge.
- `.ea-fb__tool` — 18×18 mask-driven button (no inner `<svg>`). Set `style="--icon: url(...)"` to swap the glyph. **Active state recolors the icon glyph itself, not a background rectangle:** the mask clips the button to the icon shape, so `background-color` is effectively the icon fill. Idle color `--color-fg-h3` (#666); `.ea-fb__tool--active` (or `aria-pressed="true"`) flips it to `--color-brand-veeva`. Default trailing pair: 筛选 (`线性/线性-筛选.svg`) + 视图 (`线性/线性-简洁视图.svg`).

**Filter sheet** (`.ea-fs`) — drops down below the filter bar when a chip is tapped. 5 body variants by data type:
- `.ea-fs--text` — single rounded input + "仅看空值" toggle (`.ea-fs__nullonly`).
- `.ea-fs--number` — min/max inputs stacked with a tiny separator.
- `.ea-fs--date` — start/end inputs with calendar trigger.
- `.ea-fs--lookup` — "已选择(N) / 清空" + bordered search bar + "请尽量提供详细查询信息" hint.
- `.ea-fs--picklist` — 140-col gray side rail (`.ea-fs__sidebar`) + options list (`.ea-fs__option`) with checkboxes.

Footer (`.ea-fs__footer`) is shared across all variants: 取消 / 重置 / 确定 (确定 = 14/500 brand-veeva).

## LIST ACTIONS — per-row chips (item-action)

Source: Figma `XAOwZ67DO4lykc3lfB0pjR /item-action`. CSS: `list-actions.css`. **Per-item** action buttons (NOT the page-level Bottom Action Bar — that's `actions.css`).

- `.ea-actions` — strip below an item's primary content. Right-aligned row, gap 10, height 28, hairline divider below.
- `.ea-action` — 28-tall pill outline button. Radius `--r-circle`, border `--color-border-e2`, text 12/#333. Min-width 64, auto-grows. `--inline` modifier tightens padding (12px) for chip-heavy rows.
- `.ea-actions__more` — leading "更多" gray text label (12/#999) when chips overflow.

**Overflow popover** (`.ea-popover`) — opens from the 更多 label. 110×auto card, radius `--r-base`, shadow `0 0 8px rgba(0,0,0,0.15)`. Each row is `.ea-popover__row` (44 tall, hairline between). `--danger` modifier renders the row in `--color-error`. `--leading-icon` reserves a 12×12 leading slot.

## DATA SCOPE — 岗位数据切换

Source: Figma `XAOwZ67DO4lykc3lfB0pjR /page5`. CSS: `data-scope.css`. Drops down from the "下属数据" filter chip with two scope-picker variants.

- `.ea-ds` — sheet container (sits inside the same drop-down stack as `.ea-fs`).
- `.ea-ds__nullonly` — top "仅查看被选中…数据" toggle row (re-uses `.ea-fs__nullonly`).
- `.ea-ds__list` — vertical stack of rows with hairline `--color-border-base` dividers.
- `.ea-ds__row` — 46-tall flat row (1-line user) or 50-tall `--two-line` (email + 岗位 sub) or 40-tall `--back` (返回 header).
- `.ea-ds__row--child` — indented (left-pad 20).
- `.ea-ds__row--active` — orange text (selected). Pair with `--ds-trail-size-lg` (16) chevron when present.
- `.ea-ds__primary` (14/#333 → orange when active) + `.ea-ds__sub` (11/#999 → orange when active).

Two variants:
- **by-user** — flat list of subordinate users; each row shows email + 岗位 sub-text. Indented sub-rows for sub-position drill, with a 12×12 ">" chevron (`.ea-ds__trail`).
- **by-position** — header "返回" row + a position tree.

Footer reuses `.ea-fs__footer` from filters.css (取消 / 重置 / 确定).

## LIST SHELL — residuals

Source: Figma `XAOwZ67DO4lykc3lfB0pjR` nodes 1:1202 (tabs), 1:1836 (month nav, count bar), 1:3557 (empty state). CSS: `list-shell.css`. Holds the few list-page chrome bits not covered by the dedicated component files.

- **`.ea-list-tabs`** — multi-list switcher above the toolbar. First tab is `--active` with `--color-brand-veeva` underline. Trailing `.ea-list-tabs__overflow` hamburger button (uses `线性-符号列表.svg`) opens the picker.
- **`.ea-list-tabs-picker`** — full-bleed sheet under the nav. Header with "请选择" title + close X (uses `线性-关闭.svg`). Body is a chip grid; active chip uses `--color-brand-veeva-light-2` bg + `--color-brand-veeva` text/border.
- **`.ea-list-month-nav`** — `< 2022-04 >` centered selector, 44 tall, hairline-bottom. Use `线性-向左方向.svg` / `线性-向右方向.svg` for the chevrons.
- **`.ea-list-count-bar`** — 28-tall `--color-bg-f5` strip after the last list row, "共计 13 条" in `--fg-subtle`.
- **`.ea-list-empty`** — empty state placeholder + "没有更多数据" caption.

**Bottom add button** — for pages whose footer is just a single "+ 按钮名称" primary action, reuse `.ea-bab` from `actions.css` with one button. The `flex: 1 1 0` slot auto-fills the bar width.

## LIST FILE FIELD (file-type values)

Source: Figma `XAOwZ67DO4lykc3lfB0pjR` nodes 1:4133 (in-row), 1:4569 (icon catalog). CSS: `lists.css` (the `.ea-list__file*` classes).

When a list field's value is one or more files, wrap the value in `.ea-list__file`. Each file = `.ea-list__file-item`: a colored file-type icon + a Veeva-blue file-name link. Multiple files stack vertically inside the same field.

**Locked file-type colors** (`--color-file-*` tokens in `colors_and_type.css`):

| Modifier | Color | Token | Library icon |
|---|---|---|---|
| `.ea-list__file-icon--pdf`   | red `#FF5543`   | `--color-file-pdf`   | `面性/面性-pdf.svg` |
| `.ea-list__file-icon--ppt`   | orange `#D04423` | `--color-file-ppt`   | `面性/面性-ppt.svg` |
| `.ea-list__file-icon--excel` | green `#1D6F42` | `--color-file-excel` | `面性/面性-excel.svg` |
| `.ea-list__file-icon--word`  | blue `#2A5599`  | `--color-file-word`  | `面性/面性-word.svg` |
| `.ea-list__file-icon--zip`   | teal `#00857C`  | `--color-file-zip`   | `面性/面性-zip.svg` |
| `.ea-list__file-icon--video` | blue `#2069D6`  | `--color-file-video` | `面性/面性-视频文件.svg` |
| `.ea-list__file-icon--audio` | cyan `#43E3EB`  | `--color-file-audio` | `面性/面性-音频文件.svg` |
| `.ea-list__file-icon--email` | blue `#0078D4`  | `--color-file-email` | `面性/面性-邮件文件.svg` |
| `.ea-list__file-icon--image` | slate `#7788A2` | `--color-file-image` | `面性/面性-图片.svg` |
| `.ea-list__file-icon--other` | gray `#666666`  | `--color-file-other` | `面性/面性-其他文件.svg` |

**Format mapping (file extension → modifier):**

- `.pdf` → `--pdf`
- `.ppt` `.potx` `.ppsx` `.pptx` → `--ppt`
- `.xls` `.xltx` `.xlsx` `.csv` → `--excel`
- `.docx` `.doc` `.dotx` `.txt` → `--word`
- `.zip` → `--zip`
- `.mp4` `.m4v` `.mov` → `--video`
- `.mp3` `.wav` `.flac` `.aac` `.ogg` `.aiff` → `--audio`
- `.eml` `.msg` `.pst` → `--email`
- `.jpeg` `.png` `.bmp` `.jpg` `.gif` → `--image`
- everything else → `--other`

**File name link** — `.ea-list__file-item` text uses `var(--color-veeva-blue)` `#007AFF` (canonical hyperlink). Hover underlines.

## ICONOGRAPHY

Custom icons at 16×16 or 24×24, single-color fills driven by `currentColor`. Source Han Sans-adjacent stroke weight (≈1.5px). The full kit lives in `assets/icons/`, organized into three folders **and** every filename carries a category prefix so the assets stay unambiguous when flattened (e.g. uploaded as Claude.ai project knowledge):

- `assets/icons/线性/` — **Outline / 线性图标** (284). Filename prefix `线性-`. Badges live in `线性/角标/` with prefix `线性-角标-`.
- `assets/icons/面性/` — **Filled / 面性图标** (169). Filename prefix `面性-`. Badges live in `面性/角标/` with prefix `面性-角标-`.
- `assets/icons/Homepage/` — **首页业务图标** (38). Filename prefix `Homepage-`. Domain-specific entry tiles for the workbench (拜访、活动、我的医生、销售指标 …).

Examples: `线性-拜访.svg`, `面性-拜访.svg`, `Homepage-拜访.svg`, `线性-角标-审批通过.svg`, `面性-AI星星.svg`.

**AI star** is the hero mark — a 4-point sparkle + inner diamond (`面性/AI星星.svg`, plus `橙色AI星星.svg`). It doubles as the AI agent's avatar (green outline variant, 16×16) and FAB glyph (white on orange, 28×28). Status badges still use **dot + text** (6px color dot + 14px text) rather than icons.

Browse the full library in `preview/icons.html` — searchable by name (中/英), filterable by category, click-to-copy filename.

### ⚠️ Rule: icon usage in consuming projects

> **Any project that references this design system MUST source icons exclusively from `assets/icons/`.** No exceptions for "just one icon."

Concretely, when filling any spot that needs a glyph (button affix, list row, FAB, tab, status, empty state, badge, file-type chip, etc.):

1. **Search the kit first.** Open `preview/icons.html` or grep `assets/icons/` (中文 or English filename). 491 icons cover the vast majority of CRM / pharma / WeCom-style needs.
2. **Style (线性 vs 面性) is a visual-weight choice, not a state.** Selected vs unselected is communicated by **color** (e.g. switching `currentColor` from `#999` to the primary blue/orange), never by swapping outline → filled. Pick the style based on context: `线性/` for general inline use — toolbars, list rows, body content, navigation, form affordances; `面性/` for marks that need more visual weight on their own — status/result badges, file-type chips, brand marks (AI star), homepage business tiles. Stay consistent within one component set: a tab bar, a row of action icons, or a toolbar should be all-line or all-fill, not a mix.
3. **Reference by path, never inline a redrawn copy.** Pick whichever fits the context: `<img src="…/assets/icons/…svg">` for static fixed-color marks, an `import` of the SVG as a component, `<use href="…#id">` from a built sprite, or — when the icon must inherit `currentColor` from a CSS-controlled parent (form trigger glyphs, avatar marks, badges) — the **CSS mask** pattern: `<span style="--icon: url(.../assets/icons/…svg)" class="…"></span>` plus a class that does `background-color: currentColor; mask: var(--icon) center/contain no-repeat;`. See `.ff-trigger__icon`, `.ea-avatar__glyph`, and `.ea-avatar-badge__glyph` for working examples. Do not paste a path-only `<svg>` into your code.
4. **Color via `currentColor`.** Drive color from CSS (`color:` on the parent) — every icon in the kit is single-fill `currentColor`-ready. Do not hardcode brand hex.
5. **Sizing:** 16×16 in dense rows / inline with 14px text, 24×24 in standalone buttons / toolbars / FAB area, Homepage business tiles render at their native size (28–32). Never scale below 14 or above 32.

**If a needed icon is genuinely missing** from the kit:
- Cut it from the Figma source (`Event Agent_WeChat.fig`, page `/external-shared/*`) at the existing stroke weight, drop it into the matching `线性/` or `面性/` subfolder using a Chinese filename consistent with the rest of the set, then update `preview/icons.html` (regenerated by listing `assets/icons/`).
- Do **not** pull from Lucide, Heroicons, Material, Font Awesome, Iconify, a CDN, or an icon font. Do **not** use emoji or Unicode glyphs (✓, ★, →, ☰) as icon substitutes. Do **not** ask an LLM to draw a new SVG by hand — stroke weights and corner radii will not match.

### ⚠️ Rule: icons rendering as a colored square (mask pattern fails-open)

If an icon shows up as a solid white / blue / orange / black **rectangle the same size as the icon slot**, the CSS mask did not load. The mask pattern is **fail-open** by design — when anything goes wrong the element still paints its `background-color`, so you see a colored box instead of nothing. Every icon class in this system (`.ea-navbar__icon`, `.ea-detail-identity__follow-icon`, `.ea-hcp-insights__section-icon`, `.ff-trigger__icon`, `.ea-avatar__glyph`, etc.) shares the same recipe:

```css
.x__icon {
  background-color: currentColor;
  mask-image: var(--icon, none);   /* ← fallback is none = no mask = full square */
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
```

When `mask-image` evaluates to `none` (or to a URL that fails to load), the browser applies no mask, so the entire `background-color` paints through. **There are exactly four ways this happens** — diagnose in this order:

1. **`--icon` was never set on the element.** This is by far the most common cause. The CSS variable lives on the icon element itself (inline `style="--icon: url(...)"`), not the parent. If you copy markup and drop the `style` attribute, or you author a new component and forget the inline declaration, you get a square. *Quick check:* open DevTools, inspect the icon span, look at its computed `mask-image`. If it says `none`, the variable isn't set.

2. **The relative path is wrong.** `style="--icon: url('../assets/icons/...')"` resolves relative to the **HTML file's URL**, not the project root. Count `../` from the file you're editing: from `preview/component-*.html` it's `../assets/icons/...`; from a page that sits next to `assets/` it's `./assets/icons/...`. *Quick check:* DevTools → Network panel → filter `svg` — if the request is 404, the path is wrong.

3. **Page opened via `file://` with Chinese filenames.** Icon files are named in Chinese (`面性-灯泡.svg`). Some browsers — older Safari, certain embedded webviews, and some `file://` configurations — fail to resolve non-ASCII characters inside `url()` when the page is double-clicked from disk. The HTML renders fine but the mask URL silently fails to load → colored square. **Always serve preview pages through a local HTTP server** (`python3 -m http.server` in the project root, VS Code Live Server, etc.). Never validate a layout by double-clicking `.html` from Finder.

4. **The SVG itself isn't mask-friendly.** A mask uses the alpha channel of the rendered SVG. If an SVG has an opaque `<rect width="100%" height="100%" fill="white">` background (rare in this kit, but possible if pasted from a foreign source), the mask is fully opaque everywhere → colored square. *Quick check:* open the SVG directly in a browser. It should show only the glyph on a transparent background, not a filled rectangle.

**Author-time checklist** before merging any page or component preview:

- [ ] Every mask-driven icon element has an inline `style="--icon: url(...)"`. No empty icon spans, ever.
- [ ] Path resolves from the consuming HTML's location. Count `../`s; don't trust autocomplete.
- [ ] Filename is byte-exact (Chinese matters — `面性-灯泡.svg` is not `面性-light-bulb.svg`, and there is no `面性-AI星星.svg` — it's `面性-ai-star.svg`).
- [ ] Preview opened via `http://localhost:…`, not `file:///Users/…`. If a square only appears under `file://`, the cause is #3.
- [ ] When introducing a new icon-bearing element, inherit one of the existing classes (`.ff-trigger__icon`, `.ea-avatar__glyph`, the per-component `__icon` classes). Do not redefine the mask recipe from scratch.

**Anti-patterns that produce a square**:

- `<span class="ea-x__icon"></span>` with no `--icon` set as a "placeholder for later." Use `display: none` on the element until you have the SVG.
- Pasting `url(assets/icons/...)` without the leading `../` from inside `preview/`.
- Setting `--icon` on the *parent* element instead of the icon span — the variable must live on the same element the mask rule applies to (or above it in the inheritance chain).
- Re-styling the icon element with `background: white` to "make it look right against a colored card." If you can't see the icon shape, the mask isn't loading; fix the mask, don't paint over it.

## CAVEATS (important — please help iterate)

- **Fonts.** Primary is **PingFang SC**, served from the system font stack on Apple devices. On Windows/Linux it falls back to Hiragino / YaHei / Source Han / Noto — glyph shapes differ slightly but layout is stable. No webfont download.
- **Product name.** Based on "Veeva China CRM" — confirmed.
- **Raster assets.** Two real photos are included (`doctor-avatar.jpg`, `meeting-thumb.png`). Other imagery is represented by placeholders — no invented photography.

---

## Voice Call Voice Agent `voice agent only`

**Voice Call** (拜访助手 Voice Call) is a voice-first AI assistant for pharmaceutical sales reps. It lives inside **Veeva China SFA**, embedded in **WeChat Work / WeCom (企业微信)**. Reps dictate a 30-second voice note about a doctor visit; Voice Call turns it into a structured 拜访报告, running a short modal "AI 追问" (AI follow-up) when key details are ambiguous.

### Source

Figma file **Voice.fig** — 1 page, 7 frames covering: hello, dictation, single report, multi-report, AI 追问 follow-up modal.

### Files (voice agent only)

| File | Content |
|---|---|
| `voice-shell.css` | Chat-panel scaffolding: WeChat-blue navbar, orange sub-header band, scrollable body |
| `voice-bubbles.css` | Agent (gray) and user (cyan→mint gradient) chat bubbles; onboarding card; "creating" hero bubble |
| `voice-dock.css` | Floating glass-blur voice input dock (194px, backdrop-filter) |
| `voice-report.css` | 拜访报告 report card (card-in-card: outer `#F8F8F8` frame, inner white surface, action buttons) |
| `voice-modal.css` | AI 追问 bottom-sheet modal with scrim, header, option rows |
| `voice-toasts.css` | Sequential loading toast chain (green check → orange spinner) |

CSS tokens for the voice surface live in `colors_and_type.css` under the `/* VOICE CALL AGENT */` section — all prefixed `--vc-*`.

### Canvas

393 × 852px (iPhone 14/15). All voice screens are fixed-width mobile, not adaptive.

### Content fundamentals `voice agent only`

**Language: Simplified Chinese, almost exclusively.** English appears only as: product names ("Veeva China SFA"), the voice-mode pill ("Voice Call"), a translation tag ("English"), and the AI disclaimer in Inter. Drug names, clinical terms (pCR, RWE), and percentages stay in Latin/numeric form inside Chinese sentences.

**Voice = warm-professional, never corporate.** Voice Call is a co-worker:
- Uses **你** in chat body, flips to **您** in system/report-generation messages ("已为您创建…")
- Opens with **嗨！**, uses ～ and 哦 to soften sentences
- Exactly **one 😊** in the onboarding card — never more
- Self-refers as **"小助手"** or **"Voice Call"** — never "AI" in body copy ("AI" only in the modal title "AI 追问" and disclaimer "内容由AI生成")

| Where | Copy example |
|---|---|
| Onboarding | `嗨！我是你的拜访助手 Voice Call，很高兴为你服务！` |
| Loading toast | `收到啦！小助手正全力解析你的内容，超认真！` |
| AI follow-up praise | `这个点你记得很关键，PCR 率和他的需求都抓到了！` |
| AI follow-up question | `李主任听到 41% 这个数，更像是哪种反应？` |
| Report intro | `已为您创建以下拜访报告，您可以继续通过语音/手动编辑来完善您的拜访报告哦～` |

**Punctuation.** Full-width Chinese (，。：！？～). Latin numbers and abbreviations stay half-width with a single space buffer: `pCR 率 41%`, not `pCR率41%`.

### Visual foundations `voice agent only`

**Shared with Event Agent (same hex, different token name):**
- Orange `#F7981D` → `--vc-orange` aliases `--color-brand-veeva`
- WeChat blue `#3975C6` → `--vc-wechat-blue` aliases `--color-brand-blue`
- iOS blue `#007AFF` → `--vc-link-blue` aliases `--color-veeva-blue`
- Success green `#00DF93` → `--vc-success` aliases `--color-success`

**Voice-agent–only:**
- **Cyan→mint gradient `#45D4FB → #57E9F2 → #9EFBD3`** — user speech bubbles and mascot halo. Always 3 stops at 0% / 52% / 100%. Token: `--vc-voice-gradient`. Never simplify to 2 stops.
- **Success text `#00CD88`** (`--vc-success-text`) — slightly darker than success fill; used for done-toast copy.
- **Decorative accents** `--vc-accent-purple` / `--vc-accent-coral` / `--vc-accent-gold` — illustration use only.

**Radii `voice agent only`:**
These values intentionally deviate from the WeChat 2026 5-token spec; they are defined as `--vc-r-*` locals and only apply inside `voice-*.css` files.

| Token | Value | Use |
|---|---|---|
| `--vc-r-tag` | 4px | Inline disclaimer tag |
| `--vc-r-bubble` | 8px | Chat bubbles |
| `--vc-r-card` | 12px | Report card outer, voice dock panel |
| `--vc-r-input` | 12px | AI 追问 option rows |
| `--vc-r-pill` | 100px | Mode toggle, chips, mascot halo |
| `--vc-r-sheet` | 20px 20px 0 0 | AI 追问 bottom sheet (top corners only) |

**Shadows `voice agent only`:**

| Token | Value | Use |
|---|---|---|
| `--vc-shadow-dock` | `0 0 20px rgba(0,0,0,.15)` | Floating voice dock |
| `--vc-shadow-card` | `0 0 20px rgba(0,0,0,.05)` | Report card |
| `--vc-shadow-sheet` | `0 -4px 24px rgba(0,0,0,.15)` | AI 追问 sheet |

**Layout (fixed regions, top to bottom):**
1. WeChat-blue nav bar — 88px. Fixed.
2. Orange sub-header band — 40px. Voice Call-only chrome.
3. Scroll body — chat-style bubble stack.
4. Floating voice dock — 194px from bottom, glass-blur (`backdrop-filter: blur(12px)`).
5. iOS home indicator — 34px.

The AI 追问 modal covers ~58% of the screen from the bottom with a `blur(4px)` scrim.

**Typography:** same scale and families as Event Agent. No webfont download — Noto Sans SC / Source Han Sans SC are system-font fallbacks in `--font-cn`.

### Illustrations and assets `voice agent only`

- `assets/avatar-voice-call.png` — 400×400 transparent PNG, the cat-eared mascot. The **only** illustration. Do not redraw or replace.
- `assets/loading-orange.png` — orange wedge used as Lottie placeholder during report generation.

### Icons `voice agent only`

No custom icon set. Voice Call uses **Lucide** icons (linear, 2px stroke, 24px grid) as substitutes — the original vector paths were stripped in the Figma export. Specific substitutions:

| Lucide icon | Use |
|---|---|
| `mic` | Voice mode |
| `keyboard` | Keyboard toggle in dock |
| `phone-call` | Voice Call mode pill |
| `chevron-down` | Mode pill caret |
| `languages` | Language toggle |
| `check` | Done state in toasts |
| `chevron-left` | Back navigation |
| `sparkles` | AI sparkle mark |
| `users` / `stethoscope` | Doctor avatar on report card (tinted `#007AFF`) |

**Replace Lucide icons with the licensed Veeva/Voice Call set before shipping to production.**

### UI Kit `voice agent only`

`ui_kits/voice-call/` — a React (Babel) click-through prototype of the full Voice Call conversation flow.

```
ui_kits/voice-call/
  index.html                  ← full interactive prototype
  App.jsx                     ← main app shell
  styles.css                  ← self-contained component styles
  components/
    Chrome.jsx                ← WeChat-blue navbar + orange sub-header
    Bubble.jsx                ← user / agent / card bubble variants
    VoiceDock.jsx             ← floating voice input dock
    ReportCard.jsx            ← 拜访报告 card
    AIFollowupSheet.jsx       ← AI 追问 bottom sheet
    LoadingToasts.jsx         ← sequential loading toast chain
    Mascot.jsx                ← mascot + gradient halo
```

### Preview files `voice agent only`

| File | Shows |
|---|---|
| `preview/voice-gradient.html` | Cyan→mint gradient swatches + mascot halo |
| `preview/voice-bubbles.html` | User and agent bubble variants |
| `preview/voice-input-dock.html` | Floating voice dock |
| `preview/voice-card-report.html` | 拜访报告 report card |
| `preview/voice-modal-sheet.html` | AI 追问 bottom sheet |
| `preview/voice-logo-mascot.html` | Mascot + onboarding card |

All voice preview files share `preview/base.css` (token names aligned to WeChat DS).
