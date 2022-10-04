import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Extra Artists</title>
        <meta name="description" content="Find the extra artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen bg-yellow-300">
        <div className="container mx-auto p-8">
          <Header />
        </div>
      </section>

      <footer></footer>
    </div>
  );
}
