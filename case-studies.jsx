import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudies(){
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <h1 className="text-4xl font-bold text-center">Case Studies</h1>
        <p className="text-center text-gray-500 mt-4">Detailed examples ( data)</p>

        <article className="mt-12 p-6 border rounded">
          <h2 className="text-2xl font-semibold">Retail Chain — SEO & Local</h2>
          <p className="mt-4">Problem: low local visibility. Solution: local SEO + GMB optimization + on-page fixes. Result: <strong>+120% organic visits</strong> in 3 months.</p>
        </article>

        <article className="mt-8 p-6 border rounded">
          <h2 className="text-2xl font-semibold">Cafe — SMM Campaign</h2>
          <p className="mt-4">Problem: inconsistent bookings. Solution: targeted social ads + content calendar. Result: <strong>+30% bookings</strong> in 8 weeks.</p>
        </article>
      </main>
      <Footer />
    </div>
  )
}
