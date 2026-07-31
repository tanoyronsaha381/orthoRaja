import FAQAccordion from '../components/ui/FAQAccordion';
import CTA from '../components/ui/CTA';
import SectionHeader from '../components/ui/SectionHeader';
import { faqs } from '../data/site';

export default function FAQ() {
  return <><section className="section mesh-bg pt-36"><SectionHeader eyebrow="FAQ" title="Answers Before Your Visit" /></section><section className="section bg-white"><div className="container"><FAQAccordion items={faqs.concat(faqs)} /></div></section><CTA /></>;
}
