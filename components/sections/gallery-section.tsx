import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { galleryImages, galleryIntro } from '@/data/site-content';

export function GallerySection() {
  return (
    <section id="galeri" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionHeading eyebrow={galleryIntro.eyebrow} title={galleryIntro.title} />
        <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">
          {galleryIntro.description}
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
              index === 0 ? 'lg:row-span-2' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'min-h-[540px]' : 'min-h-[260px]'}`}>
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.06),rgba(8,8,8,0.58))]" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--primary-300)]">
                  {image.label}
                </p>
                <p className="heading-font mt-2 text-xl font-black uppercase text-white">{image.title}</p>
                <p className="mt-2 max-w-md text-sm leading-7 text-white/85">{image.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
