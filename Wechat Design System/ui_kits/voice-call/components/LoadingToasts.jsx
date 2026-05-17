// Loading toasts — staged success messages + final spinner. Pass `step` (0..3).
function LoadingToasts({ step }) {
  const lines = [
    "收到啦！小助手正全力解析你的内容，超认真！",
    "好多重点信息！正在分类整理，绝不遗漏！",
    "报告生成中！马上送上你的专属 AI 拜访！",
  ];
  return (
    <div className="toasts">
      {lines.map((text, i) => {
        const visible = i <= step;
        const done = i < step;
        if (!visible) return null;
        return (
          <div key={i} className={"toast " + (done ? "done" : "live")} style={{ opacity: visible ? 1 : 0, transition: "opacity 240ms" }}>
            {done ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00CD88" aria-hidden="true">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 14.293L6.293 11.88 7.707 10.47l3 3 5.293-5.293 1.414 1.414-6.707 6.702z"/>
              </svg>
            ) : (
              <div className="spinner" aria-hidden="true" />
            )}
            <span>{text}</span>
          </div>
        );
      })}
    </div>
  );
}
window.LoadingToasts = LoadingToasts;
