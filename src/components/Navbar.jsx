import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, Menu, X, ChartNoAxesCombined } from "lucide-react";
import { brand, navigation } from "../content";
export function Logo() {
  return (
    <a href="#home" className="logo" aria-label="منظومة النمو، الرئيسية">
      <span className="logo-icon">
        <ChartNoAxesCombined size={23} />
      </span>
      <span>
        {brand.name}
        <small>{brand.descriptor}</small>
      </span>
    </a>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [active, setActive] = useState("");
  const reduced = useReducedMotion();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 150) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    navigation.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handle = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
      if (e.key === "Tab") {
        const nodes = [
          ...document.querySelectorAll(
            "#mobile-dialog a, #mobile-dialog button",
          ),
        ];
        const first = nodes[0],
          last = nodes.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handle);
    document.getElementById("menu-close")?.focus();
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", handle);
      document.getElementById("menu-toggle")?.focus();
    };
  }, [open]);
  return (
    <>
      <header className={`navbar ${scrolled ? "compact" : ""}`}>
        <div className="container nav-inner">
          <Logo />
          <nav aria-label="التنقل الرئيسي" className="desktop-nav">
            {navigation.map(([id, label]) => (
              <a
                key={id}
                className={active === id ? "active" : ""}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="nav-cta">
            لنتحدث عن نموّك <ArrowUpLeft size={17} />
          </a>
          <button
            id="menu-toggle"
            className="menu-button"
            aria-label="فتح القائمة"
            aria-expanded={open}
            aria-controls="mobile-dialog"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-dialog"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة التنقل"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3 }}
          >
            <button
              id="menu-close"
              className="menu-button close"
              aria-label="إغلاق القائمة"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
            <span className="eyebrow">منظومة النمو</span>
            {[...navigation, ["contact", "لنتحدث عن نموّك"]].map(
              ([id, label], i) => (
                <motion.a
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.07 }}
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(
                      () =>
                        document
                          .getElementById(id)
                          ?.focus({ preventScroll: true }),
                      50,
                    );
                  }}
                >
                  <small>0{i + 1}</small>
                  {label}
                  <ArrowUpLeft />
                </motion.a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
