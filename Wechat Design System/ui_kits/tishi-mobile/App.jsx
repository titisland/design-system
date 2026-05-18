// Demo App for the 提示 UI kit.
// One small mobile screen with five buttons, each triggering one of the system's
// feedback surfaces: Toast, Modal (4 variants), Banner, Field hint, Soft reminder.

const ZH_TEXT = {
  toastSuccess: '操作成功',
  toastFail:    '操作失败，请重试',
  toastWarning: '请检查输入',
  toastHint:    '已为您保存草稿',
  longToast:    '请输入提示信息文本请输入提示信息文本请输入提示信息文本请输入提示信息文本请输入提示信息文本',

  confirmTitle: '请转至 ESM 系统操作备份',
  confirmDesc:  '当前操作将清除本机缓存，操作不可撤销',

  alertTitle:   '系统检测到异常',
  alertDesc:    '请稍后重试或联系管理员',

  multiTitle:   '请选择导出格式',
  multiActions: [
    { text: '导出为 PDF', kind: 'primary' },
    { text: '导出为 Excel', kind: 'primary' },
    { text: '取消', kind: 'cancel' },
  ],

  promptTitle:  '为草稿命名',
};

function DemoApp() {
  const [toast, setToast] = React.useState(null);
  const [modal, setModal] = React.useState(null);
  const [promptVal, setPromptVal] = React.useState('');
  const [bannerStatus, setBannerStatus] = React.useState('warn');
  const [field1, setField1] = React.useState('');
  const [field2, setField2] = React.useState('张医生');

  const fireToast = (status, text) => setToast({ status, text, ts: Date.now() });

  return (
    <div style={{
      position: 'relative',
      width: 375, height: 770,
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-han-sans)',
      overflow: 'hidden',
      color: '#333',
    }}>
      {/* Title row */}
      <div style={{
        padding: '14px 16px 12px',
        borderBottom: '1px solid #F0F0F0',
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: 18, fontWeight: 500, color: '#333' }}>提示组件示例</div>
        <div style={{ fontSize: 12, color: '#999' }}>Tíshì playground</div>
      </div>

      {/* Soft reminder anchored to the top of content area */}
      <div style={{ padding: '10px 10px 0' }}>
        <window.SoftReminder
          title="提示"
          items={[
            '费用总额超过限制（8000 元），请注意',
            '本页提示仅作演示，实际数据以系统为准',
          ]}
        />
      </div>

      {/* Demo fields */}
      <div style={{ padding: '14px 16px 8px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <window.Field
          label="患者姓名"
          value={field1}
          onChange={setField1}
          placeholder="请输入"
          hint="提示内容在这里展示，如果超长就折行"
          hintVariant="inline"
        />
        <window.Field
          label="主治医师"
          value={field2}
          onChange={setField2}
          placeholder="请输入"
          hint="医师必须为已注册执业人员"
          hintVariant="pop"
        />
      </div>

      {/* Trigger grid */}
      <div style={{
        padding: '8px 16px 16px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
      }}>
        <DemoBtn onClick={() => fireToast('success', ZH_TEXT.toastSuccess)}>Toast 成功</DemoBtn>
        <DemoBtn onClick={() => fireToast('fail', ZH_TEXT.toastFail)}>Toast 失败</DemoBtn>
        <DemoBtn onClick={() => fireToast('warning', ZH_TEXT.toastWarning)}>Toast 警示</DemoBtn>
        <DemoBtn onClick={() => fireToast('hint', ZH_TEXT.toastHint)}>Toast 提示</DemoBtn>
        <DemoBtn onClick={() => fireToast('success', ZH_TEXT.longToast)}>超长折行</DemoBtn>
        <DemoBtn onClick={() => setModal('confirm')}>Confirm 弹窗</DemoBtn>
        <DemoBtn onClick={() => setModal('alert')}>Alert 弹窗</DemoBtn>
        <DemoBtn onClick={() => setModal('multi')}>多按钮弹窗</DemoBtn>
        <DemoBtn onClick={() => setModal('prompt')}>Prompt 弹窗</DemoBtn>
        <DemoBtn onClick={() => setBannerStatus(
          { info: 'warn', warn: 'error', error: 'info' }[bannerStatus] || 'info'
        )}>切换底部条</DemoBtn>
      </div>

      {/* Bottom-fixed banner */}
      <div style={{ marginTop: 'auto' }}>
        <window.BottomBanner status={bannerStatus}>
          {{
            info:  '页面加载完成，可以开始操作',
            warn:  '请确认所填字段后再提交',
            error: '部分必填字段尚未填写，请补全',
          }[bannerStatus]}
        </window.BottomBanner>
      </div>

      {/* Modals */}
      <window.Modal
        open={modal === 'confirm'} onClose={() => setModal(null)}
        variant="confirm"
        title={ZH_TEXT.confirmTitle}
        desc={ZH_TEXT.confirmDesc}
        onConfirm={() => fireToast('success', '已发起备份')}
        onCancel={() => fireToast('hint', '已取消')}
      />
      <window.Modal
        open={modal === 'alert'} onClose={() => setModal(null)}
        variant="alert"
        title={ZH_TEXT.alertTitle}
        desc={ZH_TEXT.alertDesc}
        onConfirm={() => {}}
      />
      <window.Modal
        open={modal === 'multi'} onClose={() => setModal(null)}
        variant="multi"
        title={ZH_TEXT.multiTitle}
        actions={ZH_TEXT.multiActions.map(a => ({
          ...a,
          onPress: () => fireToast('success', `已选择 ${a.text}`),
        }))}
      />
      <window.Modal
        open={modal === 'prompt'} onClose={() => setModal(null)}
        variant="prompt"
        title={ZH_TEXT.promptTitle}
        promptValue={promptVal}
        onPromptChange={setPromptVal}
        promptPlaceholder="请输入名称"
        onConfirm={() => { fireToast('success', `已保存：${promptVal || '未命名'}`); setPromptVal(''); }}
        onCancel={() => setPromptVal('')}
      />

      {/* Toast layer */}
      <window.ToastHost toast={toast} onDone={() => setToast(null)} />
    </div>
  );
}

function DemoBtn({ onClick, children }) {
  const [press, setPress] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      onTouchStart={() => setPress(true)}
      onTouchEnd={() => setPress(false)}
      style={{
        height: 38,
        background: '#FFF',
        border: '1px solid #EEEEEE',
        borderRadius: 8,
        color: '#333',
        fontFamily: 'inherit',
        fontSize: 14, fontWeight: 500,
        cursor: 'pointer',
        opacity: press ? 0.6 : 1,
        transition: 'opacity 120ms linear',
      }}
    >{children}</button>
  );
}

Object.assign(window, { DemoApp });
