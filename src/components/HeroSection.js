"use client";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-greeting">HI THERE!</span>
        <h1 className="hero-title">
          I&apos;M <span className="hero-name-accent">MUHAMMAD ZARQ</span>
        </h1>

        <div className="hero-badge">
          <span>AMAZON FBA PRIVATE LABEL VIRTUAL ASSISTANT</span>
        </div>

        <p className="hero-description">
          Aspiring Amazon FBA Virtual Assistant specializing in product research, competitor analysis, keyword research, listing optimization, and profitability analysis. Focused on accurate research, practical insights, and well-organized Amazon support.
        </p>
      </div>

      <div className="hero-image-wrapper">
        <img
          src="/images/zarq.jpg"
          alt="Zarq - Portfolio"
          className="hero-image"
        />
      </div>
    </section>
  );
}
