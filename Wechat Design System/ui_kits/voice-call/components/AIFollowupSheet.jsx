// AI 追问 follow-up sheet — three single-choice + one voice-input.
// Steps prop: array of {praise, question, options}
function AIFollowupSheet({ steps, onSkipAll, onDone }) {
  const [idx, setIdx] = React.useState(0);
  const [picks, setPicks] = React.useState(() => steps.map(() => null));
  const total = steps.length;
  const step = steps[idx];

  function pick(opt) {
    const next = picks.slice();
    next[idx] = opt;
    setPicks(next);
  }
  function advance() {
    if (idx + 1 < total) setIdx(idx + 1);
    else onDone(picks);
  }

  return (
    <React.Fragment>
      <div className="scrim" onClick={onSkipAll} />
      <div className="sheet" role="dialog" aria-modal="true" aria-label="AI 追问">
        <div className="sheet-head">
          <span className="skip-all" onClick={onSkipAll}>全部跳过</span>
          <span className="title">AI 追问</span>
          <span className="count">{idx + 1}/{total}</span>
        </div>
        <div className="sheet-body">
          {step.praise && (
            <div className="row agent">
              <img className="avatar-inline" src="../../assets/avatar-voice-call.png" alt="Voice Call" />
              <div style={{ paddingTop: 4, fontFamily: "var(--font-cn)", fontSize: 14, lineHeight: "20px", color: "#333" }}>{step.praise}</div>
            </div>
          )}
          <div style={{ fontFamily: "var(--font-cn)", fontSize: 14, fontWeight: 500, color: "#333", lineHeight: "20px" }}>{step.question}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {step.options.map((opt) => (
              <div key={opt} className={"option" + (picks[idx] === opt ? " selected" : "")} onClick={() => pick(opt)}>{opt}</div>
            ))}
            <div className="option input-style">
              <span>还有其他顾虑？比如医生的原话等</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
            </div>
          </div>
        </div>
        <div className="sheet-foot">
          <button className="step-btn" onClick={onSkipAll}>
            <div className="glyph">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </div>
            返回
          </button>
          <button className="step-btn" onClick={advance}>
            <div className="glyph">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
            {idx + 1 === total ? "提交" : "跳过"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
window.AIFollowupSheet = AIFollowupSheet;
