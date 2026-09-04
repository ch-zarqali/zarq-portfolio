"use client";

import { useState } from "react";
import { MailIcon, WhatsAppIcon, MapPinIcon } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const messageLines = [
      `*New Portfolio Inquiry*`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      formData.subject ? `*Subject:* ${formData.subject}` : null,
      `*Message:* ${formData.message}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const whatsappUrl = `https://wa.me/923137686980?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="inner-page-content">
      {/* Signature Framed Header */}
      <div className="section-title-frame">
        <h2 className="section-main-heading">CONTACT</h2>
      </div>

      <div className="contact-grid-layout">
        {/* Contact Information Column */}
        <div className="contact-info-card">
          <h3 className="contact-card-title">GET IN TOUCH</h3>
          <p className="contact-card-intro">
            Have a project in mind or looking for a collaborative creative partner?
            Send me a message and let&apos;s build something extraordinary together.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-bubble">
                <MailIcon size={18} color="#111111" />
              </div>
              <div className="contact-info-texts">
                <span className="contact-label">EMAIL ME</span>
                <a href="mailto:muhammadzarq99@gmail.com" className="contact-value">
                  muhammadzarq99@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-bubble">
                <WhatsAppIcon size={18} color="#111111" />
              </div>
              <div className="contact-info-texts">
                <span className="contact-label">WHATSAPP</span>
                <a
                  href="https://wa.me/923137686980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  +92313-7686980
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-bubble">
                <MapPinIcon size={18} color="#111111" />
              </div>
              <div className="contact-info-texts">
                <span className="contact-label">LOCATION</span>
                <span className="contact-value">Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form Column */}
        <div className="contact-form-card">
          <h3 className="contact-card-title">SEND A MESSAGE</h3>

          {isSubmitted ? (
            <div className="form-success-banner">
              <strong>Thank you, {formData.name || "friend"}!</strong>
              <p>Your message has been opened in WhatsApp. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-field-row">
                <div className="form-field-group">
                  <label htmlFor="name" className="form-label">YOUR NAME</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alexander Clark"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-field-group">
                  <label htmlFor="email" className="form-label">YOUR EMAIL</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. alexander@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="subject" className="form-label">SUBJECT</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry / Creative Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="message" className="form-label">MESSAGE</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project goals, timeline, and requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="form-submit-btn">
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
