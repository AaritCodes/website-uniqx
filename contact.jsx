import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-gray-600">Hit us up — we'll reply within 24 hours (demo).</p>

        <form className="mt-8 max-w-xl grid gap-4">
          <input className="border p-3 rounded" placeholder="Name" />
          <input className="border p-3 rounded" placeholder="Email" />
          <textarea className="border p-3 rounded" placeholder="Message" rows="6" />
          <button className="py-3 rounded bg-uniqYellow font-semibold">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
