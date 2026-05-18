# Visual Foundations

How Veeva CRM Online looks, and why. Follow this when placing any new
surface into the app.

## Canvas

The app is a fixed 52-px top bar, a 52-px left rail, and a `#F4F6F8`
workspace. The workspace is NOT white — it's a pale neutral so that
white cards inside it read as elevated without needing shadows.

```
── white 52 px top bar ─────────────────────
│ white rail │  F4F6F8 workspace          │
│ (52 px)    │  ┌─ white card ─────────┐  │
│            │  │                      │  │
│            │  │                      │  │
│            │  └──────────────────────┘  │
```

- Top bar: `#FFFFFF`, 1 px bottom border `#EEEEEE`.
- Rail: `#F8F8F8`, right shadow `4px 0 8px rgba(0,0,0,0.03)`.
- Content card: `#FFFFFF`, 4 px radius, no border, shadow
  `0 2px 4px rgba(0,0,0,0.03)` or none.

## Accent line

Every data-region card (table header, form header) has a **2 px solid
orange bar** across its top edge, pulled in 0 px from the horizontal
padding. This is the signature Veeva motif — it says "this block is
primary content". Use it **once per screen**, at the top of the main
content card. Don't repeat it inside sub-sections.

## Spacing scale

Multiples of 4. Use these, don't improvise.

| Token       | px   | Use                                       |
|-------------|------|-------------------------------------------|
| `--space-1` |  4   | inline gap between icon and label         |
| `--space-2` |  8   | chip internal padding, tight stacks       |
| `--space-3` | 12   | row padding vertical                      |
| `--space-4` | 16   | default between related items             |
| `--space-5` | 20   | table cell horizontal padding             |
| `--space-6` | 24   | modal padding, section internal           |
| `--space-8` | 32   | section-to-section vertical               |
| `--space-10`| 40   | page top padding                          |
| `--space-16`| 64   | between top chrome and content card       |

## Density

- Row height (table): **40 px**. Cell padding 0 20 px.
- Input height: **32 px**. Padding 0 12 px. Text 14 px.
- Button height: **32 px** default, **40 px** for a page-primary.
- Line height in dense views: 22 px for 14 px text (1.57).
- Minimum content-card padding: 24 px all around.

Don't pad beyond this. Reps scan; every extra 8 px of whitespace is a
row that fell off the screen.

## Color usage

- **Orange** = single primary action, current-tab indicator, active
  rail icon, top accent line. Never fills large areas; never used
  for navigation highlight except the active state.
- **Blue** = links and info badges. Do not use for primary actions —
  blue is reserved for "click to navigate / read more".
- **Red** = errors, destructive labels, required asterisks. Never a
  destructive *button* fill — destructive primary is orange too,
  with a plain verb label ("删除") so intent reads from the word.
- **Green** = success states only, usually on status chips. Not used
  for "go" or primary actions.
- **Neutrals carry the UI.** Body text `#333`, secondary `#666`,
  tertiary `#999`. Borders `#EEEEEE` default.

## Hover, focus, active

| State    | Treatment                                              |
|----------|--------------------------------------------------------|
| Hover (row)      | background `#FFF6E8` (warm orange-tinted gray) |
| Hover (button)   | darken fill 6% (orange → #E7871A)              |
| Hover (link)     | underline                                      |
| Focus (any input)| 2 px outline `var(--veeva-orange)` at 40% alpha|
| Active (rail)    | orange tint 12% bg, orange icon, 3 px orange left stripe |

## Elevation

Four levels — used sparingly.

| Level     | Shadow token         | Where                           |
|-----------|----------------------|---------------------------------|
| 0 (flat)  | none                 | Workspace cards, table rows     |
| 1         | `--shadow-lighter`   | Page content cards              |
| 2         | `--shadow-light`     | Sticky table headers, toolbars  |
| 3         | `--shadow-base`      | Dropdown menus, popovers        |
| 4         | `--shadow-dark`      | Modals, drawers                 |

Don't invent new shadows. If your surface doesn't fit one of these,
reconsider whether it needs elevation at all.

## Empty states

Three sizes.

- **Full pane.** 120×120 empty-box SVG centered, "没有更多数据" in
  `#CCCCCC` underneath. Vertical padding 64 px top and bottom.
- **Card.** No illustration. Text "暂无数据" centered, 48 px tall.
- **Inline (dropdown / sub-list).** One line of 13-px gray text,
  left-aligned in the list.

Never leave a data region without an empty state. An empty table with
only a header row is a bug, not a neutral state.

## Loading

- **First page load of a view:** Skeleton rows matching the final
  layout. Skeleton bars are `#EEEEEE` → `#F5F5F5` shimmer, 14 px tall
  for text rows, 40 px for table rows.
- **Inline refresh:** Spinner, 16 px, `--veeva-orange`, replacing the
  refresh icon in place.
- **Modal submit:** Disable the primary button, replace its label
  with a 16 px white spinner, keep the button width fixed.

## Data-viz

When you need color for categories (charts, tag clouds), use the
`--cat-1 … --cat-9` palette in that order. Don't repeat brand orange
as a category — it loses meaning.

All charts follow these rules:

- No 3D, no drop shadows, no gradients.
- Axis text 12 px `#666`.
- Grid lines `#EEE`, 1 px, dashed `4 4`.
- Tooltips: white card, `--shadow-base`, 12 px padding, 13 px text.

## Don't

- No gradients anywhere (except the skeleton shimmer).
- No heavy corner radii — 4 px is the ceiling for structural
  elements. Pills at 20 px are a deliberate exception for chips.
- No icon-only top nav — top nav has icon + label always.
- No fullscreen modals — modals are centered, 480 / 640 / 800 px
  wide. Use a drawer if you need more room.
- No dark mode. There is no designed dark variant of this product.
