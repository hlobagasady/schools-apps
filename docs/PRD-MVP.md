# PRD Sistem Informasi Sekolah

Nov 5, 2026 · @Bagas

## Ringkasan & latar belakang

Produk ini adalah platform sekolah terpadu yang memusatkan data siswa, absensi, nilai, dan komunikasi dengan orang tua dalam satu sistem. Dokumen ini adalah draf awal; isi bertanda "usulan" perlu divalidasi dengan sekolah calon pengguna.

**Masalah yang ingin diselesaikan (hipotesis):**

- Data siswa dan nilai tersebar di Excel, buku, dan grup WhatsApp.
- Rekap absensi dan penyusunan rapor menyita waktu guru.
- Orang tua baru tahu masalah anak setelah terlambat.
- Kepala sekolah belum punya gambaran kondisi sekolah secara cepat.

**Visi:** satu sumber data yang rapi, sehingga guru lebih sedikit mengurus administrasi, orang tua lebih terlibat, dan pimpinan bisa mengambil keputusan berbasis data.

## Tujuan & metrik keberhasilan MVP

MVP dianggap berhasil jika guru benar-benar memakainya setiap hari dan orang tua mau membukanya. Target di bawah adalah usulan awal dan perlu disesuaikan setelah pilot.

| Tujuan | Metrik | Target (usulan) |
| --- | --- | --- |
| Absensi cepat | Waktu input absensi per kelas | < 2 menit |
| Adopsi guru | Guru yang input absensi harian di sistem | ≥ 80% |
| Rapor lebih efisien | Waktu penyusunan rapor dibanding cara lama | turun ≥ 50% |
| Orang tua terlibat | Orang tua aktif per bulan | ≥ 60% |
| Data bersih | Data siswa lengkap dan valid | ≥ 95% |
| Stabilitas | Ketersediaan sistem jam sekolah | ≥ 99% |

## Target pengguna & persona

Lima peran utama; guru dan orang tua adalah penentu adopsi sehingga pengalaman mereka jadi prioritas desain.

| Peran | Kebutuhan utama | Frekuensi pakai |
| --- | --- | --- |
| Admin / TU | Kelola data induk, kelas, jadwal, cetak laporan | Harian |
| Guru / wali kelas | Absensi cepat, input nilai, rapor, catatan siswa | Harian |
| Orang tua | Lihat absensi, nilai, pengumuman; ajukan izin | Mingguan |
| Kepala sekolah | Ringkasan kehadiran dan nilai, pantau kelas | Mingguan |
| Siswa | Absen harian dengan scan wajah dan lokasi; lihat kehadiran, jadwal, nilai, pengumuman | Mingguan |

Persona rinci (nama, kebiasaan, perangkat, kendala) dilengkapi setelah wawancara dengan 3–5 sekolah.

## Ruang lingkup & fase rilis

MVP hanya mencakup empat modul inti; sisanya sengaja ditunda agar rilis pertama cepat dan bisa diuji di sekolah nyata.

| Fase | Modul | Keterangan |
| --- | --- | --- |
| MVP | Data induk, absensi, nilai & e-rapor, portal orang tua | Fokus rilis pertama |
| Tahap 2 | Keuangan/SPP, PPDB online, pengumuman & notifikasi WhatsApp | Butuh integrasi pembayaran |
| Tahap 3 | LMS, ujian online (CBT), dashboard analitik, BK | Setelah data MVP stabil |

**Di luar lingkup MVP:** pembayaran online, LMS/CBT, perpustakaan, inventaris, antar-jemput, kantin digital, dan integrasi Dapodik dua arah.

## Kebutuhan fungsional MVP

Kebutuhan fungsional MVP dirinci sebagai Product Backlog Item (PBI) di bagian "Product Backlog per modul" di bawah. Satu fitur = satu PBI dengan nomor unik, supaya perbaikan, pengujian, dan kode bisa merujuk ke nomor yang sama.

**Konvensi nomor PBI**

Format: `PBI-<MODUL>-<MENU>.<FITUR>`. Contoh: `PBI-ABS-02.01` = modul Absensi, menu 02 (Pengajuan izin), fitur 01.

| Kode | Modul |
| --- | --- |
| UMU | Umum: akun, pengaturan, log, pemeliharaan |
| DIN | Data induk |
| ABS | Absensi |
| NIL | Nilai & e-rapor |
| POR | Portal orang tua, pengumuman & notifikasi |
| DSB | Dashboard kepala sekolah |

- Nomor tidak pernah dipakai ulang. Fitur yang dibatalkan ditandai "Dibatalkan" dan nomornya tetap ada.
- Perubahan pada fitur yang sama memakai nomor yang sama dengan catatan revisi; fitur baru memakai nomor berikutnya di menu itu.
- Setiap cabang kode, commit, dan kasus uji menyebut nomor PBI-nya.
- Prioritas: **Wajib** = harus ada saat rilis MVP, **Sebaiknya** = masuk jika waktu cukup.

**Keputusan yang sudah ditetapkan**

- Absensi dicatat per hari dan dilakukan mandiri oleh siswa dengan scan wajah serta verifikasi lokasi di sekitar sekolah; wali kelas memantau dan mengoreksi. Absensi per jam pelajaran di luar MVP.
- Penilaian mengikuti Kurikulum Merdeka yang berlaku.
- Aplikasi dipasang langsung di server tiap sekolah (satu instalasi per sekolah), berjalan online, tanpa mode offline.
- Model bisnis: lisensi per sekolah.
- Target awal: SMA, SMK, dan MA sederajat, karena siswa membawa ponsel sendiri untuk absen mandiri. SD dan SMP di luar lingkup untuk sementara. Perbedaan jenis sekolah diatur lewat pengaturan (misalnya program keahlian dan templat rapor).
- Tidak ada migrasi data lama; data awal masuk lewat impor Excel.
- Pemasangan dan pemeliharaan di sekolah dilakukan tim IT atau admin sekolah.
- Teknologi: PHP Laravel dan MySQL; pilihan frontend dibahas di bagian Arsitektur & teknologi.

## Struktur menu & fitur turunan

Bagian ini memecah modul MVP menjadi menu dan fitur. Satu baris tabel = satu PBI. Kolom "Aturan & kriteria" berisi validasi dan batasan yang harus ditegakkan di kode, sekaligus dasar kriteria penerimaan (acceptance criteria). Penjelasan format nomor ada di bagian Kebutuhan fungsional di atas.

