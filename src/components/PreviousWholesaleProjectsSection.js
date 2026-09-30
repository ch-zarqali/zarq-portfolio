"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon } from "./Icons";

export default function PreviousWholesaleProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const wholesaleProjects = [
    {
      id: "ws-1",
      number: "01",
      badge: "BRAND APPROVAL",
      title: "Wholesale Partner Brand Approval",
      dateInfo: "Approved Wholesale Partner",
      metrics: [
        { label: "Status", value: "Authorized Partner" },
        { label: "MOQ", value: "950 Units" },
        { label: "MAP", value: "$8,800" },
      ],
      src: "/images/wsproject1.jpg",
      alt: "Amazon Wholesale Partner Brand Approval & Brand Registry Authorization",
    },
    {
      id: "ws-2",
      number: "02",
      badge: "BRAND REGISTRY",
      title: "Authorized Brand Registry Partnership",
      dateInfo: "Direct Brand Partnership",
      metrics: [
        { label: "Status", value: "Authorized Partner" },
        { label: "MOQ", value: "700 Units" },
        { label: "MAP", value: "$4,800" },
      ],
      src: "/images/wsproject2.jpg",
      alt: "Amazon Wholesale Authorized Brand Partnership Letter with FBA Prep",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">PREVIOUS WHOLESALE PROJECT</h2>
      </div>

      {/* 2-Column Responsive Wholesale Cards Grid */}
      <div className="snapshots-cards-grid">
        {wholesaleProjects.map((item) => (
          <div key={item.id} className="snapshot-card">
            <div className="project-card-top-row">
              <span className="about-pillar-number">{item.number}</span>
              <span className="project-card-badge">{item.badge}</span>
            </div>

            <h3 className="project-card-heading">{item.title}</h3>

            {/* Performance Stats Pills */}
            <div className="snapshot-stats-pills">
              {item.metrics.map((m, idx) => (
                <span key={idx} className="snapshot-stat-pill">
                  {m.label}: <strong>{m.value}</strong>
                </span>
              ))}
            </div>

            {/* Interactive Image Preview Box */}
            <div
              className="snapshot-image-preview-wrapper"
              onClick={() => setSelectedProject(item)}
              title="Click to view full approval document"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(item);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="snapshot-image-overlay">
                <span className="snapshot-expand-badge">
                  <span>🔍 View Full Approval</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for high-res document viewing */}
      {selectedProject && (
        <div
          className="snapshot-lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div className="snapshot-lightbox-content">
            <div className="snapshot-lightbox-header">
              <div className="snapshot-lightbox-title">
                {selectedProject.title}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#666",
                    marginLeft: "10px",
                  }}
                >
                  ({selectedProject.dateInfo})
                </span>
              </div>

              <div className="snapshot-lightbox-actions">
                <a
                  href={selectedProject.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snapshot-lightbox-open-btn"
                  title="Open document in new tab"
                >
                  <span>Open Full Size</span>
                  <ExternalLinkIcon size={13} color="#111111" />
                </a>

                <button
                  type="button"
                  className="snapshot-lightbox-close-btn"
                  onClick={() => setSelectedProject(null)}
                  title="Close preview"
                  aria-label="Close preview"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="snapshot-lightbox-body">
              <img
                src={selectedProject.src}
                alt={selectedProject.alt}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
