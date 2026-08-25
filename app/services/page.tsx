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
        <div className="services-hero-graphic" aria-hidden="true">
          <div className="route route-one"><span /></div>
          <div className="route route-two"><span /></div>
          <div className="route route-three"><span /></div>
          <div className="graphic-node node-one" />
          <div className="graphic-node node-two" />
          <div className="graphic-node node-three" />
          <div className="graphic-node node-four" />
          <div className="graphic-ring ring-one" />
          <div className="graphic-ring ring-two" />
          <div className="graphic-label label-one">AIR</div>
          <div className="graphic-label label-two">SEA</div>
          <div className="graphic-label label-three">ROAD</div>
        </div>
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
        .services-hero-graphic{position:absolute;inset:0;pointer-events:none;opacity:.82;overflow:hidden}
        .services-hero-graphic:before{content:"";position:absolute;inset:-20%;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:72px 72px;transform:perspective(700px) rotateX(58deg) scale(1.35);transform-origin:center bottom;opacity:.5}
        .route{position:absolute;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.16),rgba(255,106,0,.7),transparent);transform-origin:left center}
        .route span{position:absolute;left:0;top:-3px;width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 16px rgba(255,106,0,.8);animation:heroTravel 4.8s linear infinite}
        .route-one{width:620px;right:-20px;top:34%;transform:rotate(-18deg)}
        .route-two{width:520px;right:7%;top:58%;transform:rotate(12deg);opacity:.65}
        .route-three{width:470px;right:15%;top:76%;transform:rotate(-7deg);opacity:.5}
        .route-two span{animation-delay:1.5s}.route-three span{animation-delay:2.8s}
        .graphic-node{position:absolute;width:10px;height:10px;border:2px solid rgba(255,255,255,.65);border-radius:50%;box-shadow:0 0 0 7px rgba(255,255,255,.025)}
        .node-one{right:34%;top:22%}.node-two{right:13%;top:41%}.node-three{right:38%;top:64%}.node-four{right:7%;top:78%}
        .graphic-ring{position:absolute;border:1px solid rgba(255,106,0,.16);border-radius:50%;animation:heroPulse 4s ease-in-out infinite}
        .ring-one{width:280px;height:280px;right:9%;top:4%}.ring-two{width:150px;height:150px;right:30%;top:53%;animation-delay:1.5s}
        .graphic-label{position:absolute;color:rgba(255,255,255,.22);font-size:10px;font-weight:900;letter-spacing:.2em;border:1px solid rgba(255,255,255,.09);padding:7px 10px;border-radius:999px;backdrop-filter:blur(5px)}
        .label-one{right:22%;top:25%}.label-two{right:7%;top:54%}.label-three{right:39%;top:78%}
        @keyframes heroTravel{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:100%;opacity:0}}
        @keyframes heroPulse{0%,100%{transform:scale(.94);opacity:.45}50%{transform:scale(1.04);opacity:1}}
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
        @media(max-width:900px){.services-hero-grid{grid-template-columns:1fr;gap:30px}.services-hero-note{border-left:0;border-top:1px solid rgba(255,255,255,.2);padding:20px 0 0}.service-detail{grid-template-columns:1fr}.service-detail-media{min-height:300px}.service-detail-content{padding:32px}.capability-list{grid-template-columns:1fr 1fr}.services-hero-graphic{opacity:.48}.route-one{width:440px;right:-150px}.route-two{width:380px;right:-100px}.route-three{width:330px;right:-80px}.label-one{right:10%;top:18%}.label-two{right:3%;top:45%}.label-three{right:18%;top:72%}}
        @media(max-width:640px){.services-hero{padding:58px 0 62px}.services-hero h1{font-size:clamp(42px,13vw,62px)}.services-hero p{font-size:15px}.service-detail-media{min-height:230px}.service-detail-content{padding:27px 23px}.service-detail-content h3{font-size:29px}.capability-list{grid-template-columns:1fr}.service-quote-btn{width:100%}.services-hero-graphic{opacity:.25}.graphic-label{display:none}.ring-one{width:190px;height:190px;right:-70px}.ring-two{width:100px;height:100px;right:12%;top:70%}}
      `}</style>
    </>
  );
}