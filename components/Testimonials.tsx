"use client";

import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [triggered, setTriggered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleEnded = () => setIsPlaying(false);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

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
            border: `1px solid ${isHovered || isPlaying ? "rgba(57,255,110,0.35)" : "var(--border)"}`,
            boxShadow: isHovered || isPlaying
              ? "0 0 50px rgba(57,255,110,0.12), 0 20px 60px rgba(0,0,0,0.5)"
              : "0 8px 40px rgba(0,0,0,0.4)",
            transition: "border-color 0.35s, box-shadow 0.35s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video wrapper */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              background: "#000",
              cursor: "pointer",
            }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/VID_20260323_162008.mp4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />

            {/* Overlay gradient when paused */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Play / Pause button */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "rgba(57, 255, 110, 0.15)",
                    border: "2px solid rgba(57, 255, 110, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 0 30px rgba(57,255,110,0.3), 0 0 60px rgba(57,255,110,0.1)",
                    animation: "pulseRing 2s infinite",
                    transition: "transform 0.2s",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {/* Triangle play icon */}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5.5L19 12L8 18.5V5.5Z" fill="#39ff6e" />
                  </svg>
                </div>
              </div>
            )}

            {/* Subtle "● TESTIMONIAL" badge top-left */}
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

          {/* Custom progress + controls bar */}
          <div style={{ padding: "14px 20px 18px", background: "var(--bg-card)" }}>
            {/* Seek bar */}
            <div
              style={{
                width: "100%",
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 9999,
                cursor: "pointer",
                marginBottom: 12,
                position: "relative",
                overflow: "hidden",
              }}
              onClick={handleSeek}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(to right, #39ff6e, #22c55e)",
                  borderRadius: 9999,
                  transition: "width 0.1s linear",
                  boxShadow: "0 0 8px rgba(57,255,110,0.6)",
                }}
              />
            </div>

            {/* Bottom row: play btn + time + label */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Play/pause icon button */}
              <button
                onClick={togglePlay}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(57,255,110,0.1)",
                  border: "1px solid rgba(57,255,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background 0.2s, border-color 0.2s",
                  color: "var(--accent)",
                  padding: 0,
                }}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5L19 12L8 18.5V5.5Z" />
                  </svg>
                )}
              </button>

              {/* Time */}
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {formatTime((progress / 100) * duration)} / {formatTime(duration)}
              </span>

              {/* Spacer */}
              <div style={{ flex: 1 }} />

              {/* Client label */}
              <div style={{ textAlign: "right" }}>
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
        <div
          style={{
            maxWidth: 680,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              fontWeight: 600,
              lineHeight: 1.65,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              position: "relative",
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

          {/* Divider line with stars */}
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
