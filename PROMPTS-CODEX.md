# Prompt Codex: Sistem Informasi Sekolah (MVP)

Tempel satu prompt per sesi. Selesaikan dan periksa hasilnya sebelum lanjut ke prompt berikutnya. Semua prompt mengandaikan folder proyek berisi `AGENTS.md` dan `docs/` dari paket pegangan.

---

## Prompt 0: Scaffolding (tahap 0)

```
Baca AGENTS.md, docs/BUILD-PLAN.md (tahap 0), dan bagian "Arsitektur & teknologi" di docs/PRD-MVP.md.

Tugas: kerjakan TAHAP 0 saja (scaffolding dan fondasi). Jangan mengerjakan PBI fitur apa pun.

1. Buat proyek Laravel dengan starter kit resmi untuk Inertia + React + TypeScript di folder ini. Cek dokumentasi resmi Laravel untuk perintah dan versi terbaru; jangan mengandalkan ingatan. Jika folder tidak kosong, jangan menimpa berkas docs/ dan AGENTS.md.
2. Siapkan Docker Compose untuk pengembangan: web, PHP, MySQL, queue worker, scheduler. Layanan wajah belum perlu ada.
3. Atur linter dan pemeriksa tipe (PHP dan TypeScript), kerangka uji (Pest atau PHPUnit, pilih satu dan catat alasannya), dan CI sederhana yang menjalankan lint, tipe, dan uji.
4. Buat .env.example tanpa rahasia. Pastikan .env dan berkas rahasia masuk .gitignore.
5. Atur lokalisasi: bahasa antarmuka Indonesia (id) sebagai bawaan, teks disimpan di berkas bahasa. Zona waktu Asia/Jakarta.
6. Inisialisasi git, buat commit awal dengan pesan "Tahap 0: scaffolding".
7. Isi bagian "Perintah proyek" di AGENTS.md (jalankan server, uji, lint, tipe, migrasi, seeder).
8. Catat versi PHP, Laravel, Node, React, dan keputusan pustaka di docs/DECISIONS.md.

Selesai bila: `docker compose up` menjalankan aplikasi, halaman awal tampil, migrasi berjalan dari nol, dan lint, tipe, serta uji lolos. Tunjukkan keluaran perintah-perintah itu sebagai bukti. Jika ada langkah yang gagal atau tidak bisa kamu jalankan, katakan apa adanya; jangan menyatakan selesai.
```

---

## Prompt 1a: Pengguna, peran, dan RBAC (tahap 1, bagian pertama)

