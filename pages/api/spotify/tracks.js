import { getSearchResults } from '../../../lib/spotify';

export default async function handler(req, res) {
  const searchQuery = decodeURIComponent(req.query.q);
  getSearchResults(searchQuery)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
