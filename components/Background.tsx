export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Animated dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(57, 255, 110, 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          animation: "dotGrid 6s ease-in-out infinite",
        }}
      />

      {/* Top-right glow orb */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(57,255,110,0.08) 0%, transparent 65%)",
          animation: "orbDrift 16s ease-in-out infinite",
        }}
      />

      {/* Bottom-left glow orb */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-15%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(57,255,110,0.05) 0%, transparent 65%)",
          animation: "orbDrift 22s ease-in-out infinite reverse",
        }}
      />

      {/* Subtle vignette at edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(13,13,13,0.6) 100%)",
        }}
      />
    </div>
  );
}
