import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { testimonials, testimonialsIntro } from '@/data/site-content';

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <SectionHeading eyebrow={testimonialsIntro.eyebrow} title={testimonialsIntro.title} />
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70">
          Rating Google 4.5 • 97 Reviews
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <Card key={item.name} className="p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(232,127,36,0.15)] text-[var(--primary-300)]">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-lg font-black text-white">{item.name}</p>
              </div>
              <div className="flex items-center gap-1 text-[var(--primary-300)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-white/72">“{item.quote}”</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
