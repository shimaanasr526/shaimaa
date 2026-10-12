import { Sparkles } from "lucide-react";
const words = ["فكرة أوضح", "محتوى أقرب", "إبداع مؤثر", "نمو قابل للقياس"];
export default function Marquee() {
  return (
    <div className="marquee" aria-label={words.join("، ")}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1, 2, 3].map((n) => (
          <div className="marquee-set" key={n}>
            {words.map((w) => (
              <span key={w}>
                {w}
                <Sparkles size={23} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
