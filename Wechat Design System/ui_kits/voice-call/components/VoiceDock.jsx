// VoiceDock — floating bottom voice input. Tap "按住说话" to fire onSubmit.
function VoiceDock({ onSubmit, label = "按住说话", busy = false }) {
  return (
    <div className="dock">
      <div className="dock-card">
        <div className="dock-mode">
          <span className="mode-pill" role="button" tabIndex={0}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Voice Call
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
        <div className="dock-action" role="button" tabIndex={0} onClick={busy ? null : onSubmit} style={{ opacity: busy ? 0.5 : 1, cursor: busy ? "default" : "pointer" }}>
          {/* keyboard glyph pinned to the left */}
          <span className="kb-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
            </svg>
          </span>
          <span className="label">{label}</span>
        </div>
      </div>
      <div className="disclaimer">内容由 AI 生成</div>
    </div>
  );
}
window.VoiceDock = VoiceDock;
