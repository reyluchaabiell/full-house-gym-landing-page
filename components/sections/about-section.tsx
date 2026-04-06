import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { about, brand } from '@/data/site-content';

export function AboutSection() {
  return (
    <section id="tentang" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="animate-fade-up">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {about.description}
          </p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/about-main.png"
                alt="Area gym FullHouse GYM dengan alat lengkap dan member berlatih"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.04),rgba(8,8,8,0.52))]" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <p className="max-w-md text-sm leading-7 text-white/85">
                  {about.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="glow-primary bg-gradient-to-br from-white/10 to-white/5 p-8 animate-fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--primary-300)]">Core Values</p>
          <div className="mt-6 grid gap-4">
            {about.values.map((value) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="heading-font text-xl font-black uppercase text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary-300)]">Tagline</p>
            <p className="heading-font mt-3 text-2xl font-black uppercase text-white">
              {brand.tagline}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
