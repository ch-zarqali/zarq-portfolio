"use client";

export default function AboutSection() {
  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">ABOUT ME</h2>
      </div>

      <div className="about-executive-wrapper">
        {/* Lead Highlight Statement */}
        <div className="about-lead-card">
          <p className="about-lead-text">
            I am an aspiring <strong>Amazon FBA Private Label Virtual Assistant</strong> with a strong interest in product research, competitor analysis, keyword research, and listing optimization.
          </p>
        </div>

        {/* 3 Structured Pillars Grid */}
        <div className="about-cards-grid">
          <div className="about-pillar-card">
            <span className="about-pillar-number">01</span>
            <p className="about-pillar-text">
              I focus on organized research and data-driven decision making to help Amazon sellers evaluate product opportunities, understand competitors, identify customer needs, and develop strategies for better product positioning.
            </p>
          </div>

          <div className="about-pillar-card">
            <span className="about-pillar-number">02</span>
            <p className="about-pillar-text">
              My portfolio includes practice projects designed to demonstrate my research process, analytical thinking, and understanding of Amazon FBA Private Label operations.
            </p>
          </div>

          <div className="about-pillar-card">
            <span className="about-pillar-number">03</span>
            <p className="about-pillar-text">
              I am continuously developing my skills in Amazon Seller Central, product research, keyword research, listing optimization, and e-commerce operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
