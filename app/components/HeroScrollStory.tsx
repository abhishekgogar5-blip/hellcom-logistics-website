"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Story = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const stories: Story[] = [
  {
    number: "01",
    eyebrow: "Warehousing",
    title: "Store smarter.\nMove faster.",
    description: "Flexible warehousing support for receiving, storage, handling and dispatch — built around the way your business moves.",
    image: "/visuals/hellcom-1.webp",
    alt: "HELLCOM Logistics warehouse loading operation",
  },
  {
    number: "02",
    eyebrow: "Haulage & Inland Logistics",
    title: "Every route.\nOne accountable team.",
    description: "Reliable road movement connecting plants, warehouses, ports and customers with clear coordination from pickup to delivery.",
    image: "/visuals/hellcom-2.webp",
    alt: "HELLCOM Logistics truck on the road",
  },
  {
    number: "03",
    eyebrow: "Customs Clearance (Import / Export)",
    title: "Clear customs.\nKeep cargo moving.",
    description: "Import and export coordination designed to keep documentation, clearance and cargo movement aligned.",
    image: "/visuals/hellcom-3.webp",
    alt: "HELLCOM Logistics container handling operation",
  },
  {
    number: "04",
    eyebrow: "Sea Freight Forwarding (FCL / LCL)",
    title: "Across oceans.\nWithout the complexity.",
    description: "FCL and LCL sea freight coordination for dependable international movement, port connectivity and shipment visibility.",
    image: "/visuals/4.png",
    alt: "HELLCOM Logistics sea freight containers",
  },
  {
    number: "05",
    eyebrow: "Air Freight",
    title: "When time matters.\nFly it faster.",
    description: "Air freight solutions for urgent and time-sensitive cargo, connecting your shipments to global destinations.",
    image: "/visuals/hellcom-5.webp",
    alt: "HELLCOM Logistics air freight aircraft",
  },
];

const heroStyles = `
  .hero-story-copy-panel {
    max-width: 760px;
    padding: 30px 38px 34px 0;
    border-radius: 0 28px 28px 0;
    background: linear-gradient(90deg, rgba(5,18,43,.94) 0%, rgba(5,18,43,.82) 55%, rgba(5,18,43,.24) 88%, rgba(5,18,43,0) 100%);
    text-shadow: 0 2px 18px rgba(0,0,0,.34);
  }
  .hero-story-copy-panel .hero-story-title {
    text-shadow: 0 4px 26px rgba(0,0,0,.55);
  }
  .hero-story-copy-panel .hero-story-description {
    color: #fff;
    font-weight: 600;
    max-width: 640px;
    text-shadow: 0 2px 12px rgba(0,0,0,.65);
  }
  .hero-story-side { position: relative; }
  .hero-story-brand-line,
  .hero-story-progress {
    background: rgba(5,18,43,.72);
    border: 1px solid rgba(255,255,255,.22);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 14px 36px rgba(0,0,0,.22);
  }
  .hero-story-brand-line {
    padding: 12px 16px;
    border-radius: 14px;
    min-width: 210px;
  }
  .hero-story-progress {
    width: min(390px, 100%);
    padding: 20px 22px;
    border-radius: 20px;
    gap: 16px;
  }
  .hero-story-progress-item {
    grid-template-columns: 34px minmax(28px, 1fr) minmax(0, 220px);
    gap: 12px;
    min-height: 22px;
    font-size: 11px;
  }
  .hero-story-progress-item strong {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
    line-height: 1.25;
  }
  .hero-story-image img { filter: saturate(1.03) contrast(1.04); }
  .hero-story-vignette {
    background:
      linear-gradient(90deg, rgba(5,18,43,.98) 0%, rgba(5,18,43,.82) 26%, rgba(5,18,43,.30) 62%, rgba(5,18,43,.42) 100%),
      linear-gradient(0deg, rgba(5,18,43,.82) 0%, transparent 45%, rgba(5,18,43,.18) 100%);
  }
  @media (max-width: 1100px) {
    .hero-story-content { grid-template-columns: minmax(0, 1fr) 320px; gap: 24px; }
    .hero-story-progress { width: 320px; }
    .hero-story-progress-item { grid-template-columns: 30px 28px minmax(0, 1fr); }
  }
  @media (max-width: 900px) {
    .hero-story-content { grid-template-columns: 1fr; gap: 0; }
    .hero-story-copy { padding-top: 0; }
    .hero-story-copy-panel { max-width: 100%; padding: 24px 22px; border-radius: 18px; background: rgba(5,18,43,.76); }
    .hero-story-title { font-size: clamp(44px, 12vw, 70px); }
    .hero-story-description { font-size: 15px; }
    .hero-story-side { display: none; }
    .hero-story-bottom { padding-bottom: 14px; }
  }
`;

export default function HeroScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    let lastIndex = -1;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const exact = progress * (stories.length - 1);
      const index = Math.min(Math.max(Math.round(exact), 0), stories.length - 1);

      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        const distance = Math.abs(exact - i);
        const opacity = Math.max(0, 1 - distance);
        const scale = 1.055 - Math.min(distance, 1) * 0.025;
        const shift = (i - exact) * 1.25;
        el.style.opacity = String(opacity);
        el.style.transform = `scale(${scale}) translate3d(${shift}%, 0, 0)`;
        el.style.zIndex = String(20 - Math.round(distance * 10));
      });

      if (index !== lastIndex) {
        lastIndex = index;
        setActive(index);
      }
      section.style.setProperty("--story-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const current = stories[active];

  return (
    <section ref={sectionRef} className="hero-scroll-story" style={{ height: `${stories.length * 100}vh` }}>
      <style>{heroStyles}</style>
      <div className="hero-story-sticky">
        <div className="hero-story-media" aria-hidden="true">
          {stories.map((story, i) => (
            <div
              className="hero-story-image"
              key={story.image}
              ref={(el) => { imageRefs.current[i] = el; }}
              style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 20 : 0 }}
            >
              <img
                src={story.image}
                alt=""
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
          <div className="hero-story-vignette" />
          <div className="hero-story-grid" />
          <div className="hero-story-orange-glow" />
        </div>

        <div className="container hero-story-content">
          <div className="hero-story-copy">
            <div className="hero-story-copy-panel">
              <div className="hero-story-kicker">
                <span className="hero-story-number">{current.number}</span>
                <span>{current.eyebrow}</span>
              </div>
              <h1 key={current.number} className="hero-story-title">
                {current.title.split("\n").map((line) => <span key={line}>{line}</span>)}
              </h1>
              <p key={`desc-${current.number}`} className="hero-story-description">{current.description}</p>
              <div className="hero-story-actions">
                <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
                <Link href="/services" className="btn btn-story-light">Explore Services</Link>
              </div>
            </div>
          </div>

          <div className="hero-story-side">
            <div className="hero-story-brand-line">
              <span>HELLCOM LOGISTICS</span>
              <span>MOVE WITH TRUST.</span>
            </div>
            <div className="hero-story-progress" aria-label="Hero services">
              {stories.map((story, i) => (
                <div className={`hero-story-progress-item ${i === active ? "is-active" : ""}`} key={story.number}>
                  <span>{story.number}</span>
                  <i />
                  <strong>{story.eyebrow}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-story-bottom">
          <div className="container">
            <span className="hero-story-scroll-line" />
            <span>Scroll to explore</span>
            <span className="hero-story-scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
