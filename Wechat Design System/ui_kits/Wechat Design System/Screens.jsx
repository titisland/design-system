// Screens.jsx — Core Event Agent screens

const EVENTS = [
  { title: '维我替尼产品推广科室会', date: '2023-04-19', type: '新产品推广', status: '草稿', statusColor: '#999' },
  { title: '儿科案例分析讨论', date: '2023-04-19', type: '新产品推广', status: '审批通过', statusColor: '#F7981D' },
  { title: '维我替尼诊疗方案分享', date: '2023-04-19', type: '新产品推广', status: '审批通过', statusColor: '#F7981D' },
  { title: '维我替尼-中日友好-4月科室', date: '2023-04-19', type: '新产品推广', status: '审批通过', statusColor: '#F7981D' },
  { title: '维我替尼-北医三院-4月科室', date: '2023-04-19', type: '新产品推广', status: '审批通过', statusColor: '#F7981D' },
];

function EventListScreen({ onOpen, showBubble }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <NavBar title="活动列表" />
      {/* search */}
      <div style={{ padding: '12px 16px', background: '#fff', display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 36, borderRadius: 100, border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px' }}>
          <I.Search size={14} color="#999" style={{ opacity: .7 }} />
          <span style={{ color: '#B5B5B5', fontSize: 13 }}>请输入</span>
        </div>
        <span style={{ color: '#F7981D', fontSize: 14 }}>搜索</span>
      </div>
      {/* filter bar */}
      <div style={{ height: 41, background: '#fff', boxShadow: '0 -2px 4px rgba(0,0,0,.05)',
        borderRadius: '20px 20px 0 0', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 16,
        fontSize: 13, color: '#666', borderBottom: '1px solid #E2E2E2' }}>
        <span>排序 ▾</span><span>会议名称 ▾</span><span>会议日期 ▾</span><span>状态 ▾</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', gap: 10, alignItems: 'center' }}>
          <I.Filter size={16} color="#666" />
          <span style={{ width: 1, height: 12, background: '#eee' }} />
          <I.View size={16} color="#666" />
        </span>
      </div>
      {/* list */}
      <div style={{ flex: 1, overflow: 'auto', background: '#fff' }}>
        {EVENTS.map((e, i) => (
          <div key={i} onClick={() => onOpen(e)} style={{ padding: '16px', borderBottom: '1px solid #eee', cursor: 'pointer', display: 'flex', gap: 10, position: 'relative' }}>
            <div style={{ width: 36, height: 36, borderRadius: 6, background: '#EFF3FC', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <I.Event size={22} color="#2069D6" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#000', marginBottom: 6 }}>{e.title}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: '18px' }}>{e.date}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: '18px' }}>{e.type}</div>
            </div>
            <StatusChip color={e.statusColor}>{e.status}</StatusChip>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '10px', background: '#eee', color: '#999', fontSize: 12 }}>共计16条</div>
        <div style={{ padding: '14px', textAlign: 'center', color: '#333', fontSize: 14 }}>＋ 新建</div>
      </div>
      {/* FABs */}
      <Fab icon="home" style={{ position: 'absolute', right: 20, bottom: 110 }} />
      <Fab icon="ai" style={{ position: 'absolute', right: 20, bottom: 54 }} />
      {showBubble && (
        <div style={{ position: 'absolute', right: 80, bottom: 60 }}>
          <AiBubble text="您有一个医学问询尚未提交" onIgnore={() => {}} />
        </div>
      )}
    </div>
  );
}

function DoctorScreen({ onBack, onOpenChat }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#F8F8F8' }}>
      <NavBar title="医生详情" onBack={onBack} />
      {/* teal band */}
      <div style={{ height: 22, background: '#00DF93' }} />
      {/* header card */}
      <div style={{ background: '#fff', padding: '16px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E5F4ED', backgroundImage: 'url(../../assets/doctor-avatar.jpg)', backgroundSize: 'cover', marginTop: -36, border: '2px solid #fff', flex: 'none' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 24, fontWeight: 500, color: '#000' }}>李大魁</div>
          <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>关注数 <b style={{ color: '#F7981D' }}>4</b></div>
        </div>
        <Pill color="#00DF93">⭐ 关注</Pill>
      </div>
      <div style={{ background: '#fff', padding: '4px 16px 12px', display: 'flex', gap: 8 }}>
        <Tag>微信已认证</Tag>
        <Tag>公众号已关注</Tag>
      </div>
      <div style={{ background: '#fff', padding: '0 16px 12px', fontSize: 14, color: '#333' }}>
        北京大学第一人民医院 ｜ 普外科 ｜ 主任医师 ｜ 北京市朝阳区
      </div>
      {/* tabs */}
      <div style={{ background: '#fff', display: 'flex', borderBottom: '1px solid #eee' }}>
        {['基本信息','我的战友','产品指标','时间线'].map((t, i) => (
          <div key={t} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontSize: 14, color: i === 0 ? '#00DF93' : '#999', fontWeight: i === 0 ? 500 : 400, borderBottom: i === 0 ? '2px solid #00DF93' : 'none', marginBottom: -1 }}>{t}</div>
        ))}
        <div style={{ padding: '12px 12px', color: '#999' }}>☰</div>
      </div>
      {/* content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ background: '#EFF7FE', padding: '10px 16px', color: '#2069D6', fontSize: 14 }}>基本信息</div>
        {[
          ['医生姓名', '李大魁'],
          ['性别', '男'],
          ['医生影响力', '国家级'],
          ['民族', '汉族'],
          ['默认执行医院', { t: '北京大学第一人民医院', link: true }],
          ['科室', '普外科'],
          ['职称', '主任医师'],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', padding: '12px 16px', background: '#fff', borderBottom: '1px solid #eee' }}>
            <div style={{ width: 100, color: '#666', fontSize: 14 }}>{k}</div>
            <div style={{ flex: 1, color: v.link ? '#2069D6' : '#333', fontSize: 14 }}>{v.link ? v.t : v}</div>
          </div>
        ))}
        <div style={{ background: '#EFF7FE', padding: '10px 16px', color: '#2069D6', fontSize: 14 }}>联系方式</div>
        <div style={{ display: 'flex', padding: '12px 16px', background: '#fff', borderBottom: '1px solid #eee' }}>
          <div style={{ width: 100, color: '#666', fontSize: 14 }}>电话</div>
          <div style={{ flex: 1, color: '#333', fontSize: 14 }}>101001010</div>
        </div>
        <div style={{ height: 100 }} />
      </div>
      {/* footer actions */}
      <div style={{ display: 'flex', background: '#fff', borderTop: '1px solid #eee', padding: '10px 0 20px' }}>
        <div style={{ flex: 1, textAlign: 'center', color: '#666', fontSize: 14 }}>✕<br/>取消</div>
        <div style={{ flex: 1, textAlign: 'center', color: '#333', fontSize: 14 }}>✓<br/>保存</div>
      </div>
      <Fab icon="home" style={{ position: 'absolute', right: 20, bottom: 160 }} />
      <Fab icon="ai" style={{ position: 'absolute', right: 20, bottom: 104 }} onClick={onOpenChat} />
    </div>
  );
}

function ChatScreen({ onBack }) {
  const [step, setStep] = React.useState(0);
  const thinking = [
    { text: '已完成用户的需求理解', done: true },
    { text: '数据查询中', done: step >= 1 },
    { text: '答案组织中', done: step >= 2 },
  ];
  React.useEffect(() => {
    const t = setTimeout(() => setStep(s => Math.min(s + 1, 3)), 900);
    return () => clearTimeout(t);
  }, [step]);
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#F8F8F8' }}>
      <NavBar title="会议小助手" onBack={onBack} />
      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        {/* greeting from bot */}
        <BotRow>
          <div style={{ color: '#333', fontSize: 14, lineHeight: '22px' }}>嗨！我是你的会议小助手，有什么能够帮您的么？比如</div>
          <div style={{ color: '#666', fontSize: 14, lineHeight: '22px', marginTop: 6 }}>"帮我批量添加参会人"<br/>"帮我批量填写参会人的行程信息"</div>
        </BotRow>
        {/* user bubble */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 14 }}>
          <div style={{ background: '#95EC69', padding: '8px 12px', borderRadius: 6, fontSize: 14, color: '#333', maxWidth: 260 }}>
            帮我总结下上次拜访
          </div>
        </div>
        {/* thinking stream */}
        <BotRow>
          {thinking.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: i ? 6 : 0, opacity: i > step ? 0.4 : 1, transition: 'opacity .3s' }}>
              <I.AiStar size={14} color={t.done ? '#00DF93' : '#333'} />
              <span style={{ fontSize: 14, color: t.done ? '#00DF93' : '#333' }}>{t.text}</span>
            </div>
          ))}
        </BotRow>
        {step >= 3 && (
          <BotRow>
            <div style={{ color: '#333', fontSize: 14, lineHeight: '22px' }}>好的，为您总结上次拜访的内容。</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#333', marginTop: 10, marginBottom: 4 }}>重点标题</div>
            {['讨论了维我替尼在三线治疗中的应用', '医生对不良反应管理表达了关注', '请求更多真实世界数据'].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, fontSize: 14, color: '#333', lineHeight: '20px', marginTop: 4 }}>
                <span style={{ width: 6, height: 6, background: '#2069D6', borderRadius: '50%', marginTop: 7, flex: 'none' }} />
                <span>{b}</span>
              </div>
            ))}
          </BotRow>
        )}
      </div>
      {/* composer */}
      <div style={{ background: '#F5F5F5', padding: '8px 12px 24px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 36, background: '#fff', borderRadius: 4, padding: '8px 12px', fontSize: 14, color: '#B5B5B5' }}>问我任何事…</div>
        <div style={{ width: 32, height: 32, borderRadius: 4, background: '#F7981D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>＋</div>
      </div>
    </div>
  );
}

function BotRow({ children }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
      <div style={{ width: 34, height: 34, borderRadius: 4, background: '#fff', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <I.AiStar size={20} color="#F7981D" />
      </div>
      <div style={{ background: '#fff', padding: '10px 12px', borderRadius: 6, maxWidth: 260, border: '1px solid #eee' }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { EventListScreen, DoctorScreen, ChatScreen });
