---
date: 2026-11-01
team: LarpHackathonPertama
stage: First Draft Submission
---

# SIAP — Paket first draft

## Hasil

- Website lokal berada pada `website/`: Beranda, Buat Laporan, Cek Status, Transparansi, dan Panduan & Privasi.
- README berada pada [[README]] di root vault, agar seluruh Markdown tetap tersimpan di Obsidian.
- PDF: `submission/WIA_FSDMIA2026_LarpHackathonPertama.pdf`, 8 halaman, 272.731 byte.
- PowerPoint editable: `submission/WIA_FSDMIA2026_LarpHackathonPertama.pptx`, 8 slide, 244.134 byte.
- Screenshot asli halaman yang berjalan berada pada `evidence/`. Cuplikan desain awal diberi label berbeda dari screenshot implementasi.
- Repository tujuan: https://github.com/sagara-ds/WIA, terverifikasi publik melalui API GitHub.

## Yang sudah diuji

- Instalasi npm tanpa dependensi pihak ketiga berhasil secara offline.
- Empat pengujian Node lulus: validasi data, tanggal, bukti, kedaluwarsa, dan pembatasan atribut penyimpanan.
- Browser: validasi formulir/bukti, persetujuan, pembuatan tiket dan hash PIN, akses dengan PIN salah/benar, serta hapus sesi.
- Lima halaman dibuka tanpa error JavaScript. Tidak ada POST formulir selama pengujian.
- Tidak ditemukan overflow horizontal pada viewport 375, 768, dan 1440 px. Menu mobile berhasil dibuka.
- PDF diperiksa jumlah halaman, ukuran, konten wajib, kecukupan ruang teks, dan visual seluruh halaman setelah render Poppler.
- PowerPoint diperiksa struktur ZIP, geometri, font Arial, jumlah slide, impor melalui Artifact Tool, dan preview seluruh slide. Receipt validator disimpan pada `.build/pptx-validation.json` dan tidak diunggah.

## Batasan

Ini first draft yang memakai data contoh. Penyimpanan hanya sessionStorage pada tab browser yang sama selama 30 menit. Berkas tidak diunggah; hanya metadata berkas contoh disimpan di sesi. Hash PIN pada browser bukan kontrol autentikasi server atau jaminan anonimitas produksi.

Admin, audit log permanen, pesan dua arah, pembersihan metadata, database, CAPTCHA, pembatasan percobaan server, dan integrasi instansi belum diimplementasikan. Studi kasus dan mitra pelaksana masih perlu diputuskan.

## Langkah tim

Periksa isi PDF dan nama tim, lalu kumpulkan tautan repo publik serta PDF melalui portal resmi MIA 2026. Jam penutupan tidak diketahui dari gambar pengumuman. Belum ada pengumpulan atau bukti penerimaan dari panitia.
