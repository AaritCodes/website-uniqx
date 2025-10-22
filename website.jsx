import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Website(){
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">Websites that Convert</h1>
            <p className="mt-4 text-gray-600">Fast, secure and beautiful websites designed to turn visitors into customers.</p>
            <ul className="mt-6 space-y-3">
              <li>• Responsive designs & accessibility</li>
              <li>• Performance & Core Web Vitals</li>
              <li>• Conversion-optimized UX</li>
            </ul>
            <div className="mt-6">
              <a href="#quote" className="px-6 py-3 rounded bg-uniqYellow font-semibold">Get Website Quote</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold">Demo metrics</h4>
            <div className="mt-4 text-sm text-gray-600">Example improvements after redesign: Bounce rate down 25%, conversions +18% (demo).</div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 bg-gray-50 rounded">Fast hosting</div>
              <div className="p-4 bg-gray-50 rounded">SEO-ready</div>
              <div className="p-4 bg-gray-50 rounded">CMS training</div>
              <div className="p-4 bg-gray-50 rounded">Analytics setup</div>
            </div>
          </div>
        </div>

        <section id="quote" className="mt-12">
          <h3 className="text-2xl font-semibold">Request a website plan</h3>
          <form action="/api/quotes" method="post" className="mt-4 grid gap-3 max-w-lg">
            <input name="name" className="border p-3 rounded" placeholder="Name" required />
            <input name="email" className="border p-3 rounded" placeholder="Email" required />
            <input name="phone" className="border p-3 rounded" placeholder="Phone" />
            <input type="hidden" name="service" value="Website" />
            <button className="py-3 rounded bg-uniqYellow font-semibold">Request Plan</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
