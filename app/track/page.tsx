import Link from "next/link";

export const metadata = {
  title: "Track Shipment",
  description: "Track your HELLCOM Logistics shipment. Online shipment tracking is coming soon.",
};

export default function TrackShipmentPage() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
        <p className="eyebrow">HELLCOM Logistics</p>
        <h1>Track your shipment.</h1>
        <p className="lead" style={{ margin: "18px auto 30px" }}>
          Our shipment tracking system is currently being developed. Once connected,
          customers will be able to track shipment status and milestones here.
        </p>
        <Link href="/contact" className="btn btn-primary">Contact our team</Link>
      </div>
    </section>
  );
}
