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

      {/* Why HELLCOM — premium mission and vision story */}
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
              <div className="mv-topline">
                <span className="mv-number">01</span>
                <span className="mv-label">Our Mission</span>
              </div>
              <div className="mv-mark">→</div>
              <h3>Make logistics<br /><em>simpler.</em></h3>
              <p>
                To make logistics simpler, more reliable, and more transparent.
                We connect every stage of the supply chain through dependable execution,
                clear communication, and technology-driven logistics solutions — helping
                businesses move their goods with confidence.
              </p>
              <div className="mv-footer">SIMPLER · RELIABLE · TRANSPARENT</div>
            </article>

            <article className="mission-vision-card vision-card">
              <div className="mv-topline">
                <span className="mv-number">02</span>
                <span className="mv-label">Our Vision</span>
              </div>
              <div className="mv-mark">↗</div>
              <h3>Keep business<br /><em>moving everywhere.</em></h3>
              <p>
                To be a trusted logistics partner that keeps businesses moving everywhere.
                We aim to build a connected, technology-enabled logistics network that
                delivers smarter solutions, stronger visibility, and consistent service
                across every journey.
              </p>
              <div className="mv-footer">CONNECTED · SMARTER · EVERYWHERE</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Our services</div>
              <h2>Solutions that keep cargo moving.</h2>
            </div>
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>

          <div className="cards">
            {services.map(([num, title, desc]) => (
              <div className="card" key={title}>
                <div className="icon">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Our approach</div>
            <h2>One shipment. One point of contact. Zero chasing.</h2>
            <p className="section-intro">
              HELLCOM is designed for businesses that need dependable transport without spending their time chasing updates.
            </p>
            <div className="checks">
              <div className="check"><div className="check-mark">✓</div><div><strong>Clear requirements</strong><div className="muted">We understand the route, cargo and service need first.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Transparent quote</strong><div className="muted">Simple commercial communication with fewer surprises.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Proactive coordination</strong><div className="muted">Pickup, transit and delivery stay visible.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Delivery confirmation</strong><div className="muted">POD and closure complete the shipment cycle.</div></div></div>
            </div>
          </div>
          <div className="quote-box">
            <div className="kicker">Quick enquiry</div>
            <h3 style={{color:"var(--navy)",fontSize:28,margin:"0 0 10px"}}>Need a transport quote?</h3>
            <p className="muted">Share your pickup, delivery and vehicle requirement. Our team can take it from there.</p>
            <Link href="/quote" className="btn btn-primary" style={{marginTop:20}}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Industries</div>
              <h2>Built for physical-product businesses.</h2>
            </div>
            <Link href="/industries" className="btn btn-secondary">Explore Industries</Link>
          </div>
          <div className="cards">
            {industries.map((industry, i) => (
              <div className="card" key={industry}>
                <div className="icon">0{i+1}</div>
                <h3>{industry}</h3>
                <p>Transportation support aligned to recurring B2B movement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <div className="kicker" style={{color:"#ffb27d"}}>Start a conversation</div>
              <h2>Have a route in mind?</h2>
              <p>Tell us your pickup, delivery, cargo and frequency. We’ll work from there.</p>
            </div>
            <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
