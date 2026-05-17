// MoreScreens.jsx — Approval Insights, Attendee Recommendation, Policy Helper
// All at 375×812 (phone canvas). Approval-Insights is rendered at 375 rather
// than the Figma 400 to match the phone frame.

// ═════════════════════════════════════════════════════════════════════════
// Approval Insights — 审批洞察
// ═════════════════════════════════════════════════════════════════════════
function ApprovalInsightsScreen({ onBack }) {
  const [tab, setTab] = React.useState('risk'); // risk | metrics
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(180deg, rgba(219,234,254,0.5) 0%, rgba(224,231,255,0.5) 50%, rgba(243,232,255,0.5) 100%)',
      fontFamily: 'var(--font-cn)',
    }}>
      <StatusBar dark={false} />
      {/* header row */}
      <div style={{ padding: '12px 12px 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span onClick={onBack} style={{ cursor: 'pointer', display: 'inline-flex' }}>
          <I.ChevronR size={20} color="#333" style={{ transform: 'rotate(180deg)' }} />
        </span>
        <I.AiStar size={22} color="#F7981D" />
        <span style={{ fontSize: 20, fontWeight: 700, color: '#000', flex: 1 }}>审批洞察</span>
        {/* gold orb */}
        <span style={{
          width: 16, height: 16, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #FFF6BF 0%, #FFCC00 80%)',
          boxShadow: '0 0 4px rgba(0,0,0,.25)',
        }} />
      </div>
      {/* segmented */}
      <div style={{ padding: '16px 12px 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 224, height: 36, borderRadius: 999, background: '#fff',
          boxShadow: 'inset 0 1px 4px rgba(0,0,0,.15)', padding: 4, display: 'flex' }}>
          {[['risk','风险详情分析'], ['metrics','会议数据指标']].map(([k, v]) => {
            const active = tab === k;
            return (
              <div key={k} onClick={() => setTab(k)} style={{
                flex: 1, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, cursor: 'pointer',
                background: active ? 'linear-gradient(180deg,#A1A1FF,#2563EB)' : 'transparent',
                color: active ? '#fff' : '#2563EB',
              }}>{v}</div>
            );
          })}
        </div>
      </div>
      {/* content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tab === 'risk' ? <RiskCards /> : <MetricsCards />}
      </div>
    </div>
  );
}
function InsightCard({ title, rows }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '18px 20px' }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#333', marginBottom: 12 }}>{title}</div>
      <div style={{ background: 'rgba(0,122,255,.05)', borderRadius: 8, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, fontSize: 14, lineHeight: '20px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2069D6', marginTop: 7, flex: 'none' }} />
            <span style={{ color: '#333', flex: 1 }}>{r[0]}</span>
            {r[1] && <span style={{ color: '#333', fontWeight: 500 }}>{r[1]}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
function RiskCards() {
  return (
    <>
      <InsightCard title="触发且越过的业务规则" rows={[
        ['单家医疗机构会议次数上限', '材料可通过'],
        ['单次讲课费预算', '材料可通过'],
        ['KOL等级覆盖率', '材料可通过'],
      ]} />
      <InsightCard title="申请人历史会议执行表现" rows={[
        ['按时 / 延期 / 取消率', '10% / 10% / 80%'],
        ['讲者均费', '¥250 (波动较小)'],
        ['同期已完成会议', '2场'],
        ['同期进行中会议', '1场'],
      ]} />
    </>
  );
}
function MetricsCards() {
  return (
    <>
      <InsightCard title="本场会议指标" rows={[
        ['讲者 / 参会人比例', '1:12 (约 8.3%)'],
        ['KOL 分级', 'A级:3人, B级:7人, C级:2人'],
      ]} />
      <InsightCard title="同类型会议审批表现" rows={[
        ['按时 / 延期 / 取消率', '15% / 5% / 80%'],
        ['平均总费用', '¥4,900'],
        ['平均中位费用', '¥4,800'],
        ['通过率', '85%'],
        ['讲者 / 参会人比例', '1:10 (10%)'],
      ]} />
    </>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// Attendee Recommendation — 添加参会客户
// ═════════════════════════════════════════════════════════════════════════
const DOCTORS = [
  { name: '李大魁', dept: '普外科', hosp: '北京大学第一人民医院', tier: 'A', selected: true },
  { name: '李保华', dept: '普外科', hosp: '首都医科大学附属北京朝阳医院', tier: 'B' },
  { name: '孙志', dept: '心内科', hosp: '中日友好医院' },
  { name: '刘林林', dept: '普外科', hosp: '中日友好医院' },
  { name: '李志强', dept: '心内科', hosp: '北京大学第一人民医院', tier: 'A' },
  { name: '戴飞', dept: '心内科', hosp: '北京大学第一人民医院', tier: 'A' },
];
function AttendeeScreen({ onBack }) {
  const [picked, setPicked] = React.useState(() => new Set(['李大魁']));
  const toggle = n => {
    const s = new Set(picked);
    s.has(n) ? s.delete(n) : s.add(n);
    setPicked(s);
  };
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: '#EFECEB' }}>
      {/* white header */}
      <div style={{ background: '#fff', paddingBottom: 0 }}>
        <StatusBar dark={false} />
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
          <span onClick={onBack} style={{ width: 32, cursor: 'pointer', display: 'inline-flex' }}>
            <I.ChevronR size={18} color="#000" style={{ transform: 'rotate(180deg)' }} />
          </span>
          <span style={{ fontSize: 17, fontWeight: 500, color: '#000' }}>
            添加参会客户{picked.size ? `（已选${picked.size}人）` : ''}
          </span>
          <span style={{ width: 32, textAlign: 'right', fontSize: 20, color: '#000' }}>⋯</span>
        </div>
      </div>
      {/* search */}
      <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 36, borderRadius: 100, border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px' }}>
          <I.Search size={14} color="#999" />
          <span style={{ color: '#B5B5B5', fontSize: 13 }}>请输入医生名称</span>
        </div>
        <span style={{ color: '#F7981D', fontSize: 14 }}>搜索</span>
      </div>
      {/* filter bar */}
      <div style={{ background: '#fff', padding: '4px 16px', display: 'flex', alignItems: 'center', gap: 10, height: 40 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#F5F5F5', borderRadius: 13, padding: '0 10px', height: 26, fontSize: 13, fontWeight: 700 }}>
          <I.AiStar size={14} color="#F7981D" /> 智能推荐
        </span>
        {['医院','科室','医生姓名','下属数据','筛选'].map((t, i) => (
          <span key={t} style={{ fontSize: 13, color: '#666', display: 'inline-flex', alignItems: 'center', gap: 2 }}>
            {t}{i < 2 ? ' ▾' : ''}
          </span>
        ))}
      </div>
      {/* list */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {DOCTORS.map((d, i) => {
          const sel = picked.has(d.name);
          return (
            <div key={d.name} onClick={() => toggle(d.name)} style={{
              background: '#fff', padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center',
              borderBottom: '1px solid #F2F2F2', cursor: 'pointer',
            }}>
              <span style={{
                width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${sel ? '#F7981D' : '#CCC'}`,
                background: sel ? '#F7981D' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
              }}>
                {sel && <I.Check size={12} color="#fff" strokeWidth={3} />}
              </span>
              <div style={{
                width: 40, height: 40, borderRadius: '50%', background: '#DDE8F4', flex: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2069D6', fontWeight: 500,
              }}>{d.name[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, color: '#000', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontWeight: 500 }}>{d.name}</span>
                  <span style={{ fontSize: 12, color: '#999' }}>{d.dept}</span>
                  {d.tier && (
                    <span style={{ fontSize: 11, color: '#F7981D', border: '1px solid #F7981D', padding: '0 4px', borderRadius: 2 }}>
                      {d.tier}级目标客户
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {d.hosp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* bottom action bar */}
      <div style={{ background: '#F5F5F5', borderTop: '1px solid #E2E2E2', padding: '6px 12px 26px', display: 'flex', gap: 6 }}>
        <ActionBtn icon={<I.Check size={16} color="#fff" />} label="开始开会" primary />
        <ActionBtn icon={<I.Close size={14} color="#333" />} label="取消" />
        <ActionBtn icon={<I.Contract size={16} color="#333" />} label="生成讲者合同" />
        <ActionBtn icon={<I.Check size={16} color="#333" />} label="保存" />
      </div>
    </div>
  );
}
function ActionBtn({ icon, label, primary }) {
  return (
    <div style={{
      flex: 1, padding: '8px 0 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
      borderRadius: 6,
      background: primary ? '#F7981D' : 'transparent',
    }}>
      <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <div style={{ fontSize: 11, color: primary ? '#fff' : '#333' }}>{label}</div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// Policy Helper — CRM Bot bottom sheet
// ═════════════════════════════════════════════════════════════════════════
function PolicyHelperScreen({ onBack }) {
  const policies = [
    '会议需要在工作时间范围内',
    '参会人数不能超过20人',
    '会议时长要在2-7小时之间',
    '会议费用总和不得超出费用总金额',
    '会议至少要有一个日程',
    '会议开始时间不得早于会议创建时间',
    '参会人参会日期不得超出参会范围内',
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F8F8F8', overflow: 'hidden' }}>
      {/* dim underlay — faint page chrome behind */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,.5)',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#fff' }}>
        <StatusBar dark={false} />
        <div style={{ height: 44, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 17, fontWeight: 500 }}>我的会议</div>
      </div>
      {/* sheet */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 128, bottom: 0,
        borderRadius: '20px 20px 0 0', overflow: 'hidden',
        background: 'linear-gradient(180deg, #DDF1FF 0%, #F8FAFE 100%)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* sheet header */}
        <div style={{ background: '#FAFAFA', borderRadius: '20px 20px 0 0', height: 54, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span onClick={onBack} style={{ cursor: 'pointer' }}><I.Close size={16} color="#333" /></span>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 14, color: '#333' }}>CRM Bot</span>
          <span onClick={onBack} style={{ cursor: 'pointer' }}><I.Close size={16} color="#333" /></span>
        </div>
        {/* conversation */}
        <div style={{ flex: 1, padding: '12px 20px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* user bubble */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              maxWidth: 270, padding: '12px 16px', borderRadius: 8, color: '#333', fontSize: 14,
              background: 'linear-gradient(90deg, #45D4FB 0%, #57E9F2 52%, #9EFBD3 100%)',
            }}>举办一个科室会都有哪些合规要求呢？</div>
          </div>
          <div style={{ fontSize: 14, color: '#333' }}>好的，已为您查找到你需要的信息。</div>
          {/* policy card */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ flex: 1, fontSize: 16, fontWeight: 500 }}>科室会合规要求（8）</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#F5F5F5', borderRadius: 12, padding: '4px 12px', fontSize: 12, fontWeight: 500, color: '#333' }}>
                全部 <I.ChevronD size={10} color="#333" />
              </span>
            </div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {policies.map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderTop: i ? '1px solid #F2F2F2' : 'none', fontSize: 14, color: '#333', lineHeight: '20px' }}>
                  <span style={{ color: '#999', width: 18, flex: 'none' }}>{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* composer */}
        <div style={{ padding: '16px 20px 24px' }}>
          <div style={{
            background: '#fff', borderRadius: 12, boxShadow: '0 0 20px rgba(0,0,0,.15)',
            padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ flex: 1, fontSize: 16, color: 'rgba(153,153,153,.6)' }}>嗨！今天能帮你些什么？</span>
            <I.Send size={20} color="#CCC" />
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ApprovalInsightsScreen, AttendeeScreen, PolicyHelperScreen });
