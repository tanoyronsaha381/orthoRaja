import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { gallery } from '../data/site';

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <section className="section mesh-bg pt-36">
        <div className="container max-w-4xl text-center">
          <h1 className="hero-title">Gallery</h1>
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-soft"><Search className="text-primary" /><input className="w-full outline-none" placeholder="Search gallery..." /></div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container masonry">
          {gallery.map((src, index) => <button key={src} onClick={() => setActive(src)} className="mb-5 block w-full overflow-hidden rounded-[8px] shadow-soft"><img src={src} alt={`Dr. Raja Saha gallery item ${index + 1}`} loading="lazy" className="w-full transition hover:scale-105" /></button>)}
        </div>
      </section>
      {active && <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4"><button aria-label="Close preview" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full bg-white p-3"><X /></button><img src={active} alt="Fullscreen gallery preview" className="max-h-[86vh] max-w-full rounded-[8px]" /></div>}
    </>
  );
}
