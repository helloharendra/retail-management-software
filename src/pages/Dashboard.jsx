import { Footprints, IndianRupee, ShoppingCart, Store } from 'lucide-react'
import { Card, Hero, HeroStat, Progress, StatCard, inr } from '../components/ui'
import { DonutChart, TrendChart } from '../components/Charts'
import { categories, stores, weekly } from '../data'

export default function Dashboard() {
  const ranked = [...stores].sort((a, b) => b.sales / b.target - a.sales / a.target)
  return (
    <>
      <Hero
        eyebrow="All stores · This week"
        title="Weekend rush is on — sales up 31% 🛍️"
        subtitle="Live sales, footfall and stock across 6 stores in 6 cities."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Today" value="₹9.2L" /><HeroStat label="Footfall" value="6,840" /></div>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Net sales (MTD)" value="₹85.4L" delta="11.8%" icon={IndianRupee} />
        <StatCard label="Transactions" value="24,190" delta="7.2%" icon={ShoppingCart} tone="sky" />
        <StatCard label="Conversion" value="42%" delta="3.4%" icon={Footprints} tone="emerald" />
        <StatCard label="Active stores" value="6" icon={Store} tone="amber" hint="1 store closing early today" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Sales & footfall" subtitle="Sales in ₹ lakh · footfall in thousands" className="xl:col-span-2">
          <TrendChart data={weekly} series={[{ key: 'sales', name: 'Sales' }, { key: 'footfall', name: 'Footfall' }]} />
        </Card>
        <Card title="Sales by category"><DonutChart data={categories} centerValue="₹85L" centerLabel="This month" /></Card>
      </div>
      <Card title="Store performance vs target" className="mt-6">
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {ranked.map((s) => {
            const pct = Math.round((s.sales / s.target) * 100)
            return (
              <div key={s.id}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800">{s.name} <span className="font-normal text-slate-400">· {s.city}</span></span>
                  <span className="text-slate-500">{inr(s.sales)} · <b className={pct >= 100 ? 'text-emerald-600' : 'text-slate-800'}>{pct}%</b></span>
                </div>
                <Progress value={pct} tone={pct >= 100 ? 'green' : pct > 85 ? 'brand' : 'amber'} />
              </div>
            )
          })}
        </div>
      </Card>
    </>
  )
}
