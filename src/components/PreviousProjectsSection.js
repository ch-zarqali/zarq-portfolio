"use client";

import { ExternalLinkIcon } from "./Icons";

export default function PreviousProjectsSection() {
  const projectList = [
    {
      number: "01",
      title: "Product Research",
      badge: "GOOGLE SHEETS",
      description:
        "Comprehensive Amazon FBA Private Label product research sheet including product criteria validation, sales metrics, and market potential analysis.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/17aZCADH2JkG_lo-5YcgTMsmc5Gxj5p4-3Qt6OWEmu_U/edit?usp=drive_link",
      sheetTitle: "FBA Product Research Sheet",
      sheetSub: "Google Sheets Deliverable",
    },
    {
      number: "02",
      title: "Competitor Analysis",
      badge: "GOOGLE SHEETS",
      description:
        "In-depth competitor benchmarking, pricing strategy evaluation, customer review insights, and market gap identification.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/15nFPnoCOawLr6egG6vgHhmk_t8eTr0WFKXJsfJhya0g/edit?usp=drive_link",
      sheetTitle: "FBA Competitor Analysis Sheet",
      sheetSub: "Google Sheets Deliverable",
    },
    {
      number: "03",
      title: "Keyword Research",
      badge: "GOOGLE SHEETS",
      description:
        "Extensive search volume analysis, high-converting keyword harvesting, search intent mapping, and indexing strategy.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/1KWLzYEwBHgV27qwhAJ2hrUkqZsbIQYsQez47WvsyoDI/edit?usp=drive_link",
      sheetTitle: "FBA Keyword Research Sheet",
      sheetSub: "Google Sheets Deliverable",
    },
    {
      number: "04",
      title: "Profitability Calculation",
      badge: "GOOGLE SHEETS",
      description:
        "Precise unit economics, Amazon FBA referral & fulfillment fee calculations, landed cost modeling, and net ROI forecasts.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/1348ktalujOjcIvMPkxdKUJmNirjPjCp4XUaqjUdMwZU/edit?usp=drive_link",
      sheetTitle: "FBA Profitability Calculation Sheet",
      sheetSub: "Google Sheets Deliverable",
    },
  ];

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">PREVIOUS PROJECT</h2>
      </div>

      {/* 2x2 Projects Grid */}
      <div className="projects-cards-grid">
        {projectList.map((project) => (
          <div key={project.number} className="project-plain-card">
            <div className="project-card-top-row">
              <span className="about-pillar-number">{project.number}</span>
              {project.badge && (
                <span className="project-card-badge">{project.badge}</span>
              )}
            </div>
            <h3 className="project-card-heading">{project.title}</h3>

            {project.sheetLink && (
              <div className="project-card-body">
                <p className="project-card-desc">{project.description}</p>
                <div className="project-sheet-box">
                  <div className="project-sheet-meta">
                    <span className="project-sheet-icon">📑</span>
                    <div>
                      <div className="project-sheet-title">{project.sheetTitle}</div>
                      <div className="project-sheet-sub">{project.sheetSub}</div>
                    </div>
                  </div>
                  <a
                    href={project.sheetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-sheet-link"
                  >
                    <span>View Sheet</span>
                    <ExternalLinkIcon size={13} color="#111111" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
