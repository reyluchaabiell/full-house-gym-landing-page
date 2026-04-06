'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/site-content';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-[rgba(232,127,36,0.25)] bg-white/5 p-1">
              <Image
                src="/logo/fullhouse-logo.png"
                alt="Logo FullHouse GYM"
                width={54}
                height={54}
                className="h-11 w-11 object-contain"
                priority
              />
            </div>
            <div>
              <p className="heading-font text-sm font-black uppercase tracking-[0.24em] text-white">FullHouse GYM</p>
              <p className="text-xs text-white/55">Full Effort. Full Results.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#lokasi"
              className="hidden rounded-full bg-[var(--primary-500)] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--primary-400)] md:inline-flex"
            >
              Hubungi Kami
            </a>

            <button
              type="button"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-3xl border border-white/10 bg-[#111112] p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#lokasi"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary-500)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-400)]"
              >
                Hubungi Kami
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
