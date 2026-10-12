import { useState } from "react";
import { ArrowUpLeft, ShieldCheck, Mail } from "lucide-react";
import { brand } from "../content";
import { Reveal, SectionHeading } from "./Shared";
const initial = { name: "", email: "", project: "", message: "" };
export default function Contact() {
  const [values, setValues] = useState(initial),
    [errors, setErrors] = useState({}),
    [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const next = {};
    if (values.name.trim().length < 2)
      next.name = "يرجى إدخال اسمك (حرفان على الأقل).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "يرجى إدخال بريد إلكتروني صحيح.";
    if (!values.project) next.project = "اختر نوع مشروعك.";
    if (values.message.trim().length < 10)
      next.message = "شاركنا تفاصيل أكثر (10 أحرف على الأقل).";
    setErrors(next);
    setStatus("");
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    if (!brand.formEndpoint && !brand.email) {
      setStatus(
        "بياناتك مكتملة، لكن استقبال الرسائل لم يُفعّل بعد. لم تُرسل الرسالة ولم تُحفظ بياناتك.",
      );
      return;
    }
    if (brand.formEndpoint) {
      setBusy(true);
      try {
        const res = await fetch(brand.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error();
        setStatus("تم إرسال رسالتك بنجاح. شكرًا لتواصلك معنا.");
        setValues(initial);
      } catch {
        setStatus("تعذّر إرسال الرسالة. يرجى المحاولة لاحقًا.");
      } finally {
        setBusy(false);
      }
    } else {
      const body = `الاسم: ${values.name}\nالبريد: ${values.email}\nالمشروع: ${values.project}\n\n${values.message}`;
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("طلب مناقشة مشروع جديد")}&body=${encodeURIComponent(body)}`;
      setStatus("تم طلب فتح تطبيق البريد لإكمال الإرسال.");
    }
  }
  function update(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setStatus("");
  }
  return (
    <section id="contact" tabIndex="-1" className="section contact">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="لنتحدث عن نموّك"
            title={
              <>
                مشروعك القادم.
                <br />
                <span className="muted-title">قصّة نمو جديدة.</span>
              </>
            }
            description="أخبرنا أين أنت اليوم، وإلى أين تريد الوصول. البداية الجيدة هي محادثة واضحة."
          />
          <div className="contact-detail">
            <span>
              <Mail size={21} />
            </span>
            <div>
              <strong>مساحة لفكرتك وطموحك</strong>
              <p>شاركنا تحدّيك، وما الذي ترغب في تغييره.</p>
            </div>
          </div>
          <div className="contact-note">
            <ShieldCheck size={17} />
            <span>لا نطلب بيانات حساسة أو معلومات دفع.</span>
          </div>
        </div>
        <Reveal className="contact-form">
          <form onSubmit={submit} noValidate>
            <div className="form-row">
              <Field
                name="name"
                label="الاسم"
                placeholder="كيف نناديك؟"
                values={values}
                errors={errors}
                update={update}
                autoComplete="name"
              />
              <Field
                name="email"
                label="البريد الإلكتروني"
                placeholder="name@example.com"
                type="email"
                values={values}
                errors={errors}
                update={update}
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="project">
                نوع المشروع <span>*</span>
              </label>
              <select
                id="project"
                name="project"
                value={values.project}
                onChange={update}
                aria-invalid={!!errors.project}
                aria-describedby={errors.project ? "project-error" : undefined}
                required
              >
                <option value="">اختر نوع مشروعك</option>
                <option>علامة عناية وجمال</option>
                <option>متجر إلكتروني</option>
                <option>علامة تجارية أخرى</option>
              </select>
              {errors.project && (
                <span className="field-error" id="project-error">
                  {errors.project}
                </span>
              )}
            </div>
            <div className="field">
              <label htmlFor="message">
                ما الذي تريد تحقيقه؟ <span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                maxLength="3000"
                placeholder="حدّثنا عن مشروعك، أهدافك، والتحدّي الذي تواجهه…"
                value={values.message}
                onChange={update}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              />
              {errors.message && (
                <span className="field-error" id="message-error">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              className="button primary submit"
              type="submit"
              disabled={busy}
            >
              <span>{busy ? "جارٍ الإرسال…" : "لنبدأ المحادثة"}</span>
              <ArrowUpLeft size={20} />
            </button>
            <p className="form-disclosure">
              {brand.formEndpoint
                ? "تُرسل بياناتك إلى فريق العمل لمتابعة طلبك."
                : brand.email
                  ? "سيُفتح تطبيق البريد لإكمال إرسال الرسالة."
                  : "استقبال الرسائل غير متاح حاليًا. يمكنك تعبئة النموذج، ولن تُرسل بياناتك."}
            </p>
            <div
              role="status"
              aria-live="polite"
              className={status ? "form-status" : ""}
            >
              {status}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
function Field({
  name,
  label,
  placeholder,
  type = "text",
  values,
  errors,
  update,
  autoComplete,
}) {
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        dir={type === "email" ? "ltr" : undefined}
        placeholder={placeholder}
        value={values[name]}
        onChange={update}
        autoComplete={autoComplete}
        maxLength={name === "name" ? 100 : 254}
        required
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={`${name}-error`}>
          {errors[name]}
        </span>
      )}
    </div>
  );
}
