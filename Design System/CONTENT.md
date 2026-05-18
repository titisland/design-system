# Content Fundamentals

Writing for Veeva CRM Online — the tone, structure, and conventions that
keep copy consistent across a very large Chinese enterprise app.

## Voice

**Direct, professional, respectful, task-oriented.** You are talking to
a sales rep in the middle of their workday. They know pharma, they know
CRM. Explain nothing they already know; explain everything they don't.

- Use formal "please + verb" (请 + 动词) for prompts: 请选择, 请输入,
  请确认. Never imperative alone (输入…).
- No slang. No emoji. No exclamation marks except in genuine errors.
- Don't personify the software ("I noticed…", "Let me help you…") —
  this is a system of record, not an assistant.
- When you must acknowledge an action, state the outcome, not a
  platitude. "已保存 1 条记录" ✓   "太好啦！" ✗

## Terminology

Stick to the established CRM/pharma vocabulary. Don't reinvent.

| English          | Chinese       | Notes                                     |
|------------------|---------------|-------------------------------------------|
| Customer         | 客户          | A doctor, hospital, or pharmacy           |
| Visit / Call     | 拜访          | The core activity — a rep seeing an HCP   |
| HCP (doctor)     | 医生 / 医务人员 | Individual healthcare professional       |
| Account (org)    | 医院 / 机构   | Hospital or organizational customer       |
| Product          | 产品          | A pharmaceutical SKU                      |
| Territory        | 辖区 / 区域    | A rep's assigned geography                |
| Assignment       | 分配          | Who covers which account                  |
| Survey           | 问卷          | Field research form                       |
| Task queue       | 任务队列      | Workflow items assigned to the user       |
| Report           | 报表          | A saved data view, usually tabular        |

When a term exists in both Chinese and English in the UI (e.g. 产品 /
Product), pick one per screen and use it consistently. Don't mix in
the same label. Mixed Latin+CJK is fine inside body text (e.g.
"同步到 Vault").

## Labels

- **Forms:** noun, no colon, no period. "拜访医生", "开始日期". Colons
  are added visually by the layout, not in the string.
- **Buttons:** verb + object, ≤ 4 CJK chars where possible.
  "保存" ✓  "保存所有更改并返回上一页" ✗
- **Section titles:** short noun phrase — "基本信息", "关键信息",
  "相关产品资料".
- **Required:** leading red asterisk before the label — "*拜访医生".
  Don't write "必填" in the label itself.

## Messages

### Validation (inline, under the field)
State the rule violated, not a generic complaint.

- "必填项不能为空" — required field, empty.
- "请输入有效的邮箱地址"
- "最多输入 200 个字符"
- "该产品未分配给当前辖区"

Red (#FF5543), 12 px, with 4 px top margin.

### Confirmation (modal)
Title = the question. Body = the consequence. Buttons = the two verbs.

```
当前问卷所选分配岗位近期有变更，是否移除后发布？
• 销售总监
• 销售总监
              [ 取消 ]  [ 移除并继续 ]
```

- Title always ends with a question mark when it IS a question.
- Destructive primary button uses a plain verb — "移除并继续", "删除" —
  not "确定". Confirming with "确定" on a destructive action hides
  intent.

### Empty states
Short phrase, gray, with the box illustration when the region is the
main content area. In compact spots (dropdowns, sub-tables), text alone.

- Full pane: "没有更多数据" / "空空如也～" (friendlier, for home-page cards)
- Sub-list: "暂无数据"
- Search zero-result: "未找到相关结果，换个关键词试试"

### Toasts & status
One line. Subject + state. Dismiss after 3 s.

- "已保存"
- "已提交 12 条拜访记录"
- "同步失败，请稍后重试"

## Numbers, dates, and formatting

- **Dates.** `YYYY-MM-DD` in tables (`2023-02-07`). `YYYY/MM/DD` is
  acceptable in inline text where the table uses dashes — pick one
  per screen. Never `MM/DD/YYYY`.
- **Times.** 24-hour, `HH:mm`. "14:30", not "2:30 PM".
- **Numbers.** Western digits. Thousands grouped with `,` for English
  contexts, optional for Chinese. "1,234 条记录" is fine; "1234 条记录"
  is also fine — be consistent per screen.
- **Money.** "¥ 1,234.00" with a thin space after the symbol.
- **Percentages.** No space: "82%".
- **Ranges.** CJK en dash: "2023-01-01 — 2023-02-07".

## Truncation & wrap

Chinese glyphs all have the same width, so two-line truncation works
cleanly. Table cells: single-line with ellipsis + tooltip on hover.
Titles: up to two lines, ellipsis after. Descriptions in cards:
three lines. Never truncate a required-field error — always show the
full rule.

## Don't

- Don't use "您" everywhere; "您" is polite but wordy. Use it in
  onboarding, modals, and confirmations. Drop it in labels and tables.
- Don't end sentences with "哦" / "呢" / "啦". Unprofessional.
- Don't quote Veeva product names inside marks (《Veeva CRM》). Just
  write "Veeva CRM".
- Don't translate "Vault", "CRM", "API", "SSO" — keep them in Latin.
