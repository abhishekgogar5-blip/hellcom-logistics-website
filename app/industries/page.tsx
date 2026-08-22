const items = [
  ["Manufacturing","Plant-to-warehouse and customer distribution support."],
  ["Automotive & Auto Components","Recurring industrial freight across key corridors."],
  ["Engineering","Project and regular movement for machinery and components."],
  ["Electrical & Electronics","B2B movement for finished goods and industrial products."],
  ["FMCG & Consumer Products","Distribution-oriented movement with service discipline."],
  ["Retail & E-commerce","Flexible transport support for growing product businesses."],
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Industries</div>
          <h1>Built for businesses that move goods.</h1>
          <p>HELLCOM focuses on industries where reliable physical movement is part of everyday business.</p>
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