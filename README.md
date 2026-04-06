# FullHouse GYM Landing Page

With Next.js and TailWindCSS

## Menjalankan project
```bash
npm install
npm run dev
```

## Final hosting-ready package
- Logo asli FullHouse GYM sudah dipakai di header, hero, metadata, dan favicon
- Semua gambar utama sudah memakai asset lokal user dari folder `public`
- Hero memakai tampak depan gedung
- About memakai area gym aktif
- Gallery memakai 4 asset lokal yang benar
- Struktur multi-file tetap dipertahankan
- Nomor WhatsApp, Google Maps, SEO, font custom, dan warna primary tetap aktif

## Sebelum deploy ke Vercel
- Ganti `metadataBase` di `app/layout.tsx` ke domain asli
- Jalankan:
```bash
npm install
npm run build
```
- Jika build sukses, project siap di-hosting

## Struktur
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `data/site-content.ts`
- `components/layout/*`
- `components/sections/*`
- `components/ui/*`
- `public/images/*`
- `public/logo/*`
