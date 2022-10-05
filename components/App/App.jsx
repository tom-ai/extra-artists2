import DiscogsLink from './components/DiscogsLink';
import Search from './components/Search';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  const [textInput, setTextInput] = useState('');

  return (
    <div className="space-y-16 ">
      <DiscogsLink />
      <Search textInput={textInput} setTextInput={setTextInput} />
      <Results />
    </div>
  );
};

export default App;
