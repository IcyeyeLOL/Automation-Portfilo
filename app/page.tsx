import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <Navbar />

      {/* Subtle gradient backdrop behind hero */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          background:
            "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(57, 255, 110, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />

        {/* Section divider */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Projects />

        {/* Section divider */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
