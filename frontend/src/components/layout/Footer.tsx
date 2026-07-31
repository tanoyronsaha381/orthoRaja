import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">OrthoRaja</p>
          <p className="mt-4 max-w-md text-slate-300">Premium orthopedic care in Kolkata for joint replacement, arthroscopy, sports injury and trauma recovery.</p>
        </div>
        <div>
          <p className="font-bold">Quick Links</p>
          <div className="mt-4 grid gap-2 text-slate-300">
            {['About', 'Services', 'Appointment', 'Blog', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`}>{item}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-3 text-slate-300">
            <span className="flex gap-2"><Phone size={18} /> +91 98765 43210</span>
            <span className="flex gap-2"><Mail size={18} /> care@orthoraja.com</span>
            <span className="flex gap-2"><MapPin size={18} /> Kolkata, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
