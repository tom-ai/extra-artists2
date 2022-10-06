import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.discogs.com',
});

export function getBase() {
  return api.get('/').then((res) => {
    return res.data;
  });
}

export function getReleaseByID(songId) {
  return api
    .get(`/releases/${songId}`)
    .then(
      ({ data: { title, resource_url, extraartists, artists, tracklist } }) => {
        return {
          tracklist: tracklist,
          title: title,
          artist: artists[0].name,
          artistPage: artists[0].resource_url,
          extraArtists: extraartists,
          url: resource_url,
        };
      }
    )
    .catch((err) => console.log(err));
}
