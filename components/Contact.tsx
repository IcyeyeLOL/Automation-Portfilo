"use client";

import { useState, useEffect, useRef } from "react";

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ease = "cubic-bezier(0.16,1,0.3,1)";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      id="contact"
      style={{ padding: "64px 5% 80px", maxWidth: 1440, margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left copy */}
        <div style={fadeUp(0)}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 9999,
              border: "1px solid rgba(57,255,110,0.25)",
              background: "rgba(57,255,110,0.07)",
              fontSize: "0.72rem",
              color: "var(--accent)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            □ In Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              margin: "0 0 16px",
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
            }}
          >
            Ready to automate
            <br />
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 24px rgba(57,255,110,0.3)",
              }}
            >
              your business?
            </span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: 360,
            }}
          >
            Whether you want to eliminate repetitive work, scale your outreach,
            or build a custom AI workflow — let&apos;s talk. I move fast and
            build things that actually work.
          </p>

          {/* Mini proof points */}
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "⚡ Systems delivered in 48–72 hours",
              "🔒 No lock-in — you own everything",
              "🤝 Free 30-min strategy call",
            ].map((pt) => (
              <div
                key={pt}
                style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 8 }}
              >
                {pt}
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div
          style={{
            ...fadeUp(150),
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxShadow: "0 0 60px rgba(57,255,110,0.05)",
          }}
        >
          {/* Email */}
          <a
            href="mailto:olakunle@ajaniautomation.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "13px 16px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "var(--text-primary)",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent)";
              el.style.background = "rgba(57,255,110,0.05)";
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.transform = "translateX(0)";
            }}
          >
            <span style={{ color: "var(--accent)" }}><EmailIcon /></span>
            <div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginBottom: 2 }}>Email</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>olakunle@ajaniautomation.com</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "13px 16px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "var(--text-primary)",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#0077b5";
              el.style.background = "rgba(0,119,181,0.06)";
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.transform = "translateX(0)";
            }}
          >
            <span style={{ color: "#0077b5" }}><LinkedinIcon /></span>
            <div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginBottom: 2 }}>LinkedIn</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>linkedin.com/in/olakunle-ajani</div>
            </div>
          </a>

          <div style={{ height: 1, background: "var(--border)" }} />

          {/* CTA */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px",
              borderRadius: 12,
              background: "var(--accent)",
              color: "#0d0d0d",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "0.92rem",
              transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "0.9";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 30px rgba(57,255,110,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <CalendarIcon /> Book a free 30-min call
          </a>

          <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>
            No commitment. Let&apos;s see if automation is the right move for you.
          </p>
        </div>
      </div>
    </section>
  );
}
