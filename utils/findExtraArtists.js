// main function that finds the artist
const findExtraArtists = (songObject, instrument) => {
  // check if artist is in top level
  const array = songObject.extraArtists;
  const regex = RegExp(`${instrument}`, 'i');
  array.forEach((artist) => {
    if (regex.test(artist.role)) {
      console.log('in function', artist);
      return artist;
    }
  });
};

export default findExtraArtists;