### UMU: Umum, akun & pengaturan

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-UMU-01.01 | Login | Login dengan email atau nomor HP dan kata sandi | Semua | Akun terkunci 15 menit setelah 5 kali gagal | Wajib |
| PBI-UMU-01.02 | Login | Lupa dan atur ulang kata sandi lewat tautan email | Semua | Tautan berlaku 60 menit dan sekali pakai | Wajib |
| PBI-UMU-01.03 | Login | Ganti kata sandi; wajib ganti saat login pertama | Semua | Minimal 8 karakter | Wajib |
| PBI-UMU-01.04 | Login | Pilih peran aktif bila pengguna punya lebih dari satu peran | Semua | Contoh: guru yang juga wali kelas | Sebaiknya |
| PBI-UMU-01.05 | Sesi login | Keluar otomatis bila pengguna tidak aktif dalam waktu tertentu | Semua | Usulan bawaan 30 menit tanpa aktivitas; diatur Admin per peran (PBI-UMU-01.09); pengecekan di server, bukan hanya di tampilan | Wajib |
| PBI-UMU-01.06 | Sesi login | Peringatan sebelum sesi habis dan tombol lanjutkan sesi; setelah habis, login ulang kembali ke halaman semula | Semua | Peringatan muncul 1 menit sebelum habis; isian nilai yang belum disimpan dijaga sebagai draf agar tidak hilang | Wajib |
| PBI-UMU-01.07 | Sesi login | Masa berlaku sesi maksimum meski pengguna aktif | Semua | Login ulang setelah batas tercapai; batas diatur Admin | Sebaiknya |
| PBI-UMU-01.08 | Sesi login | Daftar sesi aktif di profil dan tombol keluar dari semua perangkat | Semua | Menampilkan perangkat, waktu, dan lokasi kasar login terakhir; mengganti kata sandi mengakhiri sesi lain | Sebaiknya |
| PBI-UMU-01.09 | Sesi login | Pengaturan sesi: durasi tidak aktif per peran, masa maksimum, dan batas jumlah sesi bersamaan | Admin | Perubahan tercatat di log; berlaku untuk sesi baru | Wajib |
| PBI-UMU-02.01 | Profil saya | Lihat dan ubah profil (foto, kontak) | Semua | Foto maksimal 2 MB | Wajib |
| PBI-UMU-03.01 | Pengaturan sekolah | Kelola profil sekolah (nama, NPSN, alamat, logo, kepala sekolah) | Admin | Dipakai di kop rapor dan dokumen | Wajib |
| PBI-UMU-03.02 | Pengaturan sekolah | Kelola tahun ajaran dan semester; aktifkan satu | Admin | Hanya satu tahun ajaran dan semester aktif | Wajib |
| PBI-UMU-03.03 | Pengaturan sekolah | Kelola hari efektif dan kalender libur | Admin | Absensi hanya bisa diisi pada hari efektif | Wajib |
| PBI-UMU-03.04 | Pengaturan sekolah | Atur pengiriman email (server SMTP sekolah) dan uji kirim | Admin | Kredensial disimpan terenkripsi | Wajib |
| PBI-UMU-04.01 | Pengguna & peran | Tambah, ubah, dan nonaktifkan pengguna | Admin | Pengguna nonaktif tidak bisa login, datanya tetap ada | Wajib |
| PBI-UMU-04.02 | Pengguna & peran | Tetapkan satu atau lebih peran ke pengguna. Revisi: pengaturan izin dipindah ke menu 07 | Admin | Peran bawaan: Admin, Kepala sekolah, Guru, Wali kelas, Orang tua, Siswa | Wajib |
| PBI-UMU-04.03 | Pengguna & peran | Reset kata sandi oleh Admin | Admin | Kata sandi sementara wajib diganti | Wajib |
| PBI-UMU-04.04 | Pengguna & peran | Impor pengguna dari Excel dan kirim undangan | Admin | Validasi email dan nomor HP unik | Sebaiknya |
| PBI-UMU-05.01 | Log aktivitas | Catat perubahan nilai, absensi, data siswa, kunci dan buka kunci rapor | Sistem | Simpan pengguna, waktu, nilai sebelum dan sesudah; tidak dapat diubah | Wajib |
| PBI-UMU-05.02 | Log aktivitas | Lihat dan filter log (pengguna, tanggal, modul) | Admin | Hanya baca | Wajib |
| PBI-UMU-06.01 | Pemeliharaan | Backup database terjadwal harian dan unduh backup manual | Admin | Simpan beberapa backup terakhir; uji pemulihan | Wajib |
| PBI-UMU-06.02 | Pemeliharaan | Halaman informasi versi aplikasi dan status sistem | Admin | Menampilkan versi, ruang disk, status antrean | Sebaiknya |
| PBI-UMU-06.03 | Pemeliharaan | Validasi lisensi sekolah (kunci lisensi, masa berlaku, pengingat sebelum habis) | Admin | Mekanisme lisensi per sekolah; detail menyusul | Sebaiknya |
| PBI-UMU-07.01 | Hak akses (RBAC) | Daftar peran beserta jumlah pengguna; peran bawaan: Admin, Kepala sekolah, Guru, Wali kelas, Orang tua, Siswa | Admin | Peran bawaan tidak dapat dihapus | Wajib |
| PBI-UMU-07.02 | Hak akses (RBAC) | Buat, ubah, dan nonaktifkan peran kustom (misalnya Operator TU, Guru BK, Pembina ekskul) | Admin | Peran yang masih dipakai pengguna tidak dapat dihapus | Wajib |
| PBI-UMU-07.03 | Hak akses (RBAC) | Matriks izin per peran: centang aksi per menu (lihat, tambah, ubah, hapus, ekspor, setujui, kunci) | Admin | Setiap perubahan tercatat di log (PBI-UMU-05.01) | Wajib |
| PBI-UMU-07.04 | Hak akses (RBAC) | Izin bawaan tiap peran dan tombol "kembalikan ke bawaan" | Admin | Izin bawaan mengikuti tabel Peran & hak akses di PRD | Wajib |
| PBI-UMU-07.05 | Hak akses (RBAC) | Cakupan data per peran: seluruh sekolah, kelas yang diampu, kelas yang diwalikan, anak sendiri, atau diri sendiri | Sistem, Admin | Ditegakkan di server pada setiap permintaan, bukan hanya dengan menyembunyikan menu | Wajib |
| PBI-UMU-07.06 | Hak akses (RBAC) | Tandai izin sensitif (buka kunci nilai, buka kembali tahun ajaran, hapus data wajah, lihat log, kelola hak akses) | Admin | Mengubah izin sensitif meminta konfirmasi kata sandi | Wajib |
| PBI-UMU-07.07 | Hak akses (RBAC) | Pengaman Admin: minimal satu Admin aktif; Admin terakhir tidak dapat dihapus atau diturunkan perannya | Sistem | Pesan penolakan menjelaskan alasannya | Wajib |
| PBI-UMU-07.08 | Hak akses (RBAC) | Uji izin: lihat menu dan cakupan data yang dapat diakses seorang pengguna | Admin | Hanya baca; tidak menjalankan aksi atas nama pengguna | Sebaiknya |
| PBI-UMU-08.01 | Setup & beranda | Wizard setup saat instalasi pertama: buat Admin pertama, profil sekolah, tahun ajaran, hari efektif, uji email | Admin | Hanya muncul sekali; terkunci setelah selesai | Wajib |
| PBI-UMU-08.02 | Setup & beranda | Menu dan tombol menyesuaikan izin pengguna | Semua | Menu yang tidak diizinkan tidak tampil; akses langsung lewat alamat tetap ditolak di server | Wajib |
| PBI-UMU-08.03 | Setup & beranda | Beranda per peran dengan tugas tertunda (Admin: data belum lengkap; Guru: nilai belum diisi; Wali kelas: antrean izin dan absen bermasalah) | Admin, Guru, Wali kelas | Hanya menampilkan data sesuai cakupan peran | Sebaiknya |
| PBI-UMU-09.01 | Panduan | Halaman panduan penggunaan aplikasi, dikelompokkan per peran dan per modul | Semua | Pengguna hanya melihat panduan untuk perannya; dapat dibuka tanpa meninggalkan aplikasi | Wajib |
| PBI-UMU-09.02 | Panduan | Isi panduan langkah demi langkah per fitur dengan tangkapan layar, termasuk panduan absen wajah dan lokasi untuk siswa | Semua | Panduan bawaan dikirim bersama aplikasi dan versinya mengikuti rilis | Wajib |
| PBI-UMU-09.03 | Panduan | Pencarian panduan dan daftar isi | Semua | Pencarian hanya menampilkan panduan yang sesuai peran | Sebaiknya |
| PBI-UMU-09.04 | Panduan | Tombol bantuan di tiap halaman yang membuka panduan fitur terkait | Semua | Setiap halaman memetakan ke satu atau lebih bagian panduan | Sebaiknya |
| PBI-UMU-09.05 | Panduan | Kelola panduan khusus sekolah dan kontak bantuan (penanggung jawab IT sekolah) | Admin | Panduan bawaan tidak dapat dihapus; tambahan sekolah dapat diubah; kontak tampil di halaman panduan | Sebaiknya |

