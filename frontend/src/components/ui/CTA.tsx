import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container overflow-hidden rounded-[8px] bg-gradient-to-r from-[#063f47] via-primary to-[#08766f] p-7 text-white shadow-[0_24px_80px_rgba(15,118,110,0.22)] md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal-100">Patient-first orthopedic care</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">Ready To Live Pain Free?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-teal-50">Book a focused consultation and get a clear diagnosis, treatment roadmap and recovery plan.</p>
          </div>
          <Link to="/appointment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] bg-white px-6 py-4 font-bold text-primary transition hover:-translate-y-0.5">
            <CalendarCheck size={20} /> Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
