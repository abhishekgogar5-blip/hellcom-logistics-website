"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";

type Service = readonly [string, string, string, string];

type HomeServicesCarouselProps = {
  services: readonly Service[];
};

export default function HomeServicesCarousel({ services }: HomeServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    draggingRef.current = true;
    movedRef.current = false;
    startXRef.current = event.clientX;
    startScrollLeftRef.current = track.scrollLeft;
    track.style.cursor = "grabbing";
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !draggingRef.current) return;

    const distance = event.clientX - startXRef.current;
    if (Math.abs(distance) > 4) movedRef.current = true;
    track.scrollLeft = startScrollLeftRef.current - distance;
  };

  const stopDragging = () => {
    const track = trackRef.current;
    draggingRef.current = false;
    if (track) track.style.cursor = "grab";
  };

  const preventClickAfterDrag = (event: MouseEvent<HTMLDivElement>) => {
    if (movedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      movedRef.current = false;
    }
  };

  return (
    <div
      className="home-services-marquee"
      aria-label="HELLCOM services"
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onClickCapture={preventClickAfterDrag}
      style={{ cursor: "grab" }}
    >
      <div className="home-services-track">
        {services.map(([num, title, desc, image]) => (
          <Link
            href={`/services#service-${num}`}
            className="home-service-card"
            key={num}
          >
            <div className="home-service-image">
              <img src={image} alt={`${title} logistics`} loading="lazy" />
            </div>
            <div className="home-service-body">
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="home-service-link">Explore service <b>→</b></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