### DIN: Data induk

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-DIN-01.01 | Siswa | Daftar siswa dengan pencarian, filter kelas dan status, urutan, paginasi | Admin | Pencarian by nama, NISN, NIS | Wajib |
| PBI-DIN-01.02 | Siswa | Tambah dan ubah siswa (identitas, NISN, NIS, tempat dan tanggal lahir, jenis kelamin, agama, alamat, foto) | Admin | NISN unik; NIS unik per sekolah | Wajib |
| PBI-DIN-01.03 | Siswa | Data orang tua/wali dan kontak darurat | Admin | Minimal satu kontak utama | Wajib |
| PBI-DIN-01.04 | Siswa | Ubah status siswa (aktif, pindah, lulus, keluar) dengan tanggal dan alasan | Admin | Siswa nonaktif tidak muncul di absensi dan input nilai baru | Wajib |
| PBI-DIN-01.05 | Siswa | Hubungkan siswa ke akun orang tua | Admin | Satu akun orang tua bisa terhubung ke beberapa anak | Wajib |
| PBI-DIN-01.06 | Siswa | Detail siswa dengan riwayat kelas | Admin, Wali kelas | Hanya baca | Sebaiknya |
| PBI-DIN-01.07 | Siswa | Buat akun login siswa dari data siswa (NISN sebagai nama pengguna), termasuk massal | Admin | Kata sandi awal wajib diganti; akun hanya untuk siswa aktif; dibutuhkan absen mandiri | Wajib |
| PBI-DIN-02.01 | Guru & staf | Daftar, tambah, dan ubah guru/staf (NIP/NUPTK, kontak, status) | Admin | NIP/NUPTK unik bila diisi | Wajib |
| PBI-DIN-02.02 | Guru & staf | Buat akun login dari data guru | Admin | Memakai PBI-UMU-04.01 | Wajib |
| PBI-DIN-03.01 | Kelas | Buat kelas per tahun ajaran (tingkat, nama, fase) | Admin | Fase terisi otomatis dari tingkat (kelas X = Fase E; kelas XI dan XII = Fase F) dan dapat diubah | Wajib |
| PBI-DIN-03.02 | Kelas | Tetapkan wali kelas | Admin | Satu wali kelas per kelas; satu guru satu kelas perwalian per tahun ajaran | Wajib |
| PBI-DIN-03.03 | Kelas | Kelola anggota kelas; pindahkan siswa, termasuk massal | Admin | Satu siswa hanya di satu kelas per tahun ajaran | Wajib |
| PBI-DIN-03.04 | Kelas | Kenaikan kelas dan kelulusan massal | Admin | Pratinjau sebelum diterapkan; data tahun lalu tetap tersimpan | Sebaiknya |
| PBI-DIN-04.01 | Mata pelajaran | Kelola mata pelajaran (kode, nama, kelompok, wajib/pilihan) | Admin | Kode mapel unik | Wajib |
| PBI-DIN-04.02 | Mata pelajaran | Kelola program keahlian dan konsentrasi (SMK) serta pilihan mata pelajaran peserta didik (SMA/MA) | Admin | Program keahlian opsional, hanya tampil untuk sekolah yang mengaktifkannya; siswa hanya melihat mapel yang diambilnya | Sebaiknya |
| PBI-DIN-05.01 | Penugasan mengajar | Tetapkan guru, mata pelajaran, dan kelas | Admin | Dasar hak akses guru ke input nilai | Wajib |
| PBI-DIN-06.01 | Jadwal pelajaran | Atur slot jam pelajaran | Admin | Dipakai untuk tampilan jadwal di portal | Sebaiknya |
| PBI-DIN-06.02 | Jadwal pelajaran | Isi jadwal per kelas dengan deteksi bentrok guru dan ruang | Admin | Peringatan jika bentrok | Sebaiknya |
| PBI-DIN-06.03 | Jadwal pelajaran | Tampilan jadwal per kelas dan per guru | Admin, Guru | Hanya baca | Sebaiknya |
| PBI-DIN-07.01 | Impor massal | Unduh templat Excel (siswa, guru, kelas, penugasan) | Admin | Templat ber-versi | Wajib |
| PBI-DIN-07.02 | Impor massal | Unggah file, pratinjau, dan validasi seluruh baris sebelum disimpan | Admin | Impor semua atau tidak sama sekali; tidak merusak data yang ada | Wajib |
| PBI-DIN-07.03 | Impor massal | Laporan baris bermasalah dan ekspor data ke Excel | Admin | Laporan menyebut nomor baris dan alasan | Wajib |
| PBI-DIN-08.01 | Arsip tahun ajaran | Tutup tahun ajaran: seluruh data tahun itu (kelas, absensi, nilai, rapor) menjadi hanya-baca | Admin | Peringatan bila masih ada rapor belum terkunci; konfirmasi sebelum menutup; dijalankan sebelum kenaikan kelas | Wajib |
| PBI-DIN-08.02 | Arsip tahun ajaran | Penegakan hanya-baca di server: semua tambah, ubah, dan hapus pada tahun ajaran tertutup ditolak | Sistem | Berlaku untuk semua peran, termasuk Admin, kecuali lewat PBI-DIN-08.04; pesan penolakan jelas | Wajib |
| PBI-DIN-08.03 | Arsip tahun ajaran | Lihat arsip per tahun ajaran: kelas, absensi, nilai, rapor, dan legger; unduh rapor lama | Admin, Kepala sekolah, Wali kelas, Orang tua, Siswa | Mengikuti cakupan data peran masing-masing; hanya baca | Wajib |
| PBI-DIN-08.04 | Arsip tahun ajaran | Buka kembali tahun ajaran tertutup untuk koreksi darurat | Admin | Izin sensitif; wajib alasan dan konfirmasi kata sandi; tercatat di log; ditutup kembali setelah selesai | Sebaiknya |

