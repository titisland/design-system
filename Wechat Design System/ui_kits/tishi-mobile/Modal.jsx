// Modal — opens an overlay over the current page for critical input or confirmation.
// Variants: confirm (cancel + ok) / alert (ok only) / multi (vertical action stack) / prompt (with input).

function ModalScrim({ visible, onClick }) {
  return (
    <div onClick={onClick} style={{
      position: 'absolute', inset: 0,
      background: 'rgba(0,0,0,0.40)',
      opacity: visible ? 1 : 0,
      transition: visible ? 'opacity 200ms ease-out' : 'opacity 160ms ease-out',
      pointerEvents: visible ? 'auto' : 'none',
      zIndex: 60,
    }} />
  );
}

function ModalCardShell({ visible, children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      pointerEvents: visible ? 'auto' : 'none',
      zIndex: 70,
    }}>
      <div style={{
        width: 300,
        borderRadius: 16,
        background: '#FFFFFF',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.96)',
        transition: visible
          ? 'opacity 200ms ease-out, transform 200ms ease-out'
          : 'opacity 160ms ease-out, transform 160ms ease-out',
      }}>
        {children}
      </div>
    </div>
  );
}

function ModalBody({ children }) {
  return (
    <div style={{
      margin: '0 20px',
      padding: '20px 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 12,
    }}>
      {children}
    </div>
  );
}

function ModalIcon() {
  return <window.IconAlertSolid size={30} color="#F7981D" />;
}

function ModalTitle({ children }) {
  return (
    <div style={{
      width: 260, textAlign: 'center',
      fontSize: 16, lineHeight: '24px', color: '#000000',
    }}>{children}</div>
  );
}

function ModalDesc({ children }) {
  return (
    <div style={{
      width: 260, textAlign: 'center',
      fontSize: 13, lineHeight: '20px', color: '#999999',
    }}>{children}</div>
  );
}

function ModalBtn({ kind = 'cancel', children, onClick, style = {} }) {
  const colors = {
    cancel:  '#333333',
    primary: '#F7981D',
  };
  const [press, setPress] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      onTouchStart={() => setPress(true)}
      onTouchEnd={() => setPress(false)}
      style={{
        flex: 1, height: 48,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, fontWeight: 500, lineHeight: '24px',
        color: colors[kind] || colors.cancel,
        cursor: 'pointer', userSelect: 'none',
        opacity: press ? 0.6 : 1,
        transition: 'opacity 120ms linear',
        ...style,
      }}
    >{children}</div>
  );
}

function Modal({
  open, onClose,
  variant = 'confirm',          // 'confirm' | 'alert' | 'multi' | 'prompt'
  title, desc,
  cancelText = '取消', confirmText = '确定',
  actions,                       // for 'multi': [{ text, onPress, kind }]
  promptPlaceholder = '文字描述',
  promptValue, onPromptChange,
  onConfirm, onCancel,
}) {
  const handleCancel = () => { onCancel && onCancel(); onClose && onClose(); };
  const handleConfirm = () => { onConfirm && onConfirm(); onClose && onClose(); };
  return (
    <>
      <ModalScrim visible={open} onClick={handleCancel} />
      <ModalCardShell visible={open}>
        <ModalBody>
          {variant === 'prompt' ? (
            <>
              <ModalTitle>{title}</ModalTitle>
              <input
                value={promptValue || ''}
                onChange={(e) => onPromptChange && onPromptChange(e.target.value)}
                placeholder={promptPlaceholder}
                style={{
                  width: 236, padding: '8px 12px',
                  border: '1px solid #CCCCCC', borderRadius: 4,
                  fontSize: 14, lineHeight: '24px', color: '#333',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
            </>
          ) : (
            <>
              <ModalIcon />
              <ModalTitle>{title}</ModalTitle>
              {desc ? <ModalDesc>{desc}</ModalDesc> : null}
            </>
          )}
        </ModalBody>

        {variant === 'multi' ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {(actions || []).map((a, i) => (
              <ModalBtn
                key={i}
                kind={a.kind || 'primary'}
                onClick={() => { a.onPress && a.onPress(); onClose && onClose(); }}
                style={{ width: '100%' }}
              >{a.text}</ModalBtn>
            ))}
          </div>
        ) : variant === 'alert' ? (
          <div style={{ display: 'flex' }}>
            <ModalBtn kind="primary" onClick={handleConfirm}>{confirmText}</ModalBtn>
          </div>
        ) : (
          // confirm or prompt -> two buttons
          <div style={{ display: 'flex' }}>
            <ModalBtn kind="cancel" onClick={handleCancel}>{cancelText}</ModalBtn>
            <ModalBtn kind="primary" onClick={handleConfirm}>{confirmText}</ModalBtn>
          </div>
        )}
      </ModalCardShell>
    </>
  );
}

Object.assign(window, { Modal });
