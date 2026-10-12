import { CTA, Reveal } from "./Shared";
import { ArrowUpLeft } from "lucide-react";
export default function CTABanner() {
  return (
    <section className="cta-section">
      <Reveal className="container">
        <div className="cta-banner">
          <div className="grain" />
          <div>
            <span className="eyebrow">الخطوة القادمة تبدأ هنا</span>
            <h2>
              حوّل المحتوى والإعلانات
              <br />
              من تكلفة… إلى <span className="gradient-text">نمو.</span>
            </h2>
            <p>لنكتشف معًا ما يمكن أن تصنعه منظومة متكاملة لمشروعك.</p>
            <CTA>لنتحدث عن مشروعك</CTA>
          </div>
          <div className="cta-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <ArrowUpLeft strokeWidth={1} size={120} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
