import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.discogs.com',
});

export function getBase() {
  return api.get('/').then((res) => {
    return res.data;
  });
}
