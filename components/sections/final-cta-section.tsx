import { finalCta, WHATSAPP_URL } from '@/data/site-content';

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-[rgba(232,127,36,0.20)] bg-[radial-gradient(circle_at_top,rgba(232,127,36,0.22),transparent_42%),linear-gradient(135deg,#121212,#080808)] p-8 text-center sm:p-12 animate-fade-up">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary-300)]">{finalCta.eyebrow}</p>
        <h2 className="heading-font mx-auto mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          {finalCta.description}
        </p>
        <a
          href={WHATSAPP_URL}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--primary-500)] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-400)]"
        >
          {finalCta.button}
        </a>
      </div>
    </section>
  );
}
