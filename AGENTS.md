# AGENTS.md: Sistem Informasi Sekolah (MVP)

Berkas ini dibaca otomatis oleh agen coding (Codex). Baca juga `docs/PRD-MVP.md` (sumber kebenaran fitur) dan `docs/BUILD-PLAN.md` (urutan pengerjaan).

## Tentang produk

Aplikasi sekolah terpadu untuk **SMA/SMK/MA sederajat**: data induk, absensi harian mandiri siswa (scan wajah + lokasi), nilai & e-rapor Kurikulum Merdeka, portal orang tua, dashboard kepala sekolah. Dipasang **satu instalasi per sekolah** di server sekolah, berjalan online, **tanpa multi-tenant dan tanpa mode offline**. Lisensi per sekolah.

## Teknologi (sudah diputuskan)

- Backend: PHP Laravel (versi stabil terbaru saat proyek dibuat), MySQL.
- Frontend: Inertia.js + React + TypeScript dalam satu aplikasi Laravel (bukan SPA terpisah). Portal dibuat PWA.
- Gunakan starter kit resmi Laravel untuk React + Inertia sebagai dasar; cek dokumentasi resmi untuk perintah terbaru, jangan mengandalkan ingatan.
- Paket yang diusulkan (boleh diganti dengan alasan yang dicatat di `docs/DECISIONS.md`): spatie/laravel-permission (RBAC), spatie/laravel-activitylog (log), Laravel Excel (impor/ekspor), DomPDF atau Browsershot (PDF rapor), Laravel Queue (notifikasi), Pest atau PHPUnit (uji).
- Instalasi: Docker Compose (web, PHP, MySQL, layanan wajah, queue worker, scheduler).
- Pengenalan wajah: **layanan terpisah** (lihat BUILD-PLAN, tahap 4). Jangan menjalankan pencocokan wajah di browser.

## Aturan wajib

### 1. Jejak PBI
- Setiap fitur berasal dari satu PBI di `docs/PRD-MVP.md` dengan format `PBI-<MODUL>-<MENU>.<FITUR>` (modul: UMU, DIN, ABS, NIL, POR, DSB).
- Nama branch: `pbi/<kode-pbi>-<slug>`, contoh `pbi/abs-02-01-form-izin`.
- Pesan commit diawali nomor PBI: `PBI-ABS-02.01: tambah form pengajuan izin`.
- Nama kasus uji memuat nomor PBI, contoh `it('PBI-ABS-02.01 menolak izin yang tumpang tindih')`.
- Jangan membuat fitur yang tidak ada PBI-nya. Jika menemukan kebutuhan baru, tulis di `docs/USULAN-PBI.md` dengan nomor usulan, jangan langsung mengerjakannya. Nomor PBI tidak pernah dipakai ulang.
- Prioritas: kerjakan **Wajib** dulu; **Sebaiknya** hanya jika semua Wajib pada modul itu selesai.

### 2. Otorisasi (RBAC)
- Semua pembatasan akses ditegakkan **di server** (Policy/Gate + permission), bukan hanya dengan menyembunyikan menu (PBI-UMU-07.05, 08.02).
- Cakupan data per peran: seluruh sekolah, kelas yang diampu, kelas yang diwalikan, anak sendiri, atau diri sendiri. Terapkan lewat query scope yang dipakai konsisten, jangan filter manual di tiap controller.
- Peran bawaan: Admin, Kepala sekolah, Guru, Wali kelas, Orang tua, Siswa. Izin bawaan mengikuti tabel "Peran & hak akses" di PRD dan dimuat lewat seeder yang bisa dijalankan ulang (PBI-UMU-07.04).
- Orang tua hanya melihat data anak yang terhubung ke akunnya; siswa hanya data dirinya. Tulis uji yang membuktikan pengguna tidak bisa mengakses data milik orang lain lewat ID di URL.
- Izin sensitif (buka kunci nilai, buka kembali tahun ajaran, hapus data wajah, lihat log, kelola hak akses) meminta konfirmasi kata sandi.

### 3. Data wajah dan lokasi anak (sensitif, UU PDP)
- Ambil hanya dengan persetujuan orang tua yang tercatat (PBI-ABS-08.01). Tanpa persetujuan, siswa tidak bisa didaftarkan.
- Simpan **template wajah terenkripsi**, bukan foto. **Jangan simpan foto selfie harian.** Simpan hanya metadata verifikasi: waktu, koordinat, skor kecocokan, jenis perangkat (PBI-ABS-07.06).
- Hapus data wajah saat siswa pindah/lulus atau atas permintaan, dan catat di log.
- Verifikasi harus memakai kamera langsung (bukan unggah foto) dan lolos deteksi keaslian wajah (liveness).
- Jangan menaruh data wajah, koordinat, atau identitas siswa di log aplikasi biasa, pesan error, atau layanan pihak ketiga.
- Lokasi dari browser bisa dipalsukan; jangan mengklaim keamanan lokasi lebih dari yang sebenarnya. Tandai indikasi mencurigakan untuk ditinjau (PBI-ABS-07.08).

