# BUILD-PLAN: Urutan pengerjaan MVP

Acuan fitur: `docs/PRD-MVP.md` (156 PBI). Setiap tahap menyebut PBI yang dikerjakan. **Wajib** didahulukan; **Sebaiknya** menyusul di akhir tahap atau di tahap penutup. Setelah tiap tahap, aplikasi harus bisa dijalankan dan diuji utuh.

## Tahap 0: Scaffolding dan fondasi proyek

- Buat proyek Laravel + Inertia + React + TypeScript dari starter kit resmi; hubungkan MySQL.
- Docker Compose untuk pengembangan (web, PHP, MySQL, queue worker, scheduler).
- Siapkan linter, pemeriksa tipe, kerangka uji, CI sederhana, `.env.example`.
- Buat `docs/PBI-STATUS.md` (daftar semua PBI dengan status), `docs/DECISIONS.md`, `docs/USULAN-PBI.md`.
- Isi bagian "Perintah proyek" di `AGENTS.md`.

## Tahap 1: Akun, peran, dan hak akses (UMU)

Urutan: login dan sesi, pengguna dan peran, RBAC, log, pengaturan sekolah, wizard setup.

- Login & sesi: PBI-UMU-01.01 s.d. 01.09 (Wajib: 01.01, 01.02, 01.03, 01.05, 01.06, 01.09)
- Profil: PBI-UMU-02.01
- Pengaturan sekolah: PBI-UMU-03.01 s.d. 03.04
- Pengguna & peran: PBI-UMU-04.01 s.d. 04.04
- Log aktivitas: PBI-UMU-05.01, 05.02 (kerjakan lebih awal; modul lain bergantung padanya)
- Hak akses (RBAC): PBI-UMU-07.01 s.d. 07.08
- Setup & beranda: PBI-UMU-08.01 s.d. 08.03

**Selesai bila:** Admin bisa membuat pengguna, mengatur peran dan izin lewat matriks, dan seluruh aksi sensitif tercatat. Ada uji akses antar-peran.

## Tahap 2: Data induk (DIN)

- Siswa, guru, kelas, mapel, penugasan: PBI-DIN-01.x s.d. 05.x (termasuk akun siswa PBI-DIN-01.07)
- Impor/ekspor Excel: PBI-DIN-07.01 s.d. 07.03 (kerjakan bersama tahap ini karena menjadi jalur data awal)
- Jadwal pelajaran: PBI-DIN-06.x (Sebaiknya)
- Program keahlian dan pilihan mapel: PBI-DIN-04.02 (Sebaiknya)
- Arsip tahun ajaran: PBI-DIN-08.01 s.d. 08.04. **Pasang penegak hanya-baca (middleware/policy) sekarang**, sebelum modul nilai dan absensi dibuat, agar semua modul berikutnya mewarisinya.
- Kenaikan kelas: PBI-DIN-03.04 (Sebaiknya)

## Tahap 3: Absensi tanpa wajah (ABS bagian pertama)

Bangun logika absensi dan alur wali kelas lebih dulu, dengan sumber absen dari mekanisme sederhana (tombol uji) yang kelak digantikan verifikasi wajah dan lokasi.

- Model absensi, status, hari efektif, penutupan otomatis: PBI-ABS-07.01, 07.05, 07.09
- Pantau dan koreksi wali kelas: PBI-ABS-01.x
- Izin dan persetujuan: PBI-ABS-02.x, 03.x
- Rekap dan ekspor: PBI-ABS-04.x
- Pengaturan absensi: PBI-ABS-06.01
- Peringatan: PBI-ABS-05.x (butuh antrean notifikasi, lihat tahap 6; boleh dengan stub dulu)

## Tahap 4: Wajah dan lokasi (ABS bagian kedua)

**Mulai dengan spike teknis dua sampai tiga hari sebelum menulis fitur**, karena ini risiko terbesar MVP. Catat hasilnya di `docs/DECISIONS.md`.

