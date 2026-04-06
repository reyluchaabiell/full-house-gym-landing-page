# FullHouse GYM Landing Page

Made with Next.js and Tailwind CSS

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

## Description
FullHouse GYM — Responsive Conversion Landing Page for Fitness Business

FullHouse GYM Website adalah project pengembangan website landing page untuk brand gym lokal yang berfokus pada fitness business presentation, conversion flow, dan digital brand trust. Project ini dibuat untuk membantu FullHouse GYM memiliki kehadiran digital yang lebih profesional, lebih terstruktur, dan lebih relevan untuk kebutuhan promosi bisnis fitness modern.

Tantangan utama dalam project ini adalah bagaimana membangun website yang mampu menjawab dua fungsi sekaligus:
pertama, menjadi media informasi yang jelas tentang brand, fasilitas, suasana, dan nilai gym;
kedua, menjadi halaman yang dapat mendorong calon member untuk mengambil tindakan seperti menghubungi gym, melihat lokasi, dan membangun rasa percaya sejak kunjungan pertama.

Untuk menjawab kebutuhan tersebut, website ini disusun menggunakan pendekatan high-conversion single-page landing structure, yang meliputi:

hero section yang kuat secara visual dan positioning
trust stats untuk membangun legitimasi
USP section untuk memperjelas pembeda bisnis
segmentasi user untuk beginner dan advanced
facility section
gallery section dengan asset asli
testimonial section
FAQ untuk mengurangi keraguan
contact section dengan WhatsApp dan Google Maps
final CTA untuk mendorong aksi

Secara visual, website ini menggunakan gaya dark premium gym aesthetic dengan primary color keluarga #E87F24, tipografi yang tegas, dan pemanfaatan asset visual asli dari client untuk memperkuat kesan otentik. Saya juga menerapkan struktur kode yang rapi dan scalable dengan Next.js App Router, Tailwind CSS, modular section components, reusable UI elements, serta integrasi metadata SEO dasar dan local business schema.

Project ini menunjukkan kemampuan saya dalam menggabungkan:

strategi konten
UI/UX untuk bisnis lokal
responsive frontend development
brand presentation
dan implementasi website yang siap dipakai sebagai alat promosi nyata

Hasil akhir project ini adalah website yang lebih kuat secara visual, lebih jelas secara komunikasi, dan lebih efektif dalam membantu FullHouse GYM membangun kepercayaan sekaligus menarik calon member baru.

## Link Demo
= https://full-house-gym-landing-page.vercel.app/
