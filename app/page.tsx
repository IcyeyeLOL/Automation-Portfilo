import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <Background />
      <Navbar />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Projects />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ height: 1, background: "var(--border)" }} />
        </div>

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
