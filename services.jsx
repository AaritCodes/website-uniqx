import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Services() {
  return (
    <div>
      <Header />
      <main className="px-8 md:px-20 py-16">
        <div className="mt-8 mb-8 flex justify-center"><img src="/images/dm_image_2.png" alt="Digital marketing visuals" className="rounded-lg max-w-3xl shadow"/></div>
        <h1 className="text-5xl font-extrabold text-center">Our Services</h1>
        <p className="text-center text-gray-500 mt-4">
          Everything you need to grow online — designed for results.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* SEO */}
          <article className="text-center p-6 bg-white rounded-lg shadow hover:scale-105 transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-2xl">📦</div>
            <h3 className="mt-4 font-semibold">SEO</h3>
            <p className="text-gray-500 mt-2">
              On-page, off-page & technical SEO that moves the needle.
            </p>
            <div className="mt-4">
              <Link href="/seo" className="text-uniqYellow">
                Learn more →
              </Link>
            </div>
          </article>

          {/* Websites */}
          <article className="text-center p-6 bg-white rounded-lg shadow hover:scale-105 transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-2xl">💻</div>
            <h3 className="mt-4 font-semibold">Websites</h3>
            <p className="text-gray-500 mt-2">
              Fast, responsive websites that convert visitors to customers.
            </p>
            <div className="mt-4">
              <Link href="/website" className="text-uniqYellow">
                Learn more →
              </Link>
            </div>
          </article>

          {/* SMM */}
          <article className="text-center p-6 bg-white rounded-lg shadow hover:scale-105 transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-uniqYellow flex items-center justify-center text-2xl">📣</div>
            <h3 className="mt-4 font-semibold">SMM</h3>
            <p className="text-gray-500 mt-2">
              Campaigns, content and community-building on socials.
            </p>
            <div className="mt-4">
              <Link href="/smm" className="text-uniqYellow">
                Learn more →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
