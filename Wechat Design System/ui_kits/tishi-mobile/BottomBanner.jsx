// Bottom-fixed banner (底部固定提示) — full-width pill bar fixed to bottom of form/list.
// Variants: info (gray), warn (yellow), error (red). White text, square corners.

const BANNER_BG = {
  info:  '#AAAAAA',
  warn:  '#F6A950',
  error: '#FA9489',
};

function BottomBanner({ status = 'info', children, style = {} }) {
  return (
    <div style={{
      width: '100%',
      height: 25,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 15px',
      background: BANNER_BG[status] || BANNER_BG.info,
      color: '#FFFFFF',
      fontSize: 14,
      lineHeight: '25px',
      fontFamily: 'var(--font-han-sans)',
      boxSizing: 'border-box',
      ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { BottomBanner });
