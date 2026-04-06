import { Clock3, Instagram, MapPinned, MessageCircleMore, Navigation, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  contactIntro,
} from '@/data/site-content';

export function ContactSection() {
  return (
    <section id="lokasi" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-8 animate-fade-up">
          <SectionHeading eyebrow={contactIntro.eyebrow} title={contactIntro.title} />
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
            {contactIntro.subtitle}
          </p>

          <div className="mt-8 space-y-6 text-white/75">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                <MapPinned className="h-4 w-4" />
                Alamat
              </p>
              <p className="mt-2 leading-7">
                Ruko Permata, Jl. Raya Mayor Oking Jaya Atmaja, Cirimekar, Kec. Cibinong, Kabupaten Bogor,
                Jawa Barat 16917.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  <Clock3 className="h-4 w-4" />
                  Jam Operasional
                </p>
                <p className="mt-2">08:00 – 23:00</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </p>
                <p className="mt-2">0878-9139-0666</p>
              </div>
              <div className="sm:col-span-2">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </p>
                <a href={INSTAGRAM_URL} className="mt-2 inline-block text-[var(--primary-300)] transition hover:text-[var(--primary-200)]">
                  @gym.fullhouse
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-500)] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-400)]"
            >
              <MessageCircleMore className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
            >
              <Navigation className="h-4 w-4" />
              Buka Maps
            </a>
          </div>

          <p className="mt-5 text-sm text-white/52">
            {contactIntro.note}
          </p>
        </Card>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 animate-fade-up">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0e]">
            <iframe
              title="Lokasi FullHouse GYM di Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
