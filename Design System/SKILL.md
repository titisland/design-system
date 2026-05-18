# Veeva CRM Online — Design Skill

Use this design system when you're designing for **Veeva CRM Online** — a
Chinese-language, web-based pharma CRM used by field sales reps at
pharma customers (J&amp;J, MSD, Merck KGaA, and Veeva-house tenants).

## When to use

- The user is designing screens, flows, or components for Veeva CRM.
- The user is designing for a pharma sales-rep workflow (visits, HCPs,
  hospitals, product samples, territory management) that should feel
  continuous with Veeva's product.
- The user mentions Veeva, iRep, Vault CRM, or a specific pharma
  tenant theme.

Don't use this system for Veeva Vault (document/regulatory) or for
the iRep mobile tablet app — those have different visual systems.

## Quick-start

1. Link `colors_and_type.css` and `ui-kit/components.css` from every
   page.
2. Read `README.md`, `VISUAL.md`, and `CONTENT.md` before starting.
3. Pull markup from `ui-kit/components.html` and `ui-kit/layout.html`
   rather than writing from scratch — every pattern has a
   pre-authored class.
4. If the user names a specific tenant (J&amp;J, MSD, Merck KGaA), set
   `data-theme="jj"` / `"msd"` / `"merck"` on `<html>`. See
   `ui-kit/brand-themes.html`.

## Non-negotiables

- **Chinese-first, mixed-script typography.** Font stack is
  `Inter, "Noto Sans SC", "PingFang SC", sans-serif`. Never use a
  Latin-only stack.
- **Dense layouts, 14&nbsp;px base, 40&nbsp;px rows, 32&nbsp;px inputs.**
  Reps scan; don't pad beyond `VISUAL.md` guidance.
- **One orange primary per screen.** One accent line per data card.
  Orange is a scalpel; don't paint with it.
- **No emoji, no illustrations beyond the supplied empty-box.**
  Regulated industry — keep it clean.
- **No dark mode.** Not designed.
- **Button labels are verbs**, not "确定" — "保存", "删除",
  "移除并继续".

## Copy

Formal but direct Simplified Chinese. Use 请 + verb for prompts. No
slang, no exclamation marks except on true errors. Dates `YYYY-MM-DD`.
Required fields: leading red `*`, never the word "必填". See
`CONTENT.md` for the terminology table and message patterns.

## Tenant theming

Four production themes ship. Each one swaps only the brand accent
(`--veeva-orange`, `--border-accent`, `--bg-row-hover`) — structural
tokens stay identical so the UI reads as Veeva under every skin.
Logos are customer-supplied; don't recolor Veeva's mark.
