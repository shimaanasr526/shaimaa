import {
  Gift,
  MessagesSquare,
  Layers,
  ChartNoAxesCombined,
  ArrowUpLeft,
  TrendingUp,
} from "lucide-react";
const icons = { Gift, MessagesSquare, Layers, ChartNoAxesCombined };
import { services } from "../content";
import { Reveal, SectionHeading } from "./Shared";
export default function Services() {
  return (
    <section id="services" tabIndex="-1" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="أربع ركائز. هدف واحد."
          title={
            <>
              كل ما يحتاجه نموّك.
              <br />
              <span className="muted-title">في منظومة واحدة.</span>
            </>
          }
          description="حين تتكامل العناصر، تتحوّل الجهود المتفرقة إلى أثر أكبر."
        />
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.number} delay={i * 0.07} className="service-card">
                <div className="service-top">
                  <span className="service-icon">
                    <Icon size={25} strokeWidth={1.4} />
                  </span>
                  <span className="card-number">{s.number}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="service-tag">
                  <span>{s.tag}</span>
                  <ArrowUpLeft size={18} />
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="equation">
          <span>العرض</span>
          <b>×</b>
          <span>المحتوى</span>
          <b>×</b>
          <span>الإبداع</span>
          <b>×</b>
          <span>الإعلانات</span>
          <b>=</b>
          <strong>
            النمو <TrendingUp size={21} />
          </strong>
        </Reveal>
      </div>
    </section>
  );
}
