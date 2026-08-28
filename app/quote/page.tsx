"use client";

import { FormEvent, useState } from "react";

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your quote request has been sent to HELLCOM Logistics. Our team will get back to you shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your request. Please try again.");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Get a Quote</div>
          <h1>Tell us what needs moving.</h1>
          <p>Share the basics below and our logistics team will review your requirement.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-box">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name *</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" placeholder="Company name" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" required placeholder="+91..." />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="name@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="pickup">Pickup Location *</label>
                  <input id="pickup" name="pickup" required placeholder="City / PIN" />
                </div>
                <div className="field">
                  <label htmlFor="delivery">Delivery Location *</label>
                  <input id="delivery" name="delivery" required placeholder="City / PIN" />
                </div>
                <div className="field">
                  <label htmlFor="material">Material Type</label>
                  <input id="material" name="material" placeholder="e.g. auto components" />
                </div>
                <div className="field">
                  <label htmlFor="vehicle">Vehicle Requirement</label>
                  <select id="vehicle" name="vehicle" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Mini / LCV</option>
                    <option>14–17 ft</option>
                    <option>19–22 ft</option>
                    <option>24–32 ft</option>
                    <option>Trailer</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="details">Additional Details</label>
                  <textarea id="details" name="details" placeholder="Approx. weight, shipment frequency, preferred date, special handling, etc." />
                </div>

                <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Request Quote"}
                </button>
              </div>

              {message && (
                <div
                  role="status"
                  style={{
                    marginTop: 18,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: status === "success" ? "#ecfdf3" : "#fff1f0",
                    color: status === "success" ? "#146c43" : "#b42318",
                  }}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
