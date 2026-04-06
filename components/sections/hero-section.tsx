import Image from 'next/image';
import { Pill } from '@/components/ui/pill';
import { brand } from '@/data/site-content';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,127,36,0.24),transparent_32%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_20%)]" />
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="relative z-10 animate-fade-up">
          <span className="inline-flex rounded-full border border-[rgba(232,127,36,0.30)] bg-[rgba(232,127,36,0.10)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary-300)]">
            {brand.eyebrow}
          </span>
          <h1 className="heading-font mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {brand.heroTitle}
            <span className="block text-[var(--primary-500)]">{brand.heroHighlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            {brand.heroDescription}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            {brand.heroNote}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary-500)] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-400)]"
            >
              Join Now
            </a>
            <a
              href="#fasilitas"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Lihat Fasilitas
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <Pill>4.5 Rating Google</Pill>
            <Pill>97 Reviews</Pill>
            <Pill>Cibinong, Bogor</Pill>
          </div>
        </div>

        <div className="relative z-10 animate-float-soft">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl shadow-[rgba(232,127,36,0.18)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/images/hero-main.png"
                alt="Tampak depan FullHouse GYM dengan signage besar dan identitas visual brand"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08),rgba(8,8,8,0.72))]" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-sm">
                  <Image
                    src="/logo/fullhouse-logo.png"
                    alt="Logo FullHouse GYM"
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary-300)]">
                    {brand.name}
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
                  <h2 className="heading-font max-w-sm text-2xl font-black uppercase leading-tight sm:text-3xl">
                    {brand.tagline}
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">USP</p>
                      <p className="mt-2 text-sm font-semibold text-white">No-Wait Training Flow</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">USP</p>
                      <p className="mt-2 text-sm font-semibold text-white">Progress Data-Tracking</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Atmosphere</p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        Maskulin, modern, suportif, dan dibuat untuk progres yang terasa nyata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
