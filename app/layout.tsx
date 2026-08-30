import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const faviconPath = "/visuals/faviconnn.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellcomlogistics.com"),
  title: {
    default: "HELLCOM Logistics | Freight Forwarding & Transportation",
    template: "%s | HELLCOM Logistics",
  },
  description:
    "HELLCOM Logistics provides freight forwarding, transportation, customs clearance, warehousing and 3PL solutions across India, backed by 27 years of experience.",
  applicationName: "HELLCOM Logistics",
  keywords: [
    "HELLCOM Logistics", "freight forwarding India", "logistics company India",
    "transportation services India", "air freight", "ocean freight", "rail freight",
    "inland transportation", "customs clearance", "3PL warehousing",
  ],
  authors: [{ name: "HELLCOM Logistics" }],
  creator: "HELLCOM Logistics",
  publisher: "HELLCOM Logistics",
  category: "Logistics and Transportation",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://hellcomlogistics.com/",
    siteName: "HELLCOM Logistics",
    title: "HELLCOM Logistics | Freight Forwarding & Transportation",
    description:
      "Freight forwarding, transportation, customs clearance, warehousing and 3PL solutions across India, backed by 27 years of transportation experience.",
    images: [{ url: "/hellcom-logo.png", width: 1200, height: 630, alt: "HELLCOM Logistics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HELLCOM Logistics | Freight Forwarding & Transportation",
    description:
      "Freight forwarding, transportation, customs clearance, warehousing and 3PL logistics solutions across India.",
    images: ["/hellcom-logo.png"],
  },
  icons: {
    icon: [
      { url: faviconPath, sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: faviconPath,
    apple: [{ url: faviconPath, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "HELLCOM Logistics",
  url: "https://hellcomlogistics.com/", logo: "https://hellcomlogistics.com/hellcom-logo.png",
  description: "HELLCOM Logistics provides freight forwarding, transportation, customs clearance, warehousing and 3PL solutions across India, backed by 27 years of experience.",
  slogan: "Move With Trust", parentOrganization: { "@type": "Organization", name: "Shri Shyam Trans Logistics" },
};
const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", name: "HELLCOM Logistics",
  alternateName: "HELLCOM", url: "https://hellcomlogistics.com/", publisher: { "@type": "Organization", name: "HELLCOM Logistics" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand" aria-label="HELLCOM Logistics home"><img src="/hellcom-logo.png" alt="HELLCOM Logistics" className="brand-logo" /></Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/track" className="nav-track-link">Track Shipment</Link><Link href="/contact">Contact</Link>
            </nav>
            <Link href="/quote" className="btn btn-primary nav-cta">Get a Quote</Link>
          </div>
        </header>
        <main>{children}</main>
        <style>{`.industry-card:nth-child(10) .industry-image-wrap{background:#0b1733 url('/quick-commerce.svg?v=2') center/cover no-repeat}.industry-card:nth-child(10) .industry-image-wrap>img{display:none}.footer-grid{grid-template-columns:1.45fr .7fr .95fr 1.25fr}.footer-address{font-style:normal;color:#9fb0c8;line-height:1.65}.footer-grid a:hover{color:#fff}.nav-track-link{color:#0b1d40!important}.nav-track-link:hover{color:#ff6a00!important}@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.footer-grid{grid-template-columns:1fr}}`}</style>
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <Link href="/" className="footer-brand">HELLCOM<span> LOGISTICS</span></Link>
              <p className="footer-tagline">Move With Trust.</p>
              <p className="muted">Reliable B2B logistics and transportation solutions built around accountability.</p>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/track">Track Shipment</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="mailto:info@hellcomlogistics.com">info@hellcomlogistics.com</a>
              <a href="https://wa.me/917666972483" target="_blank" rel="noopener noreferrer">WhatsApp: +91 76669 72483</a>
              <Link href="/quote">Request a Quote</Link>
              <Link href="/contact">Contact Team</Link>
            </div>
            <div>
              <h4>Address</h4>
              <address className="footer-address">
                216, Shree Mahavir Plaza<br />
                Opposite Gajanan Petrol Pump<br />
                Mankoli Naka, Dapoda<br />
                Bhiwandi, Thane (West)<br />
                Maharashtra – 421302<br />
                India
              </address>
            </div>
          </div>
          <div className="container footer-bottom"><span>© 2026 HELLCOM Logistics. All rights reserved.</span><span>Move With Trust.</span></div>
        </footer>
      </body>
    </html>
  );
}
