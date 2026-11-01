---
title: SIAP — Wireframe, mock-up, dan prototype
date: 2026-10-30
status: Tersimpan di Figma
tags: [siap, desain, prototype]
---

# SIAP — Rancangan antarmuka

Struktur terkini: [[Struktur Proyek]]. Dokumen ini adalah catatan second brain; seluruh berkas kode/desain yang disebut di bawah berada di root repository, satu tingkat di atas vault, tanpa folder `SIAP` atau `SIAP Design`.

Acuan pengumpulan lomba: [[Ketentuan First Draft Submission MIA 2026]]. Pengumuman meminta repository publik dengan README serta PDF maksimal 10 halaman/10 MB, termasuk screenshot landing page dan minimal satu halaman lain yang sudah dikerjakan. Hasil desain perlu disertai progres implementasi yang dijelaskan secara akurat.

## Sumber dan batas pekerjaan

Sumber: PRD SIAP v1.0, 30 Oktober 2026, dokumen pengguna. Target: https://www.figma.com/design/I6y3NdiGXwkWVwcahYevbo/SIAP

Desain mengikuti pelaporan dugaan penyimpangan secara anonim, bukan pelaporan kerusakan fasilitas. Seluruh nama unit, angka, tiket, bukti, dan percakapan merupakan data contoh. Tidak menerima laporan nyata.

Koneksi Figma sudah tersedia pada tindak lanjut pengguna. Wireframe, mock-up, dan koneksi prototype telah ditambahkan ke file SIAP pada Page 1 (0:1). Hasil terdiri dari 28 layar dalam empat versi: wireframe desktop, wireframe mobile, mock-up desktop, dan mock-up mobile, total 112 frame. Tidak membuat page tambahan. Library Simple Design System digunakan untuk Button dan Input Field pada mock-up; Inter tersedia dan dipakai. Rancangan memanfaatkan lapisan native yang dapat diedit.

## Arah visual yang diusulkan

Warna utama biru tua, aksen teal, permukaan putih, latar abu kebiruan. Tipografi Inter diusulkan karena PRD belum menetapkan font. Tidak menggunakan lambang pemerintah atau klaim layanan resmi. Banner prototipe/data contoh selalu terlihat. Status memakai teks; warna hanya sebagai pendukung.

Wireframe memakai struktur konten yang sama dengan mock-up, dalam abu-abu. Mock-up menggunakan layout desktop 1440 px dan contoh mobile 390 px. Semua tombol navigasi dihubungkan untuk walkthrough. Input Figma adalah simulasi; CAPTCHA, pembersihan metadata, autentikasi, enkripsi, unggah, salin, dan unduh sungguhan tidak dijalankan oleh prototype.

## Alur dan cakupan

1. Beranda → informasi kejadian → bukti → tinjau → tiket dan PIN.
2. Cek status → tiket dan linimasa → balas permintaan bukti → konfirmasi terkirim.
3. Login admin → antrean → detail → verifikasi/permintaan pelengkapan/penolakan/penerusan/tindak lanjut/penyelesaian.
4. Dashboard publik hanya memuat agregat; tidak ada judul, kronologi, bukti, atau identitas.
5. Super Admin: audit log dan master data. Halaman ini contoh tampilan, bukan kontrol akses nyata.

## Keputusan desain

- Anonim sebagai satu-satunya jalur aktif pada rancangan awal. Mode terverifikasi P2 ditunda, sesuai pertanyaan terbuka PRD.
- Formulir tiga langkah, label persisten, penanda wajib, opsi tanggal perkiraan untuk ditinjau tim.
- Batas unggah usulan: JPG/PNG/PDF, maksimal 5 berkas, masing-masing 10 MB. Perlu keputusan tim sebelum implementasi.
- PIN dan tiket ditampilkan pada halaman sukses dengan peringatan penyimpanan dan tombol simulasi. Akses ulang tidak menampilkan PIN asli.
- Pesan dua arah dimasukkan untuk memenuhi kriteria demo PRD.
- Alasan wajib untuk penolakan dan catatan wajib untuk semua transisi status. Ringkasan hasil wajib sebelum selesai.
- Perlu Dilengkapi adalah cabang permintaan informasi; setelah pelapor menjawab, status tetap menunggu pemeriksaan admin. Sistem tidak otomatis melompat ke Diverifikasi.
- Bukti penyelesaian dan ringkasan hasil dapat dibaca pelapor. Fitur membuka kembali tiket tidak ditambahkan karena belum ada pada PRD.
- Gagal cek tiket memakai pesan generik agar tidak mengungkap keberadaan tiket.
- Nomor tiket dan PIN demo tidak digunakan sebagai kredensial produksi.

