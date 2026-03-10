"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const CODE_LINES = [
  { text: "// 60-Second Reply Bot", color: "#6c7086" },
  { text: "const onNewLead = async (lead) => {", color: "#cdd6f4" },
  { text: '  const msg = await ai.compose({', color: "#cdd6f4" },
  { text: '    template: "instant_reply",', color: "#a6e3a1" },
  { text: "    agent: lead.assignedAgent,", color: "#cdd6f4" },
  { text: "  });", color: "#cdd6f4" },
  { text: "  await sms.send(lead.phone, msg);", color: "#cdd6f4" },
  { text: '  await crm.tag(lead.id, "contacted");', color: "#cdd6f4" },
  { text: "  return { replied: true };", color: "#cdd6f4" },
  { text: "};", color: "#cdd6f4" },
];

const TYPED_WORDS = [
  "real estate leads",
  "dead leads",
  "no-shows",
  "open house follow-ups",
  "seller pipelines",
];

const ease = "cubic-bezier(0.16,1,0.3,1)";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const width = useWindowWidth();
  const isMobile = width > 0 && width < 768;

  // Entrance
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Animate code lines appearing
  useEffect(() => {
    if (!mounted) return;
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 800 : 130
    );
    return () => clearTimeout(t);
  }, [mounted, visibleLines]);

  // Typing animation
  useEffect(() => {
    if (!mounted) return;
    const word = TYPED_WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < word.length) {
        t = setTimeout(() => setCharIdx((c) => c + 1), 80);
      } else {
        t = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        t = setTimeout(() => setCharIdx((c) => c - 1), 38);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % TYPED_WORDS.length);
      }
    }
    return () => clearTimeout(t);
  }, [mounted, wordIdx, charIdx, deleting]);

  const shown = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  });

  const shownLeft = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateX(0)" : "translateX(-36px)",
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  });

  const shownRight = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateX(0) scale(1)" : "translateX(36px) scale(0.96)",
    transition: `opacity 0.8s ${ease} ${delay}ms, transform 0.8s ${ease} ${delay}ms`,
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "88px 5% 48px" : "80px 5% 48px",
        maxWidth: 1440,
        margin: "0 auto",
        gap: isMobile ? 36 : 60,
      }}
    >
      {/* ── Left column ── */}
      <div
        style={{
          flex: isMobile ? "none" : "0 0 52%",
          width: isMobile ? "100%" : undefined,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {/* Avatar + status */}
        <div style={{ ...shownLeft(100), display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--accent)",
                boxShadow: "0 0 0 0 rgba(57,255,110,0.6)",
                animation: "pulseRing 2.5s ease-out infinite",
              }}
            >
              <Image
                src="/kunle-face.png"
                alt="Olakunle Ajani"
                width={80}
                height={80}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 3,
                right: 3,
                width: 15,
                height: 15,
                borderRadius: "50%",
                background: "var(--accent)",
                border: "2px solid var(--bg-base)",
                boxShadow: "0 0 6px rgba(57,255,110,0.8)",
              }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Olakunle Ajani</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Automation Engineer · Available for work
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={shownLeft(200)}>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 4.8vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
            }}
          >
            I automate{" "}
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px rgba(57,255,110,0.35)",
                display: "inline-block",
                minWidth: "2ch",
              }}
            >
              {TYPED_WORDS[wordIdx].slice(0, charIdx)}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "0.9em",
                  background: "var(--accent)",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
            <br />
            for real estate agents.
          </h1>
        </div>

        {/* Sub */}
        <div style={shownLeft(300)}>
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              lineHeight: 1.72,
              maxWidth: 520,
            }}
          >
            I build SMS bots, AI follow-up machines, and lead pipelines that run
            24/7 — so agents close more deals without lifting a finger.
          </p>
        </div>

        {/* CTA + socials */}
        <div
          style={{
            ...shownLeft(400),
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 26px",
              borderRadius: 9999,
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              transition: "background 0.22s, color 0.22s, box-shadow 0.22s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent)";
              el.style.color = "#0d0d0d";
              el.style.boxShadow = "0 0 24px rgba(57,255,110,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--accent)";
              el.style.boxShadow = "none";
            }}
          >
            ✉ Contact me
          </a>

          <div style={{ display: "flex", gap: 18 }}>
            {[
              { icon: <GithubIcon />, href: "https://github.com/IcyeyeLOL", label: "GitHub" },
              { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/olakunleajani/", label: "LinkedIn" },
              { icon: <InstagramIcon />, href: "https://www.instagram.com/i_had_to_change_username/", label: "Instagram" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.2s, transform 0.2s",
                  display: "flex",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--accent)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-muted)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            ...shownLeft(500),
            display: "flex",
            gap: isMobile ? 20 : 28,
            flexWrap: "wrap",
            paddingTop: 8,
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { val: "9+", label: "Automations Built" },
            { val: "24/7", label: "Systems Running" },
            { val: "100%", label: "Client Satisfaction" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {val}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 3 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column ── */}
      <div
        style={{
          flex: 1,
          width: isMobile ? "100%" : undefined,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Code card with float + slide-in */}
        <div
          style={{
            ...shownRight(isMobile ? 400 : 300),
            width: "100%",
            maxWidth: 540,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(57,255,110,0.06), 0 20px 60px rgba(0,0,0,0.5)",
            animation: mounted ? "float 6s ease-in-out infinite" : "none",
            animationDelay: "1.2s",
          }}
        >
          {/* Terminal bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "11px 16px",
              borderBottom: "1px solid var(--border)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span
              style={{
                marginLeft: 10,
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                fontFamily: "monospace",
              }}
            >
              automation.ts
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: "0.68rem",
                color: "rgba(57,255,110,0.6)",
                fontFamily: "monospace",
              }}
            >
              ● running
            </span>
          </div>

          {/* Code lines — animate in one by one */}
          <pre
            style={{
              margin: 0,
              padding: "18px 20px",
              fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
              fontSize: "0.76rem",
              lineHeight: 1.75,
              color: "#cdd6f4",
              overflowX: "auto",
              minHeight: 200,
            }}
          >
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                style={{
                  color: line.color,
                  animation: `codeLine 0.25s ease forwards`,
                  opacity: 1,
                }}
              >
                {line.text}
              </div>
            ))}
            {visibleLines < CODE_LINES.length && (
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: "0.8em",
                  background: "var(--accent)",
                  verticalAlign: "middle",
                  animation: "blink 0.8s step-end infinite",
                }}
              />
            )}
          </pre>
        </div>

        {/* Profile photo - hidden on mobile since avatar is already shown */}
        {!isMobile && (
          <div
            style={{
              ...shownRight(500),
              width: 180,
              height: 180,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--accent)",
              boxShadow: "0 0 50px rgba(57,255,110,0.3)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/kunle-face.png"
              alt="Olakunle Ajani"
              width={180}
              height={180}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
