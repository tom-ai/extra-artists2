const findExtraArtists = (songObject, instrument) => {
  const regex = RegExp(`${instrument}`, 'i');
  let isArtistInTopLevel = false;
  return songObject.extraArtists.filter((artist) => {
    if (regex.test(artist.role)) {
      console.log('in function, top level', artist);
      isArtistInTopLevel = true;
      return artist;
    }
  });
};

export default findExtraArtists;
