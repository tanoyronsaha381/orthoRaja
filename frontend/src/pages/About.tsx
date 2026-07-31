import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/ui/CTA';
import { doctorImages, stats } from '../data/site';

export default function About() {
  const timeline = ['MBBS', 'MS Orthopedics', 'DNB Orthopedics', 'Advanced Joint Replacement Fellowships', 'Current Practice in Kolkata'];
  return (
    <>
      <section className="section mesh-bg pt-36">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
            <img src={doctorImages[1]} alt="Dr. Raja Saha profile" className="h-full min-h-[420px] rounded-[8px] object-cover shadow-glow" />
            <div className="grid gap-4">
              <img src={doctorImages[10]} alt="Dr. Raja Saha professional portrait" className="h-full min-h-[200px] rounded-[8px] object-cover shadow-soft" />
              <img src={doctorImages[3]} alt="Dr. Raja Saha orthopedic care" className="h-full min-h-[200px] rounded-[8px] object-cover shadow-soft" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">About Dr. Raja Saha</p>
            <h1 className="hero-title">Modern orthopedic care with calm clinical judgment.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">Dr. Raja Saha focuses on joint replacement, arthroscopy, trauma care and sports injury treatment, combining surgical precision with clear patient communication.</p>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionHeader eyebrow="Journey" title="Story Timeline" />
          <div className="grid gap-4 md:grid-cols-5">
            {timeline.map((item, index) => <div key={item} className="rounded-[8px] bg-mist p-5 shadow-soft"><p className="text-primary font-black">0{index + 1}</p><p className="mt-3 font-bold">{item}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container grid gap-6 md:grid-cols-3">
          {['Mission: reduce pain with ethical, evidence-based care.', 'Vision: make advanced orthopedic treatment easier to understand and access.', 'Promise: precise diagnosis, transparent options and guided recovery.'].map((text) => <div key={text} className="glass rounded-[8px] p-7 text-lg font-bold leading-8">{text}</div>)}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => <div key={label} className="rounded-[8px] bg-ink p-6 text-white"><p className="text-4xl font-black text-secondary">{value}</p><p className="mt-2 font-semibold">{label}</p></div>)}
        </div>
      </section>
      <CTA />
    </>
  );
}
