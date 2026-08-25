import Link from "next/link";
import HeroScrollStory from "./components/HeroScrollStory";
import HomeServicesCarousel from "./components/HomeServicesCarousel";

const services = [
  ["01", "Air Freight", "Fast, secure air cargo solutions for urgent, sensitive and high-value shipments.", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85"],
  ["02", "Ocean Freight", "Reliable global ocean freight for full-container, consolidation and project movements.", "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85"],
  ["03", "Rail Freight", "Efficient rail solutions for bulk, containerised and specialised cargo across connected corridors.", "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=85"],
  ["04", "Inland Transportation", "Flexible first-mile, line-haul and last-mile transportation built around your cargo requirements.", "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85"],
  ["05", "Courier Services", "Express domestic and international courier solutions for parcels and e-commerce shipments.", "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=85"],
  ["06", "Customs Clearance", "Structured customs support to keep import and export shipments compliant and moving.", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"],
  ["07", "3PL Warehousing & Distribution", "Integrated warehousing and distribution support covering inventory, fulfilment and outbound execution.", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85"],
] as const;

const industries = [
  ["Manufacturing", "https://media1.giphy.com/media/VFjuEAIor37m93M4iE/giphy.gif"],
  ["Automotive & Auto Components", "https://media1.giphy.com/media/XgXeYtdhTHsx6smbOx/giphy.gif"],
  ["Engineering", "https://media0.giphy.com/media/eg0nZjWdgz1zizjjPG/giphy.gif"],
  ["Electrical & Electronics", "https://media0.giphy.com/media/3o7aDfn4sN4G7mEKze/giphy.gif"],
  ["FMCG & Consumer Products", "https://media2.giphy.com/media/l3vRnDEUUUiYCMY4U/giphy.gif"],
  ["Retail & E-commerce", "https://media0.giphy.com/media/yHSzprwsg6mMq2q4eX/giphy.gif"],
] as const;

export default function Home() {
  return (
    <>
      <HeroScrollStory />

      <section className="why-hellcom">
        <div className="container">
          <div className="why-hellcom-head">
            <div className="why-hellcom-copy">
              <div className="kicker" style={{fontSize:14}}>Why HELLCom</div>
              <h1 style={{fontSize:34, lineHeight:1.15, letterSpacing:"-.025em"}}>
                <span>Logistics built around</span>
                <span>accountability.</span>
              </h1>
            </div>
            <p className="why-hellcom-lead">
              We are building HELLCOM around a simple principle: when you hand us a shipment, you should know exactly who is responsible for it.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-content">
                <h2>Our Mission</h2>
                <h3>To make logistics simpler, more reliable, and more transparent.</h3>
                <p>
                  We connect every stage of the supply chain through dependable execution, clear communication, and technology-driven logistics solutions helping businesses move their goods with confidence.
                </p>
              </div>
            </div>

            <div className="mission-card">
              <div className="mission-content">
                <h2>Our Vision</h2>
                <h3>To be a trusted logistics partner that keeps businesses moving everywhere.</h3>
                <p>
                  We aim to build a connected, technology-enabled logistics network that delivers smarter solutions, stronger visibility, and consistent service across every journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt home-services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Our Services</div>
              <h2>End-to-end logistics, built around your shipment.</h2>
            </div>
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>

          <HomeServicesCarousel services={services} />

          <div className="home-services-mobile-note">Scroll horizontally to explore all services.</div>
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
          <div className="cards">{industries.map(([industry, gif]) => <div className="card home-industry-card" key={industry}>
            <div className="home-industry-media"><img src={gif} alt={`${industry} logistics`} loading="lazy" /></div>
            <h3>{industry}</h3><p>Transportation support aligned to recurring B2B movement.</p>
          </div>)}</div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="cta"><div><div className="kicker" style={{color:"#ffb27d"}}>Start a conversation</div><h2>Have a route in mind?</h2><p>Tell us your pickup, delivery, cargo and frequency. We’ll work from there.</p></div><Link href="/quote" className="btn btn-primary">Get a Quote</Link></div></div></section>

      <style>{`
        .home-services-section{overflow:hidden}
        .home-services-marquee{position:relative;width:100vw;margin-left:calc(50% - 50vw);overflow-x:auto;overflow-y:hidden;padding:8px 0 24px;scrollbar-width:none;cursor:grab;touch-action:pan-x;user-select:none}
        .home-services-marquee::-webkit-scrollbar{display:none}
        .home-services-track{display:flex;width:max-content;gap:20px;padding-left:20px}
        .home-service-card{width:330px;flex:0 0 330px;background:#fff;border:1px solid #e0e7ef;border-radius:22px;overflow:hidden;box-shadow:0 12px 34px rgba(11,29,64,.06);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease;display:flex;flex-direction:column;text-decoration:none}
        .home-service-card:hover{transform:translateY(-5px);box-shadow:0 20px 44px rgba(11,29,64,.11);border-color:#d1dce8}
        .home-service-image{height:185px;position:relative;overflow:hidden;background:#0b1d40}
        .home-service-image img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
        .home-service-card:hover .home-service-image img{transform:scale(1.04)}
        .home-service-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,21,47,.08),rgba(7,21,47,.56))}
        .home-service-body{padding:22px 23px 24px;display:flex;flex-direction:column;min-height:190px}
        .home-service-body h3{margin:0 0 8px;color:var(--navy);font-size:21px;line-height:1.2}
        .home-service-body p{margin:0;color:var(--muted);font-size:14px;line-height:1.6}
        .home-service-link{margin-top:auto;padding-top:18px;color:var(--orange);font-size:13px;font-weight:900}
        .home-service-link b{font-size:17px;margin-left:4px}
        .home-services-mobile-note{display:none;color:var(--muted);font-size:12px;text-align:center;margin-top:2px}
        .home-industry-card{overflow:hidden;padding:0 0 24px}
        .home-industry-media{height:155px;margin-bottom:22px;overflow:hidden;background:#0b1d40}
        .home-industry-media img{width:100%;height:100%;display:block;object-fit:cover}
        .home-industry-card h3,.home-industry-card p{margin-left:28px;margin-right:28px}
        @media(max-width:900px){.home-service-card{width:300px;flex-basis:300px}}
        @media(max-width:640px){.home-services-marquee{padding:8px 0 18px}.home-services-track{gap:16px;padding:0 20px}.home-service-card{width:285px;flex-basis:285px}.home-services-mobile-note{display:block}.home-industry-media{height:145px}}
        @media(prefers-reduced-motion:reduce){.home-services-track{scroll-behavior:auto}}
      `}</style>
    </>
  );
}