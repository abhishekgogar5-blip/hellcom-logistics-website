"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function TrackShipmentPage() {
  const [trackingType, setTrackingType] = useState("Tracking ID");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!trackingNumber.trim()) return;
    setSubmitted(true);
  }

  return (
    <>
      <section className="track-hero">
        <div className="container track-hero-grid">
          <div className="track-copy">
            <p className="track-eyebrow">HELLCOM LOGISTICS • SHIPMENT VISIBILITY</p>
            <h1>Track your shipment.</h1>
            <p>
              Enter your Tracking ID, AWB number or LR number to check shipment
              status, current location, milestones and estimated delivery time.
            </p>
          </div>

          <div className="track-search-card">
            <div className="track-card-head">
              <div>
                <span className="track-card-kicker">SHIPMENT TRACKING</span>
                <h2>Where is your shipment?</h2>
              </div>
              <span className="track-live-dot" aria-label="Tracking system integration status" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="track-type-row" role="group" aria-label="Tracking number type">
                {["Tracking ID", "AWB", "LR Number"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={trackingType === type ? "track-type active" : "track-type"}
                    onClick={() => setTrackingType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <label className="track-label" htmlFor="tracking-number">
                {trackingType}
              </label>
              <div className="track-input-row">
                <input
                  id="tracking-number"
                  value={trackingNumber}
                  onChange={(event) => {
                    setTrackingNumber(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder={`Enter ${trackingType}`}
                  autoComplete="off"
                />
                <button className="btn btn-primary track-submit" type="submit">
                  Track Shipment →
                </button>
              </div>
              <p className="track-help">Example: HLC123456 • 123-45678901 • LR-2026-00125</p>
            </form>

            {submitted && (
              <div className="track-integration-note" role="status">
                <strong>Tracking interface is ready.</strong>
                <span>
                  Live shipment data will appear here once the HELLCOM tracking
                  backend/API is connected.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section track-workflow-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">WHAT YOU&apos;LL SEE</p>
              <h2>One view from pickup to delivery.</h2>
            </div>
            <p className="section-intro">
              The tracking experience is structured to connect directly with the
              future shipment management system.
            </p>
          </div>

          <div className="track-workflow-grid">
            <div className="track-workflow-card">
              <span>01</span>
              <strong>Shipment status</strong>
              <p>Live status such as Booked, Picked Up, In Transit, Out for Delivery or Delivered.</p>
            </div>
            <div className="track-workflow-card">
              <span>02</span>
              <strong>Current location</strong>
              <p>Latest available shipment location, hub or delivery point.</p>
            </div>
            <div className="track-workflow-card">
              <span>03</span>
              <strong>Milestones</strong>
              <p>A clear timeline of key shipment events from origin through destination.</p>
            </div>
            <div className="track-workflow-card">
              <span>04</span>
              <strong>ETA</strong>
              <p>Estimated delivery date and time when the connected system provides it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container track-bottom-cta">
          <div>
            <p className="kicker">NEED HELP?</p>
            <h2>Can&apos;t find your shipment?</h2>
            <p>Contact the HELLCOM team with your shipment reference and we&apos;ll help you with the next step.</p>
          </div>
          <div className="track-bottom-actions">
            <Link href="/contact" className="btn btn-primary">Contact Team</Link>
            <Link href="/quote" className="btn btn-secondary">Request a Quote</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .track-hero{background:linear-gradient(135deg,#07152f 0%,#0b1d40 58%,#102d5d 100%);color:#fff;padding:86px 0 76px;position:relative;overflow:hidden}
        .track-hero:after{content:"";position:absolute;width:480px;height:480px;right:-140px;top:-160px;border-radius:50%;background:rgba(255,106,0,.14);filter:blur(50px);pointer-events:none}
        .track-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center;position:relative;z-index:1}
        .track-copy{max-width:610px}.track-eyebrow{color:#ffb27d;font-size:11px;font-weight:900;letter-spacing:.16em;margin:0 0 16px}.track-copy h1{font-size:clamp(48px,6vw,76px);line-height:.96;letter-spacing:-.045em;margin:0 0 22px}.track-copy p:not(.track-eyebrow){color:#d8e3f2;font-size:18px;line-height:1.7;margin:0;max-width:570px}
        .track-search-card{background:#fff;color:#132033;border-radius:24px;padding:28px;box-shadow:0 24px 60px rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.35)}
        .track-card-head{display:flex;justify-content:space-between;align-items:flex-start;gap:15px;margin-bottom:22px}.track-card-kicker{display:block;color:#ff6a00;font-size:10px;font-weight:900;letter-spacing:.14em;margin-bottom:6px}.track-card-head h2{margin:0;color:#0b1d40;font-size:27px;line-height:1.1}.track-live-dot{width:12px;height:12px;border-radius:50%;background:#ff6a00;box-shadow:0 0 0 6px rgba(255,106,0,.12);margin:5px 5px 0 0}
        .track-type-row{display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap}.track-type{border:1px solid #dce3ec;background:#f8fafc;color:#53647a;padding:9px 13px;border-radius:999px;font:inherit;font-size:12px;font-weight:800;cursor:pointer}.track-type.active{background:#0b1d40;color:#fff;border-color:#0b1d40}.track-label{display:block;color:#0b1d40;font-size:12px;font-weight:800;margin-bottom:7px}.track-input-row{display:flex;gap:10px}.track-input-row input{min-width:0;flex:1;border:1px solid #d6dee8;border-radius:12px;padding:14px;font:inherit;outline:none}.track-input-row input:focus{border-color:#ff6a00;box-shadow:0 0 0 4px rgba(255,106,0,.1)}.track-submit{white-space:nowrap;border:0;cursor:pointer}.track-help{font-size:11px;color:#7a8797;margin:9px 0 0}.track-integration-note{margin-top:18px;padding:14px 16px;border-radius:12px;background:#fff7f1;border:1px solid #ffd9bf;color:#71401f;display:grid;gap:3px;font-size:12px}.track-integration-note strong{color:#d95500}.track-integration-note span{color:#806958}
        .track-workflow-section{padding-bottom:54px}.track-workflow-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.track-workflow-card{background:#fff;border:1px solid #e4eaf1;border-radius:18px;padding:22px;min-height:180px}.track-workflow-card span{display:block;color:#ff6a00;font-size:11px;font-weight:900;letter-spacing:.1em;margin-bottom:25px}.track-workflow-card strong{display:block;color:#0b1d40;font-size:18px;margin-bottom:7px}.track-workflow-card p{margin:0;color:#687280;font-size:13px;line-height:1.55}
        .track-bottom-cta{display:flex;align-items:center;justify-content:space-between;gap:30px}.track-bottom-cta h2{margin:0 0 8px}.track-bottom-cta p:not(.kicker){color:#687280;margin:0;max-width:680px}.track-bottom-actions{display:flex;gap:12px;flex-wrap:wrap;flex-shrink:0}
        @media(max-width:900px){.track-hero-grid{grid-template-columns:1fr}.track-workflow-grid{grid-template-columns:1fr 1fr}.track-bottom-cta{flex-direction:column;align-items:flex-start}}
        @media(max-width:640px){.track-hero{padding:58px 0}.track-search-card{padding:20px}.track-input-row{flex-direction:column}.track-submit{width:100%}.track-workflow-grid{grid-template-columns:1fr}.track-bottom-actions{width:100%}.track-bottom-actions .btn{flex:1}}
      `}</style>
    </>
  );
}
