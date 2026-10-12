import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
export function Reveal({ children, className = "", delay = 0, id }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <Reveal className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">
        <i />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}
export function CTA({
  children = "لنصنع نموّك القادم",
  href = "#contact",
  className = "",
}) {
  return (
    <a className={`button primary ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpLeft size={20} />
    </a>
  );
}