### ABS: Absensi harian mandiri (wajah + lokasi)

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-ABS-01.01 | Papan & koreksi (wali kelas) | Papan kehadiran hari ini: pantau status semua siswa kelas secara langsung. Revisi: sebelumnya pengisian absensi oleh wali kelas | Wali kelas | Hanya kelas yang diwalikan | Wajib |
| PBI-ABS-01.02 | Papan & koreksi (wali kelas) | Koreksi status per siswa: Hadir, Izin, Sakit, Alfa. Revisi: menjadi koreksi manual | Wali kelas | Wajib isi alasan; catatan ditandai "manual" dan masuk log | Wajib |
| PBI-ABS-01.03 | Papan & koreksi (wali kelas) | Catatan per siswa. Revisi: tombol "semua hadir" dibatalkan | Wali kelas | Catatan opsional | Sebaiknya |
| PBI-ABS-01.04 | Papan & koreksi (wali kelas) | Batas waktu koreksi | Wali kelas, Admin | Wali kelas bisa mengoreksi sampai H+1; setelahnya hanya Admin dan tercatat di log | Wajib |
| PBI-ABS-01.05 | Papan & koreksi (wali kelas) | Wali pengganti bila wali kelas berhalangan. Revisi: untuk koreksi dan pemantauan | Admin | Penugasan per tanggal dan tercatat di log | Sebaiknya |
| PBI-ABS-02.01 | Pengajuan izin | Form pengajuan (jenis izin/sakit, tanggal mulai dan selesai, alasan, lampiran foto) | Orang tua | Tidak boleh tumpang tindih dengan pengajuan lain; lampiran maksimal 5 MB | Wajib |
| PBI-ABS-02.02 | Pengajuan izin | Riwayat dan status pengajuan (menunggu, disetujui, ditolak); batalkan sebelum diproses | Orang tua | Hanya anak yang terhubung ke akunnya | Wajib |
| PBI-ABS-02.03 | Pengajuan izin | Catat izin atas nama orang tua (misalnya lewat telepon) | Wali kelas | Ditandai "diinput wali kelas" | Sebaiknya |
| PBI-ABS-03.01 | Persetujuan izin | Daftar pengajuan menunggu beserta detail dan lampiran | Wali kelas | Hanya siswa kelasnya | Wajib |
| PBI-ABS-03.02 | Persetujuan izin | Setujui atau tolak dengan alasan; jika disetujui, status absensi pada rentang tanggal terisi otomatis | Wali kelas | Siswa berstatus izin/sakit tidak perlu absen mandiri; orang tua diberi notifikasi | Wajib |
| PBI-ABS-04.01 | Rekap | Rekap per kelas (harian, bulanan, semester) | Wali kelas, Admin, Kepala sekolah | Filter rentang tanggal | Wajib |
| PBI-ABS-04.02 | Rekap | Rekap per siswa dengan persentase kehadiran | Wali kelas, Admin, Kepala sekolah, Siswa (dirinya) | Persentase dihitung dari hari efektif | Wajib |
| PBI-ABS-04.03 | Rekap | Ekspor rekap ke Excel dan PDF | Wali kelas, Admin | Sesuai filter yang aktif | Wajib |
| PBI-ABS-05.01 | Peringatan | Notifikasi ke orang tua saat anak berstatus Alfa atau Sakit, atau belum absen sampai jam batas. Revisi: pemicu mengikuti penutupan absensi | Sistem | Dikirim setelah PBI-ABS-07.09; tercatat di log notifikasi | Wajib |
| PBI-ABS-05.02 | Peringatan | Peringatan kehadiran rendah ke wali kelas | Sistem | Ambang diatur Admin (PBI-ABS-06.01) | Sebaiknya |
| PBI-ABS-06.01 | Pengaturan absensi | Atur jam masuk, toleransi terlambat, jam batas penutupan, batas waktu koreksi, ambang peringatan | Admin | Nilai bawaan koreksi: sampai H+1 | Wajib |
| PBI-ABS-06.02 | Pengaturan absensi | Atur titik lokasi sekolah (koordinat), radius, dan akurasi GPS minimal | Admin | Radius dapat diatur; lokasi dapat diuji dari halaman pengaturan | Wajib |
| PBI-ABS-06.03 | Pengaturan absensi | Atur verifikasi wajah: ambang kemiripan, batas percobaan, liveness aktif | Admin | Nilai bawaan konservatif; perubahan tercatat di log | Wajib |
| PBI-ABS-07.01 | Absen mandiri siswa | Halaman absen hari ini: status saat ini dan tombol absen | Siswa | Hanya hari efektif; satu absen masuk per siswa per hari | Wajib |
| PBI-ABS-07.02 | Absen mandiri siswa | Verifikasi lokasi: ambil koordinat perangkat dan hitung jarak ke titik sekolah | Siswa | Absen hanya diterima bila di dalam radius; akurasi GPS di bawah batas diminta ulang | Wajib |
| PBI-ABS-07.03 | Absen mandiri siswa | Verifikasi wajah: pindai wajah lewat kamera depan dan cocokkan dengan data wajah terdaftar | Siswa | Wajib kamera langsung, bukan unggah foto; harus lolos ambang kemiripan | Wajib |
| PBI-ABS-07.04 | Absen mandiri siswa | Deteksi keaslian wajah (liveness) agar foto atau layar tidak bisa dipakai | Siswa | Absen ditolak bila liveness gagal | Wajib |
| PBI-ABS-07.05 | Absen mandiri siswa | Hasil absen: waktu tercatat; status Hadir, atau Terlambat bila lewat jam masuk plus toleransi | Sistem | Aturan jam dari PBI-ABS-06.01 | Wajib |
| PBI-ABS-07.06 | Absen mandiri siswa | Simpan bukti verifikasi: waktu, koordinat, skor kecocokan, jenis perangkat | Sistem | Foto selfie harian tidak disimpan | Wajib |
| PBI-ABS-07.07 | Absen mandiri siswa | Absen pulang | Siswa | Opsional, dapat diaktifkan Admin | Sebaiknya |
| PBI-ABS-07.08 | Absen mandiri siswa | Tandai absen dengan indikasi lokasi palsu untuk ditinjau wali kelas | Sistem | Deteksi dari browser terbatas; lihat bagian Arsitektur & teknologi | Sebaiknya |
| PBI-ABS-07.09 | Absen mandiri siswa | Penutupan absensi otomatis: siswa tanpa absen dan tanpa izin ditandai Alfa pada jam batas | Sistem | Wali kelas dapat mengoreksi (PBI-ABS-01.02) | Wajib |
| PBI-ABS-08.01 | Pendaftaran wajah | Catat persetujuan orang tua atas pengambilan data wajah dan lokasi | Admin, Wali kelas | Siswa tanpa persetujuan tidak bisa didaftarkan; riwayat persetujuan disimpan | Wajib |
| PBI-ABS-08.02 | Pendaftaran wajah | Daftarkan wajah siswa dengan beberapa pose di sekolah, diawasi petugas | Admin, Wali kelas | Disimpan sebagai template terenkripsi, bukan foto | Wajib |
| PBI-ABS-08.03 | Pendaftaran wajah | Perbarui dan hapus data wajah | Admin | Hapus saat siswa pindah atau lulus, atau atas permintaan orang tua; tercatat di log | Wajib |
| PBI-ABS-08.04 | Pendaftaran wajah | Ikat siswa ke perangkat terdaftar; ganti perangkat perlu persetujuan wali kelas | Siswa, Wali kelas | Mengurangi absen lewat perangkat orang lain | Sebaiknya |
| PBI-ABS-09.01 | Absen bermasalah | Antrean absen gagal berulang (wajah atau lokasi) untuk ditinjau wali kelas | Wali kelas | Berisi alasan kegagalan dan jumlah percobaan | Sebaiknya |
| PBI-ABS-09.02 | Absen bermasalah | Absen lewat tablet sekolah bagi siswa yang ponselnya rusak atau ketinggalan: masukkan NISN, lalu pindai wajah | Siswa, Admin | Verifikasi wajah dan liveness tetap wajib; lokasi mengikuti titik tablet terdaftar; absen ditandai sumber "tablet sekolah" | Wajib |
| PBI-ABS-09.03 | Absen bermasalah | Kelola tablet sekolah: daftarkan perangkat, tetapkan lokasi, aktifkan atau nonaktifkan, mode kios terkunci hanya untuk halaman absen | Admin | Hanya tablet terdaftar yang diterima; tablet yang hilang bisa dinonaktifkan jarak jauh | Wajib |

