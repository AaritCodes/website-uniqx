import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pricing(){
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <h1 className="text-5xl font-extrabold text-center">Pricing (Mocked)</h1>
        <p className="text-center text-gray-500 mt-4">These are example packages for s and proposals.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border rounded text-center">
            <h3 className="text-xl font-semibold">Starter</h3>
            <div className="text-3xl font-bold mt-4">₹6,999</div>
            <p className="mt-4 text-gray-600">Basic site or SEO setup for small projects.</p>
          </div>

          <div className="p-6 border rounded text-center shadow-md">
            <h3 className="text-xl font-semibold">Growth</h3>
            <div className="text-3xl font-bold mt-4">₹19,999</div>
            <p className="mt-4 text-gray-600">Complete website + SEO + monthly SMM.</p>
          </div>

          <div className="p-6 border rounded text-center">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <div className="text-3xl font-bold mt-4">₹49,999</div>
            <p className="mt-4 text-gray-600">Full custom solution and dedicated support.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
