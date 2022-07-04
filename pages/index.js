import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-mountain opacity-90 bg-cover bg-no-repeat'>
      <Head>
        <title>SOLID CALCULATOR V.1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="min-h-[90vh] flex-1 flex flex-col items-center justify-center">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className="flex flex-1 px-8 border-t border-solid border-[#eaeaea] justify-center min-h-[10vh] items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}