```
Baca AGENTS.md dan docs/BUILD-PLAN.md (tahap 1). Baca baris PRD untuk PBI berikut di docs/PRD-MVP.md, termasuk kolom "Aturan & kriteria" dan PBI yang mereka rujuk:
PBI-UMU-04.01, 04.02, 04.03, 07.01, 07.02, 07.03, 07.04, 07.05, 07.06, 07.07, 05.01.

Tugas: bangun fondasi pengguna, peran, RBAC, dan log aktivitas, hanya untuk PBI di atas. Urutan kerja:

1. Log aktivitas dulu (PBI-UMU-05.01): catat pengguna, waktu, nilai sebelum dan sesudah; tidak bisa diubah atau dihapus lewat aplikasi. Sediakan cara memanggilnya dari modul lain dengan satu antarmuka yang konsisten.
2. Model pengguna, peran bawaan (Admin, Kepala sekolah, Guru, Wali kelas, Orang tua, Siswa), dan pengguna dengan lebih dari satu peran. Pakai spatie/laravel-permission kecuali kamu punya alasan kuat; catat keputusannya di docs/DECISIONS.md.
3. Daftar izin per menu dan aksi (lihat, tambah, ubah, hapus, ekspor, setujui, kunci). Seeder izin bawaan yang mengikuti tabel "Peran & hak akses" di PRD dan aman dijalankan ulang.
4. Halaman Hak akses (PBI-UMU-07.x): daftar peran, peran kustom, matriks izin, kembalikan ke bawaan, tanda izin sensitif dengan konfirmasi kata sandi, pengaman Admin terakhir.
5. Konsep cakupan data per peran (PBI-UMU-07.05) sebagai query scope yang bisa dipakai modul lain. Modul datanya belum ada, jadi buat mekanismenya dan ujinya dengan data contoh, bukan menebak skema modul berikutnya.
6. Halaman Pengguna (PBI-UMU-04.01 s.d. 04.03): tambah, ubah, nonaktifkan, tetapkan peran, reset kata sandi oleh Admin.
7. Middleware/Policy yang menegakkan izin di server. Menu yang tidak diizinkan juga disembunyikan di frontend, tapi akses langsung lewat URL harus tetap ditolak server.

Aturan:
- Hanya kerjakan PBI yang disebut. Jika menemukan kebutuhan baru, tulis di docs/USULAN-PBI.md.
- Satu commit per PBI atau kelompok kecil; pesan commit diawali nomor PBI. Nama kasus uji memuat nomor PBI.
- Tulis uji untuk setiap aturan di kolom "Aturan & kriteria", termasuk uji negatif (peran yang tidak berhak ditolak).
- Perbarui status PBI di docs/PBI-STATUS.md.
- Jika PRD ambigu, berhenti dan tanya.

Selesai bila: Admin dapat membuat pengguna, mengatur izin lewat matriks, perubahan tercatat di log, peran tanpa izin ditolak server, dan seluruh lint, tipe, dan uji lolos. Laporkan PBI mana yang selesai, mana yang sebagian, dan apa yang kamu asumsikan.
```

---

## Prompt 1b: Login, sesi, dan profil (tahap 1, bagian kedua)

```
Baca AGENTS.md dan docs/BUILD-PLAN.md (tahap 1). Baca baris PRD untuk PBI: PBI-UMU-01.01, 01.02, 01.03, 01.04, 01.05, 01.06, 01.07, 01.08, 01.09, 02.01.

Tugas: autentikasi, sesi, dan profil. Catatan penting:
- Pengguna masuk dengan email atau nomor HP; siswa memakai NISN sebagai nama pengguna (lihat PBI-DIN-01.07, modulnya belum ada, jadi siapkan dukungan nama pengguna yang fleksibel, jangan membangun data siswa sekarang).
- Penguncian akun 15 menit setelah 5 kali gagal; tautan atur ulang sandi berlaku 60 menit dan sekali pakai; sandi minimal 8 karakter; wajib ganti sandi saat login pertama.
- Sesi habis karena tidak aktif (bawaan 30 menit, dapat diatur per peran), dicek DI SERVER. Peringatan 1 menit sebelum habis dengan tombol lanjutkan sesi. Setelah login ulang kembali ke halaman semula. Isian formulir yang belum disimpan dijaga sebagai draf di sisi klien agar tidak hilang saat sesi habis; rancang mekanismenya supaya modul nilai nanti bisa memakainya.
- Masa berlaku sesi maksimum, daftar sesi aktif, keluar dari semua perangkat, dan penghentian sesi lain saat ganti sandi (yang Sebaiknya) kerjakan setelah semua Wajib selesai.
- Pengaturan sesi oleh Admin (PBI-UMU-01.09) dan perubahannya tercatat di log aktivitas.
- Jangan menyimpan rahasia di log. Pesan error login tidak boleh membocorkan apakah akun ada.

Aturan kerja sama seperti prompt sebelumnya (satu commit per PBI atau kelompok kecil, nomor PBI di commit dan nama uji, uji negatif, perbarui docs/PBI-STATUS.md, tanya bila ambigu).

Selesai bila semua PBI Wajib di atas lolos ujinya. Laporkan hasilnya beserta asumsi yang kamu ambil.
```

---

## Prompt 1c: Pengaturan sekolah, wizard setup, dan beranda (tahap 1, bagian akhir)

