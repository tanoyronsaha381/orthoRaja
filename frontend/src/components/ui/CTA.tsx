import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container overflow-hidden rounded-[8px] bg-ink p-8 text-white shadow-soft md:p-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-secondary">Patient-first orthopedic care</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Ready To Live Pain Free?</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Book a focused consultation and get a clear diagnosis, treatment roadmap and recovery plan.</p>
          </div>
          <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-primary transition hover:scale-105">
            <CalendarCheck size={20} /> Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
