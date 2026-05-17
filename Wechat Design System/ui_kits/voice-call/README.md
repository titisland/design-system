# Voice Call — UI Kit

A high-fidelity recreation of the **Voice Call** voice-agent surface as it appears inside Veeva China SFA inside WeChat Work (企业微信). One product, one canvas, one click-through prototype.

## Files

```
index.html             ← run this
styles.css             ← UI-kit-specific layout & device frame
components/
  Chrome.jsx           ← WeChat-blue status bar + nav, plus the orange product band
  Mascot.jsx           ← the cat-eyed Voice Call mascot inside its halo (3 sizes)
  Bubble.jsx           ← chat bubbles · user (gradient, right) and agent (gray, left)
  ReportCard.jsx       ← 拜访报告 hero card-in-a-card
  AIFollowupSheet.jsx  ← AI 追问 bottom-sheet modal
  LoadingToasts.jsx    ← staged progress toasts (绿色 ✓ + spinner)
  VoiceDock.jsx        ← floating bottom voice input
  Tag.jsx              ← English / Voice Call pill / AI disclaimer
App.jsx                ← orchestrates the demo state machine
```

## What the demo does

`index.html` opens to the **hello** state. Tap **按住说话** to play through the rest of the flow without speaking:

1. **Hello** — onboarding bubble from Voice Call.
2. **Dictate** — user message bubble appears (cyan-mint gradient).
3. **Loading** — the orange mascot Lottie placeholder + three staged success toasts.
4. **Report** — one or more 拜访报告 cards are generated.
5. **AI 追问** — bottom sheet slides in, three single-choice + one open question, "提交" returns to the report list.
6. Tap **重新开始** in the nav to reset.

This is a fake prototype — there's no real speech recognition. Buttons just advance the state machine.

## Verbatim copy from the Figma

| Surface | Copy |
|---|---|
| Onboarding | 嗨！我是你的拜访助手 Voice Call，很高兴为你服务！…医生姓名 / 拜访日期 / 拜访目标 / 关键信息…😊 |
| Sample user message | 今天拜访了李主任，跟他聊了百泽安围手术期 pCR 率 41%… |
| Loading 1 | 收到啦！小助手正全力解析你的内容，超认真！ |
| Loading 2 | 好多重点信息！正在分类整理，绝不遗漏！ |
| Loading 3 | 报告生成中！马上送上你的专属 AI 拜访！ |
| Report intro | 已为您创建以下拜访报告，您可以继续通过语音/手动编辑来完善您的拜访报告哦～ |
| AI 追问 praise | 这个点你记得很关键，PCR 率和他的需求都抓到了！ |
| AI 追问 Q1 | 李主任听到 41% 这个数，更像是哪种反应？ |
| Disclaimer | 内容由 AI 生成 |
