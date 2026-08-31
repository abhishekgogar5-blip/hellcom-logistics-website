"use client";

import { useMemo, useState } from "react";

const shipments = [
  { id: "HLC-000123", customer: "ABC Manufacturing", mode: "FTL", route: "Bhiwandi → Pune", status: "In Transit", eta: "26 Aug", margin: "15.8%" },
  { id: "HLC-000124", customer: "Global Auto Pvt. Ltd.", mode: "Air", route: "Mumbai → Delhi", status: "Delivered", eta: "25 Aug", margin: "21.4%" },
  { id: "HLC-000125", customer: "Pharma Care Ltd.", mode: "PTL", route: "Mumbai → Nagpur", status: "In Transit", eta: "26 Aug", margin: "13.2%" },
  { id: "HLC-000126", customer: "Electronix India Pvt. Ltd.", mode: "FCL", route: "Nhava Sheva → Dubai", status: "Booked", eta: "30 Aug", margin: "18.7%" },
  { id: "HLC-000127", customer: "Shakti Engineering Ltd.", mode: "LCL", route: "Mumbai → Chennai", status: "Delayed", eta: "28 Aug", margin: "7.1%" },
];

const modules = [
  ["Sales & CRM", "Leads, RFQs, quotations and customers", "01"],
  ["Rate Management", "Supplier rates, lanes, validity and surcharges", "02"],
  ["Freight Forwarding", "Air, FCL, LCL, bookings and jobs", "03"],
  ["Transportation", "FTL, PTL, vehicles, drivers and trips", "04"],
  ["Customs & Documents", "Clearance workflow and document control", "05"],
  ["Warehouse", "Receipts, inventory, dispatch and storage", "06"],
  ["Tracking & Control Tower", "Milestones, ETA, alerts and exceptions", "07"],
  ["Finance", "Billing, vendor bills, receivables and payables", "08"],
];

