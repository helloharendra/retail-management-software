import { MapPin, Plus, Star, Users } from 'lucide-react'
import { Avatar, Badge, PageHeader, Progress, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { stores } from '../data'

export default function Stores() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Stores" subtitle="Manage every outlet from one place." actions={<button onClick={() => openContact('Add New Store / Branch')} className="btn-primary"><Plus className="h-4 w-4" /> Add store</button>} />
      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {stores.map((s) => {
          const pct = Math.round((s.sales / s.target) * 100)
          return (
            <div key={s.id} onClick={() => openContact(`${s.name} store console`)} className="card group cursor-pointer overflow-hidden animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-28 bg-gradient-to-br from-brand-600 via-brand-500 to-orange-400 p-5 text-white">
                <div className="bg-grid absolute inset-0 opacity-40" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-lg font-bold">{s.name}</p>
                    <p className="flex items-center gap-1 text-sm text-white/80"><MapPin className="h-3.5 w-3.5" />{s.city}</p>
                  </div>
                  <Badge tone={s.open ? 'green' : 'slate'}>{s.open ? 'Open' : 'Closed'}</Badge>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><Avatar name={s.manager} size="sm" /><div className="text-sm"><p className="font-semibold text-slate-800">{s.manager}</p><p className="text-xs text-slate-400">Store manager</p></div></div>
                  <div className="flex items-center gap-3 text-sm text-slate-500"><span className="flex items-center gap-1"><Users className="h-4 w-4" />{s.staff}</span><span className="flex items-center gap-1"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{s.rating}</span></div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm"><span className="text-slate-500">Monthly sales</span><span className="font-bold text-slate-900">{inr(s.sales)}</span></div>
                  <Progress value={pct} tone={pct >= 100 ? 'green' : 'brand'} />
                  <p className="mt-1.5 text-xs text-slate-400">{pct}% of {inr(s.target)} target</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