Pertanyaan spike:
1. Mesin pengenalan wajah apa (layanan sendiri dengan model open-source atau pihak ketiga)? Rekomendasi awal: layanan sendiri demi privasi data anak.
2. Akurasi pada wajah remaja, cahaya kurang, masker/jilbab/kacamata, dan kamera ponsel kelas menengah.
3. Metode liveness yang bisa dipakai lewat browser.
4. Beban server sekolah saat jam absen pagi (jumlah verifikasi bersamaan, waktu respons, kebutuhan CPU/RAM).
5. Kebutuhan HTTPS untuk kamera dan lokasi di jaringan sekolah (domain, sertifikat).
6. Pengambilan lokasi dan akurasi GPS di dalam gedung.

Lalu fitur:
- Pengaturan lokasi dan wajah: PBI-ABS-06.02, 06.03
- Persetujuan dan pendaftaran wajah: PBI-ABS-08.01 s.d. 08.04
- Absen mandiri siswa: PBI-ABS-07.02, 07.03, 07.04, 07.06, (Sebaiknya: 07.07, 07.08)
- Tablet sekolah: PBI-ABS-09.02, 09.03 (Wajib); antrean absen bermasalah PBI-ABS-09.01

**Selesai bila:** siswa yang berada di dalam radius dan lolos verifikasi wajah dan liveness tercatat hadir; di luar radius atau gagal verifikasi ditolak dan masuk antrean; tidak ada foto selfie tersimpan.

## Tahap 5: Nilai dan e-rapor (NIL)

- Perangkat penilaian (CP, TP, KKTP): PBI-NIL-01.x
- Komponen dan bobot: PBI-NIL-02.x
- Input asesmen: PBI-NIL-03.x
- Nilai akhir dan deskripsi: PBI-NIL-04.x
- Kunci nilai: PBI-NIL-05.x
- Kokurikuler dan ekstrakurikuler (PKL untuk SMK bersifat Sebaiknya): PBI-NIL-06.x
- Catatan wali kelas: PBI-NIL-07.x
- Rapor, templat, legger, publikasi: PBI-NIL-08.x s.d. 11.x

Cocokkan format rapor dengan contoh rapor sekolah pilot sedini mungkin; PDF rapor adalah bagian yang paling sering berubah.

## Tahap 6: Portal, pengumuman, dan notifikasi (POR)

- Antrean notifikasi (email dan dalam aplikasi): PBI-POR-09.01 (kerjakan di awal tahap, lalu sambungkan ke PBI-ABS-05.01)
- Portal orang tua dan siswa: PBI-POR-01.x s.d. 05.x
- Pengumuman: PBI-POR-06.x, 07.x
- Akun dan preferensi: PBI-POR-08.x
- Push notification PWA dan log pengiriman: PBI-POR-09.02, 09.03 (Sebaiknya)

## Tahap 7: Dashboard, panduan, dan penutup (DSB + UMU)

- Dashboard kepala sekolah: PBI-DSB-01.01 s.d. 04.01 (semua Sebaiknya)
- Panduan penggunaan: PBI-UMU-09.01 s.d. 09.05
- Backup dan pemeliharaan: PBI-UMU-06.01 (Wajib), 06.02, 06.03
- Paket instalasi untuk tim IT sekolah (Docker Compose produksi, skrip pembaruan, migrasi otomatis, panduan pasang)
- Uji beban jam absen pagi dan hari pembagian rapor; uji pemulihan backup.

## Tahap 8: Pilot

Pasang di 1–2 sekolah oleh tim IT sekolah, kumpulkan masukan, perbaiki lewat revisi PBI (nomor sama) atau PBI baru, lalu bekukan sebagai rilis MVP v1.0.

## Hal yang perlu dicocokkan dengan kenyataan di sekolah pilot

- Format rapor Kurikulum Merdeka yang dipakai sekolah dan istilah resminya (kokurikuler atau P5).
- Durasi sesi login yang nyaman untuk guru yang menginput banyak nilai (bawaan 30 menit hanyalah usulan).
- Apakah semua siswa membawa ponsel berkamera yang layak; berapa tablet sekolah yang dibutuhkan (diurus penanggung jawab sekolah, bukan bagian pengembangan).
- Spesifikasi server sekolah untuk layanan wajah.
