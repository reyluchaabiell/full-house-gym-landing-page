import {
  Armchair,
  BadgeHelp,
  Bath,
  Coffee,
  Dumbbell,
  ParkingCircle,
  Shirt,
  ShoppingBag,
  Soup,
  Users,
  Wind,
  Building2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { facilities, facilitiesIntro } from '@/data/site-content';

const icons = [
  ShoppingBag,
  Soup,
  Coffee,
  BadgeHelp,
  Bath,
  Dumbbell,
  Shirt,
  ParkingCircle,
  Building2,
  Users,
  Wind,
  Armchair,
];

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading eyebrow={facilitiesIntro.eyebrow} title={facilitiesIntro.title} />
          <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">
            {facilitiesIntro.description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {facilities.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0f0f10] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(232,127,36,0.15)] text-[var(--primary-300)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
