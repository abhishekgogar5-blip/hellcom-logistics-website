import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Contact</div>
          <h1>Let's move something.</h1>
          <p>Tell us what you need to move, where it needs to go and how often you move it.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Reach HELLCOM</div>
            <h2>One clear point of contact.</h2>
            <div className="checks">
              <div className="check"><div className="check-mark">@</div><div><strong>Email</strong><div className="muted">info@hellcomlogistics.com</div></div></div>
              <div className="check"><div className="check-mark">Q</div><div><strong>Quotes</strong><div className="muted">Use our quote form for route-specific requirements.</div></div></div>
              <div className="check"><div className="check-mark">W</div><div><strong>WhatsApp</strong><div className="muted"><a href="https://wa.me/917666972483" target="_blank" rel="noopener noreferrer">+91 76669 72483</a></div></div></div>
            </div>
          </div>
          <div className="quote-box">
            <h3 style={{color:"var(--navy)",fontSize:28,margin:"0 0 10px"}}>Need a quote?</h3>
            <p className="muted">We can start with a single trial shipment or a recurring route requirement.</p>
            <Link href="/quote" className="btn btn-primary" style={{marginTop:20}}>Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}