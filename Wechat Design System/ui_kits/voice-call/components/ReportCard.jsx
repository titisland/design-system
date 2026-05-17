// Visit report card — the hero card-in-a-card.
function ReportCard({ doctor, date, objective, summary, percent = 100, onDelete, onEdit, onSubmit, submitted = false }) {
  return (
    <div className="report-frame">
      <div className="report-inner">
        <div className="report-id">
          <div className="badge">
            {/* doctor icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <span className="name">{doctor}</span>
        </div>
        <div className="report-rows">
          <div className="report-row"><b>拜访日期：</b><span>{date}</span></div>
          <div className="report-row"><b>拜访目标：</b><span>{objective}</span></div>
          <div className="report-row">
            <b>拜访总结：</b>
            <div className="body-text">{summary}</div>
            <div className="lang-row">
              <span className="lang-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                English
              </span>
            </div>
          </div>
          <div className="progress">
            <span className="label">填写进度：</span>
            <div className="track">
              <div className="fill" style={{ width: `${percent}%` }}>{percent}%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="report-actions">
        <button className="btn ghost" onClick={onDelete}>删除</button>
        <button className="btn ghost" onClick={onEdit}>编辑</button>
        <button className="btn primary" onClick={onSubmit} disabled={submitted}>{submitted ? "已提交" : "提交"}</button>
      </div>
    </div>
  );
}
window.ReportCard = ReportCard;
