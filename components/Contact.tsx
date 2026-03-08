"use client";

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

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 24px 100px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 9999,
              border: "1px solid rgba(57, 255, 110, 0.25)",
              background: "rgba(57, 255, 110, 0.07)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            □ In Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              margin: "0 0 16px",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to automate
            <br />
            <span style={{ color: "var(--accent)" }}>your business?</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              maxWidth: 380,
              margin: 0,
            }}
          >
            Whether you want to eliminate repetitive work, scale your outreach, or
            build a custom AI workflow — let&apos;s talk. I move fast and build things
            that actually work.
          </p>
        </div>

        {/* Right: contact card */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Email row */}
          <a
            href="mailto:olakunle@example.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 18px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "var(--text-primary)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent)";
              el.style.background = "rgba(57, 255, 110, 0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.background = "rgba(255,255,255,0.02)";
            }}
          >
            <span style={{ color: "var(--accent)" }}>
              <EmailIcon />
            </span>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: 2 }}>
                Email
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                olakunle@ajaniautomation.com
              </div>
            </div>
          </a>

          {/* LinkedIn row */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 18px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
              textDecoration: "none",
              color: "var(--text-primary)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent)";
              el.style.background = "rgba(57, 255, 110, 0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.background = "rgba(255,255,255,0.02)";
            }}
          >
            <span style={{ color: "#0077b5" }}>
              <LinkedinIcon />
            </span>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: 2 }}>
                LinkedIn
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                linkedin.com/in/olakunle-ajani
              </div>
            </div>
          </a>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border)" }} />

          {/* Book a call CTA */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "13px",
              borderRadius: 12,
              background: "var(--accent)",
              color: "#0d0d0d",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              transition: "opacity 0.2s, transform 0.2s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "0.88";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }}
          >
            <CalendarIcon /> Book a free 30-min call
          </a>

          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            No commitment. Let&apos;s talk about your workflow and see if automation makes sense.
          </p>
        </div>
      </div>
    </section>
  );
}
