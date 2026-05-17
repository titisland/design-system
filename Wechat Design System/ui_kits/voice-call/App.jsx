// Voice Call click-through prototype state machine.
// Stages: hello → dictate → loading → reports → followup → done
const SAMPLE_USER_MESSAGE = "今天拜访了李主任，跟他聊了百泽安围手术期 pCR 率 41%，他反馈一般，他需要我提供更多的临床数据佐证";

const FOLLOWUP_STEPS = [
  {
    praise: "这个点你记得很关键，PCR 率和他的需求都抓到了！",
    question: "李主任听到 41% 这个数，更像是哪种反应？",
    options: ["觉得这个数字本身不够高", "对 PCR 能预测长期生存有保留", "没有直接表态，比较圆滑带过"],
  },
  {
    praise: "抓到了，这里再细一点——他说需要更多临床数据，主要是卡在哪？",
    question: "他更关心数据的哪个维度？",
    options: ["想看真实世界的临床经验", "想看长期生存获益", "想看更大样本量的研究"],
  },
  {
    praise: "最后一个——你当时跟李主任介绍这个 41%，大概是怎么说的？",
    question: "你强调的角度是？",
    options: ["治愈率显著提升", "围手术期 28 天修复期", "对比传统方案的优势"],
  },
];

const REPORT = {
  doctor: "李建",
  date: "2026 年 3 月 15 日",
  objective: "产品介绍",
  summary: "沟通了百泽安围手术期 41% 的 pCR 率，主任反馈平淡，要求提供更多临床数据以作进一步佐证。",
};

function App() {
  const [stage, setStage] = React.useState("hello");
  const [loadStep, setLoadStep] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [followupAnswered, setFollowupAnswered] = React.useState(false);
  const bodyRef = React.useRef(null);

  // Auto-advance loading toasts
  React.useEffect(() => {
    if (stage !== "loading") return;
    setLoadStep(0);
    const t1 = setTimeout(() => setLoadStep(1), 700);
    const t2 = setTimeout(() => setLoadStep(2), 1500);
    const t3 = setTimeout(() => setStage("reports"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [stage]);

  // Scroll to bottom on body changes
  React.useEffect(() => {
    if (bodyRef.current) {
      requestAnimationFrame(() => {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      });
    }
  }, [stage, loadStep]);

  function onVoiceTap() {
    if (stage === "hello") setStage("dictate");
    else if (stage === "dictate") setStage("loading");
    else if (stage === "reports" && !followupAnswered) setStage("followup");
    else if (stage === "reports" && followupAnswered) { /* no-op */ }
  }

  function onReset() {
    setStage("hello");
    setLoadStep(0);
    setSubmitted(false);
    setFollowupAnswered(false);
  }

  const dockLabel =
    stage === "hello" ? "按住说话" :
    stage === "dictate" ? "松开发送" :
    stage === "loading" ? "处理中…" :
    stage === "reports" && !followupAnswered ? "AI 追问 →" :
    "按住说话";

  return (
    <div className="stage">
      <div className="device">
        <div className="device-screen">
          <Chrome onReset={onReset} title="Veeva China SFA" />

          <div ref={bodyRef} className="body">
            {/* HELLO */}
            {stage === "hello" && (
              <React.Fragment>
                <div className="hero-mascot"><Mascot size="md" /></div>
                <Bubble who="agent-soft">
                  {"嗨！我是你的拜访助手 Voice Call，很高兴为你服务！我可以帮你轻松记录拜访信息。创建拜访时，只需要告诉我以下几点哦：\n\n· 医生姓名\n· 拜访日期\n· 拜访目标\n· 关键信息\n\n期待和你一起高效记录每一次拜访！如果你准备好了，就告诉我吧！ 😊"}
                </Bubble>
              </React.Fragment>
            )}

            {/* DICTATE — show user bubble */}
            {(stage === "dictate" || stage === "loading" || stage === "reports" || stage === "followup") && (
              <Bubble who="user">{SAMPLE_USER_MESSAGE}</Bubble>
            )}

            {/* LOADING */}
            {(stage === "loading") && (
              <React.Fragment>
                <div style={{ display:"flex", alignItems:"center", gap:8, paddingLeft: 4 }}>
                  <img src="../../assets/loading-orange.png" alt="" style={{ width: 40, height: 56 }} />
                </div>
                <LoadingToasts step={loadStep} />
              </React.Fragment>
            )}

            {/* REPORTS */}
            {(stage === "reports" || stage === "followup") && (
              <React.Fragment>
                <div className="intro-text">已为您创建以下拜访报告，您可以继续通过语音/手动编辑来完善您的拜访报告哦～</div>
                <ReportCard
                  {...REPORT}
                  submitted={submitted}
                  onSubmit={() => setSubmitted(true)}
                  onEdit={() => { /* could open editor */ }}
                  onDelete={onReset}
                />
                {followupAnswered && (
                  <React.Fragment>
                    <div className="ai-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                      <span className="ai-text">已回答 {FOLLOWUP_STEPS.length} 个问题</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <div className="intro-text">好的～已为您生成本次拜访报告：</div>
                    <ReportCard
                      {...REPORT}
                      summary={"主任虽认可 40% 以上 pCR 率的临床价值，但更关注真实世界 (RWE) 数据。本次拜访依此诉求补充了围手术期长期获益与样本量信息。"}
                      submitted={submitted}
                      onSubmit={() => setSubmitted(true)}
                      onEdit={() => {}}
                      onDelete={onReset}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </div>

          <VoiceDock
            label={dockLabel}
            busy={stage === "loading"}
            onSubmit={onVoiceTap}
          />

          {stage === "followup" && (
            <AIFollowupSheet
              steps={FOLLOWUP_STEPS}
              onSkipAll={() => { setFollowupAnswered(true); setStage("reports"); }}
              onDone={() => { setFollowupAnswered(true); setStage("reports"); }}
            />
          )}

          <div className="home-indicator" />
        </div>
      </div>

      <aside className="help">
        <h3>Voice Call · click-through</h3>
        <div style={{ marginBottom: 8 }}>This is a fake recreation. Tap the bottom voice dock to advance:</div>
        <ol>
          <li><b>Hello</b> — onboarding card.</li>
          <li>Tap dock → <b>user bubble</b> appears.</li>
          <li>Tap dock → <b>loading toasts</b> stream in.</li>
          <li><b>Report</b> card renders.</li>
          <li>Tap dock → <b>AI 追问</b> sheet slides up.</li>
          <li>Tap <b>提交</b> in the sheet → confirmed report card lands.</li>
        </ol>
        <span className="reset" onClick={onReset}>↺ Reset</span>
      </aside>
    </div>
  );
}

window.App = App;
