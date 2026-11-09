import { Page, Card, ActionsRow, CtaLink } from '../components/Page'

const CARDS: [string, string][] = [
  ['Identitas tidak diminta', 'Mode anonim tidak meminta nama, email, atau nomor telepon.'],
  ['Tindak lanjut terlihat', 'Lihat perkembangan dan jawaban admin melalui tiket Anda.'],
  [
    'Transparansi bersama',
    'Publik dapat melihat statistik penanganan tanpa membuka isi aduan.',
  ],
]

export function Home() {
  return (
    <Page
      home
      eyebrow="RUANG AMAN UNTUK BERSUARA"
      title="Lapor aman, pantau sampai tuntas."
      lead="Sampaikan dugaan penyimpangan tanpa mencantumkan identitas. Ikuti perkembangannya melalui tiket pribadi."
    >
      <div className="cards">
        {CARDS.map(([t, body]) => (
          <Card key={t} title={t}>
            <p>{body}</p>
          </Card>
        ))}
      </div>
      <ActionsRow>
        <CtaLink to="/lapor">Buat laporan anonim</CtaLink>
        <CtaLink to="/cek">Cek status laporan</CtaLink>
        <CtaLink to="/transparansi">Lihat transparansi</CtaLink>
        <CtaLink to="/panduan">Panduan &amp; privasi</CtaLink>
      </ActionsRow>
    </Page>
  )
}
