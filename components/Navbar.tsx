"use client";

import { useState, useEffect } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("Home");
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const width = useWindowWidth();
  const isMobile = width > 0 && width < 768;

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(-20px)",
        transition:
          "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), background 0.3s, border-color 0.3s",
        background: scrolled || menuOpen ? "rgba(13,13,13,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      {/* Scroll progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, var(--accent), rgba(57,255,110,0.3))",
          transition: "width 0.08s linear",
          animation:
            progress > 0 ? "progressPulse 2.5s ease-in-out infinite" : "none",
        }}
      />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 5%",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            textShadow: "0 0 20px rgba(57,255,110,0.4)",
          }}
        >
          {"{OA}"}
        </a>

        {/* Desktop nav links */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: 36, listStyle: "none" }}>
            {navLinks.map(({ label, href }, i) => (
              <li
                key={label}
                style={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.6s ease ${i * 80 + 200}ms, transform 0.6s ease ${i * 80 + 200}ms`,
                }}
              >
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      active === label ? "var(--accent)" : "var(--text-muted)",
                    transition: "color 0.2s",
                    position: "relative",
                    paddingBottom: 4,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      active === label ? "var(--accent)" : "var(--text-muted)")
                  }
                >
                  {label}
                  {active === label && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: "var(--accent)",
                        borderRadius: 1,
                        boxShadow: "0 0 6px rgba(57,255,110,0.6)",
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger button - mobile only */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              padding: 8,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "currentColor",
                borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "currentColor",
                borderRadius: 2,
                transition: "opacity 0.25s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "currentColor",
                borderRadius: 2,
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "8px 5% 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label);
                setMenuOpen(false);
              }}
              style={{
                display: "block",
                padding: "14px 0",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: active === label ? "var(--accent)" : "var(--text-primary)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
