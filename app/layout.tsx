import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HELLCOM Logistics | Move With Trust",
  description:
    "HELLCOM Logistics provides reliable B2B transportation and logistics solutions with transparent communication and accountable service.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
         <Link href="/" className="brand" aria-label="HELLCOM Logistics home">
  <img
    src="/hellcom-logo.png"
    alt="HELLCOM Logistics"
    className="brand-logo"
  />
</Link>

            <nav className="desktop-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <Link href="/quote" className="btn btn-primary nav-cta">
              Get a Quote
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <Link href="/" className="footer-brand">HELLCOM<span> LOGISTICS</span></Link>
              <p className="footer-tagline">Move With Trust.</p>
              <p className="muted">
                Reliable B2B logistics and transportation solutions built around accountability.
              </p>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="mailto:info@hellcomlogistics.com">info@hellcomlogistics.com</a>
              <Link href="/quote">Request a Quote</Link>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© 2026 HELLCOM Logistics. All rights reserved.</span>
            <span>Move With Trust.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
