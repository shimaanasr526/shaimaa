import { useEffect, useRef } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import CaseStudy from "./components/CaseStudy";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function CursorGlow() {
  const ref = useRef(null),
    reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !matchMedia("(pointer:fine)").matches) return;
    const handle = (e) => {
      ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      ref.current.style.opacity = ".6";
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, [reduced]);
  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        تخطّ إلى المحتوى
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CaseStudy />
        <Work />
        <Marquee />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <CursorGlow />
    </MotionConfig>
  );
}
