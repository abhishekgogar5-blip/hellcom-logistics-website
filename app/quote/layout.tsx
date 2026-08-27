import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Logistics Quote | HELLCOM Logistics",
  description:
    "Request a logistics quote from HELLCOM Logistics. Share your pickup, delivery, cargo and frequency requirements for a tailored transportation solution.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Logistics Quote | HELLCOM Logistics",
    description:
      "Tell HELLCOM Logistics what needs moving and where it needs to go. Request a quote for your business shipment.",
    url: "https://hellcomlogistics.com/quote",
  },
};

export default function QuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
