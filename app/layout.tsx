import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hellcomlogistics.com"),
  title: "HELLCOM Logistics | Move With Trust",
  description:
    "HELLCOM Logistics provides reliable B2B transportation and end-to-end logistics solutions across India, backed by 27 years of transportation experience.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://hellcomlogistics.com/",
    siteName: "HELLCOM Logistics",
    title: "HELLCOM Logistics | Move With Trust",
    description:
      "Reliable B2B transportation and end-to-end logistics solutions across India, backed by 27 years of transportation experience.",
  },
  twitter: {
    card: "summary",
    title: "HELLCOM Logistics | Move With Trust",
    description:
      "Reliable B2B transportation and end-to-end logistics solutions across India, backed by 27 years of transportation experience.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=6", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.svg?v=6", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.svg?v=6",
    apple: "/favicon.svg?v=6",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HELLCOM Logistics",
  url: "https://hellcomlogistics.com/",
  logo: "https://hellcomlogistics.com/hellcom-logo.png",
  description:
    "HELLCOM Logistics provides reliable B2B transportation and end-to-end logistics solutions across India, backed by 27 years of transportation experience.",
  slogan: "Move With Trust",
  parentOrganization: {
    "@type": "Organization",
    name: "Shri Shyam Trans Logistics",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HELLCOM Logistics",
  alternateName: "HELLCOM",
  url: "https://hellcomlogistics.com/",
  publisher: {
    "@type": "Organization",
    name: "HELLCOM Logistics",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand" aria-label="HELLCOM Logistics home">
              <img src="/hellcom-logo.png" alt="HELLCOM Logistics" className="brand-logo" />
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/quote" className="btn btn-primary nav-cta">Get a Quote</Link>
          </div>
        </header>

        <main>{children}</main>

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
