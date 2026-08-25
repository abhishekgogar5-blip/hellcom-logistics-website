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
  { number: "01", eyebrow: "Warehousing", title: "Store smarter.\nMove faster.", description: "Flexible warehousing support for receiving, storage, handling and dispatch — built around the way your business moves.", image: "/visuals/hellcom-1.webp", alt: "HELLCOM Logistics warehouse loading operation" },
  { number: "02", eyebrow: "Haulage & Inland Logistics", title: "Every route.\nOne accountable team.", description: "Reliable road movement connecting plants, warehouses, ports and customers with clear coordination from pickup to delivery.", image: "/visuals/hellcom-2.webp", alt: "HELLCOM Logistics truck on the road" },
  { number: "03", eyebrow: "Customs Clearance (Import / Export)", title: "Clear customs.\nKeep cargo moving.", description: "Import and export coordination designed to keep documentation, clearance and cargo movement aligned.", image: "/visuals/hellcom-3.webp", alt: "HELLCOM Logistics container handling operation" },
  { number: "04", eyebrow: "Sea Freight Forwarding (FCL / LCL)", title: "Across oceans.\nWithout the complexity.", description: "FCL and LCL sea freight coordination for dependable international movement, port connectivity and shipment visibility.", image: "/visuals/4.png", alt: "HELLCOM Logistics sea freight containers" },
  { number: "05", eyebrow: "Air Freight", title: "When time matters.\nFly it faster.", description: "Air freight solutions for urgent and time-sensitive cargo, connecting your shipments to global destinations.", image: "/visuals/hellcom-5.webp", alt: "HELLCOM Logistics air freight aircraft" },
];

const heroStyles = `
  .hero-story-copy { align-self: center; transform: translateY(-2vh); }
  .hero-story-copy-panel { max-width: 700px; padding: 20px 30px 22px 0; border-radius: 0 22px 22px 0; background: linear-gradient(90deg, rgba(5,18,43,.78) 0%, rgba(5,18,43,.60) 55%, rgba(5,18,43,.14) 88%, rgba(5,18,43,0) 100%); text-shadow: 0 2px 14px rgba(0,0,0,.28); }
  .hero-story-copy-panel .hero-story-title { font-size: clamp(48px, 5.25vw, 74px) !important; line-height: .9 !important; letter-spacing: -.045em !important; margin: 14px 0 14px !important; max-width: 680px; text-shadow: 0 3px 18px rgba(0,0,0,.42); }
  .hero-story-copy-panel .hero-story-title span { display: block; }
  .hero-story-copy-panel .hero-story-description { color: #fff; font-size: clamp(14px, 1.05vw, 16px) !important; line-height: 1.42 !important; font-weight: 500; max-width: 600px; margin: 0 0 16px !important; text-shadow: 0 2px 9px rgba(0,0,0,.62); }
  .hero-story-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 0 !important; }
  .hero-story-actions .btn { white-space: nowrap; padding: 12px 19px; }

  /* Original lower-right service navigator: compact, line-led and number-free. */
  .hero-story-side { position: absolute; right: 24px; bottom: 0; width: min(465px, calc(100% - 48px)); height: auto; display: flex; flex-direction: column; justify-content: flex-end; align-items: stretch; padding: 24px 26px 27px; background: rgba(5,18,43,.88); border: 1px solid rgba(255,255,255,.18); border-bottom: 0; border-radius: 28px 28px 0 0; box-shadow: 0 -10px 30px rgba(0,0,0,.16); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .hero-story-brand-line { display: none; }
  .hero-story-progress { display: grid; gap: 0; width: 100%; margin: 0; }
  .hero-story-progress-item { display: grid; grid-template-columns: 98px minmax(0,1fr); align-items: center; gap: 14px; min-height: 52px; padding: 0; border: 0; border-radius: 0; background: transparent; color: rgba(255,255,255,.48); backdrop-filter: none; -webkit-backdrop-filter: none; transition: color .25s ease; }
  .hero-story-progress-item span { position: relative; display: block; font-size: 15px; line-height: 1.15; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; color: inherit; }
  .hero-story-progress-item span::before { content: ""; display: block; width: 98px; height: 2px; margin-bottom: 0; background: rgba(255,255,255,.28); transition: background .25s ease; }
  .hero-story-progress-item.active { background: transparent; color: #ffb27d; border: 0; box-shadow: none; }
  .hero-story-progress-item.active span::before { background: var(--orange); }
  .hero-story-image img { filter: saturate(1.03) contrast(1.03); }
  .hero-story-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 1; pointer-events: none; background: #05122b; }
  .hero-story-video-fallback { position: absolute; inset: 0; z-index: 0; background-size: cover; background-position: center; }
  .hero-story-video-shade { position: absolute; inset: 0; z-index: 2; background: rgba(5,18,43,.24); pointer-events: none; }
  .hero-story-vignette { z-index: 3; background: linear-gradient(90deg, rgba(5,18,43,.70) 0%, rgba(5,18,43,.48) 28%, rgba(5,18,43,.08) 65%, rgba(5,18,43,.18) 100%), linear-gradient(0deg, rgba(5,18,43,.34) 0%, transparent 48%, rgba(5,18,43,.08) 100%); }
  .hero-story-grid, .hero-story-orange-glow { z-index: 4; }
  .hero-story-content, .hero-story-bottom { position: relative; z-index: 5; }
  .hero-story-bottom { padding-bottom: 10px; }
  @media (max-width: 1100px) { .hero-story-content { grid-template-columns: minmax(0, 1fr) 285px; gap: 20px; } .hero-story-copy-panel .hero-story-title { font-size: clamp(46px, 5.3vw, 68px) !important; } .hero-story-side { right: 18px; width: min(430px, calc(100% - 36px)); } }
  @media (max-width: 900px) { .hero-story-content { grid-template-columns: 1fr; gap: 0; } .hero-story-copy { padding-top: 0; transform: translateY(-1vh); } .hero-story-copy-panel { max-width: 100%; padding: 18px 18px 20px; border-radius: 16px; background: rgba(5,18,43,.68); } .hero-story-copy-panel .hero-story-title { font-size: clamp(40px, 10vw, 58px) !important; line-height: .92 !important; margin: 12px 0 14px !important; } .hero-story-description { font-size: 14px !important; } .hero-story-actions .btn { padding: 11px 16px; } .hero-story-side { display: none; } .hero-story-bottom { padding-bottom: 8px; } .hero-story-video { object-position: center center; } .hero-story-video-shade { background: rgba(5,18,43,.30); } }
`;

