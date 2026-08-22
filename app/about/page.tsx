export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">About HELLCOM</div>
          <h1>Move With Trust.</h1>
          <p>HELLCOM Logistics is being built as a responsive B2B logistics partner focused on dependable transportation, clear communication and accountable execution.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Our philosophy</div>
            <h2>Make logistics easier to manage.</h2>
            <p className="section-intro">
              Businesses should not have to spend their day chasing vehicles, updates and delivery confirmations. HELLCOM is designed to simplify that operational burden.
            </p>
          </div>
          <div className="quote-box">
            <h3 style={{color:"var(--navy)",fontSize:28,margin:"0 0 10px"}}>What we stand for</h3>
            <div className="checks">
              <div className="check"><div className="check-mark">✓</div><div><strong>Reliability</strong><div className="muted">Do what we commit to.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Transparency</strong><div className="muted">Communicate clearly and early.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Accountability</strong><div className="muted">Own the shipment from start to finish.</div></div></div>
              <div className="check"><div className="check-mark">✓</div><div><strong>Continuous Improvement</strong><div className="muted">Learn from every movement.</div></div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}