const Results = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">3. See results</h2>
      <p className="text-lg">Extra artists performing on your track:</p>
      <ul>
        {/* {artists.map((artist, id) => {
          return (
            <li key={id}>
              <h3>{artist.role}</h3>
              <d>{artist.name}</d>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default Results;
