import Head from 'next/head';
import Header from '../components/Header';
import DiscogsLink from '../components/DiscogsLink';
import Search from '../components/Search';
import Results from '../components/Results';

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
          <div className="space-y-16 ">
            <DiscogsLink />
            <Search />
            <Results />
          </div>
        </div>
      </section>
    </div>
  );
}
