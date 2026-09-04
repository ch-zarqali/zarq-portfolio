"use client";

export default function ResumeSection() {
  const services = [
    {
      number: "01",
      icon: "🔎",
      title: "Product Research",
      items: [
        "Product opportunity research",
        "Market analysis",
        "Competitor identification",
        "Product differentiation ideas",
        "Basic profitability analysis",
      ],
    },
    {
      number: "02",
      icon: "📊",
      title: "Competitor Analysis",
      items: [
        "Competitor comparison",
        "Pricing analysis",
        "Review analysis",
        "Feature comparison",
        "Competitor weaknesses/opportunities",
      ],
    },
    {
      number: "03",
      icon: "🔑",
      title: "Keyword Research",
      items: [
        "Primary keywords",
        "Long-tail keywords",
        "Search-intent analysis",
        "Keyword organization",
      ],
    },
    {
      number: "04",
      icon: "📝",
      title: "Listing Optimization",
      items: [
        "Title optimization",
        "Bullet-point optimization",
        "Product description",
        "Keyword placement",
        "Competitor listing analysis",
      ],
    },
    {
      number: "05",
      icon: "📦",
      title: "Product Improvement",
      items: [
        "Customer pain-point research",
        "Feature improvement ideas",
        "Packaging ideas",
        "Differentiation strategy",
      ],
    },
  ];

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">MY SERVICES</h2>
      </div>

      <div className="services-pillar-grid">
        {services.map((service, idx) => (
          <div key={idx} className="about-pillar-card">
            <div className="service-card-top-row">
              <span className="about-pillar-number">{service.number}</span>
              <span className="service-card-icon-tag">{service.icon}</span>
            </div>
            <h3 className="service-card-heading">{service.title}</h3>

            <ul className="pillar-bullets-list">
              {service.items.map((item, itemIdx) => (
                <li key={itemIdx} className="pillar-bullet-item">
                  <span className="pillar-bullet-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