**Keputusan:** absensi dicatat per hari dan dilakukan mandiri oleh siswa dengan scan wajah serta verifikasi lokasi di sekitar sekolah. Wali kelas memantau dan mengoreksi bila perlu. Absensi per jam pelajaran di luar lingkup MVP. Karena memakai data wajah dan lokasi anak, bagian Kebutuhan non-fungsional dan Arsitektur memuat syarat privasi dan teknis tambahan.

*Catatan nomor PBI:* fitur lama di menu 01 direvisi (tetap bernomor sama); fitur baru memakai nomor berikutnya di menu 06 (06.02 dan 06.03) serta menu baru 07 sampai 09.

### NIL: Nilai & e-rapor (Kurikulum Merdeka)

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-NIL-01.01 | Perangkat penilaian | Kelola Capaian Pembelajaran (CP) per mata pelajaran dan fase | Admin | Dapat diisi manual atau impor Excel | Wajib |
| PBI-NIL-01.02 | Perangkat penilaian | Kelola Tujuan Pembelajaran (TP) per mapel, kelas, dan semester | Guru, Admin | Setiap TP terhubung ke satu CP | Wajib |
| PBI-NIL-01.03 | Perangkat penilaian | Kelola Kriteria Ketercapaian TP (KKTP) per TP | Guru | Dasar menandai TP tercapai atau belum | Wajib |
| PBI-NIL-02.01 | Komponen nilai akhir | Atur jenis asesmen sumatif per mapel (sumatif lingkup materi, sumatif akhir semester/tahun) | Guru, Admin | Nama dan jumlah komponen dapat diatur | Wajib |
| PBI-NIL-02.02 | Komponen nilai akhir | Atur bobot nilai akhir per mapel | Admin, Guru | Total bobot 100%; nilai bawaan dapat diubah sekolah | Wajib |
| PBI-NIL-03.01 | Input asesmen | Input nilai sumatif lingkup materi per siswa, dikaitkan ke TP | Guru | Nilai 0 sampai 100; hanya mapel dan kelas yang diampu | Wajib |
| PBI-NIL-03.02 | Input asesmen | Input nilai sumatif akhir semester/tahun | Guru | Nilai 0 sampai 100 | Wajib |
| PBI-NIL-03.03 | Input asesmen | Simpan sebagai draf sebelum final | Guru | Nilai kosong diizinkan saat draf | Wajib |
| PBI-NIL-03.04 | Input asesmen | Catatan asesmen formatif per siswa (opsional) | Guru | Tidak masuk perhitungan nilai akhir | Sebaiknya |
| PBI-NIL-03.05 | Input asesmen | Impor dan ekspor nilai lewat Excel per kelas dan mapel | Guru | Validasi rentang nilai dan NISN | Sebaiknya |
| PBI-NIL-04.01 | Nilai akhir & deskripsi | Hitung nilai akhir otomatis sesuai bobot | Sistem | Pembulatan ke bilangan bulat; rumus tercatat | Wajib |
| PBI-NIL-04.02 | Nilai akhir & deskripsi | Tandai TP tercapai atau belum berdasarkan KKTP | Sistem | Dapat dikoreksi guru | Wajib |
| PBI-NIL-04.03 | Nilai akhir & deskripsi | Susun deskripsi capaian kompetensi otomatis dari TP tercapai dan belum tercapai | Guru | Guru dapat menyunting sebelum final | Wajib |
| PBI-NIL-04.04 | Nilai akhir & deskripsi | Catat nilai perbaikan (remedial) | Guru | Riwayat nilai awal tetap tersimpan | Sebaiknya |
| PBI-NIL-05.01 | Kunci nilai | Finalisasi dan kunci nilai per mapel dan kelas | Guru | Nilai terkunci tidak dapat diubah | Wajib |
| PBI-NIL-05.02 | Kunci nilai | Buka kunci dengan alasan | Admin | Tercatat di log (PBI-UMU-05.01) | Wajib |
| PBI-NIL-06.01 | Kokurikuler & ekstrakurikuler | Kelola projek kokurikuler (nama, tema, dimensi yang dinilai, kelompok siswa) | Admin, Wali kelas | Istilah (kokurikuler atau P5) dapat diatur per sekolah | Wajib |
| PBI-NIL-06.02 | Kokurikuler & ekstrakurikuler | Penilaian kokurikuler per siswa (level capaian dan deskripsi) | Wali kelas | Level capaian dapat diatur | Wajib |
| PBI-NIL-06.03 | Kokurikuler & ekstrakurikuler | Kelola ekstrakurikuler dan keikutsertaan siswa | Admin | Satu siswa boleh ikut lebih dari satu | Wajib |
| PBI-NIL-06.04 | Kokurikuler & ekstrakurikuler | Penilaian ekstrakurikuler (predikat dan deskripsi) | Pembina, Wali kelas | Predikat dapat diatur | Wajib |
| PBI-NIL-06.05 | Kokurikuler & ekstrakurikuler | Penilaian Praktik Kerja Lapangan (PKL): tempat, pembimbing, periode, nilai, dan deskripsi | Admin, Guru pembimbing | Khusus SMK; tampil di rapor bila diaktifkan | Sebaiknya |
| PBI-NIL-07.01 | Catatan wali kelas | Catatan wali kelas dan penilaian sikap | Wali kelas | Teks bebas dengan batas panjang | Wajib |
| PBI-NIL-07.02 | Catatan wali kelas | Rekap ketidakhadiran (sakit, izin, alfa) otomatis dari absensi | Sistem | Sumber data PBI-ABS-04.02 | Wajib |
| PBI-NIL-07.03 | Catatan wali kelas | Catatan prestasi siswa | Wali kelas | Opsional | Sebaiknya |
| PBI-NIL-08.01 | Rapor | Pratinjau rapor per siswa | Wali kelas | Mengikuti templat aktif | Wajib |
| PBI-NIL-08.02 | Rapor | Cek kelengkapan sebelum rapor dikunci (nilai, deskripsi, catatan) | Wali kelas | Daftar mapel atau siswa yang belum lengkap | Wajib |
| PBI-NIL-08.03 | Rapor | Status rapor: draf, siap, terkunci, dibagikan | Wali kelas | Rapor terkunci tidak dapat diubah tanpa buka kunci | Wajib |
| PBI-NIL-08.04 | Rapor | Cetak PDF per siswa dan massal per kelas | Wali kelas, Admin | Hanya rapor berstatus terkunci | Wajib |
| PBI-NIL-08.05 | Rapor | Atur tanggal rapor dan tanda tangan (kepala sekolah, wali kelas) | Admin, Wali kelas | Nama dan NIP tampil otomatis | Wajib |
| PBI-NIL-09.01 | Templat rapor | Atur kop, logo, dan susunan bagian rapor per jenjang | Admin | Satu templat aktif per jenjang | Wajib |
| PBI-NIL-10.01 | Legger | Legger nilai per kelas dan ekspor Excel/PDF | Wali kelas, Admin | Hanya baca | Sebaiknya |
| PBI-NIL-11.01 | Publikasi | Bagikan rapor ke portal orang tua per kelas | Wali kelas, Admin | Hanya rapor berstatus terkunci; orang tua diberi notifikasi | Wajib |

