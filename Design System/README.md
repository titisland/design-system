# Veeva CRM Online — Design System

A Chinese-language, web-based CRM for pharmaceutical sales representatives.
Used by reps inside pharma companies (J&J, MSD, Merck, etc.) to plan
and record field visits to HCPs (doctors, hospitals, pharmacies), manage
their territories, run surveys, and generate activity reports.

```
┌────────────────────────────────────────────────────────────────┐
│  Veeva-logo    首页   工作   任务队列        帮助中心   User  ▾│ 52 px top bar
├────┬───────────────────────────────────────────────────────────┤
│ ≡  │  Page Title                                               │
│ 👤 │ ━━━━━━━━━━━━━━━━━━━━━━━━━━ 2-px orange accent ━━━━━━━━━━━ │
│ 🏥 │                                                           │
│ 💊 │  [ data table / form / detail / empty state ]             │
│ ⋯  │                                                           │
└────┴───────────────────────────────────────────────────────────┘
  52 px left rail        workspace fill = #F4F6F8
```

## Context

- **Audience.** Field sales reps and their managers inside pharma
  companies. Power users who live in the tool 8 hours a day — they want
  dense, keyboard-friendly, information-rich screens. Not consumers.
- **Language.** UI ships as Simplified Chinese primarily, with English
  as a switchable locale. Latin characters (product names, English
  emails, numbers) appear mixed into Chinese strings constantly —
  the type stack must handle both gracefully.
- **Tenancy.** The same codebase is re-themed per pharma customer.
  Veeva's house orange is the fallback/default; J&J red, MSD teal,
  and Merck KGaA purple are production tenant themes. Keep the
  non-color parts of the system identical across themes — only the
  brand accent changes.
- **Form factor.** Designed for 1366×768 desktop browsers first. Dense
  rows, 52-px chrome, small controls. A companion mobile app exists
  (Veeva iRep) but is a separate system — this kit is **desktop web only**.

## What you'll find

| File                      | Contents                                        |
|---------------------------|-------------------------------------------------|
| `colors_and_type.css`     | All design tokens: colors, type, spacing, radii, shadows. Import from every page. |
| `CONTENT.md`              | Voice, tone, copy rules — writing in Chinese enterprise-software register. |
| `VISUAL.md`               | Visual foundations — layout, density, accent usage, empty states, data-viz. |
| `ICONOGRAPHY.md`          | Icon style and the catalog in `assets/icons/`. |
| `ui-kit/components.html`  | Live component reference — buttons, inputs, tables, modals, chips. |
| `ui-kit/layout.html`      | App shell — top bar, left rail, workspace, empty state, loading. |
| `ui-kit/brand-themes.html`| The four tenant themes (Veeva / J&J / MSD / Merck) side by side. |
| `assets/`                 | Logo, icons, empty-state illustration.          |
| `preview/`                | Design-system preview cards (colors, type, spacing, logo &amp; icons). |
| `SKILL.md`                | When-to-use brief for the agent — non-negotiables, copy rules, tenant theming. |

## How to use

1. Link `colors_and_type.css` from every page. It exposes CSS custom
   properties (`--veeva-orange`, `--text-h2`, `--space-4`, etc.) and a
   handful of type utility classes (`.v-h1`, `.v-body`, `.v-caption`).
2. Copy component markup out of `ui-kit/components.html`. The classes
   are all prefixed `.v-*` and have no build step — plain CSS.
3. For tenant themes, set `data-theme="jj" | "msd" | "merck"` on
   `<html>`; the override block at the bottom of `colors_and_type.css`
   swaps `--veeva-orange` for the tenant accent.
4. Font stack assumes **Inter** for Latin and **Source Han Sans SC**
   (or PingFang SC on Apple devices) for CJK. Both are served from
   `<link>` tags in each kit page; no installation needed.

## Design principles

1. **Dense but calm.** Reps scan long tables. Don't add decoration —
   every pixel earns its place. Lean on neutrals; reserve color for
   meaning (orange = action, red = error, green = success).
2. **Orange is a scalpel.** One primary action per screen. One
   accent rule at the top of each data region. Don't paint whole
   surfaces orange — it fatigues.
3. **Chinese-first layout.** No tight fixed text widths. Chinese
   glyphs are square; Latin ribbons are narrow. Let fields flex.
4. **No emoji, no illustration bloat.** This is a regulated industry.
   Use the supplied empty-state illustration, icon set, and
   placeholders. Don't invent.