export default function HeroScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    const playVideo = () => { const promise = video.play(); if (promise !== undefined) promise.catch(() => undefined); };
    playVideo();
    video.addEventListener("loadeddata", playVideo);
    document.addEventListener("visibilitychange", playVideo);
    return () => { video.removeEventListener("loadeddata", playVideo); document.removeEventListener("visibilitychange", playVideo); };
  }, []);

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
      if (index !== lastIndex) { lastIndex = index; setActive(index); }
      section.style.setProperty("--story-progress", progress.toFixed(4));
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { if (frame) window.cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const current = stories[active];

  return (
    <section ref={sectionRef} className="hero-scroll-story" style={{ height: `${stories.length * 88}vh` }}>
      <style>{heroStyles}</style>
      <div className="hero-story-sticky">
        <div className="hero-story-media" aria-hidden="true">
          <div className="hero-story-video-fallback" style={{ backgroundImage: `url(${stories[0].image})` }} />
          <video ref={videoRef} className="hero-story-video" src="/Videos/hellcom-hero.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
          <div className="hero-story-video-shade" />
          <div className="hero-story-vignette" />
          <div className="hero-story-grid" />
          <div className="hero-story-orange-glow" />
        </div>

        <div className="container hero-story-content">
          <div className="hero-story-copy">
            <div className="hero-story-copy-panel">
              <h1 key={current.number} className="hero-story-title">{current.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
              <p key={`desc-${current.number}`} className="hero-story-description">{current.description}</p>
              <div className="hero-story-actions"><Link href="/quote" className="btn btn-primary">Get a Quote</Link><Link href="/services" className="btn btn-story-light">Explore Services</Link></div>
            </div>
          </div>

          <div className="hero-story-side">
            <div className="hero-story-progress" aria-label="Hero services">
              {stories.map((story, index) => (
                <div key={story.number} className={`hero-story-progress-item${index === active ? " active" : ""}`}>
                  <span>{story.eyebrow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-story-bottom"><div className="container"><span className="hero-story-scroll-line" /><span>Scroll to explore</span><span className="hero-story-scroll-arrow">↓</span></div></div>
      </div>
    </section>
  );
}` }