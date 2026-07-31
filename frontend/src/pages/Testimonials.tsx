import SectionHeader from '../components/ui/SectionHeader';
import GoogleReviewsSection from '../components/ui/GoogleReviewsSection';

export default function Testimonials() {
  return (
    <>
      <section className="section mesh-bg pt-36">
        <SectionHeader eyebrow="Testimonials" title="Google Reviews From Real Patients" text="Live rating and patient feedback from Dr. Raja Saha's Google Business profile." />
      </section>
      <GoogleReviewsSection />
    </>
  );
}
