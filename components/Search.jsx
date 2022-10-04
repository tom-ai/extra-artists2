const Search = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">2. Search the database</h2>
      <p className="text-lg">Paste in song ID and search</p>
      <div className="space-between h-48 w-48">
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label className="invisible -mb-5" for="search-box">
              Paste song ID
            </label>
            <input
              id="search-box"
              className="p-2 mb-2"
              type="text"
              placeholder="463701"
            />
          </div>
          <button className="rounded border-b-4 border-gray-700 bg-gray-500 py-2 font-bold text-white hover:border-gray-500 hover:bg-gray-400">
            Find
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
