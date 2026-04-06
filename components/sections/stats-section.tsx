import { Star, MessageSquareText, CalendarClock, Building2, Users } from 'lucide-react';
import { stats } from '@/data/site-content';

const icons = [Star, MessageSquareText, CalendarClock, Building2, Users];

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = icons[index];
          return (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-500)]/15 text-[var(--primary-300)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
