import { Card } from '@/components/ui/card';
import { advancedSegment, beginnerSegment } from '@/data/site-content';

export function SegmentationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-gradient-to-br from-[rgba(232,127,36,0.16)] to-white/5 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary-300)]">Untuk Pemula</p>
          <h3 className="heading-font mt-4 text-3xl font-black uppercase">{beginnerSegment.title}</h3>
          <p className="mt-4 text-white/72">
            {beginnerSegment.description}
          </p>
          <ul className="mt-6 space-y-3 text-white/78">
            {beginnerSegment.points.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-white/10 to-[rgba(232,127,36,0.10)] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary-300)]">Untuk Advanced</p>
          <h3 className="heading-font mt-4 text-3xl font-black uppercase">{advancedSegment.title}</h3>
          <p className="mt-4 text-white/72">
            {advancedSegment.description}
          </p>
          <ul className="mt-6 space-y-3 text-white/78">
            {advancedSegment.points.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
