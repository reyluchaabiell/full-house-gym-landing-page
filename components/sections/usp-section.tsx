import { TimerReset, LineChart, UsersRound } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { usps } from '@/data/site-content';

const icons = [TimerReset, LineChart, UsersRound];

export function UspSection() {
  return (
    <section id="usp" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Kenapa FullHouse GYM"
          title="Dirancang Untuk Progress Yang Terasa, Bukan Janji Kosong."
        />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {usps.map((item, index) => {
          const Icon = icons[index];
          return (
            <Card
              key={item.title}
              className="group p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary-400)]/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-500)]/15 text-[var(--primary-300)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary-300)]">{item.index}</p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/68">{item.body}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
