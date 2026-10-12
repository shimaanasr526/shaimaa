import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { TrendingUp, ArrowUpLeft } from "lucide-react";
import { Reveal, SectionHeading } from "./Shared";
function Counter({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null),
    seen = useInView(ref, { once: true }),
    reduced = useReducedMotion(),
    [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / 1500, 1);
      setDisplay(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, reduced, value]);
  return (
    <span ref={ref} dir="ltr" aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
export default function CaseStudy() {
  return (
    <section id="case-study" tabIndex="-1" className="section case-study">
      <div className="container">
        <div className="case-heading">
          <SectionHeading
            eyebrow="دراسة حالة / علامة عناية سعودية"
            title={
              <>
                19 يومًا.
                <br />
                نتائج تتحدث عن نفسها.
              </>
            }
            description="من تحدّي الإنفاق والعائد، إلى أكثر من ضعف مبيعات الموسم السابق."
          />
          <span className="case-badge">
            <span className="status-dot" />
            نتائج الحملة الفعلية
          </span>
        </div>
        <div className="stats-grid">
          {[
            [117.6, 1, "%", "نمو المبيعات"],
            [4.56, 2, "K", "طلب خلال الحملة"],
            [1.12, 2, "M", "ريال سعودي · إجمالي المبيعات"],
            [19, 0, "", "يومًا صنعت الفارق"],
          ].map(([value, decimals, suffix, label], i) => (
            <Reveal className="stat" key={label} delay={i * 0.08}>
              <span className="stat-index">0{i + 1}</span>
              <strong>
                <Counter {...{ value, decimals, suffix }} />
              </strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="comparison">
          <div className="comparison-copy">
            <span className="eyebrow">قبل وبعد</span>
            <h3>
              نمو أكبر.
              <br />
              قرار شراء أقوى.
            </h3>
            <p>
              المقارنة مع الموسم السابق توضح أثر تطوير طريقة البيع، وليس مجرد
              زيادة الظهور.
            </p>
            <span className="growth-note">
              <TrendingUp size={18} />
              <b dir="ltr">+90.8%</b> نمو في الطلبات
            </span>
          </div>
          <div className="comparison-chart">
            <div className="comparison-row">
              <div className="bar-top">
                <span>الموسم الحالي</span>
                <strong dir="ltr">
                  1.12M <small>ر.س</small>
                </strong>
              </div>
              <div className="bar-track">
                <div className="bar current" />
              </div>
              <span className="bar-caption">4.56K طلب</span>
            </div>
            <div className="comparison-row">
              <div className="bar-top">
                <span>الموسم السابق</span>
                <strong dir="ltr">
                  514.78K <small>ر.س</small>
                </strong>
              </div>
              <div className="bar-track">
                <div className="bar previous" />
              </div>
              <span className="bar-caption">2.39K طلب</span>
            </div>
          </div>
        </Reveal>
        <div className="performance-strip">
          <Reveal>
            <small>أعلى عائد مُعلن · سناب شات</small>
            <strong dir="ltr">14.24×</strong>
          </Reveal>
          <Reveal>
            <small>الإنفاق الإعلاني المذكور</small>
            <strong dir="ltr">
              138K <span>ر.س</span>
            </strong>
          </Reveal>
          <Reveal className="performance-note">
            <ArrowUpLeft size={24} />
            <p>
              اختيار الكريتيف المناسب لكل منصة كان جزءًا أساسيًا من تحسين
              الأداء.
            </p>
          </Reveal>
        </div>
        <p className="data-note">
          المصدر: العرض المرفق. الأرقام تخص هذه الحملة وحدها. ورد عائد إجمالي
          10.86× في العرض؛ لم يُعتمد كمؤشر محسوب هنا لعدم توضيح أساس مطابقته مع
          أرقام الإنفاق والمبيعات.
        </p>
      </div>
    </section>
  );
}
