"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/visuals/hellcom-1.webp",
    eyebrow: "01 — WAREHOUSE",
    title: "Every movement starts with control.",
    text: "Disciplined loading, clear ownership and reliable handoffs keep your cargo moving from the first touchpoint.",
  },
  {
    image: "/visuals/hellcom-2.webp",
    eyebrow: "02 — DISTRIBUTION",
    title: "Connected operations. Fewer delays.",
    text: "From containers and hubs to distribution points, HELLCOM keeps every movement connected to the next step.",
  },
  {
    image: "/visuals/hellcom-3.webp",
    eyebrow: "03 — SURFACE TRANSPORT",
    title: "One route. One accountable team.",
    text: "Road transportation designed around visibility, coordination and dependable execution across every touchpoint.",
  },
  {
    image: "/visuals/hellcom-4.webp",
    eyebrow: "04 — AIR FREIGHT",
    title: "When speed matters, move with confidence.",
    text: "Time-sensitive freight supported by the same principle behind every HELLCOM movement: Move With Trust.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function VisualStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const headerOffset = window.innerWidth <= 640 ? 68 : 76;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const stickyHeight = window.innerHeight - headerOffset;
      const scrollDistance = Math.max(1, section.offsetHeight - stickyHeight);
      const raw = (window.scrollY - (sectionTop - headerOffset)) / scrollDistance;

      setProgress(clamp(raw, 0, 1));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scenePosition = progress * (slides.length - 1);
  const activeScene = Math.min(
    slides.length - 1,
    Math.round(scenePosition),
  );

  return (
    <section
      ref={sectionRef}
      className="visual-story"
      aria-label="HELLCOM logistics visual story"
    >
      <div className="visual-story-stage">
        <div className="visual-story-media" aria-hidden="true">
          {slides.map((slide, index) => {
            const distance = Math.abs(scenePosition - index);
            const opacity = clamp(1 - distance * 1.55, 0, 1);
            const scale = 1.08 - Math.min(distance, 1) * 0.045;
            const translateX = (index - scenePosition) * 2.5;

            return (
              <img
                key={slide.image}
                src={slide.image}
                alt=""
                className="visual-story-image"
                style={{
                  opacity,
                  transform: `scale(${scale}) translate3d(${translateX}%, 0, 0)`,
                }}
              />
            );
          })}
          <div className="visual-story-shade" />
        </div>

        <div className="visual-story-content">
          {slides.map((slide, index) => {
            const distance = Math.abs(scenePosition - index);
            const opacity = clamp(1 - distance * 2.2, 0, 1);
            const translateY = (index - scenePosition) * 70;

            return (
              <article
                className="visual-story-copy"
                key={slide.title}
                aria-hidden={activeScene !== index}
                style={{
                  opacity,
                  transform: `translate3d(0, ${translateY}px, 0)`,
                  pointerEvents: activeScene === index ? "auto" : "none",
                }}
              >
                <div className="visual-story-eyebrow">{slide.eyebrow}</div>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </article>
            );
          })}
        </div>

        <div className="visual-story-ui" aria-hidden="true">
          <div className="visual-story-counter">
            <strong>{String(activeScene + 1).padStart(2, "0")}</strong>
            <span>/ {String(slides.length).padStart(2, "0")}</span>
          </div>
          <div className="visual-story-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={index === activeScene ? "is-active" : ""}
              />
            ))}
          </div>
          <div className="visual-story-scroll">
            <span>Scroll to explore</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
