import '../styles/globals.css'
import Script from 'next/script'
import dynamic from 'next/dynamic'
const ChatWidget = dynamic(()=>import('../components/ChatWidget'), {ssr:false})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="ga-script" strategy="afterInteractive">
        {`/* GA4 stub - replace with real tag */ console.log('GA stub loaded');`}
      </Script>
      <Script id="pixel-script" strategy="afterInteractive">
        {`/* Meta pixel stub - replace with real pixel */ console.log('Pixel stub loaded');`}
      </Script>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  )
}
