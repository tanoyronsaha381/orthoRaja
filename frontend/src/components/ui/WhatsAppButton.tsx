import { clinicWhatsAppHref } from '../../data/contact';

function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M16.02 3.5A12.43 12.43 0 0 0 5.3 22.24L3.75 28.5l6.42-1.5a12.45 12.45 0 1 0 5.85-23.5Zm0 22.62a10.05 10.05 0 0 1-5.12-1.4l-.37-.22-3.8.9.9-3.7-.24-.38a10.04 10.04 0 1 1 8.63 4.8Zm5.72-7.53c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.2.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.16-1.32-.49-2.51-1.55a9.4 9.4 0 0 1-1.74-2.16c-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.55.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.25-.61-.51-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.2 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.44.2 1.98.12.61-.09 1.84-.75 2.1-1.47.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-7 right-7 z-[60] hidden md:block">
      <a
        href={clinicWhatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-16 w-16 place-items-center rounded-full bg-[#22d45f] text-white shadow-[0_16px_34px_rgba(34,212,95,0.42),0_0_0_10px_rgba(34,212,95,0.12)] ring-[6px] ring-white transition hover:-translate-y-1 hover:scale-105 hover:bg-[#1fc759]"
      >
        <span className="absolute inset-[-8px] rounded-full border border-[#22d45f]/30 opacity-70 transition group-hover:scale-110 group-hover:opacity-90" />
        <WhatsAppIcon className="relative h-10 w-10" />
      </a>
    </div>
  );
}

export function MobileHeroWhatsAppButton() {
  return (
    <div className="absolute right-0 top-[-4.4rem] z-20 md:hidden">
      <a
        href={clinicWhatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#22d45f] text-white shadow-[0_16px_34px_rgba(34,212,95,0.42),0_0_0_8px_rgba(34,212,95,0.12)] ring-[5px] ring-white transition active:scale-95"
      >
        <span className="absolute inset-[-7px] rounded-full border border-[#22d45f]/25" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
    </div>
  );
}
