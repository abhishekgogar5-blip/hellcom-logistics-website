export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <div className="kicker">About HELLCOM Logistics</div>
            <h1>Built on <span>27 years.</span><br />Designed for what’s next.</h1>
            <p>HELLCOM Logistics is a new-generation logistics brand backed by Shri Shyam Trans Logistics, a 27-year-old Indian transportation company.</p>
          </div>
          <div className="about-origin-card">
            <small>OUR FOUNDATION</small>
            <strong>27</strong>
            <span>Years of Indian transportation experience</span>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <div className="kicker">Where we come from</div>
              <h2>From a trusted Indian transportation foundation to a <span>new-generation global logistics brand.</span></h2>
            </div>
            <div className="about-story-copy">
              <p>Shri Shyam Trans Logistics has built 27 years of experience serving businesses across India with dependable road transportation solutions.</p>
              <p>Its core capabilities include <strong>FTL, PTL and ODC transportation</strong> across Pan-India routes, giving HELLCOM a strong operational foundation built around real-world logistics execution.</p>
              <p>HELLCOM takes that foundation forward with a broader, technology-enabled logistics proposition covering transportation, freight forwarding, customs and warehousing — designed to connect Indian businesses with a well-established global logistics network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="container">
          <div className="capability-heading">
            <div>
              <div className="kicker">The HELLCOM proposition</div>
              <h2>One partner. <span>More ways to move.</span></h2>
            </div>
            <p>We combine the strength of an established transportation business with a modern approach to end-to-end logistics.</p>
          </div>
          <div className="capability-grid">
            <article><b>01</b><h3>Transportation</h3><p>FTL, PTL, ODC and first-to-last-mile movement backed by established Indian road logistics expertise.</p></article>
            <article><b>02</b><h3>Freight Forwarding</h3><p>Air and ocean freight solutions connecting shipments to international markets through our global network.</p></article>
            <article><b>03</b><h3>Customs Clearance</h3><p>Import and export coordination designed to keep documentation and cargo movement aligned.</p></article>
            <article><b>04</b><h3>Warehousing & Distribution</h3><p>Storage, fulfilment, cross-docking and distribution support for businesses with changing supply-chain needs.</p></article>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-intro">
            <div className="kicker">What drives us</div>
            <h2>Moving businesses forward with <span>purpose.</span></h2>
          </div>
          <div className="mission-grid">
            <article className="mission-card">
              <div className="kicker">Our Mission</div>
              <h2>To make logistics simpler, more reliable, and more transparent.</h2>
              <p>We connect every stage of the supply chain through dependable execution, clear communication, and technology-driven logistics solutions helping businesses move their goods with confidence.</p>
            </article>
            <article className="mission-card">
              <div className="kicker">Our Vision</div>
              <h2>To be a trusted logistics partner that keeps businesses moving everywhere.</h2>
              <p>We aim to build a connected, technology-enabled logistics network that delivers smarter solutions, stronger visibility, and consistent service across every journey.</p>
            </article>
          </div>
          <div className="about-values"><strong>Reliability</strong><i /><strong>Transparency</strong><i /><strong>Accountability</strong><i /><strong>Continuous improvement</strong></div>
        </div>
      </section>

      <style>{`
        .about-hero{position:relative;overflow:hidden;background:#06142f;color:#fff;padding:105px 0 100px;min-height:560px;display:flex;align-items:center}
        .about-hero-bg{position:absolute;inset:0;background-image:linear-gradient(90deg,rgba(6,20,47,.98) 0%,rgba(6,20,47,.92) 36%,rgba(6,20,47,.68) 58%,rgba(6,20,47,.28) 100%),url('/visuals/about-hero-logistics.svg');background-size:cover,cover;background-position:center,center right;background-repeat:no-repeat}
        .about-hero-bg:after{content:"";position:absolute;inset:0;opacity:.1;background:linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px);background-size:70px 70px}
        .about-hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(230px,.55fr);gap:80px;align-items:center}
        .about-hero .kicker,.mission-card .kicker{color:#ffb27d}
        .about-hero h1{margin:0;font-size:clamp(48px,6.8vw,80px);line-height:.94;letter-spacing:-.06em;font-weight:900}
        .about-hero h1 span,.about-story h2 span,.capability-heading h2 span,.mission-intro h2 span{color:var(--orange)}
        .about-hero-copy p{max-width:690px;margin:26px 0 0;color:#d7e3f2;font-size:18px;line-height:1.7}
        .about-origin-card{justify-self:end;width:220px;padding:24px;border-left:2px solid var(--orange);background:rgba(255,255,255,.055);backdrop-filter:blur(10px)}
        .about-origin-card small{display:block;color:#ffb27d;font-size:10px;font-weight:900;letter-spacing:.16em}
        .about-origin-card strong{display:block;margin:8px 0 3px;font-size:76px;line-height:.9;letter-spacing:-.07em}
        .about-origin-card span{color:#c4d1e2;font-size:13px;line-height:1.5}
        .about-story{padding:92px 0;background:#fff}
        .about-story-grid,.capability-heading{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:80px;align-items:end}
        .about-story h2,.capability-heading h2{margin:0;color:var(--navy);font-size:clamp(38px,5vw,60px);line-height:.98;letter-spacing:-.05em}
        .about-story-copy p{margin:0 0 18px;color:#64748b;font-size:16px;line-height:1.75}
        .about-story-copy strong{color:var(--navy)}
        .capability-section{padding:88px 0 96px;background:#f7f9fc;border-top:1px solid #e2e8f0}
        .capability-heading{align-items:end;margin-bottom:40px}
        .capability-heading p{margin:0;color:#64748b;font-size:16px;line-height:1.7}
        .capability-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .capability-grid article{min-height:245px;padding:25px;background:#fff;border:1px solid #dfe7f0;border-radius:20px;box-shadow:0 12px 30px rgba(11,29,64,.045)}
        .capability-grid b{color:var(--orange);font-size:12px;letter-spacing:.1em}
        .capability-grid h3{margin:42px 0 10px;color:var(--navy);font-size:22px;letter-spacing:-.025em}
        .capability-grid p{margin:0;color:#64748b;font-size:13px;line-height:1.65}
        .mission-section{padding:80px 0 90px;background:#f7f9fc;border-top:1px solid #e2e8f0}
        .mission-intro{margin-bottom:34px}
        .mission-intro h2{margin:0;color:var(--navy);font-size:clamp(36px,4.5vw,54px);line-height:1;letter-spacing:-.05em}
        .mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        .mission-card{padding:40px;border-radius:24px;background:#07152f;color:#fff;min-height:300px}
        .mission-card:nth-child(2){background:#0d2449}
        .mission-card h2{margin:10px 0 16px;font-size:32px;line-height:1.06;letter-spacing:-.035em;color:#fff}
        .mission-card p{max-width:560px;margin:0;color:#cbd8e8;font-size:15px;line-height:1.7}
        .about-values{margin-top:20px;padding:22px 28px;display:flex;align-items:center;justify-content:center;gap:22px;background:#fff;border:1px solid #dfe7f0;border-radius:18px;color:var(--navy);font-size:13px;letter-spacing:.06em;text-transform:uppercase}
        .about-values i{width:5px;height:5px;border-radius:50%;background:var(--orange)}
        @media(max-width:900px){.about-hero-inner,.about-story-grid,.capability-heading{grid-template-columns:1fr;gap:38px}.about-origin-card{justify-self:start}.capability-grid{grid-template-columns:1fr 1fr}.mission-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.about-hero{padding:70px 0;min-height:0}.about-hero-bg{background-image:linear-gradient(90deg,rgba(6,20,47,.98) 0%,rgba(6,20,47,.9) 55%,rgba(6,20,47,.62) 100%),url('/visuals/about-hero-logistics.svg');background-position:center,72% center}.about-hero h1{font-size:clamp(43px,13vw,62px)}.about-hero-copy p{font-size:15px}.about-story,.capability-section,.mission-section{padding:65px 0}.about-story h2,.capability-heading h2,.mission-intro h2{font-size:40px}.capability-grid{grid-template-columns:1fr}.mission-card{padding:28px}.mission-card h2{font-size:29px}.about-values{flex-wrap:wrap;gap:12px;padding:18px}.about-values i{display:none}}
      `}</style>
    </>
  );
}
