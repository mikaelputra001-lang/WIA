# SIAP — Sistem Informasi Aduan Publik

SIAP adalah prototype website pelaporan dugaan penyimpangan yang membantu warga menyusun laporan tanpa mengisi identitas dan melihat tindak lanjut melalui tiket. First draft ini memakai data contoh dan alur lokal di browser, tanpa terhubung ke instansi pemerintah.

**Tim:** LarpHackathonPertama  
**Lomba:** MIA 2026 — Civic Reporting & Accountability  
**Tahap:** First Draft Submission, 1 November 2026

## Tech stack

- HTML5, CSS responsif, dan JavaScript ES Modules.
- Node.js 18+ dengan modul bawaan `node:http` sebagai server statis lokal.
- Web Crypto API untuk demonstrasi hash PIN, dan sessionStorage untuk data demo selama maksimal 30 menit pada tab yang sama.
- Tidak memerlukan framework, database, API key, atau dependensi npm pihak ketiga untuk menjalankan website.

## Cara menjalankan

```bash
git clone https://github.com/sagara-ds/WIA.git
cd WIA
npm install
npm run dev
```

Buka **http://127.0.0.1:4173**. `npm install` tidak memasang paket pihak ketiga karena website ini tidak memiliki dependensi npm. Jangan membuka HTML melalui `file://`; modul JavaScript dan penyimpanan demo memerlukan origin website.

Untuk menjalankan pemeriksaan logika:

```bash
npm test
```

Jika port 4173 sedang digunakan, atur variabel lingkungan `PORT` sesuai shell lalu jalankan kembali. Server hanya mendengarkan loopback secara bawaan.

## Progres yang sudah dikerjakan

| Bagian | Kondisi first draft |
| --- | --- |
| Landing page | Implementasi responsif dengan navigasi, penjelasan produk, dan CTA |
| Buat Laporan | Form tiga langkah, validasi isian, pilihan bukti contoh, tinjau, dan persetujuan |
| Validasi bukti | Tipe/ekstensi, ukuran maksimal 10 MB per berkas, maksimal 5 berkas; bukan pemindaian keamanan isi |
| Tiket dan PIN | Dibuat di browser; salin dan unduh akses tersedia |
| Cek Status | Membuka laporan demo pada tab yang sama dengan kode tiket dan PIN |
| Transparansi | Grafik dan statistik agregat statis, jelas diberi label data contoh |
| Panduan & privasi | Batasan demo, cara memakai, dan penghapusan data sesi |
| Wireframe dan mock-up | 28 layar dalam versi desktop/mobile, wireframe/mock-up di Figma |
| Backend, admin, audit log, pesan dua arah | Belum diimplementasikan; masih rancangan |

## Cara mencoba alur utama

1. Buka **Buat Laporan**, lalu tekan **Isi contoh**.
2. Lanjut ke bukti dan pilih minimal satu JPG, PNG, atau PDF contoh. Jangan memakai dokumen pribadi.
3. Tinjau, setujui penggunaan data contoh, lalu kirim.
4. Simpan kode tiket dan PIN. Buka **Cek Status** di tab yang sama dan masukkan keduanya.
5. Setelah selesai, hapus data demo melalui **Panduan & privasi**.

Data di sessionStorage tidak disinkronkan ke perangkat atau tab lain. Akses kedaluwarsa setelah 30 menit dan dapat hilang saat tab ditutup. Nama/ukuran/jenis berkas disimpan untuk demo; isi berkas tidak diunggah atau disimpan di server.

## Batasan dan rencana lanjutan

SIAP belum menerima laporan nyata. Hash PIN di browser merupakan demonstrasi, bukan jaminan keamanan atau anonimitas produksi. Belum ada pembersihan metadata, autentikasi admin, enkripsi isi laporan, CAPTCHA, pembatasan percobaan server, database, verifikasi, penerusan unit, audit log permanen, atau pesan dua arah.

Tahap berikutnya: menentukan studi kasus dan mitra pelaksana, membangun backend serta kontrol akses, menambahkan alur admin dan pesan, lalu menguji privasi, aksesibilitas, keamanan, dan kegunaan bersama pengguna.

## Struktur proyek dan materi submission

```text
WIA/                          # Root repository
├── index.html, lapor.html, cek.html, transparansi.html, panduan.html
├── styles.css, app.js, model.js, server.js, model.test.js
├── package.json, package-lock.json
├── preview.html, screens.json, figma-*.js, figma-nodes.json
├── build-deck.mjs, build-pdf.py, build.ps1, verify-*.cjs
├── *.png, *.pdf, *.pptx       # Screenshot dan hasil submission
└── WIA/                      # Vault Obsidian: catatan Markdown saja
    ├── README.md
    ├── Design brief.md
    └── Status First Draft.md
```

Vault `WIA/` hanya digunakan untuk second brain. Kode, sumber desain, hasil submission, dan screenshot berada langsung di root repository; tidak ada folder `SIAP`, `SIAP Design`, atau `website`. Direktori tersembunyi `.build/` hanya berisi hasil pemeriksaan sementara dan diabaikan Git.

## Materi First Draft Submission

- [PDF pengumpulan — 8 halaman](../WIA_FSDMIA2026_LarpHackathonPertama.pdf)
- [PowerPoint yang dapat diedit](../WIA_FSDMIA2026_LarpHackathonPertama.pptx)
- [Screenshot landing page yang berjalan](../01-landing-desktop.png)
- [Screenshot halaman Buat Laporan yang berjalan](../02-lapor-desktop.png)
- [Halaman utama website](../index.html)

PDF memuat konsep, sitemap, wireframe/mock-up, fitur, screenshot implementasi, stack, dan progres. Nama dan batas berkas mengikuti pengumuman first draft. Berkas masih perlu dikumpulkan oleh tim melalui website resmi MIA 2026.

## Desain Figma

- [Mock-up Figma](https://www.figma.com/design/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-3)
- [Prototype desktop](https://www.figma.com/proto/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-3&starting-point-node-id=9%3A3)
- [Prototype mobile](https://www.figma.com/proto/I6y3NdiGXwkWVwcahYevbo/SIAP?node-id=9-2296&starting-point-node-id=9%3A2296)
