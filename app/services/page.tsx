const services = [
  {
    number: "01",
    title: "Air Freight",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
    intro: "Fast, secure air cargo solutions for urgent, sensitive and high-value shipments.",
    capabilities: ["Perishable Cargo","General Cargo","Time-Sensitive Cargo","Aerospace Logistics","Temperature-Controlled Shipments","Full & Part Charters","Cargo Consolidation","Dangerous Goods (DGR) Handling","Project Cargo"],
  },
  {
    number: "02",
    title: "Ocean Freight",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85",
    intro: "Reliable global ocean freight for full-container, consolidation and project movements.",
    capabilities: ["Container Freight Station (CFS) Shipments","Worldwide FCL & LCL Consolidation","ODC & Project Shipments","Temperature-Controlled Shipments","Breakbulk Cargo","Hazardous Goods","Multimodal Transportation Solutions"],
  },
  {
    number: "03",
    title: "Rail Freight",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
    intro: "Efficient rail solutions for bulk, containerised and specialised cargo across connected corridors.",
    capabilities: ["Bulk Cargo","Temperature-Controlled Cargo","ISO Container Transportation","Closed & Open Autoracks","Hazardous Materials","Multimodal Rail Solutions"],
  },
  {
    number: "04",
    title: "Inland Transportation",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85",
    intro: "Flexible first-mile, line-haul and last-mile transportation built around your cargo and delivery requirements.",
    vehicleOptions: "14 Ft | 17 Ft | 19 Ft | 20 Ft | 22 Ft | 24 Ft | 32 Ft",
    capabilities: ["First-Mile to Last-Mile Transportation","FTL & PTL Transportation","Multi-Location Pickup & Delivery","Curtain-Sided Transportation","Tanker Transportation","Flatbed Transportation","Temperature-Controlled Transportation","Automotive Transportation"],
  },
  {
    number: "05",
    title: "Courier Services",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=85",
    intro: "Express domestic and international courier services for documents, parcels and e-commerce shipments.",
    capabilities: ["International & Domestic Courier","Overnight Courier Services","E-Commerce Logistics","Express Delivery"],
  },
  {
    number: "06",
    title: "Customs Clearance",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    intro: "Structured customs support to keep import and export shipments compliant, documented and moving.",
    capabilities: ["Licensed Customs House Agent (CHA)","Customs Documentation & Filing","Import & Export Customs Clearance","EXIM Trade Compliance","Customs Documentation Management"],
  },
  {
    number: "07",
    title: "3PL Warehousing & Distribution",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=85",
    intro: "Integrated warehousing and distribution support covering inventory, fulfilment and outbound execution.",
    capabilities: ["Storage & Inventory Management","Order Picking & Packing","Quality Checks","Goods Dispatch","Return Management","Cross-Docking","Distribution Management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div>
            <div className="kicker">Our Services</div>
            <h1>One logistics partner.<br /><span>Multiple ways to move.</span></h1>
            <p>From international freight to inland transportation, customs and warehousing, HELLCOM connects the critical stages of your supply chain through one accountable logistics partner.</p>
          </div>
          <div className="services-hero-note">
            <span>END-TO-END LOGISTICS</span>
            <strong>Built for visibility, control and reliable execution.</strong>
          </div>
        </div>
      </section>

      <section className="service-details-section">
        <div className="container">
          <div className="section-head services-section-head">
            <div>
              <div className="kicker">Service Details</div>
              <h2>Capabilities built around your shipment.</h2>
            </div>
            <p className="section-intro">Explore the scope of each service and tell us what your shipment requires.</p>
          </div>

          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" id={`service-${service.number}`} key={service.number}>
                <div className="service-detail-media">
                  <img src={service.image} alt={`${service.title} service`} loading="lazy" />
                  <div className="service-detail-number">{service.number}</div>
                </div>
                <div className="service-detail-content">
                  <div className="service-detail-kicker">HELLCOM / {service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  {service.vehicleOptions && (
                    <div className="vehicle-options">
                      <strong>Vehicle Options</strong>
                      <span>{service.vehicleOptions}</span>
                    </div>
                  )}
                  <div className="capability-list">
                    {service.capabilities.map((capability) => (
                      <div className="capability-item" key={capability}>
                        <span>+</span>{capability}
                      </div>
                    ))}
                  </div>
                  <a className="btn btn-primary service-quote-btn" href="/quote">Discuss this service →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .services-hero{background:linear-gradient(135deg,#07152f 0%,#0b1d40 62%,#132b59 100%);color:#fff;padding:78px 0 82px;overflow:hidden;position:relative}
        .services-hero:after{content:"";position:absolute;width:420px;height:420px;right:4%;top:-180px;border-radius:50%;background:rgba(255,106,0,.15);filter:blur(70px)}
        .services-hero-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(260px,.65fr);gap:70px;align-items:end;position:relative;z-index:1}
        .services-hero .kicker{color:#ffb27d}
        .services-hero h1{margin:0;max-width:800px;font-size:clamp(46px,6.5vw,78px);line-height:.94;letter-spacing:-.055em;font-weight:900}
        .services-hero h1 span{color:var(--orange)}
        .services-hero p{max-width:720px;margin:25px 0 0;color:#dce7f7;font-size:17px;line-height:1.7}
        .services-hero-note{border-left:1px solid rgba(255,255,255,.2);padding:8px 0 8px 24px;display:grid;gap:10px}
        .services-hero-note span{color:#ffb27d;font-size:11px;font-weight:900;letter-spacing:.16em}
        .services-hero-note strong{font-size:18px;line-height:1.45}
        .services-section-head{margin-bottom:34px}
        .services-section-head h2{font-size:clamp(32px,4vw,50px)}
        .service-details-section{background:#f7f9fc;padding:76px 0 90px;border-top:1px solid var(--line)}
        .service-detail-list{display:grid;gap:26px}
        .service-detail{display:grid;grid-template-columns:.9fr 1.1fr;background:#fff;border:1px solid #dfe7f0;border-radius:26px;overflow:hidden;box-shadow:0 14px 36px rgba(11,29,64,.055);scroll-margin-top:100px}
        .service-detail-media{min-height:410px;position:relative;background:#0b1d40}
        .service-detail-media img{width:100%;height:100%;object-fit:cover}
        .service-detail-media:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,21,47,.03),rgba(7,21,47,.48))}
        .service-detail-number{position:absolute;z-index:2;left:25px;top:24px;color:#fff;font-size:12px;font-weight:900;letter-spacing:.12em;background:var(--orange);border-radius:11px;padding:10px 12px}
        .service-detail-content{padding:42px 44px}
        .service-detail-kicker{color:var(--orange);font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
        .service-detail-content h3{margin:0 0 12px;color:var(--navy);font-size:34px;line-height:1.1;letter-spacing:-.03em}
        .service-detail-content>p{margin:0;color:var(--muted);font-size:15px;line-height:1.7;max-width:650px}
        .vehicle-options{margin:22px 0 20px;padding:14px 16px;border-radius:14px;background:#f7f9fc;border:1px solid #e2e8ef;display:grid;gap:3px}
        .vehicle-options strong{color:var(--navy);font-size:12px;text-transform:uppercase;letter-spacing:.08em}
        .vehicle-options span{color:#617187;font-size:13px;font-weight:700}
        .capability-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 22px;margin-top:24px}
        .capability-item{display:flex;gap:9px;align-items:flex-start;color:#465b73;font-size:13px;line-height:1.45}
        .capability-item span{color:var(--orange);font-weight:900;font-size:16px;line-height:1}
        .service-quote-btn{margin-top:27px;width:max-content}
        @media(max-width:900px){.services-hero-grid{grid-template-columns:1fr;gap:30px}.services-hero-note{border-left:0;border-top:1px solid rgba(255,255,255,.2);padding:20px 0 0}.service-detail{grid-template-columns:1fr}.service-detail-media{min-height:300px}.service-detail-content{padding:32px}.capability-list{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.services-hero{padding:58px 0 62px}.services-hero h1{font-size:clamp(42px,13vw,62px)}.services-hero p{font-size:15px}.service-detail-media{min-height:230px}.service-detail-content{padding:27px 23px}.service-detail-content h3{font-size:29px}.capability-list{grid-template-columns:1fr}.service-quote-btn{width:100%}}
      `}</style>
    </>
  );
}