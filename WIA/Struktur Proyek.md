---
date: 2026-11-01
tags: [proyek, struktur, preferensi]
---

# Struktur proyek SIAP

Ketentuan pemilik proyek: **vault WIA hanya untuk second brain**. Jangan menyimpan kode, screenshot, PDF, PowerPoint, JSON data, atau hasil build di dalam vault.

- Root repository: `C:/Users/septi/WIA`.
- Vault Obsidian: `C:/Users/septi/WIA/WIA`.
- Catatan Markdown disimpan langsung pada vault, tanpa subfolder proyek. `.obsidian` tetap menjadi konfigurasi vault.
- Kode website, skrip desain, skrip pembentukan dokumen, screenshot, PDF, dan PowerPoint disimpan langsung pada root repository.
- Jangan membuat folder pembungkus `SIAP`, `SIAP Design`, `website`, `tools`, `submission`, atau `evidence`.
- `.build/` di luar vault merupakan direktori sementara untuk pemeriksaan, cache, dan salinan artefak terdahulu; diabaikan Git.
- README tetap disimpan di vault. Instruksi menjalankan mengacu pada root repository (`cd WIA` setelah clone).

Pemindahan mempertahankan isi 42 berkas dan diverifikasi dengan SHA-256. File konfigurasi ignore digabungkan menjadi satu `.gitignore` di root. Impor pengujian dan path skrip diperbarui untuk struktur datar.

Catatan terkait: [[README]], [[Design brief]], [[Status First Draft]], [[Ketentuan First Draft Submission MIA 2026]].
