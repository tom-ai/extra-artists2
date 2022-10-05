import Head from 'next/head';
import Header from '../components/Header';
import DiscogsLink from '../components/App/components/DiscogsLink';
import Search from '../components/App/components/Form';
import Results from '../components/App/components/Results';
import App from '../components/App/App';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Extra Artists</title>
        <meta name="description" content="Find the extra artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen bg-yellow-300 pt-16">
        <div className="container mx-auto p-8 md:grid md:grid-cols-2 md:gap-6">
          <div className="">
            <Header />
          </div>
          <App />
        </div>
      </section>
    </div>
  );
}
