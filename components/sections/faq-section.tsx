import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { faqs, faqIntro } from '@/data/site-content';

export function FaqSection() {
  return (
    <section id="faq" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={faqIntro.eyebrow} title={faqIntro.title} align="center" />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-[#0f0f10] p-6 open:border-[rgba(232,127,36,0.30)] open:bg-white/5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-white sm:text-lg">
                <span>{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-white/60 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
