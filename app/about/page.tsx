export default function AboutPage() {
  return (
    <>
      <section className="why-hellcom">
        <div className="container">
          <div className="why-hellcom-head">
            <div className="why-hellcom-copy">
              <div className="kicker">Why HELLCOM</div>
              <h1>Logistics built around <span>accountability.</span></h1>
            </div>
            <p className="why-hellcom-lead">
              We are building HELLCOM around a simple principle: when you hand us a shipment,
              you should know exactly who is responsible for it.
            </p>
          </div>

          <div className="mission-grid">
            <article className="mission-card">
              <div className="mission-content">
                <h2 style={{ color: "var(--orange)", fontSize: "34px", fontWeight: 900, letterSpacing: "-.03em", margin: "0 0 14px" }}>Our Mission</h2>
                <h3>To make logistics simpler, more reliable, and more transparent.</h3>
                <p>
                  We connect every stage of the supply chain through dependable execution,
                  clear communication, and technology-driven logistics solutions helping
                  businesses move their goods with confidence.
                </p>
              </div>
            </article>

            <article className="mission-card">
              <div className="mission-content">
                <h2 style={{ color: "var(--orange)", fontSize: "34px", fontWeight: 900, letterSpacing: "-.03em", margin: "0 0 14px" }}>Our Vision</h2>
                <h3>To be a trusted logistics partner that keeps businesses moving everywhere.</h3>
                <p>
                  We aim to build a connected, technology-enabled logistics network that
                  delivers smarter solutions, stronger visibility, and consistent service.
                </p>
              </div>
            </article>
          </div>

          <div className="accountability-bar">
            <span>01</span><strong>Reliability</strong>
            <i />
            <span>02</span><strong>Transparency</strong>
            <i />
            <span>03</span><strong>Accountability</strong>
            <i />
            <span>04</span><strong>Continuous improvement</strong>
          </div>
        </div>
      </section>
    </>
  );
}