**Keputusan:** penilaian mengikuti Kurikulum Merdeka. Rapor memuat nilai akhir intrakurikuler (angka), deskripsi capaian kompetensi dari Tujuan Pembelajaran, penilaian kokurikuler dan ekstrakurikuler, catatan wali kelas, serta rekap ketidakhadiran. Menurut [Permendikbudristek 12/2024](https://peraturan.go.id/files/permendikbudristek-no-12-tahun-2024.pdf), struktur kurikulum memuat intrakurikuler dan kokurikuler. Karena istilah dan format rapor dapat berbeda antar sekolah, nama komponen dan templat rapor dibuat dapat diatur. Aturan rinci tiap jenjang perlu dicocokkan dengan panduan penilaian yang dipakai sekolah pilot.

### POR: Portal orang tua, pengumuman & notifikasi

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-POR-01.01 | Beranda | Pilih anak bila terhubung ke lebih dari satu | Orang tua | Hanya anak yang terhubung ke akunnya | Wajib |
| PBI-POR-01.02 | Beranda | Ringkasan kehadiran hari ini, nilai atau rapor terbaru, dan pengumuman terbaru | Orang tua | Tampil rapi di layar ponsel | Wajib |
| PBI-POR-02.01 | Kehadiran | Kalender kehadiran bulanan | Orang tua | Hanya baca | Wajib |
| PBI-POR-02.02 | Kehadiran | Rekap hadir, izin, sakit, alfa per semester | Orang tua | Sumber data PBI-ABS-04.02 | Wajib |
| PBI-POR-03.01 | Izin & sakit | Akses ke form dan riwayat pengajuan izin | Orang tua | Memakai PBI-ABS-02.01 dan PBI-ABS-02.02 | Wajib |
| PBI-POR-04.01 | Nilai & rapor | Lihat nilai dan deskripsi capaian per mata pelajaran | Orang tua | Hanya nilai yang sudah final | Wajib |
| PBI-POR-04.02 | Nilai & rapor | Lihat dan unduh rapor PDF | Orang tua | Hanya rapor berstatus dibagikan | Wajib |
| PBI-POR-04.03 | Nilai & rapor | Lihat penilaian kokurikuler dan ekstrakurikuler | Orang tua | Hanya baca | Sebaiknya |
| PBI-POR-05.01 | Jadwal | Jadwal pelajaran anak per hari | Orang tua | Bergantung pada PBI-DIN-06.x | Sebaiknya |
| PBI-POR-06.01 | Pengumuman | Daftar dan detail pengumuman beserta lampiran | Semua peran | Hanya pengumuman yang menargetkan pengguna itu | Wajib |
| PBI-POR-06.02 | Pengumuman | Tanda sudah dibaca | Semua peran | Dicatat per pengguna | Sebaiknya |
| PBI-POR-07.01 | Kelola pengumuman | Buat dan ubah pengumuman (judul, isi, lampiran) | Admin, Kepala sekolah | Lampiran maksimal 5 MB | Wajib |
| PBI-POR-07.02 | Kelola pengumuman | Pilih target: semua, per kelas, atau per tingkat | Admin, Kepala sekolah | Wajib memilih minimal satu target | Wajib |
| PBI-POR-07.03 | Kelola pengumuman | Jadwal tayang dan pengarsipan | Admin, Kepala sekolah | Pengumuman tidak dihapus, hanya diarsipkan | Sebaiknya |
| PBI-POR-07.04 | Kelola pengumuman | Statistik dibaca | Admin, Kepala sekolah | Jumlah dan daftar pembaca | Sebaiknya |
| PBI-POR-08.01 | Akun orang tua | Ubah kontak dan kata sandi | Orang tua | Memakai PBI-UMU-01.03 | Wajib |
| PBI-POR-08.02 | Akun orang tua | Atur preferensi notifikasi | Orang tua | Notifikasi izin dan alfa tidak bisa dimatikan | Sebaiknya |
| PBI-POR-09.01 | Notifikasi | Notifikasi dalam aplikasi dan email untuk alfa atau sakit, izin diproses, rapor dibagikan, pengumuman baru | Sistem | Dikirim lewat antrean agar tidak menahan proses utama | Wajib |
| PBI-POR-09.02 | Notifikasi | Push notification pada portal (PWA) | Sistem | Perlu izin dari pengguna | Sebaiknya |
| PBI-POR-09.03 | Notifikasi | Log pengiriman (terkirim atau gagal) dan kirim ulang | Admin | Simpan alasan kegagalan | Sebaiknya |

### DSB: Dashboard kepala sekolah (versi ringan)

| PBI | Menu | Fitur | Peran | Aturan & kriteria | Prioritas |
| --- | --- | --- | --- | --- | --- |
| PBI-DSB-01.01 | Ringkasan hari ini | Kehadiran hari ini per kelas dan jumlah izin dan sakit | Kepala sekolah, Admin | Sumber data modul absensi | Sebaiknya |
| PBI-DSB-01.02 | Ringkasan hari ini | Daftar kelas yang belum mengisi absensi | Kepala sekolah, Admin | Muncul setelah jam pengingat | Sebaiknya |
| PBI-DSB-02.01 | Tren kehadiran | Grafik kehadiran harian dan bulanan dengan filter kelas dan tanggal | Kepala sekolah, Admin | Hanya baca | Sebaiknya |
| PBI-DSB-03.01 | Kelengkapan nilai | Persentase nilai terisi per kelas dan mapel; guru yang belum mengisi | Kepala sekolah, Admin | Hanya baca | Sebaiknya |
| PBI-DSB-04.01 | Progres rapor | Jumlah rapor per status (draf, siap, terkunci, dibagikan) per kelas | Kepala sekolah, Admin | Hanya baca | Sebaiknya |

## Alur pengguna utama

**Siswa: absensi harian**

1. Siswa login dan membuka halaman absen hari ini.
2. Siswa mengizinkan akses lokasi; sistem memeriksa apakah siswa berada dalam radius sekolah.
3. Siswa memindai wajah lewat kamera depan; sistem memeriksa kecocokan dan keaslian wajah.
4. Jika lolos, status Hadir atau Terlambat tercatat dan siswa melihat konfirmasi.
5. Jika gagal berulang, kasusnya masuk antrean wali kelas untuk ditinjau atau dikoreksi manual.
6. Pada jam batas, siswa tanpa absen dan tanpa izin ditandai Alfa; orang tua menerima notifikasi.

**Wali kelas: pantau dan koreksi absensi**

1. Buka papan kehadiran kelas hari ini.
2. Tinjau antrean absen bermasalah.
3. Koreksi status siswa dengan alasan; koreksi tercatat di log.

**Wali kelas: rapor akhir semester**

1. Pantau kelengkapan nilai tiap mata pelajaran.
2. Isi catatan wali kelas dan deskripsi capaian.
3. Pratinjau rapor, lalu kunci.
4. Cetak PDF atau bagikan ke portal orang tua.

**Orang tua: izin sakit**

1. Buka portal, pilih anak.
2. Ajukan izin dengan tanggal, alasan, dan lampiran opsional.
3. Wali kelas menyetujui; status absensi berubah otomatis.

**Admin: awal tahun ajaran**

1. Buat tahun ajaran dan kelas.
2. Impor data siswa dan guru dari Excel.
3. Atur jadwal dan penugasan guru.
4. Buat akun dan undang pengguna.

## Peran & hak akses

Prinsipnya: setiap pengguna hanya melihat data yang relevan dengan tugasnya. Orang tua hanya melihat data anaknya sendiri, dan siswa hanya data dirinya. Tabel ini adalah pengaturan bawaan; Admin dapat mengubahnya lewat menu Hak akses (PBI-UMU-07.x).

| Area | Admin | Kepala sekolah | Guru | Wali kelas | Orang tua | Siswa |
| --- | --- | --- | --- | --- | --- | --- |
| Data induk | Kelola | Lihat | Lihat kelas yang diampu | Lihat kelasnya | — | Lihat profil sendiri |
| Absen harian mandiri | — | — | — | — | — | Absen sendiri |
| Pantau & koreksi absensi | Lihat semua; koreksi setelah H+1 | Lihat semua | — | Pantau dan koreksi kelasnya | — | — |
| Izin & sakit | Lihat semua | Lihat semua | — | Setujui kelasnya | Ajukan untuk anaknya | Lihat status sendiri |
| Rekap kehadiran | Semua | Semua | — | Kelasnya | Anaknya | Dirinya |
| Nilai | Lihat semua | Lihat semua | Isi mapel dan kelas yang diampu | Lihat kelasnya | Lihat anaknya | Lihat dirinya |
| Rapor | Cetak, buka kunci | Lihat | — | Susun, kunci, bagikan kelasnya | Lihat anaknya | Lihat dirinya |
| Pendaftaran wajah & tablet | Kelola | — | — | Daftarkan wajah kelasnya | — | — |
| Pengumuman | Kelola | Kelola | Lihat | Lihat | Lihat | Lihat |
| Dashboard | Lihat | Lihat | — | — | — | — |
| Pengaturan sekolah, pengguna, hak akses, log | Kelola | — | — | — | — | — |

## Kebutuhan non-fungsional

Data siswa adalah data anak-anak, jadi keamanan dan privasi menjadi syarat utama, bukan tambahan.

- **Keamanan:** enkripsi data saat transit dan tersimpan, kata sandi ter-hash, kontrol akses berbasis peran, log audit untuk perubahan nilai dan data siswa.
- **Privasi:** patuhi regulasi pelindungan data pribadi di Indonesia (UU PDP); batasi data yang dikumpulkan; siapkan kebijakan privasi dan persetujuan orang tua. Data wajah (biometrik) dan lokasi anak bersifat sensitif: ambil hanya dengan persetujuan orang tua, simpan sebagai template terenkripsi dan bukan foto, jangan simpan foto selfie harian, tetapkan masa simpan, dan hapus saat siswa pindah atau lulus.
- **Instalasi per sekolah:** satu instalasi melayani satu sekolah (tanpa multi-tenant). Sediakan paket instalasi dengan panduan langkah demi langkah, skrip pembaruan, dan migrasi database otomatis yang bisa dijalankan tim IT sekolah.
- **Online, tanpa mode offline:** aplikasi diakses lewat jaringan sekolah atau internet; tidak ada sinkronisasi offline.
- **Ketersediaan & cadangan:** backup otomatis harian, uji pemulihan berkala, log kesalahan yang mudah dibaca tim IT sekolah.
- **Performa:** halaman utama termuat cepat di jaringan 4G biasa; tahan lonjakan saat jam absensi pagi dan hari pembagian rapor.
- **Perangkat:** mobile-first; dapat diakses dari ponsel Android kelas menengah.
- **Kemudahan pakai:** guru non-teknis dapat memakai tanpa pelatihan panjang.
- **Lisensi:** mekanisme lisensi per sekolah (lihat PBI-UMU-06.03).

## Integrasi

MVP hanya butuh impor Excel dan notifikasi dasar; integrasi lain dijadwalkan sesuai fase.

| Integrasi | Tujuan | Fase | Catatan |
| --- | --- | --- | --- |
| Impor/ekspor Excel & CSV | Pindah data awal, laporan | MVP | Wajib untuk onboarding sekolah |
| Notifikasi (push/email) | Kabar absensi dan pengumuman | MVP | Mulai dari yang murah |
| WhatsApp | Notifikasi ke orang tua | Tahap 2 | Perlu penyedia resmi dan biaya per pesan |
| Dapodik | Sinkron data peserta didik dan GTK | Tahap 2–3 | Cek mekanisme resmi yang tersedia |
| Pembayaran (VA/QRIS) | SPP dan tagihan | Tahap 2 | Pilih payment gateway berizin |

## Arsitektur & teknologi (usulan)

Karena aplikasi dipasang sendiri di tiap sekolah oleh tim IT sekolah, prioritasnya adalah instalasi sederhana, sedikit komponen, dan pembaruan yang mudah. Backend PHP Laravel dan database MySQL sudah ditetapkan; yang masih perlu dipilih adalah frontend.

| Opsi frontend | Cocok jika | Kekurangan |
| --- | --- | --- |
| Laravel + Inertia.js dengan Vue atau React (satu aplikasi) | Tim kecil; ingin instalasi dan pembaruan paling sederhana | Frontend terikat ke Laravel; aplikasi mobile native nanti perlu endpoint API tambahan |
| Laravel API + Nuxt atau Next terpisah | Ingin API murni untuk aplikasi mobile atau integrasi di masa depan | Dua aplikasi yang dipasang dan dirawat di tiap sekolah; autentikasi dan deploy lebih rumit |
| Laravel + Blade + Livewire | Tim paling nyaman di PHP; kebutuhan interaktif sedang | Kurang nyaman untuk tabel input nilai yang sangat interaktif |

**Saran:** opsi pertama, Laravel + Inertia dengan Vue (atau React jika tim lebih terbiasa). Hanya ada satu aplikasi untuk dipasang dan diperbarui di tiap sekolah, dan portal orang tua tetap bisa dibuat sebagai PWA agar terasa seperti aplikasi di ponsel. Jika kelak perlu aplikasi mobile, endpoint API ditambahkan di Laravel yang sama. Nuxt atau Next baru layak dipilih bila ada kebutuhan API terpisah yang jelas.

**Komponen pendukung (usulan, dapat diganti):**

- Autentikasi dan peran: Laravel Sanctum atau Fortify dengan paket permission seperti spatie/laravel-permission.
- Log aktivitas: paket activity log (misalnya spatie/laravel-activitylog).
- Impor dan ekspor Excel: Laravel Excel.
- PDF rapor dan laporan: DomPDF atau Browsershot, dipilih setelah mencoba templat rapor sekolah pilot.
- Antrean notifikasi: Laravel Queue, mulai dari driver database dan pindah ke Redis bila perlu.
- Instalasi: Docker Compose (web server, PHP, MySQL) dengan backup terjadwal.
- Pengujian: Pest atau PHPUnit; nama kasus uji menyebut nomor PBI.

**Dampak absensi wajah dan lokasi (PBI-ABS-07.x dan 08.x):**

- Kamera dan lokasi di browser hanya bisa diakses lewat koneksi HTTPS, jadi server sekolah perlu sertifikat (domain sekolah atau domain lokal yang dipercaya perangkat siswa).
- Pencocokan wajah sebaiknya dijalankan di server, bukan di perangkat siswa, agar tidak bisa dimanipulasi. Ini berarti layanan pengenalan wajah terpisah di Docker Compose dan server sekolah perlu CPU/RAM yang cukup saat jam absen pagi; kebutuhan pastinya perlu diuji.
- Liveness wajib agar foto atau layar tidak lolos.
- Lokasi dari browser mudah dipalsukan dengan aplikasi lokasi palsu dan sulit dideteksi dengan andal. Untuk MVP: lokasi + wajah + liveness + ikat perangkat. Jika kecurangan lokasi terbukti jadi masalah, tambahkan QR dinamis di gerbang, pembatasan jaringan Wi-Fi sekolah, atau aplikasi native.
- Portal tetap berupa PWA; aplikasi native hanya dipertimbangkan jika pencegahan lokasi palsu memang dibutuhkan.
- Foto selfie harian tidak disimpan; yang disimpan hanya template wajah terenkripsi dan metadata verifikasi.

## Asumsi, risiko & ketergantungan

**Asumsi:** sekolah bersedia menjadi mitra pilot; siswa (SMA/SMK/MA), guru, dan orang tua memiliki ponsel berkamera dengan akses internet; tiap sekolah punya tim IT atau admin yang memasang dan memelihara server serta bertanggung jawab atas data; tidak ada data lama yang perlu dimigrasi.

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Guru enggan beralih dari cara lama | Adopsi rendah | Alur absensi sangat singkat, pelatihan singkat, pendampingan awal |
| Data awal berantakan | Onboarding lambat | Impor Excel dengan validasi dan templat siap pakai |
| Format rapor tiap sekolah berbeda | Waktu kustomisasi membengkak | Templat rapor yang dapat diatur sejak MVP |
| Kebocoran data siswa | Reputasi dan hukum | Kontrol akses, log audit, enkripsi, uji keamanan |
| Server sekolah tidak terawat atau mati | Layanan terhenti atau data hilang | Backup otomatis, panduan pemeliharaan, dan dukungan ke tim IT sekolah |
| Lingkup melebar | Rilis terlambat | Tahan fitur di luar MVP; tinjau lingkup tiap sprint |
| Data wajah dan lokasi anak bocor atau disalahgunakan | Pelanggaran privasi dan hukum; hilang kepercayaan orang tua | Persetujuan orang tua, template terenkripsi tanpa foto harian, masa simpan, hak akses ketat, log audit |
| Titip absen atau lokasi dipalsukan | Data kehadiran tidak valid | Liveness, ikat perangkat, tandai lokasi mencurigakan; QR dinamis atau pembatasan Wi-Fi bila perlu |
| Siswa tanpa ponsel, atau kamera/GPS bermasalah | Siswa tidak bisa absen | Absen lewat tablet sekolah (PBI-ABS-09.02) dan koreksi manual wali kelas |
| Wajah gagal dikenali (cahaya buruk, penampilan berubah, siswa kecil) | Banyak absen ditolak dan beban wali kelas naik | Ambang dapat diatur, pendaftaran beberapa pose, daftar ulang berkala, antrean tinjauan (PBI-ABS-09.01) |

## Pertanyaan terbuka

Jawaban atas pertanyaan ini akan mengubah isi dokumen, terutama lingkup dan teknologi.

- [ ] Jenjang dan jenis sekolah target (SD/SMP/SMA/SMK, negeri/swasta, pesantren)? \
Jawban : Untuk semua jenjang harusnya sama saja ya.
- [ ] Untuk satu sekolah tertentu, atau dijual ke banyak sekolah (SaaS)?\
Jawban : Untuk jadi produk yang di install ke sekolah tersebut scr langsung
- [ ] Kurikulum yang dipakai (Kurikulum Merdeka, K13, lainnya) dan format rapor yang berlaku? Jwaban : Kurikulum merdeka sesuai yang skr berlaku

* [ ] Siapa sekolah pilot dan siapa penanggung jawab di sana? Jwban : tim IT atau admin disekolah sesuai dengan atuarn sekolah masing masing
* [ ] Apakah sekolah sudah memakai sistem lain yang harus dimigrasi? Jwban : bisa jadi, tapi anggap saja belum ada yang harus di migrasi
* [ ] Model bisnis: gratis, langganan per siswa, atau lisensi per sekolah? Jwban : Lisensi saja per sekolah
* [ ] Ukuran tim, anggaran, dan preferensi teknologi? Jwban : kalau anggaran sy belum tau harus dianggarkan berapa tapi untuk teknologi mungkin bisa gunakan backend php laravel, frontend nuxt/next/react (coba beri saran dlu), database mysql
* [ ] Apakah mode offline benar-benar dibutuhkan di sekolah target? Jwban : mode nya online tapi di install untuk masing masing sekolah

## Timeline & estimasi sumber daya

Angka berikut hanya asumsi kasar untuk tim kecil (sekitar 4–5 orang: product, desain, 2 engineer, QA paruh waktu) dan harus diperbarui setelah tim dan anggaran jelas.

| Tahap | Isi | Estimasi kasar |
| --- | --- | --- |
| Discovery | Wawancara 3–5 sekolah, finalisasi PRD | 3–4 minggu |
| Desain | Alur, prototipe, uji dengan guru dan orang tua | 3–4 minggu |
| Pengembangan MVP | Data induk, absensi, nilai/rapor, portal orang tua | 10–12 minggu |
| Pilot | Dipasang di 1–2 sekolah oleh tim IT sekolah, perbaikan berdasarkan masukan | 4–6 minggu |
| Tahap 2 | Keuangan, PPDB, notifikasi WhatsApp | menyusul |
