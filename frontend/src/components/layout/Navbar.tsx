import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Building2, CalendarCheck, Menu, X } from 'lucide-react';
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
    <header className={`sticky top-0 z-50 border-b border-slate-100 bg-white/92 backdrop-blur-xl transition ${solid ? 'shadow-[0_14px_40px_rgba(15,23,42,0.06)]' : ''}`}>
      <div className="container flex h-[88px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-secondary/30 bg-teal-50 text-primary">
            <Building2 size={24} />
          </span>
          <span>
            <span className="block text-[15px] font-black uppercase leading-none tracking-wide text-ink">Dr. Raja Saha</span>
            <span className="text-[11px] font-bold text-slate-600">Orthopaedic Surgeon</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `relative py-2 text-sm font-bold transition ${isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary' : 'text-slate-700 hover:text-primary'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/appointment" className="hidden items-center gap-2 rounded-[6px] bg-primary px-6 py-3 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(15,118,110,0.25)] transition hover:-translate-y-0.5 hover:bg-secondary md:flex">
          <CalendarCheck size={18} /> Book Appointment
        </Link>
        <button className="grid h-11 w-11 place-items-center rounded-[6px] bg-white text-ink lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="container mb-4 rounded-[8px] bg-white p-4 shadow-soft lg:hidden">
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
