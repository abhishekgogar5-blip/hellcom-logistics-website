const items = [
  ["FTL Transportation","Dedicated truck movement for larger or route-specific freight."],
  ["PTL Transportation","Flexible, cost-conscious movement for part-load consignments."],
  ["B2B Transportation","Plant-to-warehouse, warehouse-to-customer and inter-city movement."],
  ["Distribution","Planned multi-drop and multi-location delivery coordination."],
  ["Warehousing","Storage and dispatch support as the network expands."],
  ["Customized Solutions","A tailored plan based on lane, volume, cargo and service needs."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Services</div>
          <h1>Logistics that move business.</h1>
          <p>Start with the service you need today and scale into a broader logistics relationship as your network grows.</p>
        </div>
      </section>
      <section className="section">
        <div className="container cards">
          {items.map(([title, desc], index) => (
            <div className="card" key={title}>
              <div className="icon">{String(index + 1).padStart(2,"0")}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}