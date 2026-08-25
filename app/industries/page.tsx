const industries = [
  {
    title: "Corporates",
    eyebrow: "Enterprise Logistics",
    description: "Reliable transport, warehousing and distribution support for multi-location corporate supply chains.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Manufacturers",
    eyebrow: "Production & Distribution",
    description: "Plant-to-warehouse and plant-to-customer movement designed around production schedules and service levels.",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Government Bodies",
    eyebrow: "Public Sector",
    description: "Structured logistics support for institutional movements, project cargo and time-bound deliveries.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Perishables",
    eyebrow: "Temperature Sensitive",
    description: "Time-critical transportation for food and other sensitive products where freshness and handling matter.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Healthcare",
    eyebrow: "Critical Cargo",
    description: "Controlled logistics for pharmaceuticals, medical devices and healthcare supplies with dependable execution.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "E-Commerce",
    eyebrow: "Digital Commerce",
    description: "Scalable fulfilment and delivery support for high-volume orders, returns and rapidly changing demand.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Courier",
    eyebrow: "Express Movement",
    description: "Fast domestic and international movement for documents, parcels and express shipments.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "FMCG",
    eyebrow: "Consumer Distribution",
    description: "High-frequency distribution solutions built for speed, availability and consistent service across markets.",
    image: "https://mecaluxfr.cdnwm.com/img/blog/grande-consommation-definition.1.13.jpg?imdensity=1&imwidth=2048",
  },
  {
    title: "Data Centers",
    eyebrow: "Mission Critical",
    description: "Carefully coordinated transportation for servers, networking equipment and sensitive infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Quick Commerce",
    eyebrow: "Speed to Market",
    description: "Agile first-mile, middle-mile and last-mile logistics for rapid replenishment and high-frequency fulfilment.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Consolidators",
    eyebrow: "Network Logistics",
    description: "Flexible consolidation, line-haul and distribution support for freight moving through multiple origins and destinations.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="industries-hero">
        <div className="industries-hero-bg" aria-hidden="true" />
        <div className="industries-hero-glow" />
        <div className="container industries-hero-inner">
          <div className="industries-hero-copy">
            <div className="kicker">Industries We Serve</div>
            <h1>Logistics built around <span>how your industry moves.</span></h1>
            <p>Different industries move differently. HELLCOM combines freight, transportation, customs and warehousing capabilities to match the pace, sensitivity and complexity of your supply chain.</p>
            <a href="/quote" className="btn btn-primary">Talk to our team <span>→</span></a>
          </div>
          <div className="industries-hero-panel">
            <div className="hero-panel-line" />
            <strong>MULTIPLE</strong>
            <span>Industry Segments</span>
            <small>One logistics partner across the movement.</small>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <div className="industries-heading">
            <div>
              <div className="kicker">Our Expertise</div>
              <h2>Built for the way your business operates.</h2>
            </div>
            <p>From mission-critical cargo to high-volume consumer distribution, our solutions adapt to your operating model.</p>
          </div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article className={`industry-card ${index === 0 ? "industry-card-featured" : ""}`} key={industry.title}>
                <div className="industry-image-wrap">
                  <img src={industry.image} alt={`${industry.title} logistics`} loading={index < 3 ? "eager" : "lazy"} />
                  <div className="industry-image-overlay" />
                  <span className="industry-eyebrow">{industry.eyebrow}</span>
                </div>
                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <a href="/quote">Explore logistics solutions <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-cta">
        <div className="container industries-cta-inner">
          <div>
            <div className="kicker">Have a specific requirement?</div>
            <h2>Tell us what you need to move.</h2>
          </div>
          <a href="/quote" className="btn btn-primary">Get a Quote <span>→</span></a>
        </div>
      </section>

      <style>{`
        .industries-hero{position:relative;overflow:hidden;background:#06142f;color:#fff;padding:82px 0 88px}
        .industries-hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(5,18,43,.98) 0%,rgba(6,20,47,.94) 38%,rgba(7,23,49,.72) 67%,rgba(7,20,43,.7) 100%),url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2200&q=90');background-size:cover;background-position:center 58%;transform:scale(1.03)}
        .industries-hero-bg:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(4,15,35,.08),rgba(4,15,35,.34))}
        .industries-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px);background-size:72px 72px;opacity:.22;mask-image:linear-gradient(to right,transparent 0%,black 45%,black 100%)}
        .industries-hero-glow{position:absolute;width:520px;height:520px;right:-180px;bottom:-300px;border-radius:50%;background:rgba(255,106,0,.18);filter:blur(60px)}
        .industries-hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(270px,.55fr);gap:80px;align-items:end}
        .industries-hero .kicker{color:#ffb27d}
        .industries-hero h1{max-width:920px;margin:0;font-size:clamp(46px,7vw,82px);line-height:.94;letter-spacing:-.06em;font-weight:900}
        .industries-hero h1 span{color:var(--orange)}
        .industries-hero-copy>p{max-width:730px;margin:27px 0 30px;color:#d9e4f4;font-size:17px;line-height:1.72}
        .industries-hero .btn{display:inline-flex;gap:12px;align-items:center}
        .industries-hero-panel{border-left:1px solid rgba(255,255,255,.22);padding:10px 0 10px 28px;display:grid;align-content:end;gap:5px;background:linear-gradient(90deg,rgba(6,20,47,.08),rgba(6,20,47,.25));backdrop-filter:blur(2px)}
        .industries-hero-panel strong{font-size:clamp(38px,4.3vw,60px);line-height:.95;color:#fff;letter-spacing:-.045em;font-weight:900}
        .industries-hero-panel span{font-size:13px;color:#ffb27d;text-transform:uppercase;letter-spacing:.14em;font-weight:900}
        .industries-hero-panel small{max-width:180px;margin-top:10px;color:#c1cee0;font-size:13px;line-height:1.5}
        .industries-section{background:#f7f9fc;padding:82px 0 96px;border-top:1px solid var(--line)}
        .industries-heading{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr);gap:70px;align-items:end;margin-bottom:38px}
        .industries-heading h2{margin:0;max-width:760px;color:var(--navy);font-size:clamp(36px,4.8vw,58px);line-height:.98;letter-spacing:-.05em}
        .industries-heading p{margin:0;color:var(--muted);font-size:16px;line-height:1.7}
        .industries-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
        .industry-card{background:#fff;border:1px solid #dfe7f0;border-radius:24px;overflow:hidden;box-shadow:0 12px 32px rgba(11,29,64,.05);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
        .industry-card:hover{transform:translateY(-5px);box-shadow:0 20px 42px rgba(11,29,64,.1);border-color:#ccd8e5}
        .industry-card-featured{grid-column:span 2}
        .industry-image-wrap{height:235px;position:relative;overflow:hidden;background:#0b1d40}
        .industry-card-featured .industry-image-wrap{height:285px}
        .industry-image-wrap img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease}
        .industry-card:hover .industry-image-wrap img{transform:scale(1.045)}
        .industry-image-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,21,47,.03) 25%,rgba(7,21,47,.7) 100%)}
        .industry-eyebrow{position:absolute;left:20px;bottom:18px;color:#fff;background:rgba(7,21,47,.74);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:8px 11px;font-size:10px;font-weight:900;letter-spacing:.11em;text-transform:uppercase}
        .industry-content{padding:24px 24px 25px}
        .industry-content h3{margin:0 0 10px;color:var(--navy);font-size:25px;letter-spacing:-.025em}
        .industry-content p{margin:0;min-height:67px;color:#65758a;font-size:14px;line-height:1.65}
        .industry-content a{display:inline-flex;align-items:center;gap:9px;margin-top:20px;color:var(--orange);font-size:13px;font-weight:900;text-decoration:none}
        .industry-content a span{font-size:18px;transition:transform .2s ease}
        .industry-content a:hover span{transform:translateX(4px)}
        .industries-cta{background:#fff;padding:0 0 82px}
        .industries-cta-inner{border-radius:26px;background:linear-gradient(110deg,#07152f,#102b57);padding:48px 54px;display:flex;align-items:center;justify-content:space-between;gap:30px;position:relative;overflow:hidden}
        .industries-cta-inner:after{content:"";position:absolute;width:280px;height:280px;right:-80px;top:-140px;border-radius:50%;background:rgba(255,106,0,.18);filter:blur(18px)}
        .industries-cta .kicker{color:#ffb27d}
        .industries-cta h2{position:relative;z-index:1;margin:0;color:#fff;font-size:clamp(30px,4vw,48px);letter-spacing:-.045em}
        .industries-cta .btn{position:relative;z-index:2;white-space:nowrap;display:inline-flex;align-items:center;gap:12px}
        @media(max-width:900px){.industries-hero-inner,.industries-heading{grid-template-columns:1fr;gap:35px}.industries-hero-panel{border-left:0;border-top:1px solid rgba(255,255,255,.2);padding:24px 0 0}.industries-grid{grid-template-columns:1fr 1fr}.industry-card-featured{grid-column:span 2}}
        @media(max-width:640px){.industries-hero{padding:60px 0 68px}.industries-hero-bg{background-position:58% center}.industries-hero h1{font-size:clamp(43px,13vw,64px)}.industries-hero-copy>p{font-size:15px}.industries-grid{grid-template-columns:1fr}.industry-card-featured{grid-column:auto}.industry-image-wrap,.industry-card-featured .industry-image-wrap{height:230px}.industry-content{padding:22px}.industry-content p{min-height:0}.industries-cta-inner{padding:34px 26px;align-items:flex-start;flex-direction:column}.industries-cta{padding-bottom:60px}}
      `}</style>
    </>
  );
}