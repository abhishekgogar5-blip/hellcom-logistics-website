import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (clean(body.website)) return NextResponse.json({ ok: true });

    const name = clean(body.name);
    const company = clean(body.company);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const service = clean(body.service);
    const tos = clean(body.tos);
    const originPort = clean(body.originPort);
    const originCityPin = clean(body.originCityPin);
    const destinationPort = clean(body.destinationPort);
    const destinationCityPin = clean(body.destinationCityPin);
    const pickup = clean(body.pickup);
    const delivery = clean(body.delivery);
    const weight = clean(body.weight);
    const dimensions = clean(body.dimensions);
    const material = clean(body.material);
    const vehicle = clean(body.vehicle);
    const details = clean(body.details);

    if (!name || !phone || !service) {
      return NextResponse.json({ ok: false, message: "Please complete all required fields." }, { status: 400 });
    }

    const freightServices = ["Air", "FCL", "LCL"];
    if (freightServices.includes(service)) {
      if (!tos || !originPort || !originCityPin || !destinationPort || !destinationCityPin || !weight || !dimensions || !material) {
        return NextResponse.json({ ok: false, message: "Please complete all required shipment details." }, { status: 400 });
      }
    }

    if (service === "Transportation" && (!pickup || !delivery || !vehicle)) {
      return NextResponse.json({ ok: false, message: "Please complete the required transportation details." }, { status: 400 });
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const salesEmail = process.env.SALES_EMAIL || "sales@hellcomlogistics.com";

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS environment variables.");
      return NextResponse.json({ ok: false, message: "Email service is not configured yet." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `New Quote Request — ${service} — ${name}${company ? ` | ${company}` : ""}`;

    const fields = [
      "HELLCOM LOGISTICS — NEW WEBSITE QUOTE REQUEST",
      "",
      "CONTACT INFORMATION",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      "",
      `SERVICE: ${service}`,
      ...(service === "Transportation"
        ? [
            `Pickup Location: ${pickup}`,
            `Delivery Location: ${delivery}`,
            `Material Type: ${material || "Not provided"}`,
            `Vehicle Requirement: ${vehicle}`,
          ]
        : [
            `TOS: ${tos}`,
            `Port of Loading: ${originPort}`,
            `Loading City / PIN: ${originCityPin}`,
            `Port of Destination: ${destinationPort}`,
            `Destination City / PIN: ${destinationCityPin}`,
            `Weight: ${weight}`,
            `Dimensions: ${dimensions}`,
            `Material Type: ${material}`,
          ]),
      "",
      "Additional Details:",
      details || "Not provided",
    ];

    const text = fields.join("\n");

    const rows = [
      ["Name", name],
      ["Company", company || "Not provided"],
      ["Phone", phone],
      ["Email", email || "Not provided"],
      ["Service", service],
      ...(service === "Transportation"
        ? [
            ["Pickup Location", pickup],
            ["Delivery Location", delivery],
            ["Material Type", material || "Not provided"],
            ["Vehicle Requirement", vehicle],
          ]
        : [
            ["TOS", tos],
            ["Port of Loading", originPort],
            ["Loading City / PIN", originCityPin],
            ["Port of Destination", destinationPort],
            ["Destination City / PIN", destinationCityPin],
            ["Weight", weight],
            ["Dimensions", dimensions],
            ["Material Type", material],
          ]),
      ["Additional Details", details || "Not provided"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172b4d">
        <h2 style="color:#ff6b00;margin-bottom:4px">New Website Quote Request</h2>
        <p style="margin-top:0">HELLCOM LOGISTICS · ${escapeHtml(service)}</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:700px">
          ${rows.map(([label, value]) => `<tr><td style="vertical-align:top"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("")}
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
    return NextResponse.json({ ok: false, message: "We could not send your request. Please try again." }, { status: 500 });
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
