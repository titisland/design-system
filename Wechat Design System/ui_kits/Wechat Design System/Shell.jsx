// Phone.jsx — iPhone 17 Pro Max frame tuned to the Veeva China CRM designs.
// 440×956 screen, classic status bar, flat body. No liquid glass.

function Phone({ children, style = {} }) {
  return (
    <div style={{
      width: 440, height: 956, borderRadius: 44, overflow: 'hidden',
      background: '#F8F8F8', position: 'relative',
      boxShadow: '0 30px 60px rgba(0,0,0,0.18), 0 0 0 8px #111, 0 0 0 9px #333',
      fontFamily: 'var(--font-cn)', ...style,
    }}>
      {children}
      {/* notch */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 245, height: 30, background: '#000', borderRadius: '0 0 18px 18px', zIndex: 100,
      }} />
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, borderRadius: 100, background: '#000', zIndex: 100,
      }} />
    </div>
  );
}

function StatusBar({ dark = true }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 28px 0 28px', color: c, fontFamily: 'SF Pro Text, -apple-system, system-ui',
      fontWeight: 600, fontSize: 15,
    }}>
      <span style={{ letterSpacing: -0.3 }}>11:31</span>
      <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center', fontSize: 12 }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><g fill={c}>
          <rect x="0" y="7" width="3" height="4" rx="0.5"/>
          <rect x="4.5" y="5" width="3" height="6" rx="0.5"/>
          <rect x="9" y="3" width="3" height="8" rx="0.5"/>
          <rect x="13.5" y="1" width="3" height="10" rx="0.5"/>
        </g></svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill={c}>
          <path d="M7.5 0C4.7 0 2.2 1 .3 2.8L1.5 4a8.5 8.5 0 0112 0l1.2-1.2A10 10 0 007.5 0zm0 3.7c-1.7 0-3.3.6-4.5 1.8l1.2 1.2a4.7 4.7 0 016.6 0l1.2-1.2a6.3 6.3 0 00-4.5-1.8zM7.5 7.5a2 2 0 100 3.9 2 2 0 000-3.9z"/>
        </svg>
        <svg width="25" height="11" viewBox="0 0 25 11">
          <rect x="0" y="0" width="22" height="11" rx="2.5" fill="none" stroke={c} strokeOpacity=".6"/>
          <rect x="1.5" y="1.5" width="19" height="8" rx="1.5" fill={c}/>
          <rect x="23" y="4" width="1.5" height="3" rx=".5" fill={c} fillOpacity=".6"/>
        </svg>
      </span>
    </div>
  );
}

function NavBar({ title, onBack, trailing = '⋯', bg = '#3975C6' }) {
  return (
    <div style={{ background: bg, color: '#fff', paddingBottom: 0 }}>
      <StatusBar dark />
      <div style={{
        height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        <span onClick={onBack} style={{ width: 32, cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
          <svg width="10" height="18" viewBox="0 0 10 18"><path d="M9 1L1 9l8 8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span style={{ fontSize: 17, fontWeight: 500 }}>{title}</span>
        <span style={{ width: 32, textAlign: 'right', fontSize: 20, lineHeight: '20px' }}>{trailing}</span>
      </div>
    </div>
  );
}

function Fab({ icon = 'ai', onClick, style = {} }) {
  if (icon === 'home') {
    return (
      <div onClick={onClick} style={{
        width: 42, height: 42, borderRadius: '50%',
        background: 'rgba(255,255,255,0.95)', border: '1px solid #E2E2E2',
        boxShadow: '0 0 12px rgba(0,0,0,.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        ...style,
      }}>
        <I.Home size={18} color="#333" />
      </div>
    );
  }
  return (
    <div onClick={onClick} style={{
      width: 46, height: 46, borderRadius: '50%', background: '#F7981D',
      boxShadow: '0 4px 20px rgba(0,0,0,.25)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
      ...style,
    }}>
      <I.AiStar size={26} color="#fff" />
    </div>
  );
}

function Pill({ children, color = '#00DF93', bg, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '4px 12px', borderRadius: 100, fontSize: 13, fontWeight: 500,
      background: bg || color, color: '#fff', ...style,
    }}>{children}</span>
  );
}

function Tag({ children, color = '#2069D6', tint = 'rgba(32,105,214,.08)' }) {
  return (
    <span style={{
      display: 'inline-block', padding: '2px 6px', fontSize: 12,
      background: tint, color, borderRadius: 2,
    }}>{children}</span>
  );
}

function StatusChip({ children, color }) {
  return (
    <span style={{ color, fontSize: 12, fontWeight: 500 }}>{children}</span>
  );
}

function AiBubble({ text, onIgnore, width = 212 }) {
  return (
    <div style={{
      width, borderRadius: 8,
      border: '2px solid rgba(247,152,29,.65)',
      boxShadow: '0 0 12px rgba(0,0,0,.12)',
      background: 'linear-gradient(rgba(247,152,29,0.15) 0%, rgba(247,152,29,0) 100%), #fff',
      padding: '10px 10px 8px',
    }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
        <I.AiStar size={16} color="#333" style={{ marginTop: 2 }} />
        <span style={{ fontSize: 14, color: '#333', lineHeight: '20px' }}>{text}</span>
      </div>
      <div style={{ textAlign: 'right', marginTop: 4 }}>
        <span onClick={onIgnore} style={{ fontSize: 12, color: '#B5B5B5', cursor: 'pointer', padding: '0 8px' }}>忽略</span>
      </div>
    </div>
  );
}

Object.assign(window, { Phone, NavBar, StatusBar, Fab, Pill, Tag, StatusChip, AiBubble });
