import nextConnect from 'next-connect';
import { getSearchResults } from '../../../lib/spotify';

const handler = nextConnect();

handler.get(async (req, res) => {
  const searchQuery = decodeURIComponent(req.query.q);
  getSearchResults(searchQuery)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

export default handler;
