import { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router'
import { Page, Card, ActionsRow, Timeline } from '../components/Page'
import { RequireAdmin } from '../components/RequireAdmin'
import { adminApi } from '../lib/api'
import type { StoredTicket, InternalNote } from '../lib/types'
import { formatTanggal, formatBytes } from '../lib/format'

export function AdminDetail() {
  const navigate = useNavigate()
  const [ticket, setTicket] = useState<StoredTicket | null>(null)
  const [internalNotes, setInternalNotes] = useState<InternalNote[]>([])
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const number = adminApi.getAdminTicketNumber()
    if (!number) {
      setMissing(true)
      return
    }
    void adminApi.detail(number).then((data) => {
      if (!data) {
        setMissing(true)
        return
      }
      setTicket(data.ticket)
      setInternalNotes(data.internalNotes)
    })
  }, [])

  if (missing) return <Navigate to="/petugas/antrean" replace />
  if (!ticket) return null

  const allowed = adminApi.allowedTransitions(ticket.status)

  return (
    <RequireAdmin>
      <Page
        eyebrow={`DETAIL LAPORAN · ${ticket.status.toUpperCase()}`}
        title={ticket.title}
        lead={`${ticket.number} · Anonim · ${formatTanggal(ticket.incidentDate, ticket.incidentDateApprox)}. Tidak ada data identitas yang diminta dalam formulir anonim.`}
      >
        <div className="cards">
          <Card title="Kronologi & bukti">
            <p>
              {formatTanggal(ticket.incidentDate, ticket.incidentDateApprox)} · {ticket.location}
              {'\n'}
              {ticket.chronology}
              {'\n'}
              Pihak terkait: {ticket.involvedParty}
              {ticket.evidence.length > 0
                ? `\n\nLampiran: ${ticket.evidence.map((e) => `${e.name} (${formatBytes(e.size)})`).join(', ')}`
                : '\n\nBukti: tidak ada.'}
            </p>
          </Card>
          <Card title="Riwayat">
            <Timeline entries={ticket.timeline} />
          </Card>
          {ticket.messages.length > 0 ? (
            <Card title="Pesan">
              {ticket.messages.map((m) => (
                <p key={m.id}>
                  <strong>
                    {m.author === 'admin' ? 'Pesan admin' : 'Pelapor'} · {m.at}
                  </strong>
                  {'\n'}
                  {m.body}
                  {m.attachment ? `\nLampiran: ${m.attachment.name} (${formatBytes(m.attachment.size)})` : ''}
                  {'\n'}
                </p>
              ))}
            </Card>
          ) : null}
          {internalNotes.length > 0 ? (
            <Card title="Catatan internal">
              {internalNotes.map((n) => (
                <p key={n.id}>
                  <strong>
                    {n.admin} · {n.at}
                  </strong>
                  {'\n'}
                  {n.body}
                  {'\n'}
                </p>
              ))}
            </Card>
          ) : null}
        </div>

        <ActionsRow>
          {allowed.includes('Diverifikasi') ? (
            <Link to="/petugas/verifikasi">Verifikasi laporan</Link>
          ) : null}
          {allowed.includes('Perlu Dilengkapi') ? (
            <Link to="/petugas/lengkapi">Minta dilengkapi</Link>
          ) : null}
          {allowed.includes('Ditolak') ? <Link to="/petugas/tolak">Tolak dengan alasan</Link> : null}
          {allowed.includes('Diteruskan') ? <Link to="/petugas/teruskan">Lanjut teruskan</Link> : null}
          {allowed.includes('Ditindaklanjuti') ? (
            <Link to="/petugas/tindakan">Catat tindak lanjut</Link>
          ) : null}
          {allowed.includes('Selesai') ? <Link to="/petugas/selesai">Ringkas hasil & selesai</Link> : null}
          <button type="button" onClick={() => navigate('/petugas/antrean')}>
            Kembali ke antrean
          </button>
        </ActionsRow>
      </Page>
    </RequireAdmin>
  )
}
