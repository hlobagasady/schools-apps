# PBI-STATUS

Status pengerjaan tiap PBI. Dihasilkan dari `docs/PRD-MVP.md` (rev 297). Status: `Belum` | `Berjalan` | `Selesai` | `Direvisi` | `Dibatalkan`. Perbarui kolom Status dan Catatan saat mengerjakan; jangan mengubah nomor.

| PBI | Modul | Menu | Fitur | Prioritas | Status | Catatan |
| --- | --- | --- | --- | --- | --- | --- |
| PBI-UMU-01.01 | Umum | Login | Login dengan email atau nomor HP dan kata sandi | Wajib | Belum | |
| PBI-UMU-01.02 | Umum | Login | Lupa dan atur ulang kata sandi lewat tautan email | Wajib | Belum | |
| PBI-UMU-01.03 | Umum | Login | Ganti kata sandi; wajib ganti saat login pertama | Wajib | Belum | |
| PBI-UMU-01.04 | Umum | Login | Pilih peran aktif bila pengguna punya lebih dari satu peran | Sebaiknya | Belum | |
| PBI-UMU-01.05 | Umum | Sesi login | Keluar otomatis bila pengguna tidak aktif dalam waktu tertentu | Wajib | Belum | |
| PBI-UMU-01.06 | Umum | Sesi login | Peringatan sebelum sesi habis dan tombol lanjutkan sesi; setelah habis, login ulang kembali ke halaman semula | Wajib | Belum | |
| PBI-UMU-01.07 | Umum | Sesi login | Masa berlaku sesi maksimum meski pengguna aktif | Sebaiknya | Belum | |
| PBI-UMU-01.08 | Umum | Sesi login | Daftar sesi aktif di profil dan tombol keluar dari semua perangkat | Sebaiknya | Belum | |
| PBI-UMU-01.09 | Umum | Sesi login | Pengaturan sesi: durasi tidak aktif per peran, masa maksimum, dan batas jumlah sesi bersamaan | Wajib | Belum | |
| PBI-UMU-02.01 | Umum | Profil saya | Lihat dan ubah profil (foto, kontak) | Wajib | Belum | |
| PBI-UMU-03.01 | Umum | Pengaturan sekolah | Kelola profil sekolah (nama, NPSN, alamat, logo, kepala sekolah) | Wajib | Belum | |
| PBI-UMU-03.02 | Umum | Pengaturan sekolah | Kelola tahun ajaran dan semester; aktifkan satu | Wajib | Belum | |
| PBI-UMU-03.03 | Umum | Pengaturan sekolah | Kelola hari efektif dan kalender libur | Wajib | Belum | |
| PBI-UMU-03.04 | Umum | Pengaturan sekolah | Atur pengiriman email (server SMTP sekolah) dan uji kirim | Wajib | Belum | |
| PBI-UMU-04.01 | Umum | Pengguna & peran | Tambah, ubah, dan nonaktifkan pengguna | Wajib | Belum | |
| PBI-UMU-04.02 | Umum | Pengguna & peran | Tetapkan satu atau lebih peran ke pengguna. Revisi: pengaturan izin dipindah ke menu 07 | Wajib | Belum | |
| PBI-UMU-04.03 | Umum | Pengguna & peran | Reset kata sandi oleh Admin | Wajib | Belum | |
| PBI-UMU-04.04 | Umum | Pengguna & peran | Impor pengguna dari Excel dan kirim undangan | Sebaiknya | Belum | |
| PBI-UMU-05.01 | Umum | Log aktivitas | Catat perubahan nilai, absensi, data siswa, kunci dan buka kunci rapor | Wajib | Belum | |
| PBI-UMU-05.02 | Umum | Log aktivitas | Lihat dan filter log (pengguna, tanggal, modul) | Wajib | Belum | |
| PBI-UMU-06.01 | Umum | Pemeliharaan | Backup database terjadwal harian dan unduh backup manual | Wajib | Belum | |
| PBI-UMU-06.02 | Umum | Pemeliharaan | Halaman informasi versi aplikasi dan status sistem | Sebaiknya | Belum | |
| PBI-UMU-06.03 | Umum | Pemeliharaan | Validasi lisensi sekolah (kunci lisensi, masa berlaku, pengingat sebelum habis) | Sebaiknya | Belum | |
| PBI-UMU-07.01 | Umum | Hak akses (RBAC) | Daftar peran beserta jumlah pengguna; peran bawaan: Admin, Kepala sekolah, Guru, Wali kelas, Orang tua, Siswa | Wajib | Belum | |
| PBI-UMU-07.02 | Umum | Hak akses (RBAC) | Buat, ubah, dan nonaktifkan peran kustom (misalnya Operator TU, Guru BK, Pembina ekskul) | Wajib | Belum | |
| PBI-UMU-07.03 | Umum | Hak akses (RBAC) | Matriks izin per peran: centang aksi per menu (lihat, tambah, ubah, hapus, ekspor, setujui, kunci) | Wajib | Belum | |
| PBI-UMU-07.04 | Umum | Hak akses (RBAC) | Izin bawaan tiap peran dan tombol "kembalikan ke bawaan" | Wajib | Belum | |
| PBI-UMU-07.05 | Umum | Hak akses (RBAC) | Cakupan data per peran: seluruh sekolah, kelas yang diampu, kelas yang diwalikan, anak sendiri, atau diri sendiri | Wajib | Belum | |
| PBI-UMU-07.06 | Umum | Hak akses (RBAC) | Tandai izin sensitif (buka kunci nilai, buka kembali tahun ajaran, hapus data wajah, lihat log, kelola hak akses) | Wajib | Belum | |
| PBI-UMU-07.07 | Umum | Hak akses (RBAC) | Pengaman Admin: minimal satu Admin aktif; Admin terakhir tidak dapat dihapus atau diturunkan perannya | Wajib | Belum | |
| PBI-UMU-07.08 | Umum | Hak akses (RBAC) | Uji izin: lihat menu dan cakupan data yang dapat diakses seorang pengguna | Sebaiknya | Belum | |
| PBI-UMU-08.01 | Umum | Setup & beranda | Wizard setup saat instalasi pertama: buat Admin pertama, profil sekolah, tahun ajaran, hari efektif, uji email | Wajib | Belum | |
| PBI-UMU-08.02 | Umum | Setup & beranda | Menu dan tombol menyesuaikan izin pengguna | Wajib | Belum | |
| PBI-UMU-08.03 | Umum | Setup & beranda | Beranda per peran dengan tugas tertunda (Admin: data belum lengkap; Guru: nilai belum diisi; Wali kelas: antrean izin dan absen bermasalah) | Sebaiknya | Belum | |
| PBI-UMU-09.01 | Umum | Panduan | Halaman panduan penggunaan aplikasi, dikelompokkan per peran dan per modul | Wajib | Belum | |
| PBI-UMU-09.02 | Umum | Panduan | Isi panduan langkah demi langkah per fitur dengan tangkapan layar, termasuk panduan absen wajah dan lokasi untuk siswa | Wajib | Belum | |
| PBI-UMU-09.03 | Umum | Panduan | Pencarian panduan dan daftar isi | Sebaiknya | Belum | |
| PBI-UMU-09.04 | Umum | Panduan | Tombol bantuan di tiap halaman yang membuka panduan fitur terkait | Sebaiknya | Belum | |
| PBI-UMU-09.05 | Umum | Panduan | Kelola panduan khusus sekolah dan kontak bantuan (penanggung jawab IT sekolah) | Sebaiknya | Belum | |
| PBI-DIN-01.01 | Data induk | Siswa | Daftar siswa dengan pencarian, filter kelas dan status, urutan, paginasi | Wajib | Belum | |
| PBI-DIN-01.02 | Data induk | Siswa | Tambah dan ubah siswa (identitas, NISN, NIS, tempat dan tanggal lahir, jenis kelamin, agama, alamat, foto) | Wajib | Belum | |
| PBI-DIN-01.03 | Data induk | Siswa | Data orang tua/wali dan kontak darurat | Wajib | Belum | |
| PBI-DIN-01.04 | Data induk | Siswa | Ubah status siswa (aktif, pindah, lulus, keluar) dengan tanggal dan alasan | Wajib | Belum | |
| PBI-DIN-01.05 | Data induk | Siswa | Hubungkan siswa ke akun orang tua | Wajib | Belum | |
| PBI-DIN-01.06 | Data induk | Siswa | Detail siswa dengan riwayat kelas | Sebaiknya | Belum | |
| PBI-DIN-01.07 | Data induk | Siswa | Buat akun login siswa dari data siswa (NISN sebagai nama pengguna), termasuk massal | Wajib | Belum | |
| PBI-DIN-02.01 | Data induk | Guru & staf | Daftar, tambah, dan ubah guru/staf (NIP/NUPTK, kontak, status) | Wajib | Belum | |
| PBI-DIN-02.02 | Data induk | Guru & staf | Buat akun login dari data guru | Wajib | Belum | |
| PBI-DIN-03.01 | Data induk | Kelas | Buat kelas per tahun ajaran (tingkat, nama, fase) | Wajib | Belum | |
| PBI-DIN-03.02 | Data induk | Kelas | Tetapkan wali kelas | Wajib | Belum | |
| PBI-DIN-03.03 | Data induk | Kelas | Kelola anggota kelas; pindahkan siswa, termasuk massal | Wajib | Belum | |
| PBI-DIN-03.04 | Data induk | Kelas | Kenaikan kelas dan kelulusan massal | Sebaiknya | Belum | |
| PBI-DIN-04.01 | Data induk | Mata pelajaran | Kelola mata pelajaran (kode, nama, kelompok, wajib/pilihan) | Wajib | Belum | |
| PBI-DIN-04.02 | Data induk | Mata pelajaran | Kelola program keahlian dan konsentrasi (SMK) serta pilihan mata pelajaran peserta didik (SMA/MA) | Sebaiknya | Belum | |
| PBI-DIN-05.01 | Data induk | Penugasan mengajar | Tetapkan guru, mata pelajaran, dan kelas | Wajib | Belum | |
| PBI-DIN-06.01 | Data induk | Jadwal pelajaran | Atur slot jam pelajaran | Sebaiknya | Belum | |
| PBI-DIN-06.02 | Data induk | Jadwal pelajaran | Isi jadwal per kelas dengan deteksi bentrok guru dan ruang | Sebaiknya | Belum | |
| PBI-DIN-06.03 | Data induk | Jadwal pelajaran | Tampilan jadwal per kelas dan per guru | Sebaiknya | Belum | |
| PBI-DIN-07.01 | Data induk | Impor massal | Unduh templat Excel (siswa, guru, kelas, penugasan) | Wajib | Belum | |
| PBI-DIN-07.02 | Data induk | Impor massal | Unggah file, pratinjau, dan validasi seluruh baris sebelum disimpan | Wajib | Belum | |
| PBI-DIN-07.03 | Data induk | Impor massal | Laporan baris bermasalah dan ekspor data ke Excel | Wajib | Belum | |
| PBI-DIN-08.01 | Data induk | Arsip tahun ajaran | Tutup tahun ajaran: seluruh data tahun itu (kelas, absensi, nilai, rapor) menjadi hanya-baca | Wajib | Belum | |
| PBI-DIN-08.02 | Data induk | Arsip tahun ajaran | Penegakan hanya-baca di server: semua tambah, ubah, dan hapus pada tahun ajaran tertutup ditolak | Wajib | Belum | |
| PBI-DIN-08.03 | Data induk | Arsip tahun ajaran | Lihat arsip per tahun ajaran: kelas, absensi, nilai, rapor, dan legger; unduh rapor lama | Wajib | Belum | |
| PBI-DIN-08.04 | Data induk | Arsip tahun ajaran | Buka kembali tahun ajaran tertutup untuk koreksi darurat | Sebaiknya | Belum | |
| PBI-ABS-01.01 | Absensi | Papan & koreksi (wali kelas) | Papan kehadiran hari ini: pantau status semua siswa kelas secara langsung. Revisi: sebelumnya pengisian absensi oleh wali kelas | Wajib | Belum | |
| PBI-ABS-01.02 | Absensi | Papan & koreksi (wali kelas) | Koreksi status per siswa: Hadir, Izin, Sakit, Alfa. Revisi: menjadi koreksi manual | Wajib | Belum | |
| PBI-ABS-01.03 | Absensi | Papan & koreksi (wali kelas) | Catatan per siswa. Revisi: tombol "semua hadir" dibatalkan | Sebaiknya | Belum | |
| PBI-ABS-01.04 | Absensi | Papan & koreksi (wali kelas) | Batas waktu koreksi | Wajib | Belum | |
| PBI-ABS-01.05 | Absensi | Papan & koreksi (wali kelas) | Wali pengganti bila wali kelas berhalangan. Revisi: untuk koreksi dan pemantauan | Sebaiknya | Belum | |
| PBI-ABS-02.01 | Absensi | Pengajuan izin | Form pengajuan (jenis izin/sakit, tanggal mulai dan selesai, alasan, lampiran foto) | Wajib | Belum | |
| PBI-ABS-02.02 | Absensi | Pengajuan izin | Riwayat dan status pengajuan (menunggu, disetujui, ditolak); batalkan sebelum diproses | Wajib | Belum | |
| PBI-ABS-02.03 | Absensi | Pengajuan izin | Catat izin atas nama orang tua (misalnya lewat telepon) | Sebaiknya | Belum | |
| PBI-ABS-03.01 | Absensi | Persetujuan izin | Daftar pengajuan menunggu beserta detail dan lampiran | Wajib | Belum | |
| PBI-ABS-03.02 | Absensi | Persetujuan izin | Setujui atau tolak dengan alasan; jika disetujui, status absensi pada rentang tanggal terisi otomatis | Wajib | Belum | |
| PBI-ABS-04.01 | Absensi | Rekap | Rekap per kelas (harian, bulanan, semester) | Wajib | Belum | |
| PBI-ABS-04.02 | Absensi | Rekap | Rekap per siswa dengan persentase kehadiran | Wajib | Belum | |
| PBI-ABS-04.03 | Absensi | Rekap | Ekspor rekap ke Excel dan PDF | Wajib | Belum | |
| PBI-ABS-05.01 | Absensi | Peringatan | Notifikasi ke orang tua saat anak berstatus Alfa atau Sakit, atau belum absen sampai jam batas. Revisi: pemicu mengikuti penutupan absensi | Wajib | Belum | |
| PBI-ABS-05.02 | Absensi | Peringatan | Peringatan kehadiran rendah ke wali kelas | Sebaiknya | Belum | |
| PBI-ABS-06.01 | Absensi | Pengaturan absensi | Atur jam masuk, toleransi terlambat, jam batas penutupan, batas waktu koreksi, ambang peringatan | Wajib | Belum | |
| PBI-ABS-06.02 | Absensi | Pengaturan absensi | Atur titik lokasi sekolah (koordinat), radius, dan akurasi GPS minimal | Wajib | Belum | |
| PBI-ABS-06.03 | Absensi | Pengaturan absensi | Atur verifikasi wajah: ambang kemiripan, batas percobaan, liveness aktif | Wajib | Belum | |
| PBI-ABS-07.01 | Absensi | Absen mandiri siswa | Halaman absen hari ini: status saat ini dan tombol absen | Wajib | Belum | |
| PBI-ABS-07.02 | Absensi | Absen mandiri siswa | Verifikasi lokasi: ambil koordinat perangkat dan hitung jarak ke titik sekolah | Wajib | Belum | |
| PBI-ABS-07.03 | Absensi | Absen mandiri siswa | Verifikasi wajah: pindai wajah lewat kamera depan dan cocokkan dengan data wajah terdaftar | Wajib | Belum | |
| PBI-ABS-07.04 | Absensi | Absen mandiri siswa | Deteksi keaslian wajah (liveness) agar foto atau layar tidak bisa dipakai | Wajib | Belum | |
| PBI-ABS-07.05 | Absensi | Absen mandiri siswa | Hasil absen: waktu tercatat; status Hadir, atau Terlambat bila lewat jam masuk plus toleransi | Wajib | Belum | |
| PBI-ABS-07.06 | Absensi | Absen mandiri siswa | Simpan bukti verifikasi: waktu, koordinat, skor kecocokan, jenis perangkat | Wajib | Belum | |
| PBI-ABS-07.07 | Absensi | Absen mandiri siswa | Absen pulang | Sebaiknya | Belum | |
| PBI-ABS-07.08 | Absensi | Absen mandiri siswa | Tandai absen dengan indikasi lokasi palsu untuk ditinjau wali kelas | Sebaiknya | Belum | |
| PBI-ABS-07.09 | Absensi | Absen mandiri siswa | Penutupan absensi otomatis: siswa tanpa absen dan tanpa izin ditandai Alfa pada jam batas | Wajib | Belum | |
| PBI-ABS-08.01 | Absensi | Pendaftaran wajah | Catat persetujuan orang tua atas pengambilan data wajah dan lokasi | Wajib | Belum | |
| PBI-ABS-08.02 | Absensi | Pendaftaran wajah | Daftarkan wajah siswa dengan beberapa pose di sekolah, diawasi petugas | Wajib | Belum | |
| PBI-ABS-08.03 | Absensi | Pendaftaran wajah | Perbarui dan hapus data wajah | Wajib | Belum | |
| PBI-ABS-08.04 | Absensi | Pendaftaran wajah | Ikat siswa ke perangkat terdaftar; ganti perangkat perlu persetujuan wali kelas | Sebaiknya | Belum | |
| PBI-ABS-09.01 | Absensi | Absen bermasalah | Antrean absen gagal berulang (wajah atau lokasi) untuk ditinjau wali kelas | Sebaiknya | Belum | |
| PBI-ABS-09.02 | Absensi | Absen bermasalah | Absen lewat tablet sekolah bagi siswa yang ponselnya rusak atau ketinggalan: masukkan NISN, lalu pindai wajah | Wajib | Belum | |
| PBI-ABS-09.03 | Absensi | Absen bermasalah | Kelola tablet sekolah: daftarkan perangkat, tetapkan lokasi, aktifkan atau nonaktifkan, mode kios terkunci hanya untuk halaman absen | Wajib | Belum | |
| PBI-NIL-01.01 | Nilai & e-rapor | Perangkat penilaian | Kelola Capaian Pembelajaran (CP) per mata pelajaran dan fase | Wajib | Belum | |
| PBI-NIL-01.02 | Nilai & e-rapor | Perangkat penilaian | Kelola Tujuan Pembelajaran (TP) per mapel, kelas, dan semester | Wajib | Belum | |
| PBI-NIL-01.03 | Nilai & e-rapor | Perangkat penilaian | Kelola Kriteria Ketercapaian TP (KKTP) per TP | Wajib | Belum | |
| PBI-NIL-02.01 | Nilai & e-rapor | Komponen nilai akhir | Atur jenis asesmen sumatif per mapel (sumatif lingkup materi, sumatif akhir semester/tahun) | Wajib | Belum | |
| PBI-NIL-02.02 | Nilai & e-rapor | Komponen nilai akhir | Atur bobot nilai akhir per mapel | Wajib | Belum | |
| PBI-NIL-03.01 | Nilai & e-rapor | Input asesmen | Input nilai sumatif lingkup materi per siswa, dikaitkan ke TP | Wajib | Belum | |
| PBI-NIL-03.02 | Nilai & e-rapor | Input asesmen | Input nilai sumatif akhir semester/tahun | Wajib | Belum | |
| PBI-NIL-03.03 | Nilai & e-rapor | Input asesmen | Simpan sebagai draf sebelum final | Wajib | Belum | |
| PBI-NIL-03.04 | Nilai & e-rapor | Input asesmen | Catatan asesmen formatif per siswa (opsional) | Sebaiknya | Belum | |
| PBI-NIL-03.05 | Nilai & e-rapor | Input asesmen | Impor dan ekspor nilai lewat Excel per kelas dan mapel | Sebaiknya | Belum | |
| PBI-NIL-04.01 | Nilai & e-rapor | Nilai akhir & deskripsi | Hitung nilai akhir otomatis sesuai bobot | Wajib | Belum | |
| PBI-NIL-04.02 | Nilai & e-rapor | Nilai akhir & deskripsi | Tandai TP tercapai atau belum berdasarkan KKTP | Wajib | Belum | |
| PBI-NIL-04.03 | Nilai & e-rapor | Nilai akhir & deskripsi | Susun deskripsi capaian kompetensi otomatis dari TP tercapai dan belum tercapai | Wajib | Belum | |
| PBI-NIL-04.04 | Nilai & e-rapor | Nilai akhir & deskripsi | Catat nilai perbaikan (remedial) | Sebaiknya | Belum | |
| PBI-NIL-05.01 | Nilai & e-rapor | Kunci nilai | Finalisasi dan kunci nilai per mapel dan kelas | Wajib | Belum | |
| PBI-NIL-05.02 | Nilai & e-rapor | Kunci nilai | Buka kunci dengan alasan | Wajib | Belum | |
| PBI-NIL-06.01 | Nilai & e-rapor | Kokurikuler & ekstrakurikuler | Kelola projek kokurikuler (nama, tema, dimensi yang dinilai, kelompok siswa) | Wajib | Belum | |
| PBI-NIL-06.02 | Nilai & e-rapor | Kokurikuler & ekstrakurikuler | Penilaian kokurikuler per siswa (level capaian dan deskripsi) | Wajib | Belum | |
| PBI-NIL-06.03 | Nilai & e-rapor | Kokurikuler & ekstrakurikuler | Kelola ekstrakurikuler dan keikutsertaan siswa | Wajib | Belum | |
| PBI-NIL-06.04 | Nilai & e-rapor | Kokurikuler & ekstrakurikuler | Penilaian ekstrakurikuler (predikat dan deskripsi) | Wajib | Belum | |
| PBI-NIL-06.05 | Nilai & e-rapor | Kokurikuler & ekstrakurikuler | Penilaian Praktik Kerja Lapangan (PKL): tempat, pembimbing, periode, nilai, dan deskripsi | Sebaiknya | Belum | |
| PBI-NIL-07.01 | Nilai & e-rapor | Catatan wali kelas | Catatan wali kelas dan penilaian sikap | Wajib | Belum | |
| PBI-NIL-07.02 | Nilai & e-rapor | Catatan wali kelas | Rekap ketidakhadiran (sakit, izin, alfa) otomatis dari absensi | Wajib | Belum | |
| PBI-NIL-07.03 | Nilai & e-rapor | Catatan wali kelas | Catatan prestasi siswa | Sebaiknya | Belum | |
| PBI-NIL-08.01 | Nilai & e-rapor | Rapor | Pratinjau rapor per siswa | Wajib | Belum | |
| PBI-NIL-08.02 | Nilai & e-rapor | Rapor | Cek kelengkapan sebelum rapor dikunci (nilai, deskripsi, catatan) | Wajib | Belum | |
| PBI-NIL-08.03 | Nilai & e-rapor | Rapor | Status rapor: draf, siap, terkunci, dibagikan | Wajib | Belum | |
| PBI-NIL-08.04 | Nilai & e-rapor | Rapor | Cetak PDF per siswa dan massal per kelas | Wajib | Belum | |
| PBI-NIL-08.05 | Nilai & e-rapor | Rapor | Atur tanggal rapor dan tanda tangan (kepala sekolah, wali kelas) | Wajib | Belum | |
| PBI-NIL-09.01 | Nilai & e-rapor | Templat rapor | Atur kop, logo, dan susunan bagian rapor per jenjang | Wajib | Belum | |
| PBI-NIL-10.01 | Nilai & e-rapor | Legger | Legger nilai per kelas dan ekspor Excel/PDF | Sebaiknya | Belum | |
| PBI-NIL-11.01 | Nilai & e-rapor | Publikasi | Bagikan rapor ke portal orang tua per kelas | Wajib | Belum | |
| PBI-POR-01.01 | Portal & notifikasi | Beranda | Pilih anak bila terhubung ke lebih dari satu | Wajib | Belum | |
| PBI-POR-01.02 | Portal & notifikasi | Beranda | Ringkasan kehadiran hari ini, nilai atau rapor terbaru, dan pengumuman terbaru | Wajib | Belum | |
| PBI-POR-02.01 | Portal & notifikasi | Kehadiran | Kalender kehadiran bulanan | Wajib | Belum | |
| PBI-POR-02.02 | Portal & notifikasi | Kehadiran | Rekap hadir, izin, sakit, alfa per semester | Wajib | Belum | |
| PBI-POR-03.01 | Portal & notifikasi | Izin & sakit | Akses ke form dan riwayat pengajuan izin | Wajib | Belum | |
| PBI-POR-04.01 | Portal & notifikasi | Nilai & rapor | Lihat nilai dan deskripsi capaian per mata pelajaran | Wajib | Belum | |
| PBI-POR-04.02 | Portal & notifikasi | Nilai & rapor | Lihat dan unduh rapor PDF | Wajib | Belum | |
| PBI-POR-04.03 | Portal & notifikasi | Nilai & rapor | Lihat penilaian kokurikuler dan ekstrakurikuler | Sebaiknya | Belum | |
| PBI-POR-05.01 | Portal & notifikasi | Jadwal | Jadwal pelajaran anak per hari | Sebaiknya | Belum | |
| PBI-POR-06.01 | Portal & notifikasi | Pengumuman | Daftar dan detail pengumuman beserta lampiran | Wajib | Belum | |
| PBI-POR-06.02 | Portal & notifikasi | Pengumuman | Tanda sudah dibaca | Sebaiknya | Belum | |
| PBI-POR-07.01 | Portal & notifikasi | Kelola pengumuman | Buat dan ubah pengumuman (judul, isi, lampiran) | Wajib | Belum | |
| PBI-POR-07.02 | Portal & notifikasi | Kelola pengumuman | Pilih target: semua, per kelas, atau per tingkat | Wajib | Belum | |
| PBI-POR-07.03 | Portal & notifikasi | Kelola pengumuman | Jadwal tayang dan pengarsipan | Sebaiknya | Belum | |
| PBI-POR-07.04 | Portal & notifikasi | Kelola pengumuman | Statistik dibaca | Sebaiknya | Belum | |
| PBI-POR-08.01 | Portal & notifikasi | Akun orang tua | Ubah kontak dan kata sandi | Wajib | Belum | |
| PBI-POR-08.02 | Portal & notifikasi | Akun orang tua | Atur preferensi notifikasi | Sebaiknya | Belum | |
| PBI-POR-09.01 | Portal & notifikasi | Notifikasi | Notifikasi dalam aplikasi dan email untuk alfa atau sakit, izin diproses, rapor dibagikan, pengumuman baru | Wajib | Belum | |
| PBI-POR-09.02 | Portal & notifikasi | Notifikasi | Push notification pada portal (PWA) | Sebaiknya | Belum | |
| PBI-POR-09.03 | Portal & notifikasi | Notifikasi | Log pengiriman (terkirim atau gagal) dan kirim ulang | Sebaiknya | Belum | |
| PBI-DSB-01.01 | Dashboard | Ringkasan hari ini | Kehadiran hari ini per kelas dan jumlah izin dan sakit | Sebaiknya | Belum | |
| PBI-DSB-01.02 | Dashboard | Ringkasan hari ini | Daftar kelas yang belum mengisi absensi | Sebaiknya | Belum | |
| PBI-DSB-02.01 | Dashboard | Tren kehadiran | Grafik kehadiran harian dan bulanan dengan filter kelas dan tanggal | Sebaiknya | Belum | |
| PBI-DSB-03.01 | Dashboard | Kelengkapan nilai | Persentase nilai terisi per kelas dan mapel; guru yang belum mengisi | Sebaiknya | Belum | |
| PBI-DSB-04.01 | Dashboard | Progres rapor | Jumlah rapor per status (draf, siap, terkunci, dibagikan) per kelas | Sebaiknya | Belum | |
