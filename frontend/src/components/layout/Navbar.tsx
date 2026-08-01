import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CalendarCheck, Menu, Stethoscope, X } from 'lucide-react';
import { motion } from 'framer-motion';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Blog', '/blog'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact']
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-100/80 bg-white/94 backdrop-blur-xl transition ${solid ? 'shadow-[0_16px_45px_rgba(15,23,42,0.08)]' : ''}`}>
      <div className="container flex h-[78px] items-center justify-between gap-4 lg:h-[86px]">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_12px_28px_rgba(15,118,110,0.13)]">
            <Stethoscope size={24} />
          </span>
          <span>
            <span className="block text-[15px] font-black uppercase leading-none tracking-[0.08em] text-primary">Dr. Raja Saha</span>
            <span className="text-[11px] font-bold text-slate-600">Orthopedic Surgeon</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `relative py-2 text-[13px] font-black transition ${isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary' : 'text-ink hover:text-primary'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/appointment" className="hidden items-center gap-2 rounded-[7px] bg-primary px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(15,118,110,0.28)] transition hover:-translate-y-0.5 hover:bg-[#075f59] md:flex">
          <CalendarCheck size={18} /> Book Appointment
        </Link>
        <button className="grid h-11 w-11 place-items-center rounded-[7px] bg-white text-ink shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="container mb-4 rounded-[8px] border border-slate-100 bg-white p-4 shadow-soft lg:hidden">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)} className="block rounded-[6px] px-4 py-3 font-semibold text-slate-700 hover:bg-mist">
              {label}
            </NavLink>
          ))}
          <Link to="/appointment" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-[6px] bg-primary px-5 py-3 font-bold text-white">
            <CalendarCheck size={18} /> Book Appointment
          </Link>
        </motion.div>
      )}
    </header>
  );
}
