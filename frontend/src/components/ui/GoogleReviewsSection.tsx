import { useQuery } from '@tanstack/react-query';
import { ExternalLink, PenLine, Star } from 'lucide-react';
import { doctorImages } from '../../data/site';
import { getGoogleReviews, type GoogleReview } from '../../services/api';

const publicReadAllReviewsUrl = import.meta.env.VITE_GOOGLE_READ_ALL_REVIEWS_URL as string | undefined;
const publicWriteReviewUrl = import.meta.env.VITE_GOOGLE_WRITE_REVIEW_URL as string | undefined;

const currentGoogleReviews: GoogleReview[] = [
  {
    authorName: 'Aishik Saha',
    rating: 5,
    text: 'I am extremely grateful to Dr. Raja saha for the outstanding treatment he provided to my mother. She was suffering from severe osteoarthritis, and her condition had made walking and daily activities very difficult. Thanks to his dedication and expert approach, my mother has recovered wonderfully. She is now walking without any problem and feels even better than before.'
  },
  {
    authorName: 'Dhiman Patra',
    rating: 5,
    text: 'I am a medical representative. Throughout my career, I have known many orthopedic doctors. However, for the patients, Dr. Raja Saha is no less than a God in the guise of a orthopedic surgeon.'
  },
  {
    authorName: 'subrata barik',
    rating: 5,
    text: 'He is very good not only as a doctor but also as a person. He listens to his patients very carefully and does not prescribe any tests more than necessary.'
  },
  {
    authorName: 'Malay Chakraborty',
    rating: 5,
    text: 'Dr. Raja Saha a renowned Orthopedic Surgeon, really is an ultimate solution for any ortho related issues. Few days ago I have got success in treatment of osteoarthritis, with a minimum expenditures. Great Doctor, well behave and obviously patient friendly.'
  }
];

const fallbackRating = 5;
const fallbackReviewCount = 57;
const avatarColors = ['bg-blue-100 text-blue-700', 'bg-slate-200 text-slate-700', 'bg-amber/15 text-amber', 'bg-primary/10 text-primary'];

function GoogleLogo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.2 4 9.4 8.5 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.3C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.2 39.6 16 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.2 5.3C36.9 39.3 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z" />
    </svg>
  );
}

export default function GoogleReviewsSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['google-reviews'],
    queryFn: getGoogleReviews,
    staleTime: 1000 * 60 * 20,
    retry: false
  });

  const reviews = data?.reviews?.filter((review) => review.text) ?? currentGoogleReviews;
  const readAllReviewsUrl = data?.readAllReviewsUrl ?? data?.googleMapsUrl ?? publicReadAllReviewsUrl;
  const writeReviewUrl = data?.writeReviewUrl ?? publicWriteReviewUrl ?? readAllReviewsUrl;
  const displayRating = data?.rating ?? fallbackRating;
  const reviewCount = data?.reviewCount ?? fallbackReviewCount;
  const visibleReviews = reviews.slice(0, 4);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-primary">Testimonials</p>
            <h2 className="font-display text-[clamp(2rem,4.8vw,3.8rem)] font-black leading-[1.08] text-ink">
              As someone who has always been anxious about orthopedic visits, Dr. Raja Saha patient-centered approach and gentle demeanor instantly put me at ease...
            </h2>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-amber">
                {Array.from({ length: Math.round(displayRating) }, (_, index) => <Star key={index} size={20} fill="currentColor" />)}
                <span className="ml-1 text-lg font-black text-ink">{displayRating.toFixed(1)} Rating</span>
              </div>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary">{reviewCount} Google Reviews</span>
              {isLoading && <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Checking latest data</span>}
            </div>

            <div className="mt-7 grid max-w-[720px] gap-3">
              {visibleReviews.map((review, index) => (
                <article key={`${review.authorName ?? 'review'}-${index}`} className="rounded-[8px] border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="flex items-start gap-3">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-[6px] text-sm font-black ${avatarColors[index % avatarColors.length]}`}>
                      {(review.authorName ?? 'G').slice(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-black leading-5 text-ink">{review.authorName}</p>
                        <GoogleLogo />
                      </div>
                      <div className="mt-1 flex gap-0.5 text-amber">
                        {Array.from({ length: review.rating ?? 5 }, (_, starIndex) => <Star key={starIndex} size={13} fill="currentColor" />)}
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700">{review.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              {readAllReviewsUrl && (
                <a href={readAllReviewsUrl} target="_blank" rel="noreferrer" className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-[6px] bg-primary px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(15,118,110,0.22)] transition hover:-translate-y-0.5 hover:bg-secondary">
                  Read All Reviews <ExternalLink size={17} />
                </a>
              )}
              {writeReviewUrl && (
                <a href={writeReviewUrl} target="_blank" rel="noreferrer" className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-[6px] border border-primary/45 bg-white px-6 py-4 text-sm font-extrabold text-primary transition hover:-translate-y-0.5 hover:bg-teal-50">
                  Write a Review <PenLine size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -right-1 -top-14 hidden font-display text-[9rem] font-black leading-none text-primary md:block">"</div>
            <img src={doctorImages[1]} alt="Dr. Raja Saha" className="relative aspect-[4/5] w-full rounded-[8px] object-cover object-top shadow-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