export default function ErpPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => shipments.filter((s) => Object.values(s).join(" ").toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <main className="erp-shell">
      <aside className="erp-sidebar">
        <div className="erp-brand"><span className="erp-mark">H</span><div><strong>HELLCOM</strong><small>LOGISTICS</small></div><b>ERP</b></div>
        <div className="erp-nav-label">WORKSPACE</div>
        <a className="erp-nav active" href="#dashboard">⌂ <span>Dashboard</span></a>
        <a className="erp-nav" href="#sales">▣ <span>Leads & RFQ</span><i>12</i></a>
        <a className="erp-nav" href="#sales">▤ <span>Quotations</span></a>
        <a className="erp-nav" href="#customers">♙ <span>Customers</span></a>
        <a className="erp-nav" href="#rates">⌁ <span>Rate Management</span></a>
        <div className="erp-nav-label">OPERATIONS</div>
        <a className="erp-nav" href="#shipments">▱ <span>Shipments</span></a>
        <a className="erp-nav" href="#freight">✈ <span>Freight Forwarding</span></a>
        <a className="erp-nav" href="#transport">▰ <span>Transportation</span></a>
        <a className="erp-nav" href="#customs">▥ <span>Customs & Documents</span></a>
        <a className="erp-nav" href="#warehouse">▦ <span>Warehouse</span></a>
        <a className="erp-nav" href="#tracking">◉ <span>Control Tower</span><i className="alert">4</i></a>
        <div className="erp-nav-label">FINANCE</div>
        <a className="erp-nav" href="#finance">₹ <span>Sales Invoices</span></a>
        <a className="erp-nav" href="#finance">₹ <span>Vendor Bills</span></a>
        <a className="erp-nav" href="#finance">◴ <span>Receivables</span></a>
        <a className="erp-nav" href="#finance">◷ <span>Payables</span></a>
        <div className="erp-nav-label">MANAGEMENT</div>
        <a className="erp-nav" href="#vendors">♧ <span>Vendors / Agents</span></a>
        <a className="erp-nav" href="#analytics">⌁ <span>Reports & Analytics</span></a>
        <a className="erp-nav" href="#settings">⚙ <span>Settings</span></a>
      </aside>

      <section className="erp-main" id="dashboard">
        <header className="erp-topbar">
          <div className="erp-search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search shipments, jobs, invoices, customers..." /></div>
          <div className="erp-top-actions"><span className="top-icon">◌</span><span className="top-icon">♧<b>12</b></span><span className="top-icon">⛶</span><div className="erp-user"><span>AG</span><div><strong>Administrator</strong><small>HELLCOM Logistics</small></div></div></div>
        </header>

        <div className="erp-content">
          <div className="erp-heading"><div><p className="erp-kicker">HELLCOM LOGISTICS OPERATING SYSTEM</p><h1>Good morning, Abhishek.</h1><p>One command center for sales, freight, transport, finance and customer visibility.</p></div><button className="erp-date">26 Aug 2026 ▾</button></div>

          <div className="erp-kpis">
            <Kpi label="Active Shipments" value="86" trend="+8.2%" tone="blue" icon="▰" />
            <Kpi label="In Transit" value="42" trend="+5.1%" tone="orange" icon="→" />
            <Kpi label="Delayed" value="7" trend="-13.0%" tone="red" icon="!" />
            <Kpi label="Pending Quotes" value="17" trend="+5.0%" tone="purple" icon="▤" />
            <Kpi label="Revenue · Month" value="₹18.4L" trend="+18.0%" tone="green" icon="₹" />
          </div>

          <div className="erp-grid-2">
            <Panel title="Shipment status overview" action="View report →">
              <div className="status-overview"><div className="donut"><span>86<small>shipments</small></span></div><div className="legend"><Legend color="blue" label="In Transit" value="42 · 48.8%" /><Legend color="green" label="Delivered" value="31 · 36.0%" /><Legend color="red" label="Delayed" value="7 · 8.1%" /><Legend color="purple" label="Booked" value="6 · 7.0%" /></div></div>
            </Panel>
            <Panel title="Shipments by service" action="Full analytics →">
              <div className="bars">{[["FTL",64],["PTL",28],["Air",14],["FCL",12],["LCL",10]].map(([name,n]) => <div className="bar-item" key={String(name)}><div className="bar-track"><div className="bar-fill" style={{height:`${Number(n)*1.05}px`}}><span>{n}</span></div></div><small>{name}</small></div>)}</div>
            </Panel>
            <Panel title="AI control tower" action="Open control tower →" wide>
              <div className="ai-grid"><div className="ai-card critical"><span>HIGH PRIORITY</span><strong>7 shipments need attention</strong><p>5 ETA slippages · 1 documentation hold · 1 vendor SLA breach.</p><button>Review exceptions →</button></div><div className="ai-card"><span>AI INSIGHT</span><strong>Lane opportunity detected</strong><p>Mumbai → Pune FTL spend is 6.4% above your recent benchmark.</p><button>Analyse lane →</button></div><div className="ai-card"><span>AI INSIGHT</span><strong>Margin opportunity</strong><p>3 recurring customers can support a 2–4% rate improvement.</p><button>View opportunities →</button></div></div>
            </Panel>
          </div>

          <Panel title="Recent shipments" action="View all shipments →" id="shipments">
            <div className="table-wrap"><table><thead><tr><th>Shipment / LR</th><th>Customer</th><th>Mode</th><th>Route</th><th>Status</th><th>ETA</th><th>Margin</th><th></th></tr></thead><tbody>{filtered.map((s)=><tr key={s.id}><td><strong className="link">{s.id}</strong></td><td>{s.customer}</td><td>{s.mode}</td><td>{s.route}</td><td><span className={`status ${s.status.toLowerCase().replace(" ","-")}`}>{s.status}</span></td><td>{s.eta}</td><td><strong>{s.margin}</strong></td><td>•••</td></tr>)}</tbody></table>{filtered.length===0&&<div className="empty">No matching records found.</div>}</div>
          </Panel>

          <div className="erp-grid-3">
            <Panel title="Top routes" action="View all →"><div className="rank-list"><Rank n="01" label="Mumbai → Pune" value="32" /><Rank n="02" label="Bhiwandi → Delhi" value="18" /><Rank n="03" label="Mumbai → Bangalore" value="15" /><Rank n="04" label="Delhi → Mumbai" value="14" /></div></Panel>
            <Panel title="Pending tasks" action="View tasks →"><div className="task-list"><Task text="Follow up: ABC Manufacturing" tag="High" /><Task text="POD pending · HLC-000118" tag="Medium" /><Task text="Customs documents · JOB-045" tag="Medium" /><Task text="Invoice approval · HLC-000121" tag="Low" /></div></Panel>
            <Panel title="Receivables" action="View details →"><div className="finance-total"><strong>₹6.20L</strong><span>Outstanding</span></div><div className="mini-progress"><i style={{width:"45%"}}></i></div><div className="finance-lines"><span>0–30 days <b>₹2.79L</b></span><span>31–60 days <b>₹1.80L</b></span><span>61–90 days <b>₹1.00L</b></span><span>90+ days <b>₹0.61L</b></span></div></Panel>
          </div>

          <section className="module-section" id="modules"><div className="module-head"><div><p className="erp-kicker">SYSTEM FOUNDATION</p><h2>Built around the way HELLCOM works.</h2></div><p>Each module will share the same customer, job, shipment, document and financial data—so information never has to be entered twice.</p></div><div className="module-grid">{modules.map(([title,desc,n])=><a className="module-card" href={`#${title.toLowerCase().replaceAll(" ","-")}`} key={title}><span>{n}</span><strong>{title}</strong><p>{desc}</p><b>Open module →</b></a>)}</div></section>
        </div>
        <footer className="erp-footer">© 2026 HELLCOM Logistics ERP · Phase 1 foundation · Internal use only</footer>
      </section>

      <style jsx>{`
        .erp-shell{min-height:100vh;background:#f5f7fb;color:#162033;display:flex;font-family:Arial,Helvetica,sans-serif}.erp-sidebar{width:252px;flex:0 0 252px;background:linear-gradient(180deg,#071a38,#0b2750);color:#cbd7e8;min-height:100vh;padding:18px 14px;position:sticky;top:0;height:100vh;overflow:auto}.erp-brand{height:52px;display:flex;align-items:center;gap:10px;padding:0 8px;margin-bottom:18px;color:#fff}.erp-mark{width:34px;height:34px;border-radius:9px;background:#ff6a00;display:grid;place-items:center;font-weight:900;font-size:22px;transform:skew(-8deg)}.erp-brand strong{display:block;font-size:14px;letter-spacing:.08em}.erp-brand small{display:block;color:#ff8a36;font-size:8px;font-weight:900;letter-spacing:.25em}.erp-brand>b{margin-left:auto;border:1px solid rgba(255,255,255,.3);border-radius:6px;padding:2px 5px;font-size:8px}.erp-nav-label{font-size:9px;letter-spacing:.15em;font-weight:900;color:#7187a7;padding:16px 9px 7px}.erp-nav{display:flex;align-items:center;gap:11px;padding:10px 10px;border-radius:9px;color:#b8c7db;font-size:12px;font-weight:700;margin:2px 0}.erp-nav:hover,.erp-nav.active{background:rgba(255,255,255,.09);color:#fff}.erp-nav.active{box-shadow:inset 3px 0 #ff6a00}.erp-nav i{font-style:normal;margin-left:auto;background:#203f6c;border-radius:99px;padding:2px 6px;font-size:9px}.erp-nav i.alert{background:#ff6a00;color:#fff}.erp-main{min-width:0;flex:1}.erp-topbar{height:72px;background:#fff;border-bottom:1px solid #e6ebf2;display:flex;align-items:center;justify-content:space-between;padding:0 30px;gap:24px;position:sticky;top:0;z-index:20}.erp-search{height:40px;border:1px solid #dfe5ed;border-radius:10px;display:flex;align-items:center;gap:10px;padding:0 13px;max-width:570px;width:100%;background:#fafbfc}.erp-search span{font-size:21px;color:#8491a2}.erp-search input{border:0;outline:0;background:transparent;min-width:0;width:100%;font:inherit;font-size:12px}.erp-top-actions{display:flex;align-items:center;gap:20px}.top-icon{position:relative;color:#516176;font-size:18px}.top-icon b{position:absolute;top:-7px;right:-8px;background:#e53e3e;color:#fff;font-size:8px;border-radius:99px;padding:2px 5px}.erp-user{display:flex;align-items:center;gap:9px;border-left:1px solid #e8edf3;padding-left:18px}.erp-user>span{width:34px;height:34px;border-radius:50%;background:#e8eef6;color:#1b365d;display:grid;place-items:center;font-size:10px;font-weight:900}.erp-user strong,.erp-user small{display:block}.erp-user strong{font-size:11px}.erp-user small{font-size:9px;color:#8a96a5}.erp-content{padding:30px;max-width:1540px;margin:auto}.erp-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:22px}.erp-kicker{color:#ff6a00;font-size:9px;font-weight:900;letter-spacing:.15em;margin:0 0 5px}.erp-heading h1{margin:0;color:#0b1d40;font-size:28px;letter-spacing:-.03em}.erp-heading>div>p:last-child{margin:5px 0 0;color:#728095;font-size:12px}.erp-date{background:#fff;border:1px solid #dfe5ed;border-radius:9px;padding:10px 13px;font:inherit;font-size:11px;color:#4c5b70}.erp-kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:18px}.kpi{background:#fff;border:1px solid #e5eaf0;border-radius:13px;padding:16px;min-width:0}.kpi-top{display:flex;justify-content:space-between;align-items:flex-start}.kpi-icon{width:32px;height:32px;border-radius:9px;display:grid;place-items:center;font-size:14px;font-weight:900}.kpi.blue .kpi-icon{background:#e7f0ff;color:#2f73e8}.kpi.orange .kpi-icon{background:#fff0df;color:#f07812}.kpi.red .kpi-icon{background:#ffe8e8;color:#df4444}.kpi.purple .kpi-icon{background:#f0e9ff;color:#7b55c8}.kpi.green .kpi-icon{background:#e5f7ed;color:#23935c}.kpi-label{color:#718095;font-size:10px;font-weight:700}.kpi-value{font-size:25px;font-weight:900;color:#0b1d40;margin-top:8px}.kpi-trend{font-size:9px;color:#2d9a63;margin-top:4px}.erp-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}.panel{background:#fff;border:1px solid #e5eaf0;border-radius:13px;padding:17px;margin-bottom:14px;min-width:0}.panel.wide{grid-column:1/-1}.panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}.panel-head h3{font-size:13px;color:#0b1d40;margin:0}.panel-head a{font-size:9px;color:#ff6a00;font-weight:800}.status-overview{display:flex;align-items:center;justify-content:center;gap:48px;min-height:155px}.donut{width:132px;height:132px;border-radius:50%;background:conic-gradient(#2f73e8 0 48.8%,#2d9a63 48.8% 84.8%,#e04a4a 84.8% 92.9%,#8157cb 92.9%);display:grid;place-items:center;position:relative}.donut:after{content:"";position:absolute;width:88px;height:88px;background:#fff;border-radius:50%}.donut span{position:relative;z-index:1;font-size:22px;font-weight:900;color:#0b1d40;text-align:center}.donut small{display:block;font-size:8px;color:#7b8798;font-weight:600}.legend{display:grid;gap:12px}.legend-row{display:grid;grid-template-columns:8px 1fr auto;gap:7px;align-items:center;font-size:10px}.legend-dot{width:7px;height:7px;border-radius:50%}.legend-dot.blue{background:#2f73e8}.legend-dot.green{background:#2d9a63}.legend-dot.red{background:#e04a4a}.legend-dot.purple{background:#8157cb}.legend-row span{color:#5d6b7f}.legend-row b{font-size:9px;color:#0b1d40}.bars{height:170px;display:flex;align-items:flex-end;justify-content:space-around;padding:0 12px}.bar-item{height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:7px}.bar-track{height:130px;display:flex;align-items:flex-end}.bar-fill{width:36px;border-radius:7px 7px 2px 2px;background:linear-gradient(180deg,#2f73e8,#5c95ed);min-height:12px;position:relative}.bar-fill span{position:absolute;top:-17px;left:50%;transform:translateX(-50%);font-size:9px;font-weight:900;color:#35506f}.bar-item small{font-size:9px;color:#728095}.ai-grid{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:10px}.ai-card{border:1px solid #e7ebf1;background:#fbfcfe;border-radius:10px;padding:14px}.ai-card.critical{background:#fff8f3;border-color:#ffd9bd}.ai-card>span{font-size:8px;color:#ff6a00;font-weight:900;letter-spacing:.1em}.ai-card strong{display:block;font-size:12px;color:#162b4d;margin:7px 0 4px}.ai-card p{margin:0;color:#718095;font-size:9px;line-height:1.55}.ai-card button{margin-top:11px;border:0;background:none;color:#ff6a00;font-size:9px;font-weight:900;padding:0;cursor:pointer}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;min-width:850px}th{text-align:left;color:#8591a2;font-size:8px;letter-spacing:.07em;text-transform:uppercase;padding:8px;border-bottom:1px solid #edf0f4}td{padding:12px 8px;border-bottom:1px solid #f0f2f5;color:#59687b;font-size:10px}td strong{color:#1c2f4f}.link{color:#2f73e8!important}.status{display:inline-block;border-radius:99px;padding:4px 8px;font-size:8px;font-weight:800}.status.in-transit{background:#eaf2ff;color:#2d70db}.status.delivered{background:#e8f7ef;color:#218b57}.status.booked{background:#f0e9ff;color:#7654bc}.status.delayed{background:#ffe9e9;color:#d44141}.empty{text-align:center;padding:35px;color:#8491a2;font-size:11px}.erp-grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}.rank-list,.task-list{display:grid;gap:10px}.rank{display:grid;grid-template-columns:26px 1fr auto;align-items:center;gap:8px;border-bottom:1px solid #f0f2f5;padding-bottom:9px}.rank:last-child{border:0;padding-bottom:0}.rank small{color:#94a0af;font-weight:800}.rank span{font-size:10px;color:#536276}.rank b{font-size:10px;color:#0b1d40}.task{display:grid;grid-template-columns:9px 1fr auto;align-items:center;gap:8px}.task-dot{width:7px;height:7px;border-radius:50%;background:#ff6a00}.task-text{font-size:9px;color:#536276}.task-tag{font-size:7px;font-weight:900;border-radius:99px;padding:4px 6px;background:#fff0e3;color:#d8660d}.task-tag.medium{background:#fff6dc;color:#a16d08}.task-tag.low{background:#eaf7ef;color:#218b57}.finance-total strong{font-size:25px;color:#0b1d40;display:block}.finance-total span{font-size:9px;color:#8a96a5}.mini-progress{height:7px;background:#edf1f6;border-radius:99px;margin:15px 0 12px;overflow:hidden}.mini-progress i{display:block;height:100%;background:#2f73e8;border-radius:99px}.finance-lines{display:grid;gap:7px}.finance-lines span{font-size:9px;color:#718095;display:flex;justify-content:space-between}.finance-lines b{color:#273a57}.module-section{padding:34px 0 15px}.module-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:18px}.module-head h2{margin:0;color:#0b1d40;font-size:23px;letter-spacing:-.03em}.module-head>p{max-width:550px;color:#718095;font-size:10px;line-height:1.6;margin:0}.module-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.module-card{background:#fff;border:1px solid #e5eaf0;border-radius:12px;padding:16px;transition:.2s}.module-card:hover{transform:translateY(-2px);border-color:#cfd9e6;box-shadow:0 10px 25px rgba(11,29,64,.06)}.module-card span{font-size:8px;color:#ff6a00;font-weight:900}.module-card strong{display:block;color:#0b1d40;font-size:12px;margin:12px 0 5px}.module-card p{margin:0 0 13px;color:#788598;font-size:9px;line-height:1.5;min-height:28px}.module-card b{font-size:8px;color:#ff6a00}.erp-footer{padding:22px 30px;color:#94a0af;font-size:9px;border-top:1px solid #e6ebf2;margin-top:15px}
        @media(max-width:1150px){.erp-kpis{grid-template-columns:repeat(3,1fr)}.module-grid{grid-template-columns:repeat(2,1fr)}.ai-grid{grid-template-columns:1fr 1fr}.ai-card:first-child{grid-column:1/-1}}
        @media(max-width:850px){.erp-sidebar{display:none}.erp-topbar{padding:0 16px}.erp-content{padding:20px}.erp-grid-2,.erp-grid-3{grid-template-columns:1fr}.panel.wide{grid-column:auto}.module-head{display:block}.module-head>p{margin-top:10px}.erp-top-actions{gap:10px}.erp-user div{display:none}}
        @media(max-width:600px){.erp-kpis{grid-template-columns:1fr 1fr}.erp-heading{display:block}.erp-date{margin-top:12px}.status-overview{gap:20px}.donut{width:110px;height:110px}.donut:after{width:72px;height:72px}.ai-grid,.module-grid{grid-template-columns:1fr}.ai-card:first-child{grid-column:auto}.erp-search{max-width:none}.top-icon:first-child,.top-icon:nth-child(3){display:none}}
      `}</style>
    </main>
  );
}

