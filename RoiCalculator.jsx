import { useState } from 'react'

export default function RoiCalculator(){
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000)
  const [expectedIncreasePercent, setExpectedIncreasePercent] = useState(20)
  const [cost, setCost] = useState(19999)
  const increase = Math.round(monthlyRevenue * (expectedIncreasePercent/100))
  const newRevenue = monthlyRevenue + increase
  const roi = Math.round(((newRevenue - monthlyRevenue) - cost) / cost * 100)
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <h3 className="text-xl font-semibold">ROI Calculator</h3>
      <p className="text-sm text-gray-600 mt-2">Estimate potential monthly revenue uplift and ROI from our services. Replace inputs with your actual numbers.</p>
      <div className="mt-4 grid gap-3">
        <label className="text-sm">Current monthly revenue (₹)</label>
        <input type="number" value={monthlyRevenue} onChange={(e)=>setMonthlyRevenue(Number(e.target.value)||0)} className="border p-2 rounded" />
        <label className="text-sm">Expected increase (%)</label>
        <input type="number" value={expectedIncreasePercent} onChange={(e)=>setExpectedIncreasePercent(Number(e.target.value)||0)} className="border p-2 rounded" />
        <label className="text-sm">Project monthly cost (₹)</label>
        <input type="number" value={cost} onChange={(e)=>setCost(Number(e.target.value)||0)} className="border p-2 rounded" />
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <div>Estimated monthly revenue increase: <strong>₹{increase.toLocaleString()}</strong></div>
        <div>Projected new monthly revenue: <strong>₹{newRevenue.toLocaleString()}</strong></div>
        <div>Estimated ROI: <strong>{isFinite(roi) ? roi + '%' : '—'}</strong></div>
      </div>
    </div>
  )
}
