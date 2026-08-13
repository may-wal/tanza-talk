import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { contact } from "../data/content";

// ---------------------------------------------------------------------------
// Contact ("/contact")
// Segmented enquiry form — the "I am a..." field lets institutes, brands,
// sponsors and talent all land on the same page but sort themselves in the
// inbox. There's no backend wired up yet: submitting opens a pre-filled
// email to `contact.email` via mailto, the same no-backend pattern the
// footer newsletter form already uses on this site.
// ---------------------------------------------------------------------------
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    audience: contact.audienceOptions[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry — ${form.audience}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nI am a: ${form.audience}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <PageTransition>
      <PageHeader eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

      <section className="max-w-8xl mx-auto container-px pb-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-panel rounded-3xl border border-line/10 p-6 sm:p-10 theme-shadow space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-cream/60 text-xs mb-1.5 block">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className="w-full bg-panel2 rounded-xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 border border-line/15 focus:border-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-cream/60 text-xs mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="w-full bg-panel2 rounded-xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 border border-line/15 focus:border-accent outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-cream/60 text-xs mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className="w-full bg-panel2 rounded-xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 border border-line/15 focus:border-accent outline-none transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="text-cream/60 text-xs mb-1.5 block">I am a...</label>
                  <select
                    value={form.audience}
                    onChange={update("audience")}
                    className="w-full bg-panel2 rounded-xl px-4 py-3 text-sm text-cream border border-line/15 focus:border-accent outline-none transition-colors"
                  >
                    {contact.audienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-cream/60 text-xs mb-1.5 block">Tell us about your event</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full bg-panel2 rounded-xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 border border-line/15 focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Dates, expected footfall, budget range, talent you have in mind — whatever you've got."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-accent2 transition-colors"
              >
                {contact.submitCta} <ArrowRight size={16} />
              </button>

              {sent && (
                <p className="flex items-center gap-2 text-accent text-sm">
                  <CheckCircle2 size={16} /> Opening your email client to send this enquiry.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-panel rounded-3xl border border-line/10 p-8 theme-shadow">
              <h3 className="font-display text-lg text-cream">Prefer to reach out directly?</h3>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} className="text-accent" /> {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} className="text-accent" /> {contact.phone}
                </a>
                <div className="flex items-start gap-3 text-cream/70 text-sm">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  {contact.location}
                </div>
              </div>

              {/* Real "Be a Tanza Talks Speaker" signup from the source site */}
              <div className="mt-8 pt-6 border-t border-line/10">
                <p className="text-cream/50 text-xs leading-relaxed">
                  Want to appear as a guest rather than hire one?
                </p>
                <a
                  href={contact.speakerCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent text-sm mt-2 hover:gap-2.5 transition-all"
                >
                  {contact.speakerCta.label} <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
