import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Clock3, HeartPulse, MapPin, MessageCircle, Phone, ShieldCheck, Smile, Sparkles, Star, Users } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import GoogleReviewsSection from '../components/ui/GoogleReviewsSection';
import { doctorImages, faqs, gallery, services, stats } from '../data/site';

const statIcons = [Users, Star, Smile, Clock3];
const trustItems = [
  ['Advanced Technology', Sparkles],
  ['Patient Focused', HeartPulse],
  ['Trusted by 1000+ Patients', ShieldCheck]
];

export default function Home() {
  return (
    <>
      <section className="hero-panel relative overflow-hidden">
        <div className="container relative z-10 grid min-h-[720px] items-center gap-8 py-8 md:min-h-[660px] lg:grid-cols-[0.85fr_1.15fr] lg:py-12">
          <div className="relative z-20">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-primary">
              Welcome to Ortho Care
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="hero-title max-w-[680px]">
              Expert Orthopedic Care <span className="text-primary">That Gets You Back To Life</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-[560px] text-[16px] leading-8 text-slate-700 md:text-[17px]">
              Advanced joint replacement, arthroscopy, sports injury treatment and trauma care delivered with compassion, precision and excellence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Link to="/appointment" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[7px] bg-primary px-7 py-4 text-sm font-extrabold text-white shadow-[0_16px_35px_rgba(15,118,110,0.28)] transition hover:-translate-y-0.5 hover:bg-[#075f59] sm:min-w-[210px]">
                <CalendarCheck size={17} /> Book Appointment
              </Link>
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[7px] border border-primary/55 bg-white/85 px-7 py-4 text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:bg-teal-50 sm:min-w-[210px]">
                Explore Services <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-white"><ArrowRight size={12} /></span>
              </Link>
            </motion.div>

            <div className="mt-9 grid grid-cols-2 overflow-hidden rounded-[8px] border border-white/80 bg-white/80 shadow-[0_18px_54px_rgba(15,23,42,0.09)] backdrop-blur md:grid-cols-4 lg:max-w-[600px]">
              {stats.map(([value, label], index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="min-h-[116px] border-b border-r border-slate-200/80 p-4 last:border-r-0 even:border-r-0 md:border-b-0 md:even:border-r md:last:border-r-0">
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-[8px] bg-primary/10 text-primary">
                      <Icon size={22} strokeWidth={1.9} />
                    </span>
                    <p className="text-2xl font-black text-primary md:text-3xl">{value}</p>
                    <p className="mt-1 text-[11px] font-semibold leading-4 text-slate-600 md:text-xs">{label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative z-10 mx-auto w-full max-w-[720px] self-end">
            <div className="doctor-arc absolute bottom-0 right-[-6%] h-[92%] w-[96%] overflow-hidden border-l-[10px] border-primary/85 bg-teal-50 shadow-[inset_24px_0_0_rgba(255,255,255,0.85)]">
              <img src={doctorImages[0]} alt="Dr. Raja Saha orthopedic surgeon" className="h-full w-full object-cover object-[56%_center]" />
            </div>
            <div className="relative min-h-[360px] md:min-h-[560px] lg:min-h-[610px]" />
            <div className="absolute bottom-10 left-2 z-20 hidden rounded-[8px] bg-white px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {doctorImages.slice(1, 6).map((src, index) => (
                    <img key={src} src={src} alt={`Patient review ${index + 1}`} className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber">
                  <Star size={18} fill="currentColor" />
                  <span className="text-xl font-black text-ink">4.9</span>
                </div>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-600">Based on 97+ Google Reviews</p>
            </div>
            <div className="absolute right-0 top-[22%] z-20 hidden w-[154px] gap-3 md:grid">
              {trustItems.map(([label, Icon]) => (
                <div key={String(label)} className="flex items-center gap-3 rounded-[8px] border border-white/80 bg-white/90 px-4 py-4 text-[12px] font-extrabold leading-4 text-ink shadow-[0_16px_42px_rgba(15,23,42,0.13)] backdrop-blur">
                  <Icon className="shrink-0 text-primary" size={24} strokeWidth={1.9} />
                  {label as string}
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 right-4 z-20 grid grid-cols-3 overflow-hidden rounded-[8px] bg-primary text-white shadow-glow md:hidden">
              {[
                ['WhatsApp', MessageCircle],
                ['Call Now', Phone],
                ['Location', MapPin]
              ].map(([label, Icon]) => (
                <Link key={String(label)} to="/contact" className="grid min-w-[76px] place-items-center gap-1 border-r border-white/20 py-3 text-[10px] font-bold last:border-r-0">
                  <Icon size={16} /> {label as string}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container relative z-20 -mt-6 pb-7 md:hidden">
          <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
            <div className="grid grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <Link key={service.title} to="/services" className="grid min-h-[84px] place-items-center gap-2 border-r border-slate-100 px-2 py-3 text-center text-[10px] font-black text-ink last:border-r-0">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <service.icon size={20} />
                  </span>
                  <span className="line-clamp-2">{service.title.split(' ').slice(0, 2).join(' ')}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-primary">Our Specialties</p>
            <h2 className="section-title service-wave">Comprehensive Orthopedic Services</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="bg-white pb-10">
        <div className="container overflow-hidden rounded-[8px] bg-gradient-to-r from-[#064d53] via-primary to-[#08766f] text-white shadow-[0_20px_55px_rgba(15,118,110,0.24)]">
          <div className="grid gap-0 md:grid-cols-[1.1fr_repeat(4,1fr)]">
            <div className="p-7 md:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-teal-100">Why Choose Us</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight md:text-4xl">World Class Care, Personal Touch</h2>
            </div>
            {['Personalized Treatment', 'Advanced Technology', 'Faster Recovery', 'Experienced Surgeon'].map((item, index) => {
              const Icon = [HeartPulse, Sparkles, Users, ShieldCheck][index];
              return (
                <motion.div key={item} whileHover={{ y: -4 }} className="flex min-h-[120px] items-center gap-4 border-t border-white/14 p-6 md:border-l md:border-t-0">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/13 text-white">
                    <Icon size={24} />
                  </span>
                  <div>
                    <p className="text-sm font-black leading-5">{item}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#f5fbfb]">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-primary">Gallery</p>
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
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-primary">FAQ</p>
            <h2 className="section-title">Questions Patients Ask First</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
