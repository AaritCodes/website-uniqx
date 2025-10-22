import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SMM(){
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">Social Media Marketing</h1>
            <p className="mt-4 text-gray-600">Campaigns, community and creative content to build your brand and drive sales.</p>
            <ul className="mt-6 space-y-3">
              <li>• Strategy & content calendar</li>
              <li>• Paid ads & targeting</li>
              <li>• Influencer outreach</li>
            </ul>
            <div className="mt-6">
              <a href="#quote" className="px-6 py-3 rounded bg-uniqYellow font-semibold">Get SMM Quote</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold">Sample campaign</h4>
            <p className="text-sm text-gray-600 mt-2">Demo: A targeted campaign for a local cafe increased bookings by 30% in 8 weeks.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-gray-50 rounded">Reach</div>
              <div className="p-3 bg-gray-50 rounded">Engagement</div>
              <div className="p-3 bg-gray-50 rounded">Bookings</div>
            </div>
          </div>
        </div>

        <section id="quote" className="mt-12">
          <h3 className="text-2xl font-semibold">Request a campaign plan</h3>
          <form action="/api/quotes" method="post" className="mt-4 grid gap-3 max-w-lg">
            <input name="name" className="border p-3 rounded" placeholder="Name" required />
            <input name="email" className="border p-3 rounded" placeholder="Email" required />
            <input name="phone" className="border p-3 rounded" placeholder="Phone" />
            <input type="hidden" name="service" value="SMM" />
            <button className="py-3 rounded bg-uniqYellow font-semibold">Request Plan</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
