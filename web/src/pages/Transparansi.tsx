import { Page, Card, ActionsRow, CtaLink } from '../components/Page'
import { api } from '../lib/api'

export function Transparansi() {
  const data = api.transparansi()
  return (
    <Page
      eyebrow="DASHBOARD TRANSPARANSI"
      title="Penanganan aduan, terlihat bersama."
      lead={`Periode ${data.period} · Semua angka merupakan data contoh. Diperbarui ${data.updated}.`}
    >
      <div className="stats">
        {data.stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="cards">
        <Card title="Laporan per kategori">
          <p>{data.perKategori}</p>
        </Card>
        <Card title="Tren laporan masuk">
          <p>{data.tren}</p>
        </Card>
        <Card title="Cakupan indikator">
          <p>
            {'Dalam proses: Diterima hingga Ditindaklanjuti, termasuk Perlu Dilengkapi. Ditolak: 18. Ditindaklanjuti atau selesai: 76/128 (59,4%). Rata-rata: dari diterima hingga selesai untuk 64 tiket selesai.'}
          </p>
        </Card>
        <Card title="Privasi publik">
          <p>
            {'Dashboard hanya memuat agregat. Kronologi, lampiran, tiket pribadi, dan pihak terkait tidak ditampilkan.'}
          </p>
        </Card>
      </div>
      <ActionsRow>
        <CtaLink to="/lapor">Buat laporan</CtaLink>
        <CtaLink to="/">Kembali</CtaLink>
      </ActionsRow>
    </Page>
  )
}
