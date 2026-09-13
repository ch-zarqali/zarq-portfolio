"use client";

import { ExternalLinkIcon } from "./Icons";

export default function ProductOpportunityScorecardSection() {
  const criteria = [
    "High Demand & Consistent Search Volume Validation",
    "Low-to-Medium Competitor Review Barriers",
    "Healthy Profit Margin & Sustainable ROI Modeling",
    "Differentiation Potential & Customer Pain-Point Solutions",
  ];

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">PRODUCT OPPORTUNITY SCORECARD</h2>
      </div>

      <div style={{ maxWidth: "780px", margin: "0 auto", width: "100%" }}>
        <div className="project-plain-card">
          <div className="project-card-top-row">
            <span className="about-pillar-number">01</span>
            <span className="project-card-badge">GOOGLE SHEETS</span>
          </div>
          <h3 className="project-card-heading">Product Opportunity Scorecard</h3>

          <div className="project-card-body">
            <p className="project-card-desc">
              A comprehensive evaluation framework designed to analyze and score Amazon FBA Private Label product opportunities using quantitative criteria to minimize launch risk and maximize profitability.
            </p>

            <ul className="pillar-bullets-list" style={{ marginTop: "4px", marginBottom: "6px" }}>
              {criteria.map((item, idx) => (
                <li key={idx} className="pillar-bullet-item">
                  <span className="pillar-bullet-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="project-sheet-box">
              <div className="project-sheet-meta">
                <span className="project-sheet-icon">📑</span>
                <div>
                  <div className="project-sheet-title">Product Opportunity Scorecard Sheet</div>
                  <div className="project-sheet-sub">Google Sheets Deliverable</div>
                </div>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1TIRqRHf_L2M6E4os4RCwlRSumNTr29G_2POMTpqnn8o/edit?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="project-sheet-link"
              >
                <span>View Sheet</span>
                <ExternalLinkIcon size={13} color="#111111" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