```
Baca AGENTS.md dan docs/BUILD-PLAN.md (tahap 1). Baca baris PRD untuk PBI: PBI-UMU-03.01, 03.02, 03.03, 03.04, 05.02, 07.08, 08.01, 08.02, 08.03.

Tugas:
- Pengaturan sekolah: profil sekolah, tahun ajaran dan semester (hanya satu yang aktif), hari efektif dan kalender libur, pengaturan email SMTP dengan uji kirim (kredensial tersimpan terenkripsi).
- Tampilan log aktivitas dengan filter pengguna, tanggal, dan modul (hanya baca).
- Wizard setup instalasi pertama: buat Admin pertama, profil sekolah, tahun ajaran, hari efektif, uji email. Muncul sekali dan terkunci setelah selesai; pastikan tidak bisa dipakai ulang untuk membuat Admin baru setelah instalasi selesai.
- Menu dan tombol menyesuaikan izin pengguna (PBI-UMU-08.02); beranda per peran dengan tugas tertunda (PBI-UMU-08.03), dengan placeholder untuk modul yang belum ada.
- Uji izin per pengguna (PBI-UMU-07.08, Sebaiknya) setelah Wajib selesai.

Aturan kerja sama seperti prompt sebelumnya. Setelah selesai, jalankan seluruh lint, tipe, dan uji, lalu tulis ringkasan tahap 1: PBI Wajib yang selesai, PBI Sebaiknya yang selesai, yang belum, dan risiko atau asumsi yang perlu saya putuskan. Perbarui docs/PBI-STATUS.md dan docs/DECISIONS.md.
```

---

## Templat untuk tahap 2 dan seterusnya

Ganti bagian dalam kurung siku.

```
Baca AGENTS.md dan docs/BUILD-PLAN.md (tahap [N]: [nama tahap]). Baca baris PRD untuk PBI: [daftar PBI dari BUILD-PLAN], termasuk kolom "Aturan & kriteria" dan PBI yang mereka rujuk.

Tugas: kerjakan PBI Wajib tahap ini dulu, lalu PBI Sebaiknya bila waktu cukup. Pakai mekanisme RBAC, cakupan data, dan log aktivitas dari tahap sebelumnya; jangan membuat versi sendiri. Hal khusus tahap ini: [catatan khusus].

Aturan kerja: satu commit per PBI atau kelompok kecil dengan nomor PBI di pesan commit dan nama uji; uji negatif untuk otorisasi; perubahan sensitif masuk log; tidak ada fitur di luar PBI (usulan baru ke docs/USULAN-PBI.md); tanya bila PRD ambigu; perbarui docs/PBI-STATUS.md dan docs/DECISIONS.md.

Selesai bila lint, tipe, dan seluruh uji lolos, lalu laporkan PBI yang selesai, sebagian, dan belum, beserta asumsi.
```

Catatan khusus yang disarankan per tahap:

- **Tahap 2 (data induk):** pasang penegak hanya-baca tahun ajaran tertutup (PBI-DIN-08.02) sebelum modul lain; impor Excel harus semua-atau-tidak-sama-sekali dan melaporkan nomor baris yang bermasalah.
- **Tahap 3 (absensi tanpa wajah):** sumber absen sementara berupa tombol uji yang nanti diganti verifikasi wajah dan lokasi; hanya absensi per hari, bukan per jam pelajaran.
- **Tahap 4 (wajah dan lokasi):** mulai dengan spike teknis dan tulis hasilnya di docs/DECISIONS.md sebelum menulis fitur. Jangan menyimpan foto selfie; template wajah terenkripsi; persetujuan orang tua wajib; pencocokan wajah di server, bukan di browser.
- **Tahap 5 (nilai dan rapor):** jangan mengarang aturan penilaian resmi; tandai asumsi dengan `ASUMSI:`; komponen, istilah, bobot, dan templat rapor harus bisa diatur.
- **Tahap 6 (portal):** orang tua hanya melihat anaknya, siswa hanya dirinya; tulis uji akses lintas pengguna lewat ID di URL.
