"use client";

export default function PortfolioSection() {
  const tools = [
    { name: "Google Sheets", icon: "📑" },
    { name: "Google Docs", icon: "📝" },
    { name: "Microsoft Excel", icon: "📗" },
    { name: "Helium 10", icon: "📊" },
    { name: "Smart scout", icon: "🔍" },
    { name: "Keepa", icon: "📈" },
  ];

  const amazonSkills = [
    { name: "Product Research", level: "95%" },
    { name: "Competitor Analysis", level: "92%" },
    { name: "Keyword Research", level: "96%" },
    { name: "Listing Optimization", level: "94%" },
    { name: "Product Differentiation", level: "90%" },
    { name: "Profitability Analysis", level: "93%" },
  ];

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">TOOLS &amp; SKILLS</h2>
      </div>

      <div className="tools-skills-pillar-grid">
        {/* Tools Column */}
        <div className="about-pillar-card">
          <div className="service-card-top-row">
            <span className="about-pillar-number">01</span>
            <span className="service-card-icon-tag">🛠️</span>
          </div>
          <h3 className="service-card-heading">TOOLS</h3>

          <div className="tools-tiles-grid">
            {tools.map((tool, idx) => (
              <div key={idx} className="tool-tile-item">
                <span className="tool-tile-icon">{tool.icon}</span>
                <span className="tool-name-text">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amazon Skills Column */}
        <div className="about-pillar-card">
          <div className="service-card-top-row">
            <span className="about-pillar-number">02</span>
            <span className="service-card-icon-tag">⚡</span>
          </div>
          <h3 className="service-card-heading">AMAZON SKILLS</h3>

          <div className="skills-bars-list">
            {amazonSkills.map((skill, idx) => (
              <div key={idx} className="skill-bar-row">
                <div className="skill-row-top">
                  <span className="skill-label-text">{skill.name}</span>
                  <span className="skill-badge-pro">PRO</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
