import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteForm from '../components/QuoteForm'

export default function Home(){
  return (
    <div className="min-h-screen text-gray-900">
      <Header />

      <main className="px-8 md:px-20 py-16">
        
<section className="grid md:grid-cols-2 gap-8 items-center">
  <div>
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">We grow businesses with SEO, Websites & SMM</h1>
    <p className="mt-6 text-gray-600">UniqX helps startups and small businesses scale up with performance SEO, high-converting websites and data-driven social media marketing. Request a free growth plan — quote in 60s.</p>

    <div className="mt-8 flex gap-4">
      <a href="/services" className="px-6 py-3 rounded bg-uniqYellow font-semibold">Our Services</a>
      <a href="/contact" className="px-6 py-3 rounded border border-gray-200">Get a Quote</a>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 rounded shadow-sm">
        <h3 className="text-sm font-semibold">SEO Growth</h3>
        <p className="text-xs text-gray-500">Organic traffic & keyword strategy</p>
      </div>
      <div className="p-4 bg-gray-50 rounded shadow-sm">
        <h3 className="text-sm font-semibold">Ads & SMM</h3>
        <p className="text-xs text-gray-500">Paid campaigns & creative assets</p>
      </div>
    </div>
  </div>

  <div className="flex justify-center md:justify-end">
    <img src="/images/dm_image_1.png" alt="Digital marketing dashboard" className="w-full max-w-md rounded-lg shadow-md" />
  </div>
</section>


        <section className="mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="text-sm text-gray-500">Trusted by</div>
              <div className="flex gap-4">
                <div className="p-4 border rounded">Logo A</div>
                <div className="p-4 border rounded">Logo B</div>
                <div className="p-4 border rounded">Logo C</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center">Our Services</h2>
          <p className="text-center text-gray-500 mt-4">SEO · Websites · Social Media Marketing</p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="text-center">
              <div className="w-36 h-36 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-3xl">📦</div>
              <h3 className="mt-4 font-semibold">On-page SEO</h3>
              <p className="text-gray-500 mt-2">Optimize site structure, headings, meta tags & content to rank better.</p>
            </div>

            <div className="text-center">
              <div className="w-36 h-36 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-3xl">🔧</div>
              <h3 className="mt-4 font-semibold">Technical Optimization</h3>
              <p className="text-gray-500 mt-2">Improve performance, crawlability, schema and indexing.</p>
            </div>

            <div className="text-center">
              <div className="w-36 h-36 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-3xl">🌐</div>
              <h3 className="mt-4 font-semibold">Keyword Research</h3>
              <p className="text-gray-500 mt-2">Target the right keywords and search intent for conversions.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-center">What clients say</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded shadow-sm">
                <p className="italic">"UniqX increased our organic traffic by 120% in three months — excellent work."</p>
                <div className="mt-4 font-semibold">— R. Shah, Retail Co.</div>
              </div>
              <div className="p-6 border rounded shadow-sm">
                <p className="italic">"Fast delivery and the website converted visitors into customers from day one."</p>
                <div className="mt-4 font-semibold">— N. Roy, Cafe Chain</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <QuoteForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
