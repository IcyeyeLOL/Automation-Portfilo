"use client";

import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [triggered, setTriggered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        padding: "80px 5%",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        style={{
          marginBottom: 56,
          opacity: triggered ? 1 : 0,
          transform: triggered ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
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
          ◎ Social Proof
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Real results, real clients
        </h2>
        <p
          style={{
            marginTop: 10,
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: 500,
          }}
        >
          Don&apos;t take my word for it - hear directly from clients who&apos;ve automated their business.
        </p>
      </div>

      {/* Video testimonial card */}
      <div
        style={{
          opacity: triggered ? 1 : 0,
          transform: triggered ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1) 150ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 150ms",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 820,
            borderRadius: 20,
            overflow: "hidden",
            background: "var(--bg-card)",
            border: `1px solid ${isHovered ? "rgba(57,255,110,0.35)" : "var(--border)"}`,
            boxShadow: isHovered
              ? "0 0 50px rgba(57,255,110,0.12), 0 20px 60px rgba(0,0,0,0.5)"
              : "0 8px 40px rgba(0,0,0,0.4)",
            transition: "border-color 0.35s, box-shadow 0.35s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* iframe wrapper */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              background: "#000",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/upEkMB8pYRA?si=TuuP_DnfOVRHx1cz&rel=0&modestbranding=1"
              title="Karol - Client Testimonial"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            {/* Testimonial badge */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                padding: "4px 12px",
                borderRadius: 9999,
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(57,255,110,0.3)",
                color: "var(--accent)",
                backdropFilter: "blur(6px)",
                pointerEvents: "none",
              }}
            >
              ● Testimonial
            </div>
          </div>

          {/* Client info bar */}
          <div
            style={{
              padding: "14px 20px 16px",
              background: "var(--bg-card)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Avatar placeholder */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(57,255,110,0.1)",
                  border: "1px solid rgba(57,255,110,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                K
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Karol - Granker&apos;s Team
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 1 }}>
                  Community &amp; Content Automation Client
                </div>
              </div>
            </div>

            <div style={{ color: "#f59e0b", fontSize: "0.8rem", letterSpacing: 2 }}>★★★★★</div>
          </div>
        </div>
      </div>

      {/* Quote strip below video */}
      <div
        style={{
          marginTop: 48,
          display: "flex",
          justifyContent: "center",
          opacity: triggered ? 1 : 0,
          transform: triggered ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1) 350ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 350ms",
        }}
      >
        <div style={{ maxWidth: 680, textAlign: "center" }}>
          <div
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              fontWeight: 600,
              lineHeight: 1.65,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              fontStyle: "italic",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                lineHeight: 0,
                verticalAlign: "-0.5rem",
                color: "var(--accent)",
                marginRight: 4,
                fontStyle: "normal",
              }}
            >
              &ldquo;
            </span>
            He can automate everything - posts, emails, your entire workflow. He&apos;s the most transparent person I&apos;ve worked with in AI automation. He walks you through every step, keeps you in the loop, and delivers. You won&apos;t regret it.
            <span
              style={{
                fontSize: "3rem",
                lineHeight: 0,
                verticalAlign: "-0.5rem",
                color: "var(--accent)",
                marginLeft: 4,
                fontStyle: "normal",
              }}
            >
              &rdquo;
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              margin: "20px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <div style={{ color: "#f59e0b", fontSize: "0.85rem", letterSpacing: 2 }}>★★★★★</div>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
            Karol - Granker&apos;s Team Creator &nbsp;&middot;&nbsp; Community &amp; Content Automation
          </div>
        </div>
      </div>
    </section>
  );
}
