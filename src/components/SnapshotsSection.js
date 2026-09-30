"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon } from "./Icons";

export default function SnapshotsSection() {
  const [selectedSnapshot, setSelectedSnapshot] = useState(null);

  const snapshots = [
    {
      id: "snap-1",
      number: "01",
      badge: "AMAZON UK",
      title: "Amazon UK Sales Performance",
      dateRange: "01/09/2024 – 25/04/2025",
      metrics: [
        { label: "Sales", value: "£28,178.19" },
        { label: "Units", value: "1,434" },
        { label: "Orders", value: "1,339" },
      ],
      src: "/images/snapshots1.jpg",
      alt: "Amazon UK Sales Dashboard Snapshot - £28,178.19 Ordered Product Sales",
    },
    {
      id: "snap-2",
      number: "02",
      badge: "AMAZON US",
      title: "Amazon US Sales & Revenue Scale",
      dateRange: "01/01/2024 – 10/21/2025",
      metrics: [
        { label: "Sales", value: "$628,954.30" },
        { label: "Units", value: "27,330" },
        { label: "Orders", value: "23,712" },
      ],
      src: "/images/snapshots2.jpg",
      alt: "Amazon US Sales Snapshot - $628,954.30 Ordered Product Sales",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedSnapshot(null);
      }
    };
    if (selectedSnapshot) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSnapshot]);

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">SNAPSHOTS</h2>
      </div>

      {/* 2-Column Responsive Snapshots Grid */}
      <div className="snapshots-cards-grid">
        {snapshots.map((item) => (
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
              onClick={() => setSelectedSnapshot(item)}
              title="Click to view full size"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedSnapshot(item);
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
                  <span>🔍 View Full Snapshot</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for high-res viewing */}
      {selectedSnapshot && (
        <div
          className="snapshot-lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedSnapshot(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedSnapshot.title}
        >
          <div className="snapshot-lightbox-content">
            <div className="snapshot-lightbox-header">
              <div className="snapshot-lightbox-title">
                {selectedSnapshot.title}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#666",
                    marginLeft: "10px",
                  }}
                >
                  ({selectedSnapshot.dateRange})
                </span>
              </div>

              <div className="snapshot-lightbox-actions">
                <a
                  href={selectedSnapshot.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snapshot-lightbox-open-btn"
                  title="Open image in new tab"
                >
                  <span>Open Full Size</span>
                  <ExternalLinkIcon size={13} color="#111111" />
                </a>

                <button
                  type="button"
                  className="snapshot-lightbox-close-btn"
                  onClick={() => setSelectedSnapshot(null)}
                  title="Close preview"
                  aria-label="Close preview"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="snapshot-lightbox-body">
              <img
                src={selectedSnapshot.src}
                alt={selectedSnapshot.alt}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
