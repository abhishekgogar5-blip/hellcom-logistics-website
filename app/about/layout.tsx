import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 27 Years of Logistics Experience",
  description:
    "Learn about HELLCOM Logistics, a new-generation logistics brand backed by Shri Shyam Trans Logistics and 27 years of Indian transportation experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About HELLCOM Logistics | 27 Years of Experience",
    description:
      "HELLCOM Logistics combines 27 years of Indian transportation experience with a modern, technology-enabled logistics approach.",
    url: "https://hellcomlogistics.com/about",
  },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
