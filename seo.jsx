import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import RoiCalculator from '../components/RoiCalculator'
import { motion } from 'framer-motion'

export default function SEO(){
  const [open, setOpen] = useState(0)
  const faq = [
    {q: 'What is SEO?', a: 'SEO (Search Engine Optimization) improves your site to rank higher on search engines so you get more organic traffic.'},
    {q: 'How long until results?', a: 'Typical visible results: 3-6 months. Faster for technical fixes and quick content wins.'},
    {q: 'Do you guarantee rankings?', a: 'No ethical provider can guarantee exact positions — we drive measurable traffic & conversions.'}
  ]

  const chartData = [
    {label: 'Organic Traffic', value: 120},
    {label: 'Keyword Growth', value: 85},
    {label: 'CTR Lift', value: 45},
  ]

  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <header className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">SEO Services — Grow Organic Traffic</h1>
            <p className="mt-4 text-gray-600">Technical SEO, content strategy, and growth experiments focused on measurable ROI.</p>
            <div className="mt-6 flex gap-3">
              <a href="#quote" className="px-6 py-3 rounded bg-uniqYellow font-semibold">Get SEO Quote</a>
              <a href="#faq" className="px-6 py-3 rounded border">Read FAQ</a>
            </div>
          </div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold">SEO projection</h3>
            <p className="text-sm text-gray-500">Projection based on typical growth patterns — replace with real data for accuracy.</p>
            <div className="mt-4" style={{height:200}}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={[{month:'Jan', value:50},{month:'Feb', value:70},{month:'Mar', value:95},{month:'Apr', value:120},{month:'May', value:150}]}> 
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#ffd400" strokeWidth={3} dot={{r:4}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </header>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold">Technical SEO</h4>
            <p className="mt-2 text-gray-500">Site speed, crawlability, schema and sitemaps to help search engines index your site properly.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold">Content Strategy</h4>
            <p className="mt-2 text-gray-500">Keyword-driven content plans that match user intent and convert.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h4 className="font-semibold">Link Building</h4>
            <p className="mt-2 text-gray-500">Ethical outreach and partnerships to build authority over time.</p>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h3 className="text-2xl font-semibold">Frequently asked</h3>
          <div className="mt-4 space-y-3">
            {faq.map((f,i)=> (
              <div key={i} className="border rounded">
                <button onClick={()=>setOpen(open===i? -1 : i)} className="w-full text-left p-4 flex justify-between items-center">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-gray-500">{open===i? '-' : '+'}</span>
                </button>
                {open===i && (
                  <div className="p-4 pt-0 text-gray-600">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <RoiCalculator />
        </section>

        <section id="quote" className="mt-12">
          <h3 className="text-2xl font-semibold">Request a tailored SEO plan</h3>
          <p className="text-gray-600 mt-2">We send a concise 1-page plan for your review (demo).</p>
          {/* Reuse quote form */}
          <div className="mt-6">
            <div style={{maxWidth: 700}}>
              <form action="/api/quotes" method="post" className="grid gap-3">
                <input name="name" className="border p-3 rounded" placeholder="Name" required />
                <input name="email" className="border p-3 rounded" placeholder="Email" required />
                <input name="phone" className="border p-3 rounded" placeholder="Phone" />
                <input type="hidden" name="service" value="SEO" />
                <button type="submit" className="py-3 rounded bg-uniqYellow font-semibold">Request Plan</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
