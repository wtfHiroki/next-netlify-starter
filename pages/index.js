import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello World!" />
        <p className="description">
          <code>const var data = "wait lang gagi!"</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
