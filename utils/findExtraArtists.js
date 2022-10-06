import artistIsOnSongObject from './artistIsOnSongObject';

// main function that finds the artist
const findExtraArtists = (songObject, instrument) => {
  // check if artist is in top level
  const array = songObject.extraArtists;

  const artistIsInTopLevel = false;
  const regex = RegExp(`${instrument}`, 'i');
  array.forEach((artist) => {
    if (regex.test(artist.role)) {
      artistIsInTopLevel = true;
    }
  });

  console.log(artistIsInTopLevel);

  // if (artistIsOnSongObject(songObject.extraArtists, instrument)) {
  //   console.log('yes, instrument is in top level');
  // } else {
  //   console.log('instr not in top level');
  // }
};

export default findExtraArtists;
