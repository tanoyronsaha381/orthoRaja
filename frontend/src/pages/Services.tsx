import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import { faqs, services } from '../data/site';

export default function Services() {
  return (
    <>
      <section className="section mesh-bg pt-36">
        <div className="container max-w-4xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">Services</p>
          <h1 className="hero-title">Premium orthopedic care for joints, injuries and movement.</h1>
          <p className="mt-6 text-xl leading-9 text-slate-700">Each service includes diagnosis, treatment options, procedure planning, recovery timeline and follow-up guidance.</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-12">
          {services.map((service, index) => (
            <article key={service.title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 ? 'lg:[&>img]:order-2' : ''}`}>
              <img src={service.image} alt={service.title} className="aspect-[5/3] w-full rounded-[8px] object-cover shadow-soft" />
              <div>
                <service.icon className="mb-5 text-primary" size={42} />
                <h2 className="section-title">{service.title}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{service.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {['Benefits', 'Procedure', 'Recovery'].map((label) => <div key={label} className="rounded-[8px] bg-mist p-4 font-bold text-primary">{label}</div>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-mist"><div className="container"><FAQAccordion items={faqs} /></div></section>
      <CTA />
    </>
  );
}
