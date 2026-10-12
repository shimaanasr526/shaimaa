import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpLeft, TrendingUp, Check } from "lucide-react";
import { CTA } from "./Shared";
export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero">
      <div className="hero-blob blob-one" />
      <div className="hero-blob blob-two" />
      <div className="grain" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div
            className="hero-label"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="status-dot" />
            نمو حقيقي. أثر قابل للقياس.
            <span className="label-line" />
          </motion.div>
          <h1>
            {["مبيعات أعلى.", "طلبات أكثر.", "إنفاق أقل."].map((line, i) => (
              <span key={line}>
                {line.split(" ").map((word, j) => (
                  <motion.span
                    key={word}
                    className={
                      i === 2 ? "hero-word gradient-text" : "hero-word"
                    }
                    initial={reduced ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + (i * 2 + j) * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                    {j === 0 ? " " : ""}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <p className="hero-description">
              حين يعمل المحتوى والإبداع والإعلانات معًا،
              <br className="desktop-break" /> يصبح النمو أكثر من مجرد احتمال.
            </p>
            <div className="hero-actions">
              <CTA />
              <a href="#case-study" className="text-link">
                شاهد دراسة الحالة <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={15} />
                استراتيجية متكاملة
              </span>
              <span>
                <Check size={15} />
                نتائج موثّقة
              </span>
              <span>
                <Check size={15} />
                قرارات مدروسة
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="visual-top">
            <span className="mini-label">دراسة حالة · العناية · السعودية</span>
            <span className="visual-dot" />
          </div>
          <div className="visual-head">
            <span>
              من التحدّي
              <br />
              إلى <strong>نمو استثنائي.</strong>
            </span>
            <div className="days">
              <b dir="ltr">19</b>
              <small>يومًا فقط</small>
            </div>
          </div>
          <div className="chart-wrap">
            <div className="chart-grid" />
            <div className="chart-label label-start">الموسم السابق</div>
            <div className="chart-label label-end">الموسم الحالي</div>
            <svg
              viewBox="0 0 420 190"
              aria-label="رسم توضيحي لنمو المبيعات بين الموسمين"
              role="img"
            >
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6FD6A8" stopOpacity=".25" />
                  <stop offset="100%" stopColor="#6FD6A8" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="line">
                  <stop stopColor="#6FA8FF" />
                  <stop offset="100%" stopColor="#6FD6A8" />
                </linearGradient>
              </defs>
              <path
                d="M10 160 C55 164 65 130 100 135 S150 142 178 110 S220 135 249 87 S295 98 320 60 S365 75 410 20 L410 190 L10 190Z"
                fill="url(#area)"
              />
              <motion.path
                d="M10 160 C55 164 65 130 100 135 S150 142 178 110 S220 135 249 87 S295 98 320 60 S365 75 410 20"
                fill="none"
                stroke="url(#line)"
                strokeWidth="3"
                initial={reduced ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <circle cx="410" cy="20" r="6" fill="#6FD6A8" />
            </svg>
            <div className="growth-chip">
              <TrendingUp size={17} />
              <b dir="ltr">+117.6%</b>
              <span>نمو المبيعات</span>
            </div>
          </div>
          <div className="visual-metrics">
            <div>
              <small>إجمالي المبيعات</small>
              <b dir="ltr">
                1.12<span>M</span>
              </b>
              <span>ريال سعودي</span>
            </div>
            <div>
              <small>عدد الطلبات</small>
              <b dir="ltr">
                4.56<span>K</span>
              </b>
              <span>طلب خلال الحملة</span>
            </div>
          </div>
          <a href="#case-study" className="visual-footer">
            قصة النمو، بالأرقام والتفاصيل <ArrowUpLeft size={18} />
          </a>
          <div className="floating-tag">
            <span className="tag-icon">
              <TrendingUp size={19} />
            </span>
            <div>
              <strong>أكثر من ضعف المبيعات</strong>
              <small>مقارنة بالموسم السابق</small>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container hero-bottom">
        <span>الفكرة الواضحة تصنع الفرق.</span>
        <a href="#about" aria-label="انتقل إلى من نحن">
          <ArrowDown size={18} />
        </a>
        <span className="edition">دراسة نمو / 01</span>
      </div>
    </section>
  );
}
