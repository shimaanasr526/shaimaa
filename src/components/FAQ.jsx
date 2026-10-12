import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "../content";
import { Reveal, SectionHeading } from "./Shared";
export default function FAQ() {
  const [open, setOpen] = useState(0),
    reduced = useReducedMotion();
  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="قبل أن نبدأ"
          title={
            <>
              أسئلة جيدة.
              <br />
              <span className="muted-title">إجابات واضحة.</span>
            </>
          }
          description="كل تعاون ناجح يبدأ بفهم مشترك وتوقعات واقعية."
        />
        <div>
          {faqs.map(([q, a], i) => (
            <Reveal className={`faq-item ${open === i ? "open" : ""}`} key={q}>
              <h3>
                <button
                  aria-expanded={open === i}
                  aria-controls={`answer-${i}`}
                  id={`question-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{q}</span>
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`answer-${i}`}
                    role="region"
                    aria-labelledby={`question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35 }}
                    className="faq-answer"
                  >
                    <p>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