### 4. Integritas data akademik
- Tahun ajaran tertutup bersifat **hanya-baca di server untuk semua peran, termasuk Admin** (PBI-DIN-08.02). Satu-satunya jalan adalah PBI-DIN-08.04 (buka kembali dengan alasan + konfirmasi kata sandi).
- Nilai terkunci dan rapor terkunci tidak bisa diubah tanpa buka kunci yang tercatat di log (PBI-NIL-05.x, NIL-08.03).
- Perubahan nilai, absensi, data siswa, kunci/buka kunci, dan perubahan hak akses wajib masuk log aktivitas yang tidak bisa diubah (PBI-UMU-05.01).
- Impor Excel bersifat semua-atau-tidak-sama-sekali dan tidak boleh merusak data yang ada (PBI-DIN-07.02).

### 5. Keamanan umum
- Kata sandi di-hash, kredensial (misalnya SMTP) disimpan terenkripsi, tidak pernah di-commit. Gunakan `.env` dan sediakan `.env.example` tanpa rahasia.
- Batasi percobaan login, sesi habis saat tidak aktif (bawaan 30 menit, bisa diatur per peran, dicek di server), peringatan sebelum habis, dan isian nilai yang belum disimpan dijaga sebagai draf (PBI-UMU-01.x).
- Validasi semua input di server (Form Request). Unggahan dibatasi jenis dan ukuran (foto profil 2 MB, lampiran 5 MB).
- Notifikasi dikirim lewat antrean agar tidak menahan proses utama (PBI-POR-09.01).

### 6. Kurikulum Merdeka
- Struktur nilai: Capaian Pembelajaran (CP), Tujuan Pembelajaran (TP), Kriteria Ketercapaian TP (KKTP), asesmen sumatif, deskripsi capaian otomatis, kokurikuler, ekstrakurikuler, catatan wali kelas.
- Nama komponen, istilah (kokurikuler/P5), bobot, dan templat rapor **dapat diatur**, jangan di-hardcode. Fase: kelas X = Fase E, XI dan XII = Fase F (dapat diubah).
- Aturan penilaian rinci per jenjang belum diverifikasi; jangan mengarang aturan resmi. Tandai asumsi dengan komentar `ASUMSI:` dan catat di `docs/DECISIONS.md` untuk dicocokkan dengan panduan sekolah pilot.

### 7. Kualitas
- Absensi per hari saja; **tidak ada absensi per jam pelajaran** di MVP.
- Mobile-first. Halaman absen siswa dan portal orang tua harus nyaman di ponsel Android kelas menengah dan jaringan 4G biasa.
- Teks antarmuka berbahasa Indonesia, disimpan di berkas bahasa (bukan tersebar di komponen). Nama kode, tabel, dan variabel memakai bahasa Inggris.
- Tambahkan uji untuk setiap aturan di kolom "Aturan & kriteria" PBI. Aturan itu adalah kriteria penerimaan.
- Jalankan linter, pemeriksa tipe, dan seluruh uji sebelum menyatakan tugas selesai. Jangan menandai selesai bila ada uji yang gagal atau dilewati tanpa alasan.

## Definisi selesai (per PBI)

1. Perilaku sesuai kolom "Fitur" dan "Aturan & kriteria" PBI.
2. Otorisasi server-side diuji untuk peran yang diizinkan **dan** yang tidak diizinkan.
3. Perubahan sensitif tercatat di log aktivitas.
4. Ada uji otomatis yang menyebut nomor PBI.
5. Migrasi database bisa dijalankan dari nol dan pada database yang sudah ada.
6. Panduan terkait diperbarui bila PBI memengaruhi pengguna (PBI-UMU-09.x).
7. Status PBI diperbarui di `docs/PBI-STATUS.md`.

## Cara bekerja

- Kerjakan satu PBI (atau beberapa yang kecil dan sejenis) per langkah; commit kecil dan sering.
- Sebelum mengerjakan PBI, baca barisnya di PRD dan PBI yang ia rujuk (kolom "Aturan & kriteria" sering menyebut PBI lain).
- Jika PRD ambigu atau bertentangan, berhenti dan tanya, jangan menebak. Catat jawabannya di `docs/DECISIONS.md`.
- Jangan mengubah isi `docs/PRD-MVP.md`; itu salinan dokumen utama. Perubahan kebutuhan masuk lewat `docs/USULAN-PBI.md`.
- Perintah proyek (jalankan server, uji, lint, migrasi) dicatat di bagian bawah berkas ini setelah proyek dibuat.

## Perintah proyek

### Prasyarat

- PHP 8.3+, Composer 2, Node.js 22+, npm, dan MySQL 8.
- Salin `.env.example` ke `.env`, lalu atur `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD` sesuai MySQL lokal.

### Menjalankan aplikasi

```bash
composer install
npm install
php artisan key:generate
php artisan migrate --seed
npm run build
php artisan serve
```

Buka `http://127.0.0.1:8000`. Untuk pengembangan dengan hot reload, jalankan `npm run dev` pada terminal kedua.

### Migrasi dan seeder

```bash
php artisan migrate
php artisan db:seed
```

### Uji, lint, dan pemeriksaan tipe

```bash
composer test
npm run check
npm run types:check
```

`composer test` menjalankan Laravel Pint dalam mode pemeriksaan, PHPStan (Larastan), dan suite Pest. `npm run check` menjalankan pemeriksaan/lint frontend; `npm run types:check` menjalankan TypeScript.

Docker Compose belum disiapkan karena Docker tidak tersedia di lingkungan pengembangan ini. Keputusan penundaannya tercatat di `docs/DECISIONS.md`; Compose harus diselesaikan sebelum Tahap 7.
