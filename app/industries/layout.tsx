import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | B2B Logistics Solutions",
  description:
    "Discover how HELLCOM Logistics supports corporates, manufacturers, government bodies, retail, e-commerce and other physical-product businesses.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries Served by HELLCOM Logistics",
    description:
      "Industry-focused transportation, warehousing and distribution support designed around real business supply chains.",
    url: "https://hellcomlogistics.com/industries",
  },
};

export default function IndustriesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
