import { useState } from 'react';
import { Building2, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { sendContact } from '../services/api';
import { clinicEmail, clinicEmailHref, clinicPhoneDisplay, clinicPhoneHref, clinicWhatsAppHref } from '../data/contact';

const locations = [
  {
    name: 'Dum Dum Bibhuti Deb Janakalyan Samity',
    address: 'Neelambar Vihar Complex, 40, Dum Dum Rd, Ward Number 22, Motijheel, Amarpalli, South Dumdum, West Bengal 700074',
    meta: 'Name: Bibhuti Janakalyan',
    phone: clinicPhoneDisplay,
    tone: 'text-rose'
  },
  {
    name: 'Techno India DAMA Healthcare & Medical Centre',
    address: 'LB 10, Eastern Metropolitan Bypass Rd, Chingrighata, LB Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106',
    phone: clinicPhoneDisplay,
    tone: 'text-accent'
  },
  {
    name: 'Sterling Hospital',
    address: '55/1, Bhupendra Bose Ave, Hati Bagan, Shyam Bazar, Kolkata, West Bengal 700004',
    phone: clinicPhoneDisplay,
    tone: 'text-amber'
  },
  {
    name: 'Arunodaya Healthcare Pvt Ltd',
    address: '1, TN Mukerjee Rd, Station Pally, Dankuni, West Bengal 712708',
    phone: clinicPhoneDisplay,
    tone: 'text-success'
  },
  {
    name: 'Apollo Diagnostics Bonhooghly',
    address: '76C, Rai Mohon Banerjee Rd, Subhas Pally Park, Bonhooghly Government Colony, Kolkata, Baranagar, West Bengal 700108',
    phone: clinicPhoneDisplay,
    tone: 'text-success'
  }
];

const contactCards = [
  { title: 'Main Area', text: 'Kolkata, West Bengal', icon: MapPin },
  { title: 'Phone', text: clinicPhoneDisplay, icon: Phone, href: clinicPhoneHref },
  { title: 'Email', text: clinicEmail, icon: Mail, href: clinicEmailHref },
  { title: 'WhatsApp', text: 'Chat with clinic team', icon: MessageCircle, href: clinicWhatsAppHref, external: true }
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as { name: string; phone: string; email?: string; message: string };
    await sendContact(data);
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="section mesh-bg pt-36">
        <div className="container max-w-4xl text-center">
          <h1 className="hero-title">Contact OrthoRaja</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">Find the chamber, call the clinic or send a message for appointment help.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary">Contact Details</p>
            <h2 className="section-title">Our Address & Contact Details</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {locations.map((location) => (
              <article key={location.name} className="flex min-h-[360px] flex-col rounded-[8px] border border-slate-200 bg-white p-5 text-center shadow-[0_14px_45px_rgba(15,23,42,0.05)]">
                <Building2 className={`mx-auto mb-4 ${location.tone}`} size={42} strokeWidth={1.9} />
                <h3 className={`font-display text-[25px] font-black leading-tight ${location.tone}`}>{location.name}</h3>
                <div className="mt-5 flex flex-1 flex-col gap-4 text-slate-600">
                  <p className="text-[15px] font-medium leading-7">{location.address}</p>
                  {location.meta && <p className="text-sm font-bold text-primary">{location.meta}</p>}
                </div>
                <a href={clinicPhoneHref} className="mt-5 inline-flex items-center justify-center gap-2 rounded-[6px] bg-primary/10 px-3 py-3 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white">
                  <Phone size={16} /> {location.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map(({ title, text, icon: Icon, href, external }) => {
              const CardTag = href ? 'a' : 'div';
              return (
              <CardTag key={title} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="rounded-[8px] bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
                <Icon className="mb-4 text-primary" />
                <p className="text-xl font-bold">{title}</p>
                <p className="mt-2 text-slate-600">{text}</p>
              </CardTag>
              );
            })}
          </div>

          <div>
            <iframe title="Kolkata map" className="h-72 w-full rounded-[8px] shadow-soft" loading="lazy" src="https://www.google.com/maps?q=Dr%20Raja%20Saha%20best%20orthopaedics%20surgeon&output=embed"></iframe>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-[8px] bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3 text-primary">
                <Navigation size={22} />
                <p className="text-lg font-black text-ink">Send appointment or chamber enquiry</p>
              </div>
              <input name="name" required placeholder="Name" className="rounded-[8px] border border-slate-200 px-4 py-3 outline-primary" />
              <input name="phone" required placeholder="Phone" className="rounded-[8px] border border-slate-200 px-4 py-3 outline-primary" />
              <input name="email" placeholder="Email" className="rounded-[8px] border border-slate-200 px-4 py-3 outline-primary" />
              <textarea name="message" required placeholder="Message" rows={4} className="rounded-[8px] border border-slate-200 px-4 py-3 outline-primary" />
              <button className="rounded-[6px] bg-primary px-6 py-4 font-bold text-white transition hover:bg-secondary">Send Message</button>
              {sent && <p className="font-bold text-success">Message sent successfully.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
