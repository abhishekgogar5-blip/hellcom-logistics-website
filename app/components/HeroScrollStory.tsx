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
    description:
      "Flexible warehousing support for receiving, storage, handling and dispatch — built around the way your business moves.",
    image: "/visuals/hellcom-1.webp",
    alt: "HELLCOM logistics warehouse loading operation",
  },
  {
    number: "02",
    eyebrow: "Haulage & Inland Logistics",
    title: "Every route.\nOne accountable team.",
    description:
      "Reliable road movement connecting plants, warehouses, ports and customers with clear coordination from pickup to delivery.",
    image: "/visuals/hellcom-2.webp",
    alt: "HELLCOM logistics road transportation",
  },
  {
    number: "03",
    eyebrow: "Customs Clearance",
    title: "Through customs.\nWithout the confusion.",
    description:
      "Import and export coordination designed to keep documentation, clearance and cargo movement aligned.",
    image: "/visuals/hellcom-3.webp",
    alt: "HELLCOM logistics container and customs operation",
  },
  {
    number: "04",
    eyebrow: "Freight Forwarding • Air / Sea",
    title: "From origin\nto destination.",
    description:
      "Air and sea freight coordination for businesses that need dependable international movement and visibility.",
    image: "/visuals/hellcom-4.webp",
    alt: "HELLCOM logistics air and sea freight",
  },
];

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
      const index = Math.min(Math.floor(exact + 0.5), stories.length - 1);
      const local = exact - Math.floor(exact);

      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        const distance = Math.abs(exact - i);
        const opacity = Math.max(0, 1 - distance * 1.35);
        const scale = 1.08 - Math.min(distance, 1) * 0.05;
        const shift = (i - exact) * 3;
        el.style.opacity = String(opacity);
        el.style.transform = `scale(${scale}) translate3d(${shift}%, 0, 0)`;
      });

      if (index !== lastIndex) {
        lastIndex = index;
        setActive(index);
      }

      section.style.setProperty("--story-progress", progress.toFixed(4));
      section.style.setProperty("--story-local", local.toFixed(4));
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
    <section ref={sectionRef} className="hero-scroll-story">
      <div className="hero-story-sticky">
        <div className="hero-story-media" aria-hidden="true">
          {stories.map((story, i) => (
            <div
              className="hero-story-image"
              key={story.image}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <img src={story.image} alt="" />
            </div>
          ))}
          <div className="hero-story-vignette" />
          <div className="hero-story-grid" />
          <div className="hero-story-orange-glow" />
        </div>

        <div className="container hero-story-content">
          <div className="hero-story-copy">
            <div className="hero-story-kicker">
              <span className="hero-story-number">{current.number}</span>
              <span>{current.eyebrow}</span>
            </div>

            <h1 key={current.number} className="hero-story-title">
              {current.title.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>

            <p key={`desc-${current.number}`} className="hero-story-description">
              {current.description}
            </p>

            <div className="hero-story-actions">
              <Link href="/quote" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="btn btn-story-light">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-story-side">
            <div className="hero-story-brand-line">
              <span>HELLCOM LOGISTICS</span>
              <span>MOVE WITH TRUST.</span>
            </div>

            <div className="hero-story-progress">
              {stories.map((story, i) => (
                <div
                  className={`hero-story-progress-item ${i === active ? "is-active" : ""}`}
                  key={story.number}
                >
                  <span>{story.number}</span>
                  <i />
                  <strong>{story.eyebrow.split(" • ")[0]}</strong>
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
