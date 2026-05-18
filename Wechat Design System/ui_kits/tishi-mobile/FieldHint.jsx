// Field-level hint (字段级提示)
// Two variants:
//   - inline       : icon + 11px blue link text, transparent bg
//   - pop-inline   : pill on #F2F2F2 with 3px radius

function FieldHintInline({ children, color = '#0064FF' }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color,
      fontFamily: "'PingFang SC', 'Noto Sans SC', system-ui, sans-serif",
      fontSize: 11,
      lineHeight: 1,
    }}>
      <window.IconAlert size={13} color={color} />
      <span>{children}</span>
    </div>
  );
}

function FieldHintPop({ children, color = '#0064FF' }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 8px 2px 12px',
      background: '#F2F2F2',
      borderRadius: 3,
      color,
      fontFamily: "'PingFang SC', 'Noto Sans SC', system-ui, sans-serif",
      fontSize: 11,
      lineHeight: 1,
    }}>
      <span>{children}</span>
    </div>
  );
}

// A complete labelled input + hint, used in the demo flow.
function Field({ label, value, onChange, placeholder, hint, hintVariant = 'inline', error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label ? (
        <div style={{ fontSize: 13, color: '#595959', fontWeight: 500 }}>{label}</div>
      ) : null}
      <input
        value={value || ''}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          height: 36, padding: '0 12px',
          border: `1px solid ${error ? '#FF5543' : '#CCCCCC'}`,
          borderRadius: 4,
          fontSize: 14, color: '#333',
          outline: 'none', background: '#FFF',
          fontFamily: 'inherit',
        }}
      />
      {hint ? (
        hintVariant === 'pop'
          ? <FieldHintPop>{hint}</FieldHintPop>
          : <FieldHintInline>{hint}</FieldHintInline>
      ) : null}
    </div>
  );
}

Object.assign(window, { FieldHintInline, FieldHintPop, Field });
