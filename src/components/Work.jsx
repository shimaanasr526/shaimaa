import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Shared";
const works = [
  {
    image: "offer.jpg",
    tag: "العرض أولًا",
    title: "قيمة تُفهم من أول نظرة",
    text: "إبراز العرض وترتيب العناصر البصرية لتقليل التشتت وتسريع فهم القيمة.",
  },
  {
    image: "bundle.jpg",
    tag: "النتيجة أولًا",
    title: "روتين يرتبط بنتيجة واضحة",
    text: "ربط المجموعة باحتياج حقيقي، بدل تقديم منتجات متفرقة يصعب الاختيار بينها.",
  },
  {
    image: "experience.jpg",
    tag: "التجربة أولًا",
    title: "محتوى أقرب إلى الواقع",
    text: "زاوية بصرية طبيعية تعكس الاستخدام، وتدعم بناء الثقة على المنصة.",
  },
  {
    image: "routine.jpg",
    tag: "الاختيار أبسط",
    title: "من منتجات إلى روتين متكامل",
    text: "تقديم العرض في سياق احتياج العميلة مع رسالة واحدة واضحة.",
  },
];
export default function Work() {
  const [index, setIndex] = useState(0);
  return (
    <section id="work" tabIndex="-1" className="section work">
      <div className="container">
        <div className="work-heading">
          <SectionHeading
            eyebrow="الإبداع حين يعمل"
            title={
              <>
                تصميم يُلفت.
                <br />
                <span className="muted-title">ورسالة تدفع للقرار.</span>
              </>
            }
            description="نماذج فعلية من الحملة. زوايا مختلفة، وأسباب مختلفة للشراء."
          />
          <div className="slider-controls">
            <button
              aria-label="العمل السابق"
              onClick={() =>
                setIndex((index + works.length - 1) % works.length)
              }
            >
              <ArrowRight size={20} />
            </button>
            <button
              aria-label="العمل التالي"
              onClick={() => setIndex((index + 1) % works.length)}
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>
        <div className="work-grid">
          {[0, 1, 2].map((offset) => {
            const w = works[(index + offset) % works.length];
            return (
              <Reveal key={offset} className={`work-card work-card-${offset}`}>
                <div className="work-image">
                  <WorkImage work={w} />
                  <span className="work-image-tag">{w.tag}</span>
                </div>
                <div className="work-caption">
                  <span className="card-number">
                    0{((index + offset) % works.length) + 1}
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="slider-bottom">
          <span>
            الشعار وأسماء المنتجات مخفية في المصدر حفاظًا على خصوصية العلامة.
          </span>
          <div className="slider-dots" role="group" aria-label="اختيار العمل">
            {works.map((w, i) => (
              <button
                key={w.image}
                className={index === i ? "selected" : ""}
                onClick={() => setIndex(i)}
                aria-label={`عرض العمل ${i + 1}`}
                aria-pressed={index === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkImage({ work }) {
  const ref = useRef(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [7, -7]);
  return (
    <motion.img
      ref={ref}
      style={{ y: reduced ? 0 : y }}
      src={`/images/${work.image}`}
      width="450"
      height="600"
      loading="lazy"
      alt={`تصميم إعلاني من الحملة: ${work.title}`}
    />
  );
}
