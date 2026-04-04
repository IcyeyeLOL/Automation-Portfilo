"use client";

import { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  url: string;
  accentColor: string;
  accentRgb: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "60-Second Reply",
    description:
      "Instantly responds to every new inquiry within 60 seconds via SMS or email — before your competition even sees the notification.",
    tags: ["Twilio", "OpenAI", "Webhooks", "CRM"],
    gradient: "linear-gradient(135deg, #1a0800 0%, #2d1400 60%, #1a0a00 100%)",
    emoji: "⚡",
    url: "/demo/index.html",
    accentColor: "#ff6b00",
    accentRgb: "255, 107, 0",
  },
  {
    id: 2,
    title: "7-Day Follow-Up Machine",
    description:
      "Runs a fully automated 7-day SMS + email drip sequence that keeps prospects warm until they're ready to buy.",
    tags: ["n8n", "Twilio", "Gmail API", "Airtable"],
    gradient: "linear-gradient(135deg, #0d0618 0%, #1a0d2e 60%, #0f0820 100%)",
    emoji: "🔄",
    url: "/demo2/index.html",
    accentColor: "#8b5cf6",
    accentRgb: "139, 92, 246",
  },
  {
    id: 3,
    title: "Review & Referral Robot",
    description:
      "After every completed job or purchase, automatically sends review requests, captures feedback, and triggers referral ask sequences.",
    tags: ["Make.com", "Google Reviews", "Twilio", "HubSpot"],
    gradient: "linear-gradient(135deg, #181000 0%, #2e1f00 60%, #1c1400 100%)",
    emoji: "⭐",
    url: "/demo3/index.html",
    accentColor: "#f59e0b",
    accentRgb: "245, 158, 11",
  },
  {
    id: 4,
    title: "Lead Qualifier",
    description:
      "AI-powered SMS bot that asks the right questions, scores leads by intent and readiness, and routes hot ones straight to your calendar.",
    tags: ["OpenAI", "Twilio", "Calendly API", "n8n"],
    gradient: "linear-gradient(135deg, #061206 0%, #0e2210 60%, #081508 100%)",
    emoji: "🎯",
    url: "/demo4/index.html",
    accentColor: "#22c55e",
    accentRgb: "34, 197, 94",
  },
  {
    id: 5,
    title: "New Offer Blast",
    description:
      "The moment a new product, service, or promotion goes live, automatically blasts your entire list via SMS, email, and social — in under 2 minutes.",
    tags: ["Zapier", "Twilio", "Mailchimp", "Webhook"],
    gradient: "linear-gradient(135deg, #001418 0%, #002028 60%, #001a20 100%)",
    emoji: "📣",
    url: "/demo5/index.html",
    accentColor: "#06b6d4",
    accentRgb: "6, 182, 212",
  },
  {
    id: 6,
    title: "No-Show Eliminator",
    description:
      "Sends smart reminder and confirmation sequences before every appointment and auto-reschedules no-shows without any manual effort.",
    tags: ["Twilio", "Calendly", "n8n", "OpenAI"],
    gradient: "linear-gradient(135deg, #180000 0%, #2e0000 60%, #200005 100%)",
    emoji: "🚫",
    url: "/demo6/index.html",
    accentColor: "#ef4444",
    accentRgb: "239, 68, 68",
  },
  {
    id: 7,
    title: "Dead Lead Reviver",
    description:
      "Re-engages cold contacts from your CRM with a personalized AI message sequence timed for when they're most likely to respond.",
    tags: ["Claude API", "HubSpot", "Twilio", "Make.com"],
    gradient: "linear-gradient(135deg, #150a00 0%, #261500 60%, #1a1000 100%)",
    emoji: "💀",
    url: "/demo7/index.html",
    accentColor: "#f97316",
    accentRgb: "249, 115, 22",
  },
  {
    id: 8,
    title: "Event Follow-Up System",
    description:
      "Captures attendee data at any event or webinar and immediately launches a personalized follow-up sequence for every participant.",
    tags: ["Airtable", "Twilio", "OpenAI", "Zapier"],
    gradient: "linear-gradient(135deg, #000a18 0%, #00102e 60%, #000d22 100%)",
    emoji: "🎟️",
    url: "/demo8/index.html",
    accentColor: "#3b82f6",
    accentRgb: "59, 130, 246",
  },
  {
    id: 9,
    title: "Long-Term Lead Nurture",
    description:
      "Long-term AI nurture sequence for cold prospects — sends relevant updates, value-add content, and periodic check-ins until they're ready to buy.",
    tags: ["n8n", "Claude API", "Gmail API", "HubSpot"],
    gradient: "linear-gradient(135deg, #0a0018 0%, #150030 60%, #0d0020 100%)",
    emoji: "📈",
    url: "/demo9/index.html",
    accentColor: "#a855f7",
    accentRgb: "168, 85, 247",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: hovered
          ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${project.accentRgb}, 0.07) 0%, transparent 70%), var(--bg-card)`
          : "var(--bg-card)",
        border: `1px solid ${hovered ? project.accentColor : "var(--border)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered
          ? `0 0 30px rgba(${project.accentRgb}, 0.2), 0 8px 30px rgba(0,0,0,0.4)`
          : "0 2px 12px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px) scale(1.01)" : "translateY(0) scale(1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Banner */}
      <div
        style={{
          height: 190,
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Glow orb behind emoji */}
        <div
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${project.accentRgb}, 0.25) 0%, transparent 70%)`,
            transition: "opacity 0.3s",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        <span
          style={{
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
            position: "relative",
            zIndex: 1,
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            display: "block",
          }}
        >
          {project.emoji}
        </span>

        {/* Number badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            border: `1px solid rgba(${project.accentRgb}, 0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.65rem",
            fontWeight: 700,
            color: project.accentColor,
            fontFamily: "monospace",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </div>

        {/* Live badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "3px 9px",
            borderRadius: 9999,
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            background: `rgba(${project.accentRgb}, 0.15)`,
            color: project.accentColor,
            border: `1px solid rgba(${project.accentRgb}, 0.35)`,
          }}
        >
          ● Live
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: "0.975rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 9px",
                borderRadius: 9999,
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                background: `rgba(${project.accentRgb}, 0.08)`,
                color: project.accentColor,
                border: `1px solid rgba(${project.accentRgb}, 0.2)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Demo link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 14px",
            borderRadius: 10,
            border: `1px solid rgba(${project.accentRgb}, ${hovered ? "0.5" : "0.2"})`,
            background: `rgba(${project.accentRgb}, ${hovered ? "0.12" : "0.05"})`,
            color: project.accentColor,
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 600,
            transition: "background 0.2s, border-color 0.2s",
            letterSpacing: "0.01em",
          }}
        >
          <span>View Demo</span>
          <span style={{ fontSize: "1rem", transition: "transform 0.2s", transform: hovered ? "translateX(3px)" : "translateX(0)" }}>→</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const width = useWindowWidth();
  const gridCols = width > 0 ? (width < 640 ? 1 : width < 1024 ? 2 : 3) : 3;

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
      id="projects"
      style={{
        padding: "64px 5%",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 48 }}>
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
          □ Projects
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Automation systems I&apos;ve built
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
          Each system solves a real business problem — more replies, more booked calls,
          fewer leads falling through the cracks.
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gap: 28,
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            style={{
              opacity: triggered ? 1 : 0,
              transform: triggered ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms`,
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
