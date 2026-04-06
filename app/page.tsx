import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { AboutSection } from '@/components/sections/about-section';
import { UspSection } from '@/components/sections/usp-section';
import { SegmentationSection } from '@/components/sections/segmentation-section';
import { FacilitiesSection } from '@/components/sections/facilities-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { FloatingWhatsappButton } from '@/components/ui/floating-whatsapp-button';
import { INSTAGRAM_URL, WHATSAPP_URL, GOOGLE_MAPS_URL } from '@/data/site-content';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'FullHouse GYM',
  description:
    'Gym modern dan suportif di Cibinong untuk pemula hingga advanced, dengan fasilitas nyaman dan fokus pada progres nyata.',
  telephone: '+62 878-9139-0666',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ruko Permata, Jl. Raya Mayor Oking Jaya Atmaja, Cirimekar',
    addressLocality: 'Cibinong',
    addressRegion: 'Jawa Barat',
    postalCode: '16917',
    addressCountry: 'ID',
  },
  openingHours: 'Mo-Su 08:00-23:00',
  sameAs: [INSTAGRAM_URL, GOOGLE_MAPS_URL, WHATSAPP_URL],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[rgba(232,127,36,0.3)] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <UspSection />
        <SegmentationSection />
        <FacilitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <FloatingWhatsappButton />
    </div>
  );
}
