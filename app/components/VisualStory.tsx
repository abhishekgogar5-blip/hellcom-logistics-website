"use client";
import { useEffect, useState } from "react";
const slides=[
{image:"/visuals/hellcom-1.webp",eyebrow:"01 — WAREHOUSE",title:"From loading bay to destination.",text:"Coordinated movement starts with disciplined handling, clear ownership and a reliable handoff."},
{image:"/visuals/hellcom-2.webp",eyebrow:"02 — DISTRIBUTION",title:"Built to keep cargo moving.",text:"From containers to cross-dock operations, HELLCOM keeps every movement connected to the next step."},
{image:"/visuals/hellcom-3.webp",eyebrow:"03 — SURFACE TRANSPORT",title:"One route. Many touchpoints. One accountable team.",text:"Road transportation designed around visibility, coordination and dependable execution."},
{image:"/visuals/hellcom-4.webp",eyebrow:"04 — AIR FREIGHT",title:"When speed matters, move with confidence.",text:"Time-sensitive freight supported by the same principle behind every HELLCOM movement: Move With Trust."}
];
export default function VisualStory(){
 const [active,setActive]=useState(0);
 useEffect(()=>{const nodes=Array.from(document.querySelectorAll<HTMLElement>("[data-story-slide]"));const observer=new IntersectionObserver(entries=>{const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(v)setActive(Number((v.target as HTMLElement).dataset.storySlide));},{threshold:[.25,.5,.75],rootMargin:"-10% 0px -10% 0px"});nodes.forEach(n=>observer.observe(n));return()=>observer.disconnect()},[]);
 return <section className="visual-story" aria-label="HELLCOM logistics visual story"><div className="visual-story-media" aria-hidden="true">{slides.map((s,i)=><img key={s.image} src={s.image} alt="" className={i===active?"visual-story-image is-active":"visual-story-image"}/>)}<div className="visual-story-shade"/></div><div className="visual-story-track">{slides.map((s,i)=><article className="visual-story-slide" data-story-slide={i} key={s.title}><div className="visual-story-copy"><div className="visual-story-eyebrow">{s.eyebrow}</div><h2>{s.title}</h2><p>{s.text}</p><div className="visual-story-progress">0{i+1} <span>/</span> 04</div></div></article>)}</div></section>
}