import { Crown, Gift, Send } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { customers } from '../data'

const tiers = [
  { name: 'Platinum', count: 412, from: 'from-slate-700 to-slate-900', tone: 'violet' },
  { name: 'Gold', count: 1840, from: 'from-amber-400 to-yellow-600', tone: 'amber' },
  { name: 'Silver', count: 5210, from: 'from-slate-300 to-slate-500', tone: 'slate' },
  { name: 'Bronze', count: 12460, from: 'from-orange-300 to-orange-700', tone: 'red' },
]
const toneOf = Object.fromEntries(tiers.map((t) => [t.name, t.tone]))

export default function Customers() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Customers & loyalty" subtitle="Points, tiers and personalised offers."
        actions={<button onClick={() => openContact('SMS / WhatsApp Campaigns')} className="btn-primary"><Send className="h-4 w-4" /> Send campaign</button>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((t) => (
          <div key={t.name} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${t.from} p-5 text-white shadow-lg animate-fade-up`}>
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-xl" />
            <Crown className="h-6 w-6 opacity-90" />
            <p className="mt-6 text-sm font-medium opacity-80">{t.name} members</p>
            <p className="text-3xl font-extrabold">{t.count.toLocaleString('en-IN')}</p>
          </div>
        ))}
      </div>
      <Card title="Top customers" className="mt-6" bodyClass="">
        <DataTable
          rows={customers}
          columns={[
            { key: 'name', label: 'Customer', render: (r) => <Person name={r.name} sub={r.phone} /> },
            { key: 'tier', label: 'Tier', render: (r) => <Badge tone={toneOf[r.tier]}>{r.tier}</Badge> },
            { key: 'points', label: 'Points', render: (r) => <span className="font-semibold text-slate-800">{r.points.toLocaleString('en-IN')}</span> },
            { key: 'visits', label: 'Visits' },
            { key: 'last', label: 'Last visit' },
            { key: 'spend', label: 'Lifetime spend', align: 'right', render: (r) => <span className="font-semibold text-slate-800">{inr(r.spend)}</span> },
            { key: 'g', label: '', align: 'right', render: (r) => <button onClick={() => openContact('Personalised Rewards')} className="rounded-lg p-2 text-slate-400 hover:bg-brand-50 hover:text-brand-600"><Gift className="h-4 w-4" /></button> },
          ]}
        />
      </Card>
    </>
  )
}
