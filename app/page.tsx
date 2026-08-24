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
              <h2>Logistics built around<br /><span>clarity and trust.</span></h2>
            </div>
            <p>
              We are building HELLCOM around a simple principle: when you hand us a shipment,
              you should know exactly who is responsible for it.
            </p>
          </div>

          <div className="mission-vision-grid">
            <article className="mission-vision-card">
              <div className="mv-number">01</div>
              <div className="mv-label">OUR MISSION</div>
              <h3>Make logistics simpler.</h3>
              <p>
                To make logistics simpler, more reliable, and more transparent.
                We connect every stage of the supply chain through dependable execution,
                clear communication, and technology-driven logistics solutions helping
                businesses move their goods with confidence.
              </p>
            </article>

            <article className="mission-vision-card">
              <div className="mv-number">02</div>
              <div className="mv-label">OUR VISION</div>
              <h3>Keep businesses moving everywhere.</h3>
              <p>
                To be a trusted logistics partner that keeps businesses moving everywhere.
                We aim to build a connected, technology-enabled logistics network that delivers
                smarter solutions, stronger visibility, and consistent service across every journey.
              </p>
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
        .mission-vision-section{padding:92px 0 96px;background:#fff;border-top:1px solid #eef1f5;border-bottom:1px solid #eef1f5}
        .mission-vision-heading{display:grid;grid-template-columns:1.05fr .95fr;gap:80px;align-items:end;margin-bottom:48px}
        .mission-vision-heading .kicker{margin-bottom:18px}
        .mission-vision-heading h2{margin:0;color:var(--navy);font-size:clamp(40px,5vw,64px);line-height:1.02;letter-spacing:-.045em;font-weight:900}
        .mission-vision-heading h2 span{color:#ff6a00}
        .mission-vision-heading>p{margin:0 0 4px;color:#60718a;font-size:17px;line-height:1.7;max-width:560px}
        .mission-vision-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
        .mission-vision-card{position:relative;padding:34px 38px 38px;min-height:300px;background:#f8fafc;border:1px solid #dfe5ed;border-radius:18px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
        .mission-vision-card:first-child{background:#f8fafc}
        .mission-vision-card:last-child{background:#fff7f1;border-color:#f2ddd0}
        .mission-vision-card:hover{transform:translateY(-4px);box-shadow:0 18px 45px rgba(7,21,47,.08);border-color:#ffb27d}
        .mv-number{font-size:14px;font-weight:900;letter-spacing:.12em;color:#ff6a00;margin-bottom:8px}
        .mv-label{font-size:12px;letter-spacing:.16em;font-weight:900;color:#65758c;margin-bottom:30px}
        .mission-vision-card h3{margin:0 0 16px;color:var(--navy);font-size:clamp(28px,3vw,40px);line-height:1.05;letter-spacing:-.035em}
        .mission-vision-card p{margin:0;max-width:650px;color:#60718a;font-size:16px;line-height:1.72}
        @media(max-width:900px){.mission-vision-heading{grid-template-columns:1fr;gap:24px}.mission-vision-grid{grid-template-columns:1fr}}
        @media(max-width:640px){.mission-vision-section{padding:68px 0 72px}.mission-vision-heading h2{font-size:42px}.mission-vision-heading>p{font-size:15px}.mission-vision-card{padding:28px 24px 30px;min-height:0}.mission-vision-card h3{font-size:32px}.mission-vision-card p{font-size:14px}}
      `}</style>
    </>
  );
}
