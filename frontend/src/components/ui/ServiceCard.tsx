import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

export default function ServiceCard({ title, summary, icon: Icon }: { title: string; summary: string; icon: LucideIcon; image: string }) {
  return (
    <motion.article whileHover={{ y: -7 }} className="group flex min-h-[285px] flex-col rounded-[8px] border border-slate-100 bg-white p-5 text-center shadow-[0_14px_45px_rgba(15,23,42,0.05)] transition hover:border-primary/30 hover:shadow-[0_22px_70px_rgba(15,118,110,0.16)]">
      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary ring-8 ring-teal-50 transition group-hover:bg-primary group-hover:text-white">
          <Icon size={25} strokeWidth={1.8} />
      </div>
      <h3 className="text-[15px] font-black leading-6 text-ink md:text-[16px]">{title}</h3>
      <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-600">{summary}</p>
      <Link to="/services" className="mt-5 inline-flex items-center justify-center gap-2 text-[12px] font-extrabold text-primary">
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.article>
  );
}
