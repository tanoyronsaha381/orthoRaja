import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl">
      {items.map(([question, answer], index) => (
        <div key={question} className="mb-4 rounded-[8px] bg-white p-5 shadow-soft">
          <button className="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-ink" onClick={() => setOpen(open === index ? -1 : index)}>
            {question}
            <ChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180 text-primary' : ''}`} />
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-4 leading-7 text-slate-600">
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
