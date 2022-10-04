const Search = () => {
  return (
    <>
      <form>
        <label>
          Paste your song ID:
          <input type="text" placeholder="463701" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Search;
