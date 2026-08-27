import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics Services | Air, Ocean, Rail & More",
  description:
    "Explore HELLCOM Logistics services including air freight, ocean freight, rail freight, inland transportation, courier services, customs clearance and 3PL warehousing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "HELLCOM Logistics Services | Freight & Transportation",
    description:
      "End-to-end freight forwarding, transportation, customs clearance, courier and 3PL warehousing solutions for business shipments.",
    url: "https://hellcomlogistics.com/services",
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
