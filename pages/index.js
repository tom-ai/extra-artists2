import Head from 'next/head';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Search from "../components/Search"


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
          <Heading />
          <Search />
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
