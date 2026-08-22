"use client";

import { FormEvent } from "react";

export default function QuotePage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thanks — your quote request has been captured for this demo. Connect this form to your email/CRM before launch.");
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Get a Quote</div>
          <h1>Tell us what needs moving.</h1>
          <p>Share the basics below. This first version is a front-end form ready to be connected to email or your CRM.</p>
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
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">Request Quote</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}