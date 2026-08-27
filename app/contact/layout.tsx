import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HELLCOM Logistics",
  description:
    "Contact HELLCOM Logistics for freight forwarding, transportation, customs clearance, warehousing and distribution requirements across India.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact HELLCOM Logistics",
    description:
      "Talk to HELLCOM Logistics about your shipment, route, cargo and recurring transportation requirements.",
    url: "https://hellcomlogistics.com/contact",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
