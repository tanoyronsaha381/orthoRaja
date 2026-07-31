import { Search } from 'lucide-react';
import CTA from '../components/ui/CTA';
import { blogPosts } from '../data/site';

export default function Blog() {
  return (
    <>
      <section className="section mesh-bg pt-36">
        <div className="container max-w-4xl text-center">
          <h1 className="hero-title">Orthopedic health articles for better decisions.</h1>
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-soft"><Search className="text-primary" /><input className="w-full outline-none" placeholder="Search knee, hip, arthroscopy..." /></div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => <article key={post.slug} className="rounded-[8px] bg-mist p-7 shadow-soft"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{post.tag}</p><h2 className="mt-5 text-2xl font-bold">{post.title}</h2><p className="mt-4 leading-7 text-slate-600">SEO-ready article shell with tags, category, related articles and backend slug support.</p></article>)}
        </div>
      </section>
      <CTA />
    </>
  );
}
