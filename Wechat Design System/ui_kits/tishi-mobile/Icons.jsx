// Icons — four status icons reconstructed in the same Lucide-adjacent style
// as the Figma source ("线性/圈-*" + "实心/警示-实色").

function IconCheck({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 12.5l2.8 2.8L16.5 9.5"></path>
    </svg>
  );
}

function IconX({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15 9l-6 6"></path>
      <path d="M9 9l6 6"></path>
    </svg>
  );
}

function IconAlert({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="7.5" x2="12" y2="13"></line>
      <circle cx="12" cy="16.25" r="0.8" fill={color} stroke="none"></circle>
    </svg>
  );
}

function IconAlertSolid({ size = 30, color = '#F7981D' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill={color}></circle>
      <rect x="11" y="6" width="2" height="8" rx="1" fill="#FFFFFF"></rect>
      <circle cx="12" cy="17" r="1.1" fill="#FFFFFF"></circle>
    </svg>
  );
}

Object.assign(window, { IconCheck, IconX, IconAlert, IconAlertSolid });
