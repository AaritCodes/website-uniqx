import { useState } from 'react'

export default function QuoteForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [budget, setBudget] = useState('Under 10k')
  const [service, setService] = useState('SEO')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, budget, service })
    })
    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Get a Quote (demo)</h3>
        <input className="border p-3 rounded" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input className="border p-3 rounded" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input className="border p-3 rounded" placeholder="Phone (WhatsApp preferred)" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <select className="border p-3 rounded" value={budget} onChange={(e)=>setBudget(e.target.value)}>
          <option>Under 10k</option>
          <option>10k - 50k</option>
          <option>50k - 2L</option>
          <option>2L+</option>
        </select>
        <select className="border p-3 rounded" value={service} onChange={(e)=>setService(e.target.value)}>
          <option>SEO</option>
          <option>Website</option>
          <option>SMM</option>
          <option>Full Package</option>
        </select>
        <button className="py-3 rounded bg-uniqYellow font-medium" disabled={loading}>{loading ? 'Generating...' : 'Generate Quote'}</button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h4 className="font-semibold">Fake pricing package for {result.service}</h4>
          <ul className="mt-2">
            {result.packages.map((p,i)=> (
              <li key={i} className="py-2 border-b last:border-b-0">{p.name} — <strong>₹{p.price}</strong> / month</li>
            ))}
          </ul>
          <div className="text-sm text-gray-600 mt-3">This is demo fake pricing used for mockups only. We'll follow up via email.</div>
        </div>
      )}
    </div>
  )
}
