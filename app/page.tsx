import Link from "next/link";

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
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">B2B Logistics • Transportation • Distribution</div>
            <h1>Move your business.<br /><span>Move With Trust.</span></h1>
            <p>
              Reliable logistics solutions built around responsive coordination, transparent communication and accountable delivery.
            </p>

            <div className="hero-actions">
              <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
              <Link href="/services" className="btn btn-secondary">Explore Services</Link>
            </div>

            <div className="hero-proof">
              <div><strong>FTL</strong><span>Dedicated movement</span></div>
              <div><strong>PTL</strong><span>Flexible freight</span></div>
              <div><strong>POD</strong><span>Delivery closure</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="HELLCOM logistics transportation visual">
            <div className="hero-image-frame">
              <img src="/visuals/hellcom-1.webp" alt="HELLCOM logistics freight loading operation" />
              <div className="hero-image-shade" />
              <div className="hero-route route-one" />
              <div className="hero-route route-two" />

              <div className="hero-floating-card hero-card-top">
                <span className="live-dot" />
                <div><strong>Shipment in motion</strong><small>Coordinated from pickup to delivery</small></div>
              </div>

              <div className="hero-floating-card hero-card-bottom">
                <span className="mini-icon">↗</span>
                <div><strong>Move With Trust.</strong><small>One accountable point of contact</small></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container hero-scroll-cue">
          <span className="scroll-line" />
          <span>Scroll to explore HELLCOM</span>
        </div>
      </section>

      <section className="section hero-trust-strip">
        <div className="container trust-grid">
          <div><span className="trust-number">01</span><div><strong>Reliable Execution</strong><p>Focused coordination from pickup to delivery.</p></div></div>
          <div><span className="trust-number">02</span><div><strong>Transparent Communication</strong><p>Clear updates and proactive shipment visibility.</p></div></div>
          <div><span className="trust-number">03</span><div><strong>Single Point of Contact</strong><p>One accountable team coordinating your movement.</p></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Why HELLCOM</div>
              <h2>Logistics built around accountability.</h2>
            </div>
            <p className="section-intro">
              We are building HELLCOM around a simple principle: when you hand us a shipment, you should know exactly who is responsible for it.
            </p>
          </div>

          <div className="cards">
            <div className="card"><div className="icon">✓</div><h3>Reliable Execution</h3><p>Focused coordination from pickup to delivery.</p></div>
            <div className="card"><div className="icon">↗</div><h3>Transparent Communication</h3><p>Clear updates and proactive shipment visibility.</p></div>
            <div className="card"><div className="icon">◎</div><h3>Single Point of Contact</h3><p>One accountable team coordinating your movement.</p></div>
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
