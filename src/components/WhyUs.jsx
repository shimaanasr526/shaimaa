import {
  ScanLine,
  HeartHandshake,
  Target,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Shared";
const items = [
  [
    ScanLine,
    "وضوح يختصر التردّد",
    "نبسّط كثرة المنتجات إلى روتينات وعروض يمكن فهمها من أول نظرة.",
  ],
  [
    HeartHandshake,
    "رسائل تبدأ من الإنسان",
    "نخاطب احتياجات العميلة ودوافعها؛ السعر، والنتيجة، والقيمة، والثقة.",
  ],
  [
    Target,
    "إبداع له هدف",
    "كل تصميم يحمل رسالة واحدة واضحة، ويمنح العرض المساحة التي يستحقها.",
  ],
  [
    SlidersHorizontal,
    "تحسين مستمر",
    "اختبار وتعلّم ومتابعة للعائد، ثم إعادة توزيع الميزانية حسب الأداء.",
  ],
];
export default function WhyUs() {
  return (
    <section className="section why">
      <div className="container why-grid">
        <SectionHeading
          light
          eyebrow="لماذا هذه المنظومة؟"
          title={
            <>
              لا نكتفي بالظهور.
              <br />
              نصنع سببًا <span className="gradient-text">للشراء.</span>
            </>
          }
          description="تفاصيل مدروسة، من الرسالة الأولى إلى قرار الشراء. هذا ما يصنع الفارق."
        />
        <div className="why-list">
          {items.map(([Icon, title, description], i) => (
            <Reveal className="why-item" key={title} delay={i * 0.08}>
              <span className="why-icon">
                <Icon size={23} strokeWidth={1.5} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="why-number">0{i + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
