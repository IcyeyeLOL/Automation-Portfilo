"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const MYTHS = [
  {
    myth: "\"AI automation is too complicated for my business.\"",
    reality:
      "You don't touch a single line of code. We build it, configure it, and hand you a system that runs while you sleep. Your job is just to show up for the opportunities it creates.",
    icon: "🧠",
  },
  {
    myth: "\"My customers want the personal touch — not a bot.\"",
    reality:
      "Responding in 60 seconds feels more personal than going silent for hours. The message sounds like you. The timing just happens automatically. Customers can't tell the difference — they only notice when you're slow.",
    icon: "🤝",
  },
  {
    myth: "\"I'll set this up someday when things slow down.\"",
    reality:
      "Things never slow down. That's exactly why you need this. Every week you wait is another week of lost leads, missed follow-ups, and revenue that quietly went to a competitor.",
    icon: "⏳",
  },
];

const STATS = [
  { label: "Businesses already using automated follow-up", pct: 72 },
  { label: "Leads lost because response took over 5 minutes", pct: 78 },
  { label: "Companies planning to adopt AI tools within 12 months", pct: 85 },
];

function AnimatedBar({ pct, delay, accent }: { pct: number; delay: number; accent: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} style={{ height: 6, background: "var(--border)", borderRadius: 999, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: accent,
          borderRadius: 999,
          transition: "width 1.1s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: `0 0 8px ${accent}66`,
        }}
      />
    </div>
  );
}

function MythCard({ myth, reality, icon, visible }: { myth: string; reality: string; icon: string; visible: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      style={{
        flex: "1 1 280px",
        minHeight: 280,
        cursor: "pointer",
        perspective: 1000,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 280,
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — the myth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "24px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ fontSize: "1.8rem" }}>{icon}</div>
          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#ef4444",
            }}
          >
            False Belief
          </div>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65, fontStyle: "italic" }}>
            {myth}
          </p>
          <div
            style={{
              marginTop: "auto",
              fontSize: "0.72rem",
              color: "#555",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "var(--accent)" }}>↻</span> Tap to flip
          </div>
        </div>

        {/* Back — the reality */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            background: "#0d1a0f",
            border: "1px solid rgba(57,255,110,0.2)",
            borderRadius: 16,
            padding: "24px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            transform: "rotateY(180deg)",
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            The Reality
          </div>
          <p style={{ fontSize: "0.93rem", color: "#d1fae5", lineHeight: 1.7 }}>{reality}</p>
          <div
            style={{
              marginTop: "auto",
              fontSize: "0.72rem",
              color: "#555",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "#ef4444" }}>↻</span> Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MindshiftSection() {
  const width = useWindowWidth();
  const isMobile = width > 0 && width < 768;

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      style={{
        padding: isMobile ? "72px 5% 80px" : "96px 5% 104px",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ ...fadeUp(0), textAlign: "center", marginBottom: isMobile ? 48 : 64 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 14px",
            borderRadius: 9999,
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.25)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#f87171",
            marginBottom: 20,
          }}
        >
          ⚠ Reality Check
        </div>
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Your competitors aren&apos;t waiting{" "}
          <span style={{ color: "var(--accent)", textShadow: "0 0 28px rgba(57,255,110,0.3)" }}>
            for you.
          </span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          The top businesses in your space are already running automated systems. Every week you don&apos;t is a week they pull further ahead.
        </p>
      </div>

      {/* Myth cards */}
      <div
        style={{
          ...fadeUp(100),
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: isMobile ? 56 : 72,
        }}
      >
        {MYTHS.map((m, i) => (
          <MythCard key={i} {...m} visible={visible} />
        ))}
      </div>

      {/* Market adoption panel */}
      <div
        style={{
          ...fadeUp(200),
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: isMobile ? "28px 22px" : "40px 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 36 : 56,
          alignItems: "center",
        }}
      >
        {/* Left copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Market Adoption · 2024–2025
          </div>
          <h3
            style={{
              fontSize: isMobile ? "1.5rem" : "1.8rem",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            The gap is widening{" "}
            <span style={{ color: "#f87171" }}>every quarter.</span>
          </h3>
          <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.72 }}>
            Businesses using automated lead follow-up close{" "}
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>47% more deals</span> than those who don&apos;t.
            The businesses winning right now aren&apos;t working harder — they built systems that work for them.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 9999,
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
              fontSize: "0.82rem",
              color: "#fca5a5",
              fontWeight: 600,
              alignSelf: "flex-start",
            }}
          >
            ⏱ Every day without automation is a day your competition widens the gap.
          </div>
        </div>

        {/* Right stats bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                  {s.label}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: i === 1 ? "#f87171" : "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {s.pct}%
                </span>
              </div>
              <AnimatedBar
                pct={s.pct}
                delay={i * 150}
                accent={i === 1 ? "#ef4444" : "#39ff6e"}
              />
            </div>
          ))}
          <p style={{ fontSize: "0.72rem", color: "#444", marginTop: 4 }}>
            Sources: HubSpot Sales Report · MIT Sloan AI Adoption Study · Salesforce State of Sales 2024
          </p>
        </div>
      </div>

      {/* Bottom urgency strip */}
      <div
        style={{
          ...fadeUp(300),
          marginTop: isMobile ? 32 : 40,
          textAlign: "center",
          padding: "24px 20px",
          borderRadius: 14,
          background: "linear-gradient(135deg, rgba(57,255,110,0.05) 0%, rgba(57,255,110,0.02) 100%)",
          border: "1px solid rgba(57,255,110,0.12)",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "0.92rem" : "1.05rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          The businesses at the top of your market didn&apos;t get there by being busier.{" "}
          <span style={{ color: "#e2e2e2", fontWeight: 600 }}>
            They got there by building systems that work while they sleep.
          </span>{" "}
          The question isn&apos;t whether AI automation works — it&apos;s whether you&apos;ll use it{" "}
          <span style={{ color: "var(--accent)", fontWeight: 700 }}>before</span> your competition does.
        </p>
      </div>
    </section>
  );
}
