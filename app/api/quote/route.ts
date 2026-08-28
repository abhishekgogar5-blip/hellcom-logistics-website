import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot field: real users never fill this.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const company = clean(body.company);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const pickup = clean(body.pickup);
    const delivery = clean(body.delivery);
    const material = clean(body.material);
    const vehicle = clean(body.vehicle);
    const details = clean(body.details);

    if (!name || !phone || !pickup || !delivery) {
      return NextResponse.json(
        { ok: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const salesEmail = process.env.SALES_EMAIL || "sales@hellcomlogistics.com";

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS environment variables.");
      return NextResponse.json(
        { ok: false, message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `New Quote Request — ${name}${company ? ` | ${company}` : ""}`;

    const text = [
      "HELLCOM LOGISTICS — NEW WEBSITE QUOTE REQUEST",
      "",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Pickup: ${pickup}`,
      `Delivery: ${delivery}`,
      `Material: ${material || "Not provided"}`,
      `Vehicle: ${vehicle || "Not provided"}`,
      "",
      "Additional Details:",
      details || "Not provided",
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172b4d">
        <h2 style="color:#ff6b00;margin-bottom:4px">New Website Quote Request</h2>
        <p style="margin-top:0">HELLCOM LOGISTICS</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:700px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(company || "Not provided")}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email || "Not provided")}</td></tr>
          <tr><td><strong>Pickup</strong></td><td>${escapeHtml(pickup)}</td></tr>
          <tr><td><strong>Delivery</strong></td><td>${escapeHtml(delivery)}</td></tr>
          <tr><td><strong>Material</strong></td><td>${escapeHtml(material || "Not provided")}</td></tr>
          <tr><td><strong>Vehicle</strong></td><td>${escapeHtml(vehicle || "Not provided")}</td></tr>
          <tr><td><strong>Additional Details</strong></td><td>${escapeHtml(details || "Not provided").replace(/\n/g, "<br>")}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `HELLCOM Logistics Website <${smtpUser}>`,
      to: salesEmail,
      replyTo: email || undefined,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form email error:", error);
    return NextResponse.json(
      { ok: false, message: "We could not send your request. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
