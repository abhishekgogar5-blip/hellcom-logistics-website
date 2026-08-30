"use client";

import { FormEvent, useState } from "react";

type Service = "" | "Air" | "FCL" | "LCL" | "Transportation";

const incoterms = ["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CPT", "CIP", "DAP", "DPU", "DDP"];
const vehicles = ["14 Ft", "17 Ft", "19 Ft", "20 Ft", "22 Ft", "24 Ft", "32 Ft"];

export default function QuotePage() {
  const [service, setService] = useState<Service>("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isFreight = service === "Air" || service === "FCL" || service === "LCL";
  const isTransportation = service === "Transportation";

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
      if (!response.ok || !result.ok) throw new Error(result.message || "Unable to send request.");

      form.reset();
      setService("");
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
          <p>Share your requirement and our logistics team will review the best solution for your shipment.</p>
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
                  <input id="phone" name="phone" type="tel" required placeholder="+91..." />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="name@company.com" />
                </div>

                <div className="field full">
                  <label htmlFor="service">Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value as Service)}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Air">Air</option>
                    <option value="FCL">FCL</option>
                    <option value="LCL">LCL</option>
                    <option value="Transportation">Transportation</option>
                  </select>
                </div>

                {isFreight && (
                  <>
                    <div className="field full">
                      <label htmlFor="tos">TOS *</label>
                      <select id="tos" name="tos" required>
                        <option value="" disabled>Select TOS</option>
                        {incoterms.map((term) => <option key={term} value={term}>{term}</option>)}
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="originPort">Port of Loading *</label>
                      <input id="originPort" name="originPort" required placeholder="Port name" />
                    </div>
                    <div className="field">
                      <label htmlFor="originCityPin">City / PIN *</label>
                      <input id="originCityPin" name="originCityPin" required placeholder="City / PIN" />
                    </div>
                    <div className="field">
                      <label htmlFor="destinationPort">Port of Destination *</label>
                      <input id="destinationPort" name="destinationPort" required placeholder="Port name" />
                    </div>
                    <div className="field">
                      <label htmlFor="destinationCityPin">City / PIN *</label>
                      <input id="destinationCityPin" name="destinationCityPin" required placeholder="City / PIN" />
                    </div>
                    <div className="field">
                      <label htmlFor="weight">Weight *</label>
                      <input id="weight" name="weight" required placeholder="e.g. 500 kg" />
                    </div>
                    <div className="field">
                      <label htmlFor="dimensions">Dimensions *</label>
                      <input id="dimensions" name="dimensions" required placeholder="L × W × H" />
                    </div>
                    <div className="field full">
                      <label htmlFor="material">Material Type *</label>
                      <input id="material" name="material" required placeholder="e.g. Auto Components" />
                    </div>
                  </>
                )}

                {isTransportation && (
                  <>
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
                      <input id="material" name="material" placeholder="e.g. Auto Components" />
                    </div>
                    <div className="field">
                      <label htmlFor="vehicle">Vehicle Requirement *</label>
                      <select id="vehicle" name="vehicle" defaultValue="" required>
                        <option value="" disabled>Select vehicle</option>
                        {vehicles.map((vehicle) => <option key={vehicle} value={vehicle}>{vehicle}</option>)}
                      </select>
                    </div>
                  </>
                )}

                {service && (
                  <div className="field full">
                    <label htmlFor="details">Additional Details</label>
                    <textarea id="details" name="details" placeholder="Approx. weight, shipment frequency, preferred date, special handling, etc." />
                  </div>
                )}

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
                <div role="status" style={{ marginTop: 18, padding: "12px 14px", borderRadius: 10, background: status === "success" ? "#ecfdf3" : "#fff1f0", color: status === "success" ? "#146c43" : "#b42318" }}>
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
