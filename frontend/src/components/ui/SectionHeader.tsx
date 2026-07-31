import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </motion.div>
  );
}
