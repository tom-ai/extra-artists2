import Link from 'next';

const Heading = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">1. Find a Song</h2>
      <p className="text-lg">Find a song on Discogs and copy the ID</p>
      <a
        className="text-lg font-bold underline"
        href="https://www.discogs.com/"
      >
        https://www.discogs.com/
      </a>
    </>
  );
};

export default Heading;
