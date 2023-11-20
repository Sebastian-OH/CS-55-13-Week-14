import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div className='mainDiv'>
      <Head>
        <title>CS 55.13 Week Four</title>
      </Head>
      <header>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-primary mt-3 homeButton ms-1">
            ← Back to home
          </Link>
        )
      }
      <footer className='mt-4'>
        <p className='text-center'>Sebsatian Helguera @ 2023</p>
      </footer>
    </div>
  );
}