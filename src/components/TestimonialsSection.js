"use client";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "Benjamin's vision completely redefined our brand identity. His attention to detail in typography and color balance is nothing short of world-class.",
      author: "Sarah Jenkins",
      role: "Head of Marketing, Lumina Media",
      rating: 5,
    },
    {
      quote:
        "An exceptional creative partner. Benjamin delivered a seamless UI system and stunning editorial photos that directly boosted our conversion rates by 40%.",
      author: "David Chen",
      role: "Co-Founder & CEO, Apex Systems",
      rating: 5,
    },
    {
      quote:
        "Working with Benjamin was pure effortless collaboration. From concept mockups to final deliverables, everything was executed with unmatched precision.",
      author: "Elena Rostova",
      role: "Creative Director, Vogue Studio",
      rating: 5,
    },
  ];

  const clients = ["NIKE", "SPOTIFY", "SQUARESPACE", "AIRBNB", "ADOBE"];

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">TESTIMONIALS</h2>
      </div>

      <div className="testimonials-list-grid">
        {reviews.map((rev, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-stars">
              {"★".repeat(rev.rating)}
            </div>
            <p className="testimonial-quote-text">&ldquo;{rev.quote}&rdquo;</p>
            <div className="testimonial-author-meta">
              <h4 className="author-name">{rev.author}</h4>
              <span className="author-role">{rev.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Clients Bar */}
      <div className="trusted-clients-section">
        <h4 className="trusted-title">TRUSTED BY GLOBAL BRANDS</h4>
        <div className="clients-logo-strip">
          {clients.map((client, idx) => (
            <span key={idx} className="client-badge">
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
