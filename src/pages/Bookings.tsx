import { useState } from "react";
import { z } from "zod";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  org: z.string().trim().max(150).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  type: z.string().min(1, "Select an enquiry type"),
  date: z.string().max(50).optional(),
  venue: z.string().max(150).optional(),
  city: z.string().max(150).optional(),
  details: z.string().max(2000).optional(),
});

const types = [
  "Live Performance",
  "Gospel Concert",
  "Festival",
  "Worship Event",
  "Brand Collaboration",
  "Sync Licensing",
  "Media & Press",
  "Other",
];

const contacts = [
  { label: "Bookings & Events", email: "booking@nontokozomkhize.com" },
  { label: "Press & Media", email: "press@nontokozomkhize.com" },
  { label: "Management (Sginci Media)", email: "management@sgincimusic.com" },
  { label: "Sync Licensing", email: "sync@nontokozomkhize.com" },
];

const Bookings = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "", date: "", venue: "", city: "", details: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setSubmitted(true);
  };

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const inputCls = "w-full bg-transparent border-b border-espresso/25 py-3 px-1 focus:border-gold focus:outline-none transition-colors text-espresso placeholder:text-espresso/40";
  const labelCls = "text-[11px] tracking-[0.3em] uppercase text-espresso/60";

  return (
    <div className="bg-ivory text-espresso min-h-screen">
      <Nav />

      <section className="pt-40 pb-20 px-6 lg:px-12 bg-espresso text-ivory grain">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-gold tracking-[0.4em] text-xs uppercase">Bookings & Enquiries</span>
            <h1 className="font-script text-gold text-7xl md:text-9xl leading-[0.85] mt-6">
              Bring Nontokozo
            </h1>
            <p className="font-serif italic text-3xl md:text-4xl text-ivory/95 mt-2">to Your Stage</p>
            <p className="mt-8 max-w-2xl mx-auto text-ivory/75 text-lg leading-relaxed">
              For live performances, gospel events, worship concerts, festival bookings, brand collaborations, and media enquiries — reach out below. We respond within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <Reveal>
              <div className="text-center py-20 border border-gold/40 bg-gold/5 px-8">
                <div className="font-script text-6xl md:text-7xl text-gold">Ngiyabonga</div>
                <p className="font-serif text-2xl md:text-3xl mt-4">Thank you. We'll be in touch soon.</p>
                <p className="mt-3 text-espresso/60">Your enquiry has been received.</p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input required value={form.name} onChange={onChange("name")} maxLength={100} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Organisation / Event Name</label>
                    <input value={form.org} onChange={onChange("org")} maxLength={150} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input required type="email" value={form.email} onChange={onChange("email")} maxLength={255} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Enquiry Type *</label>
                    <select required value={form.type} onChange={onChange("type")} className={inputCls + " appearance-none cursor-pointer"}>
                      <option value="">Select…</option>
                      {types.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Proposed Date</label>
                    <input value={form.date} onChange={onChange("date")} placeholder="e.g. 12 Aug 2026" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Venue</label>
                    <input value={form.venue} onChange={onChange("venue")} maxLength={150} className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>City / Country</label>
                    <input value={form.city} onChange={onChange("city")} maxLength={150} className={inputCls} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Additional Details</label>
                    <textarea value={form.details} onChange={onChange("details")} rows={5} maxLength={2000} className={inputCls + " resize-none"} />
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto px-12 py-4 bg-espresso text-ivory text-xs tracking-[0.35em] uppercase hover:bg-gold hover:text-espresso transition-colors">
                  Submit Enquiry
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-[hsl(36,25%,88%)]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-center">Direct Contact</h2>
            <p className="text-center text-espresso/60 mt-3 tracking-wider text-sm">Reach the right team directly.</p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {contacts.map((c, i) => (
              <Reveal key={c.email} delay={i * 80}>
                <a href={`mailto:${c.email}`} className="block bg-ivory border border-espresso/10 p-6 hover:border-gold hover:shadow-warm transition-all group">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-terracotta">{c.label}</div>
                  <div className="font-serif text-xl md:text-2xl mt-2 group-hover:text-gold transition-colors break-all">{c.email}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bookings;
