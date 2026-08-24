import Link from "next/link";
import HeroScrollStory from "./components/HeroScrollStory";

const services = [
  ["01", "Full Truckload", "Dedicated vehicle movement for larger, time-sensitive or route-specific freight."],
  ["02", "Part Truckload", "Flexible freight movement for smaller consignments with cost-conscious planning."],
  ["03", "B2B Transportation", "Reliable movement between plants, warehouses, distributors and customers."],
  ["04", "Distribution", "Coordinated multi-location deliveries with a clear point of accountability."],
  ["05", "Warehousing", "Scalable storage and dispatch support as your supply chain grows."],
  ["06", "Customized Solutions", "Transport solutions designed around your routes, volumes and service requirements."],
];

const industries = [
  "Manufacturing",
  "Automotive & Auto Components",
  "Engineering",
  "Electrical & Electronics",
  "FMCG & Consumer Products",
  "Retail & E-commerce",
];

export default function Home() {
  return (
    <>
      <HeroScrollStory />

      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-heading">
            <div>
              <div className="kicker">Why HELLCOM</div>
              <h2>Built to move your business<br /><span>with confidence.</span></h2>
            </div>
            <p>
              Logistics should feel simple on your side. One accountable partner,
              clear communication and dependable execution from the first mile to the last.
            </p>
          </div>

          <div className="mission-vision-grid">
            <article className="mission-vision-card mission-card">
              <div className="mv-topline"><span className="mv-number">01</span><span className="mv-label">OUR MISSION</span></div>
              <div className="mv-mark">→</div>
              <h3>Make logistics<br /><em>simpler.</em></h3>
              <p>
                To make logistics simpler, more reliable, and more transparent. We connect every stage of the supply chain through dependable execution, clear communication, and technology-driven logistics solutions — helping businesses move their goods with confidence.
              </p>
              <div className="mv-footer">SIMPLER · RELIABLE · TRANSPARENT</div>
            </article>

            <article className="mission-vision-card vision-card">
              <div className="mv-topline"><span className="mv-number">02</span><span className="mv-label">OUR VISION</span></div>
              <div className="mv-mark">↗</div>
              <h3>Keep business<br /><em>moving everywhere.</em></h3>
              <p>
                To be a trusted logistics partner that keeps businesses moving everywhere. We aim to build a connected, technology-enabled logistics network that delivers smarter solutions, stronger visibility, and consistent service across every journey.
              </p>
              <div className="mv-footer">CONNECTED · SMARTER · EVERYWHERE</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div><div className="kicker">Our services</div><h2>Solutions that keep cargo moving.</h2></div>
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>
          <div className="cards">
            {services.map(([num, title, desc]) => (
              <div className="card" key={title}><div className="icon">{num}</div><h3>{title}</h3><p>{desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Our approach</div><h2>One shipment. One point of contact. Zero chasing.</h2>
            <p className="section-intro">HELLCOM is designed for businesses that need dependable transport without spending their time chasing updates.</p>
            <div className="checks">
              <div className="check"><div className="check-mark">✓</div><div><strong>Clear requirements</strong><div className="muted">We understand the route, cargo and service need first.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Transparent quote</strong><div className="muted">Simple commercial communication with fewer surprises.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Proactive coordination</strong><div className="muted">Pickup, transit and delivery stay visible.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Delivery confirmation</strong><div className="muted">POD and closure complete the shipment cycle.</div></div></div>
            </div>
          </div>
          <div className="quote-box"><div className="kicker">Quick enquiry</div><h3 style={{color:"var(--navy)",fontSize:28,margin:"0 0 10px"}}>Need a transport quote?</h3><p className="muted">Share your pickup, delivery and vehicle requirement. Our team can take it from there.</p><Link href="/quote" className="btn btn-primary" style={{marginTop:20}}>Request a Quote</Link></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><div><div className="kicker">Industries</div><h2>Built for physical-product businesses.</h2></div><Link href="/industries" className="btn btn-secondary">Explore Industries</Link></div>
          <div className="cards">{industries.map((industry, i) => <div className="card" key={industry}><div className="icon">0{i+1}</div><h3>{industry}</h3><p>Transportation support aligned to recurring B2B movement.</p></div>)}</div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="cta"><div><div className="kicker" style={{color:"#ffb27d"}}>Start a conversation</div><h2>Have a route in mind?</h2><p>Tell us your pickup, delivery, cargo and frequency. We’ll work from there.</p></div><Link href="/quote" className="btn btn-primary">Get a Quote</Link></div></div></section>

      <style jsx global>{`
        .mission-vision-section{position:relative;overflow:hidden;padding:105px 0 115px;background:#07152f;color:#fff}
        .mission-vision-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(255,106,0,.13),transparent 32%),linear-gradient(115deg,rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(25deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,70px 70px,90px 90px;pointer-events:none}
        .mission-vision-heading{position:relative;z-index:1;display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:end;margin-bottom:58px}
        .mission-vision-heading .kicker{margin-bottom:16px}
        .mission-vision-heading h2{margin:0;color:#fff;font-size:clamp(42px,5.5vw,72px);line-height:.98;letter-spacing:-.045em;font-weight:900}
        .mission-vision-heading h2 span{color:#ff6a00}
        .mission-vision-heading>p{margin:0 0 5px;color:#b9c7da;font-size:17px;line-height:1.75;max-width:500px}
        .mission-vision-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:22px}
        .mission-vision-card{position:relative;min-height:475px;padding:34px 36px 28px;border-radius:26px;overflow:hidden;display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.13);box-shadow:0 25px 70px rgba(0,0,0,.22);transition:transform .3s ease,border-color .3s ease}
        .mission-vision-card:hover{transform:translateY(-7px);border-color:rgba(255,106,0,.55)}
        .mission-card{background:linear-gradient(145deg,#102958,#0b1d40)}
        .vision-card{background:linear-gradient(145deg,#ff7a1a,#e95700)}
        .vision-card .mv-number,.vision-card .mv-label,.vision-card p,.vision-card .mv-footer{color:rgba(255,255,255,.82)}
        .vision-card .mv-mark{color:#fff;border-color:rgba(255,255,255,.3)}
        .mv-topline{display:flex;align-items:center;gap:14px;font-size:11px;letter-spacing:.18em;font-weight:900}
        .mv-number{color:#ff6a00;font-size:12px}
        .mv-label{color:#9fb0c8}
        .mv-mark{width:52px;height:52px;margin-top:52px;border:1px solid rgba(255,106,0,.35);border-radius:50%;display:grid;place-items:center;color:#ff6a00;font-size:25px}
        .mission-vision-card h3{margin:22px 0 18px;font-size:clamp(35px,4vw,54px);line-height:.95;letter-spacing:-.04em;color:#fff}
        .mission-vision-card h3 em{font-style:normal;color:#ff6a00}
        .vision-card h3 em{color:#07152f}
        .mission-vision-card p{max-width:560px;margin:0;color:#b9c7da;font-size:15px;line-height:1.72}
        .mv-footer{margin-top:auto;padding-top:28px;color:#7890b2;font-size:9px;letter-spacing:.17em;font-weight:900}
        @media(max-width:900px){.mission-vision-heading{grid-template-columns:1fr;gap:24px}.mission-vision-grid{grid-template-columns:1fr}.mission-vision-card{min-height:420px}}
        @media(max-width:640px){.mission-vision-section{padding:72px 0 78px}.mission-vision-heading h2{font-size:43px}.mission-vision-heading>p{font-size:15px}.mission-vision-card{min-height:390px;padding:27px 25px 24px;border-radius:21px}.mv-mark{margin-top:38px}.mission-vision-card h3{font-size:40px}.mission-vision-card p{font-size:14px}.mv-footer{font-size:8px}}
      `}</style>
    </>
  );
}