function Kpi({ label, value, trend, tone, icon }: { label: string; value: string; trend: string; tone: string; icon: string }) {
  return <div className={`kpi ${tone}`}><div className="kpi-top"><span className="kpi-label">{label}</span><span className="kpi-icon">{icon}</span></div><div className="kpi-value">{value}</div><div className="kpi-trend">{trend} vs last 30 days</div></div>;
}

function Panel({ title, action, children, wide = false, id }: { title: string; action: string; children: React.ReactNode; wide?: boolean; id?: string }) {
  return <section className={`panel ${wide ? "wide" : ""}`} id={id}><div className="panel-head"><h3>{title}</h3><a href="#analytics">{action}</a></div>{children}</section>;
}

function Legend({ color, label, value }: { color: string; label: string; value: string }) { return <div className="legend-row"><i className={`legend-dot ${color}`} /><span>{label}</span><b>{value}</b></div>; }
function Rank({ n, label, value }: { n: string; label: string; value: string }) { return <div className="rank"><small>{n}</small><span>{label}</span><b>{value}</b></div>; }
function Task({ text, tag }: { text: string; tag: string }) { return <div className="task"><i className="task-dot" /><span className="task-text">{text}</span><b className={`task-tag ${tag.toLowerCase()}`}>{tag}</b></div>; }
