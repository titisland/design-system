// In-page soft reminder (页面内软提醒)
// Bulleted list of business-rule reminders inside a tab page.
// Sits on a soft gray block; orange "提示" header; orange dots in front of each item.

function SoftReminder({ title = '提示', items = [], style = {} }) {
  return (
    <div style={{
      width: '100%',
      background: '#F5F5F5',
      padding: 8,
      boxSizing: 'border-box',
      ...style,
    }}>
      <div style={{
        color: '#DEA96D',
        fontSize: 14,
        lineHeight: 1,
        padding: '10px 0',
      }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 5,
            fontSize: 13, lineHeight: 1.5, color: '#666666',
          }}>
            <div style={{
              flex: '0 0 6px', width: 6, height: 6,
              borderRadius: '50%', background: '#F7981D',
              marginTop: 7,
            }} />
            <div style={{ flex: 1 }}>{it}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SoftReminder });
