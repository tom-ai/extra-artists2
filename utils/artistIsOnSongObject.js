// given array of top level extra artists, function returns true if saxophone is found
// then when mapping out, the saxophone is in top level so map out top level

const artistIsOnSongObject = (array, instrument) => {
  const regex = RegExp(`${instrument}`, 'i');
  array.forEach((artist) => {
    if (regex.test(artist.role)) {
      console.log('yes', artist.name);
    }
  });
};

export default artistIsOnSongObject;
