// given array of top level extra artists, function returns true if saxophone is found

const artistIsOnSongObject = (array, instrument) => {
  // search array for role
  // console.log('triggered!', array);

  const regex = /sax/i;
  array.forEach((artist) => {
    // console.log(artist.role, regex.test(artist.role));
    if (regex.test(artist.role)) {
      console.log('yes sax', artist.name);
    }
  });

  // if role contains "saxophone"
  // return true
};

// then when mapping out, the saxophone is in top level so map out top level

// otherwise extra artist info is nested in within 'tracklist' array

export default artistIsOnSongObject;
