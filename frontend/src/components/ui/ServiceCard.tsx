import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

export default function ServiceCard({ title, summary, icon: Icon, image }: { title: string; summary: string; icon: LucideIcon; image: string }) {
  return (
    <motion.article whileHover={{ y: -8 }} className="group flex min-h-[360px] flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white text-center shadow-[0_14px_45px_rgba(15,23,42,0.05)] transition hover:border-primary/30 hover:shadow-glow">
      <div className="relative h-32 overflow-hidden">
        <img src={image} alt={`${title} by Dr. Raja Saha`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col px-5 py-6">
        <div className="mb-4 grid h-12 w-12 place-items-center self-center rounded-full bg-teal-50 text-primary transition group-hover:bg-primary group-hover:text-white">
          <Icon size={25} strokeWidth={1.8} />
        </div>
        <h3 className="font-display text-[20px] font-bold leading-6 text-ink">{title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{summary}</p>
        <Link to="/services" className="mt-5 inline-flex items-center justify-center gap-3 text-sm font-extrabold text-primary">
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
