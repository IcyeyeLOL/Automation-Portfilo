"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  status: "Live" | "In Progress";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lead Outreach Automator",
    description:
      "Multi-channel outreach system that scrapes leads, personalizes emails with AI, and auto-follows up — fully on autopilot.",
    tags: ["n8n", "OpenAI", "Gmail API", "Python"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    emoji: "🎯",
    status: "Live",
  },
  {
    id: 2,
    title: "AI Email Responder",
    description:
      "Reads incoming emails, classifies intent, drafts context-aware replies, and sends or queues for review — 24/7.",
    tags: ["Claude API", "Zapier", "Gmail", "TypeScript"],
    gradient: "linear-gradient(135deg, #0d1b0d 0%, #1a3a1a 50%, #0d2b0d 100%)",
    emoji: "✉️",
    status: "Live",
  },
  {
    id: 3,
    title: "Appointment Booking Bot",
    description:
      "SMS/WhatsApp bot that handles scheduling, confirmations, reminders, and rescheduling — zero human touchpoints.",
    tags: ["Twilio", "Calendly API", "Node.js", "n8n"],
    gradient: "linear-gradient(135deg, #1a0d1a 0%, #2d1a2d 50%, #1a0d2b 100%)",
    emoji: "📅",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Invoice & CRM Sync",
    description:
      "Auto-generates invoices from job completions, pushes to QuickBooks, and syncs deal stages across HubSpot.",
    tags: ["QuickBooks API", "HubSpot", "Make.com", "Webhooks"],
    gradient: "linear-gradient(135deg, #1a1000 0%, #2d1f00 50%, #1a1500 100%)",
    emoji: "🧾",
    status: "Live",
  },
  {
    id: 5,
    title: "Social Media Scheduler",
    description:
      "Generates on-brand content with AI, schedules posts across platforms, and reports engagement — all automated.",
    tags: ["Make.com", "Claude API", "Instagram API", "Airtable"],
    gradient: "linear-gradient(135deg, #0d0d1a 0%, #1a1a3a 50%, #0d1a2b 100%)",
    emoji: "📱",
    status: "Live",
  },
  {
    id: 6,
    title: "Cold DM Pipeline",
    description:
      "Scrapes prospect data, crafts personalized DMs using AI, and tracks replies — turns cold outreach into warm leads.",
    tags: ["Python", "OpenAI", "Twitter API", "Airtable"],
    gradient: "linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #1a0d00 100%)",
    emoji: "💬",
    status: "In Progress",
  },
  {
    id: 7,
    title: "E-commerce Order Ops",
    description:
      "Automates order confirmations, shipping updates, review requests, and refund workflows end-to-end.",
    tags: ["Shopify API", "Klaviyo", "n8n", "Slack"],
    gradient: "linear-gradient(135deg, #001a1a 0%, #003333 50%, #001a2a 100%)",
    emoji: "🛒",
    status: "Live",
  },
  {
    id: 8,
    title: "AI Document Processor",
    description:
      "Extracts structured data from PDFs, contracts, and forms — then routes it to the right tool automatically.",
    tags: ["Claude API", "Python", "Google Drive", "Webhooks"],
    gradient: "linear-gradient(135deg, #1a1a00 0%, #2d2d00 50%, #1a1a0d 100%)",
    emoji: "📄",
    status: "In Progress",
  },
  {
    id: 9,
    title: "Client Onboarding Flow",
    description:
      "Triggers contracts, welcome emails, project setup in Notion, and Slack channel creation the moment a deal closes.",
    tags: ["HubSpot", "DocuSign", "Notion API", "Slack"],
    gradient: "linear-gradient(135deg, #1a0d0d 0%, #2d1a1a 50%, #1a0d1a 100%)",
    emoji: "🤝",
    status: "Live",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered
          ? "0 0 30px rgba(57, 255, 110, 0.15), 0 8px 30px rgba(0,0,0,0.4)"
          : "0 2px 12px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Card image / gradient banner */}
      <div
        style={{
          height: 180,
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}>
          {project.emoji}
        </span>

        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "3px 10px",
            borderRadius: 9999,
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            background:
              project.status === "Live"
                ? "rgba(57, 255, 110, 0.15)"
                : "rgba(255, 200, 0, 0.15)",
            color: project.status === "Live" ? "var(--accent)" : "#ffc800",
            border: `1px solid ${
              project.status === "Live"
                ? "rgba(57, 255, 110, 0.3)"
                : "rgba(255, 200, 0, 0.3)"
            }`,
          }}
        >
          {project.status === "Live" ? "● Live" : "◐ In Progress"}
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: "1rem",
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
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 24px",
        maxWidth: 1200,
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
          Each project solves a real business problem — more leads, faster responses,
          fewer manual tasks.
        </p>
      </div>

      {/* 3×3 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
