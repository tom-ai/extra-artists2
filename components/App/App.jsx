import DiscogsLink from './components/DiscogsLink';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  // make API call
  // hydrate a component to display the data (list)


  return (
    <div className="space-y-16 ">
      <DiscogsLink />
      <Form />
      <Results  />
    </div>
  );
};

export default App;
