export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 FullHouse GYM. Built for progress.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#hero" className="transition hover:text-white">
            Home
          </a>
          <a href="#fasilitas" className="transition hover:text-white">
            Fasilitas
          </a>
          <a href="#galeri" className="transition hover:text-white">
            Galeri
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
          <a href="#lokasi" className="transition hover:text-white">
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
