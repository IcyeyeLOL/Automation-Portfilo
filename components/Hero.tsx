"use client";

import Image from "next/image";

/* Social icons as inline SVGs to avoid dependencies */
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

const codeSnippet = `// Lead Outreach Automator
const runCampaign = async (leads) => {
  for (const lead of leads) {
    const email = await ai.compose({
      template: "outreach",
      context: lead,
    });
    await mailer.send(email);
    await delay(randomInterval());
  }
  return { sent: leads.length };
};`;

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 60px",
        maxWidth: 1200,
        margin: "0 auto",
        gap: 60,
      }}
    >
      {/* Left column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Avatar */}
        <div style={{ position: "relative", width: 72, height: 72 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--accent)",
            }}
          >
            <Image
              src="/kunle-face.png"
              alt="Olakunle Ajani"
              width={72}
              height={72}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
          {/* Online indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 4,
              right: 4,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "var(--accent)",
              border: "2px solid var(--bg-base)",
            }}
          />
        </div>

        {/* Headline */}
        <div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Building{" "}
            <span style={{ color: "var(--accent)" }}>automation</span>
            <br />
            that works while
            <br />
            <span style={{ color: "var(--accent)" }}>you sleep.</span>
          </h1>
          <p
            style={{
              marginTop: 16,
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 420,
            }}
          >
            I build end-to-end automation systems — lead outreach, AI responders,
            appointment bots, and CRM integrations — so your business runs 24/7.
          </p>
        </div>

        {/* CTA + Socials */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--accent)";
              el.style.color = "#0d0d0d";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--accent)";
            }}
          >
            <span>✉</span> Contact me
          </a>

          <div style={{ display: "flex", gap: 16 }}>
            {[
              { icon: <GithubIcon />, href: "https://github.com", label: "GitHub" },
              { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
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
                  el.style.transform = "translateY(-2px)";
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
      </div>

      {/* Right column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 24,
          position: "relative",
        }}
      >
        {/* Code card */}
        <div
          style={{
            width: "100%",
            maxWidth: 460,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(57, 255, 110, 0.08)",
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span
              style={{
                marginLeft: 8,
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "monospace",
              }}
            >
              automation.ts
            </span>
          </div>

          {/* Code body */}
          <pre
            style={{
              margin: 0,
              padding: "20px",
              fontFamily: "'Fira Code', 'Cascadia Code', monospace",
              fontSize: "0.78rem",
              lineHeight: 1.7,
              color: "#cdd6f4",
              overflowX: "auto",
            }}
          >
            {codeSnippet.split("\n").map((line, i) => (
              <div key={i}>
                {line
                  .split(/(\/\/.*|async|const|await|return|for|of|=>|"[^"]*"|\{|\}|\(|\)|,|;)/g)
                  .map((part, j) => {
                    if (/^\/\//.test(part))
                      return (
                        <span key={j} style={{ color: "#6c7086" }}>
                          {part}
                        </span>
                      );
                    if (/^(async|const|await|return|for|of)$/.test(part))
                      return (
                        <span key={j} style={{ color: "#cba6f7" }}>
                          {part}
                        </span>
                      );
                    if (/^"[^"]*"$/.test(part))
                      return (
                        <span key={j} style={{ color: "var(--accent)" }}>
                          {part}
                        </span>
                      );
                    if (/^(=>)$/.test(part))
                      return (
                        <span key={j} style={{ color: "#89dceb" }}>
                          {part}
                        </span>
                      );
                    return <span key={j}>{part}</span>;
                  })}
              </div>
            ))}
          </pre>
        </div>

        {/* Profile photo */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid var(--accent)",
            alignSelf: "center",
            boxShadow: "0 0 30px rgba(57, 255, 110, 0.2)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/kunle-face.png"
            alt="Olakunle Ajani"
            width={140}
            height={140}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
