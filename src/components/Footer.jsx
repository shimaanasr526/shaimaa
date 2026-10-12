import { Logo } from "./Navbar";
import { ArrowUp, MessageCircle } from "lucide-react";
import { brand, navigation } from "../content";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Logo />
              <p>فكرة واضحة. منظومة متكاملة. نمو قابل للقياس.</p>
            </div>
            <nav aria-label="روابط التذييل">
              {navigation.map(([id, label]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
              <a href="#contact">تواصل معنا</a>
            </nav>
            <a className="back-top" href="#home" aria-label="العودة إلى الأعلى">
              <ArrowUp size={20} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} منظومة النمو</span>
            <span>موقع مبني على دراسة حالة العناية · الاسم وصفي</span>
          </div>
        </div>
      </footer>
      {brand.phone && (
        <a
          className="whatsapp"
          href={`https://wa.me/${brand.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle />
        </a>
      )}
    </>
  );
}
