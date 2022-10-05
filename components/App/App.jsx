import DiscogsLink from './components/DiscogsLink';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  const [textInput, setTextInput] = useState(''); // song ID

  // make API call
  // hydrate a component to display the data (list)

  return (
    <div className="space-y-16 ">
      <DiscogsLink />
      <Form textInput={textInput} setTextInput={setTextInput} />
      <Results />
    </div>
  );
};

export default App;
