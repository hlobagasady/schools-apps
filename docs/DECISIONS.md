# DECISIONS

Catatan keputusan teknis dan asumsi. Tambahkan entri baru di atas, dengan tanggal.

## Format entri

- **Tanggal / PBI terkait:**
- **Keputusan:**
- **Alasan dan alternatif yang dipertimbangkan:**
- **Yang perlu diverifikasi:**

## Keputusan awal (dari PRD)

- 2026-11-05: Backend Laravel + MySQL; frontend Laravel + Inertia + React + TypeScript (satu aplikasi). Portal dibuat PWA.
- 2026-11-05: Satu instalasi per sekolah, online, tanpa multi-tenant, tanpa mode offline. Lisensi per sekolah.
- 2026-11-05: Target awal SMA/SMK/MA sederajat. Absensi per hari, mandiri oleh siswa (wajah + lokasi); tablet sekolah untuk siswa yang ponselnya rusak atau ketinggalan.
- 2026-11-05: Penilaian mengikuti Kurikulum Merdeka; nama komponen dan templat rapor dapat diatur.
- 2026-11-05: Kode dan nama tabel berbahasa Inggris; teks antarmuka berbahasa Indonesia lewat berkas bahasa.

## Fondasi Tahap 0

- 2026-11-12: Menggunakan Laravel 13.42, PHP 8.3 (batas proyek `^8.3`), Node 24.22.2, dan React 19 dari starter kit resmi Laravel React + Inertia + TypeScript. Versi Laravel mengikuti dependensi terkunci di `composer.lock`; versi React mengikuti `package-lock.json`.
- 2026-11-12: Memilih Pest 4 sebagai kerangka uji karena starter kit resmi Laravel 13 telah menyiapkan Pest dan plugin Laravel; PHPUnit tetap menjadi mesin dasar Pest.
- 2026-11-12: Memakai Laravel Pint untuk format/lint PHP, Larastan/PHPStan untuk analisis tipe PHP, Vite Plus `vp check` untuk pemeriksaan/lint frontend, dan TypeScript `tsc --noEmit` untuk pemeriksaan tipe TypeScript.
- 2026-11-12: Docker Compose ditunda karena Docker tidak tersedia pada lingkungan pengembangan. Untuk saat ini aplikasi dijalankan langsung dengan `php artisan serve` dan MySQL lokal melalui `.env`. Compose (web, PHP, MySQL, queue worker, scheduler; tanpa layanan wajah pada tahap ini) wajib diselesaikan sebelum Tahap 7.
- 2026-11-12: Lokalisasi aplikasi bawaan `id` dan zona waktu `Asia/Jakarta`.

## Belum diputuskan (isi setelah spike tahap 4)

- Mesin pengenalan wajah dan metode liveness.
- Spesifikasi minimum server sekolah.
- Pustaka PDF rapor (DomPDF atau Browsershot).
