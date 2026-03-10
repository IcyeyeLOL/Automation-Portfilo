import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import MindshiftSection from "@/components/MindshiftSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      <Background />
      <Navbar />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />

        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5%" }}>
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <MindshiftSection />

        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5%" }}>
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Projects />

        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 5%" }}>
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