## Keterlacakan PRD

| Kebutuhan | Layar |
| --- | --- |
| F-01–F-06 | lapor, bukti, tinjau, terkirim |
| F-09–F-12 | cek, tiket, balas, balas-terkirim, cek-gagal |
| F-13–F-17 | login, admin, detail, verifikasi, lengkapi, tolak, teruskan, tindakan, selesai |
| F-18 | audit |
| F-19 | master (ringkasan; CRUD belum dirinci) |
| F-20–F-23 | transparansi |
| F-07–F-08 | Ditunda: identitas terverifikasi dan peta |

## Pertanyaan terbuka

Studi kasus, unit penerima, retensi data, aturan PIN hilang, batas unggah final, dan jangka waktu tanggapan belum diputuskan. Tidak ada janji tenggat resmi. Mekanisme IP hash dan klaim anonimitas memerlukan verifikasi teknis saat implementasi; mock-up tidak menjamin keamanan sistem.

## Cara meninjau hasil lokal

Buka `preview.html` untuk eksplorasi lokal awal. Hasil Figma final pada tahap ini memakai `figma-batch.js` dengan data `screens.json`, setelah discovery library. `figma-payload.js` adalah skrip persiapan lama dan bukan skrip yang dijalankan; jangan menjalankannya ulang karena akan membuat duplikat. Frame Figma memiliki ukuran presentasi tetap 1440 × 1000 dan 390 × 844 dengan scroll vertikal untuk konten panjang. Hasil lokal dan Figma tidak identik secara visual; Figma adalah acuan review desain terkini.

## Validasi yang masih diperlukan

- Lakukan review visual semua layar bersama tim; master data masih berupa ringkasan dan CRUD belum dirinci.
- Uji interaksi klik dan scroll secara manual dalam mode Present, termasuk pesan dan seluruh cabang keputusan admin.
- Uji tugas mengirim laporan, menyimpan tiket, cek status, melengkapi bukti, dan meninjau admin bersama pengguna.

## Hasil pemeriksaan lokal

28 definisi layar dan seluruh tujuan navigasi lolos pemeriksaan. Skrip persiapan lama lolos pemeriksaan sintaks Node.js, tetapi tidak digunakan untuk hasil Figma terkini. Pengujian Edge headless membuka seluruh 28 rute tanpa error JavaScript, memeriksa toggle wireframe dan tidak menemukan overflow horizontal pada viewport 390 px setelah perbaikan toolbar. Screenshot beranda desktop dan formulir mobile telah ditinjau. Pemeriksaan lokal ini tidak menggantikan validasi visual seluruh layar; pemeriksaan Figma dicatat di bawah.

## Hasil pemeriksaan Figma

Pemeriksaan akhir menemukan 112 frame, 720 koneksi navigasi, tidak ada tujuan koneksi invalid, dan tidak ada frame anak terlihat yang melampaui batas kanan layar dalam pemeriksaan geometri. Ada empat titik awal prototype. Screenshot wireframe beranda, mock-up beranda, formulir mobile, antrean admin, dashboard transparansi, dan tiket mobile sudah ditinjau. Ukuran auto-layout horizontal dan navigasi ke frame sendiri diperbaiki selama pembuatan. Ini bukan pengujian menyeluruh perilaku Present atau usability.

Figma memakai data contoh dan walkthrough berpola skenario, bukan input data aktual. Login, CAPTCHA, salin, unggah, hashing, penghapusan metadata, dan kontrol peran belum berfungsi sebagai sistem produksi. Navigasi ke layar Super Admin pada skenario demo tidak merepresentasikan otorisasi backend.

## Link hasil

- [Wireframe desktop](https://www.figma.com/design/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=8-4668)
- [Mock-up desktop](https://www.figma.com/design/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-3)
- [Prototype desktop](https://www.figma.com/proto/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-3&starting-point-node-id=9%3A3)
- [Prototype mobile](https://www.figma.com/proto/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-2296&starting-point-node-id=9%3A2296)
