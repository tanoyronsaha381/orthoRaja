import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Clock3, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import GoogleReviewsSection from '../components/ui/GoogleReviewsSection';
import { doctorImages, faqs, gallery, services, stats } from '../data/site';

const statIcons = [ShieldCheck, Clock3, ShieldCheck, Clock3];

export default function Home() {
  return (
    <>
      <section className="mesh-bg relative overflow-hidden">
        <div className="container grid min-h-[760px] items-center gap-8 py-12 md:min-h-[690px] lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
          <div className="relative z-10">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-primary">
              Welcome to Ortho Care
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="hero-title max-w-[680px]">
              Expert Orthopedic Care <span className="text-primary">That Gets You Back To Life</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-[560px] text-[17px] leading-8 text-slate-700">
              Advanced joint replacement, arthroscopy, sports injury treatment and trauma care delivered with compassion, precision and excellence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-[6px] bg-primary px-7 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(15,118,110,0.25)] transition hover:-translate-y-0.5 hover:bg-secondary">
                Book Appointment <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-[6px] border border-primary/55 bg-white/80 px-7 py-4 text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:bg-teal-50">
                Explore Services <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-white"><ArrowRight size={12} /></span>
              </Link>
            </motion.div>

            <div className="mt-12 hidden grid-cols-2 gap-4 sm:grid md:grid-cols-4 lg:max-w-[560px]">
              {stats.map(([value, label], index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-slate-200 bg-white/88 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                    <Icon className="mb-3 text-primary" size={25} />
                    <p className="text-3xl font-black text-primary">{value}</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative z-0 mx-auto w-full max-w-[670px] self-end">
            <div className="absolute bottom-0 right-0 h-[64%] w-[83%] rounded-tl-[220px] rounded-tr-[30px] bg-primary"></div>
            <div className="absolute bottom-0 right-[6%] h-[54%] w-[74%] rounded-tl-[200px] bg-secondary/60 blur-sm"></div>
            <img
              className="hero-doctor relative z-10 mx-auto h-[560px] w-full object-contain object-bottom md:h-[600px]"
              src={doctorImages[0]}
              alt="Dr. Raja Saha orthopedic surgeon"
            />
            <div className="absolute left-0 top-12 z-20 hidden w-32 overflow-hidden rounded-[8px] border-4 border-white shadow-glow lg:block">
              <img src={doctorImages[1]} alt="Dr. Raja Saha clinic portrait" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute bottom-8 left-10 z-20 hidden w-40 overflow-hidden rounded-[8px] border-4 border-white shadow-soft lg:block">
              <img src={doctorImages[2]} alt="Dr. Raja Saha patient care moment" className="aspect-[5/4] w-full object-cover" />
            </div>
            <div className="contact-rail absolute right-3 top-[35%] z-20 hidden overflow-hidden rounded-[8px] bg-white text-center text-[11px] font-bold text-slate-700 md:block">
              {[
                ['WhatsApp', MessageCircle],
                ['Call Now', Phone],
                ['Location', MapPin]
              ].map(([label, Icon]) => (
                <Link key={String(label)} to="/contact" className="grid gap-1 border-b border-slate-100 px-5 py-4 last:border-b-0">
                  <Icon className="mx-auto text-primary" size={21} />
                  {label as string}
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="relative z-20 -mt-10 grid gap-3 sm:hidden">
            {stats.map(([value, label], index) => {
              const Icon = statIcons[index];
              return (
                <div key={label} className="flex items-center gap-4 rounded-[8px] border border-slate-200 bg-white p-4 shadow-soft">
                  <Icon className="text-primary" size={25} />
                  <div>
                    <p className="text-2xl font-black text-primary">{value}</p>
                    <p className="text-xs font-semibold text-slate-600">{label}</p>
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-3 overflow-hidden rounded-[8px] bg-primary text-white shadow-glow">
              {[
                ['WhatsApp', MessageCircle],
                ['Call Now', Phone],
                ['Location', MapPin]
              ].map(([label, Icon]) => (
                <Link key={String(label)} to="/contact" className="grid place-items-center gap-1 border-r border-white/20 py-3 text-[11px] font-bold last:border-r-0">
                  <Icon size={17} /> {label as string}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary">Our Specialties</p>
            <h2 className="section-title service-wave">Comprehensive Orthopedic Services</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary">Why Choose Us</p>
            <h2 className="section-title">World Class Care, Personal Touch</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {['Personalized Treatment', 'Advanced Technology', 'Faster Recovery', 'Experienced Surgeon'].map((item) => (
              <motion.div key={item} whileHover={{ y: -6 }} className="rounded-[8px] border border-slate-100 bg-white p-6 shadow-soft">
                <ShieldCheck className="mb-4 text-primary" size={32} />
                <p className="font-display text-xl font-bold text-ink">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary">Gallery</p>
            <h2 className="section-title">Clinic, Care And Recovery Moments</h2>
          </div>
          <div className="masonry">
            {gallery.slice(0, 5).map((src, index) => <img key={src} src={src} alt={`OrthoRaja gallery ${index + 1}`} loading="lazy" className="mb-5 w-full rounded-[8px] shadow-soft transition hover:scale-[1.02]" />)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-primary">FAQ</p>
            <h2 className="section-title">Questions Patients Ask First</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
