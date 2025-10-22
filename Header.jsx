import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-gray-900">Uniq<span className="text-uniqYellow">X</span></div>
      </div>
      <nav className="space-x-6 text-gray-600 hidden md:block">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
