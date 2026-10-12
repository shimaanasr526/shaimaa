import { ArrowUpLeft } from "lucide-react";
import { Reveal } from "./Shared";
export default function About() {
  return (
    <section id="about" tabIndex="-1" className="section about">
      <div className="container about-grid">
        <Reveal>
          <span className="eyebrow">
            <i />
            الفكرة وراء النمو
          </span>
          <h2>
            المشكلة لم تكن
            <br />
            في الميزانية.
            <br />
            <span className="muted-title">بل في طريقة البيع.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          <p className="large-copy">
            نرى النمو كمنظومة،
            <br />
            لا كإعلان يعمل بمفرده.
          </p>
          <p>
            في سوق مزدحم بالعروض والمنتجات، لا يكفي أن تظهر أكثر. تحتاج إلى
            رسالة تبدأ من احتياج العميلة، وعرض تفهم قيمته، وتصميم يقودها إلى
            القرار.
          </p>
          <p>
            لهذا نجمع بين التفكير الاستراتيجي والإبداع والتحليل. من أول فكرة إلى
            آخر قرار في توزيع الميزانية، كل عنصر يعمل لخدمة هدف واحد: نمو قابل
            للقياس.
          </p>
          <a href="#services" className="text-link dark-link">
            تعرّف على منظومة العمل <ArrowUpLeft size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
