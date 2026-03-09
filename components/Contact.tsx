"use client";

import { useState, useEffect, useRef } from "react";

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ease = "cubic-bezier(0.16,1,0.3,1)";
const ACCENT = "#39ff6e";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid #2a2a2a",
  borderRadius: 10,
  padding: "11px 14px",
  color: "#fff",
  fontSize: "0.875rem",
  fontFamily: "Inter, system-ui, sans-serif",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  });

  const inputStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === field ? ACCENT : "#2a2a2a",
    boxShadow: focused === field ? "0 0 0 3px rgba(57,255,110,0.12)" : "none",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Try again.");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{ padding: "64px 5% 80px", maxWidth: 1440, margin: "0 auto" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

        {/* Left copy */}
        <div style={fadeUp(0)}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 14px", borderRadius: 9999,
            border: "1px solid rgba(57,255,110,0.25)",
            background: "rgba(57,255,110,0.07)",
            fontSize: "0.72rem", color: ACCENT, fontWeight: 600,
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 18,
          }}>
            □ In Touch
          </div>
          <h2 style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
            margin: "0 0 16px", letterSpacing: "-0.035em", lineHeight: 1.15,
          }}>
            Ready to automate<br />
            <span style={{ color: ACCENT, textShadow: "0 0 24px rgba(57,255,110,0.3)" }}>
              your business?
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 360 }}>
            Whether you want to eliminate repetitive work, scale your outreach,
            or build a custom AI workflow — let&apos;s talk. I move fast and
            build things that actually work.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            {["⚡ Systems delivered in 48–72 hours", "🔒 No lock-in — you own everything", "🤝 Free 30-min strategy call"].map((pt) => (
              <div key={pt} style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 8 }}>
                {pt}
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div style={{
          ...fadeUp(150),
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 20, padding: "28px",
          display: "flex", flexDirection: "column", gap: 14,
          boxShadow: "0 0 60px rgba(57,255,110,0.05)",
        }}>

          {/* Quick-contact links */}
          <div style={{ display: "flex", gap: 10 }}>
            <a href="mailto:olakunle@ajaniautomation.com"
              style={{
                flex: 1, display: "flex", alignItems: "center", gap: 8,
                padding: "9px 12px", borderRadius: 10,
                border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)",
                textDecoration: "none", color: "#fff", fontSize: "0.76rem", fontWeight: 600,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.background = "rgba(57,255,110,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            >
              <span style={{ color: ACCENT }}><EmailIcon /></span> Email me
            </a>
            <a href="https://linkedin.com/in/olakunle-ajani" target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, display: "flex", alignItems: "center", gap: 8,
                padding: "9px 12px", borderRadius: 10,
                border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)",
                textDecoration: "none", color: "#fff", fontSize: "0.76rem", fontWeight: 600,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0077b5"; e.currentTarget.style.background = "rgba(0,119,181,0.07)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
            >
              <span style={{ color: "#0077b5" }}><LinkedinIcon /></span> LinkedIn
            </a>
          </div>

          <div style={{ height: 1, background: "var(--border)" }} />

          {/* Success state */}
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "28px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "rgba(57,255,110,0.12)", border: "1px solid rgba(57,255,110,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem", color: ACCENT,
              }}>✓</div>
              <p style={{ fontWeight: 700, fontSize: "1rem" }}>Message sent!</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                I&apos;ll get back to you within 24 hours.
              </p>
              <button onClick={() => setStatus("idle")} style={{
                marginTop: 6, background: "transparent",
                border: "1px solid rgba(57,255,110,0.25)", borderRadius: 8,
                color: ACCENT, fontSize: "0.78rem", fontWeight: 600,
                padding: "7px 18px", cursor: "pointer", fontFamily: "Inter, system-ui, sans-serif",
              }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em" }}>NAME</label>
                <input
                  type="text" name="name" placeholder="Your name" required
                  value={formData.name} onChange={handleChange}
                  onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em" }}>EMAIL</label>
                <input
                  type="email" name="email" placeholder="your@email.com" required
                  value={formData.email} onChange={handleChange}
                  onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                  style={inputStyle("email")}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em" }}>MESSAGE</label>
                <textarea
                  name="message" placeholder="Tell me about your project..." required rows={4}
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 100 }}
                />
              </div>

              {status === "error" && errorMsg && (
                <p style={{
                  fontSize: "0.78rem", color: "#ff6b6b",
                  background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)",
                  borderRadius: 8, padding: "8px 12px", lineHeight: 1.5,
                }}>{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "14px", borderRadius: 12, width: "100%",
                  background: status === "loading" ? "rgba(57,255,110,0.5)" : ACCENT,
                  color: "#0d0d0d", border: "none",
                  fontWeight: 800, fontSize: "0.92rem", letterSpacing: "0.01em",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(57,255,110,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {status === "loading" ? "Sending…" : "📅 Book a free 30-min call"}
              </button>

              <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>
                No commitment. I&apos;ll reply within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
