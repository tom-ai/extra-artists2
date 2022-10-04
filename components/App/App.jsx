import DiscogsLink from './components/DiscogsLink';
import Search from './components/Search';
import Results from './components/Results';

const App = () => {
  return (
    <div className="space-y-16 ">
      <DiscogsLink />
      <Search />
      <Results />
    </div>
  );
};

export default App;
