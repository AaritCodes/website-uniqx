import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Portfolio(){
  const items = [
    {title: 'Retail Website', desc: 'Custom site + SEO. Demo: +120% organic traffic.'},
    {title: 'Cafe Social Campaign', desc: 'SMM + content. Demo: +30% bookings.'},
    {title: 'E-commerce Build', desc: 'Platform + performance SEO.'}
  ]
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        <p className="text-center text-gray-500 mt-4">Selected projects —   data</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((it,i)=> (
            <div key={i} className="p-6 border rounded hover:shadow-lg transition">
              <div className="h-36 bg-gray-100 rounded mb-4 flex items-center justify-center">Screenshot {i+1}</div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{it.desc}</p>
              <div className="mt-4"><a className="text-uniqYellow" href="#">View case →</a></div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
