import DiscogsLink from './components/DiscogsLink';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  // make API call
  // hydrate a component to display the data (list)
  const [artists, setArtists] = useState([]);

  console.log(artists);
  return (
    <div className="space-y-16 ">
      <DiscogsLink />
      <Form setArtists={setArtists} />
      <Results artists={artists} />
    </div>
  );
};

export default App;
