// Voice Call · Chrome — WeChat-Work status bar + nav bar + optional orange product band
function Chrome({ title = "Veeva China SFA", subheader = null, onReset }) {
  return (
    <div className="chrome">
      <div className="statusbar">
        <span className="time">11:31</span>
        <div className="icons">
          {/* mobile signal */}
          <svg width="17" height="11" viewBox="0 0 24 16" fill="#fff" aria-hidden="true">
            <rect x="2" y="10" width="3" height="6" rx="1"/>
            <rect x="7" y="6" width="3" height="10" rx="1"/>
            <rect x="12" y="2" width="3" height="14" rx="1"/>
          </svg>
          {/* wifi */}
          <svg width="16" height="11" viewBox="0 0 24 16" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
            <path d="M2 6c5-4 15-4 20 0M5 10c3-2.5 11-2.5 14 0M9 14c1-1 5-1 6 0"/>
          </svg>
          {/* battery */}
          <svg width="22" height="11" viewBox="0 0 24 12" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
            <rect x="1" y="1" width="18" height="10" rx="2"/>
            <rect x="3" y="3" width="14" height="6" rx="1" fill="#fff"/>
            <rect x="20" y="4" width="2" height="4" rx="1" fill="#fff"/>
          </svg>
        </div>
      </div>
      <div className="navbar">
        <button onClick={onReset} aria-label="back / reset">
          <svg width="14" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="title">{title}</div>
        <button aria-label="more">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/>
          </svg>
        </button>
      </div>
      {subheader && <div className="subheader">{subheader}</div>}
    </div>
  );
}

window.Chrome = Chrome;
