// Toast — by user action, lightweight global feedback.
// Statuses: success / fail / warning / hint.
// Renders full-width on its parent container (375px in our mobile canvas).

const TOAST_STYLES = {
  success: { bg: '#CCF9E9', fg: '#00CD88', Icon: window.IconCheck },
  fail:    { bg: '#FFDDD9', fg: '#FF5543', Icon: window.IconX },
  warning: { bg: '#FFF5CC', fg: '#F7981D', Icon: window.IconAlert },
  hint:    { bg: '#D6DAE0', fg: '#7788A2', Icon: window.IconAlert },
};

function Toast({ status = 'success', children, style = {} }) {
  const s = TOAST_STYLES[status] || TOAST_STYLES.success;
  const Ico = s.Icon;
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: 15,
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-han-sans)',
      fontSize: 14,
      lineHeight: '20px',
      boxSizing: 'border-box',
      ...style,
    }}>
      <div style={{ flex: '0 0 20px', height: 20, display: 'flex', alignItems: 'center' }}>
        <Ico size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  );
}

// Transient toast manager — one toast at a time, auto-dismiss after `duration`.
function ToastHost({ toast, onDone }) {
  const [visible, setVisible] = React.useState(false);
  const [current, setCurrent] = React.useState(null);

  React.useEffect(() => {
    if (!toast) return;
    setCurrent(toast);
    // enter
    requestAnimationFrame(() => setVisible(true));
    const dur = toast.duration ?? 2200;
    const t1 = setTimeout(() => setVisible(false), dur);
    const t2 = setTimeout(() => { setCurrent(null); onDone && onDone(); }, dur + 200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [toast]);

  if (!current) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 12, left: 0, right: 0,
      zIndex: 50,
      pointerEvents: 'none',
      display: 'flex', justifyContent: 'center',
    }}>
      <div style={{
        width: '100%',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
        transition: visible
          ? 'opacity 200ms cubic-bezier(.2,0,0,1), transform 200ms cubic-bezier(.2,0,0,1)'
          : 'opacity 160ms linear',
      }}>
        <Toast status={current.status}>{current.text}</Toast>
      </div>
    </div>
  );
}

Object.assign(window, { Toast, ToastHost });
