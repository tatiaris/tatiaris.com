import nextConnect from 'next-connect';
import { getUserRecPlaylist, updateUserRecPlaylist } from '../../../lib/spotify';

const handler = nextConnect();

handler.get(async (req, res) => {
  getUserRecPlaylist()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.json({ error: 'Could not fetch playlist.' });
    });
});

handler.put(async (req, res) => {
  let responseObject = { success: false, message: 'Invalid PUT Request' };
  const songId = req.body.id;
  updateUserRecPlaylist(songId)
    .then((data) => {
      if (data.success) {
        responseObject = { success: true, message: 'Thank you for your recommendation!' };
      } else {
        responseObject = { success: true, message: 'Recommendation failed :(' };
      }
      res.json(responseObject);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.json({ success: false, message: 'Recommendation failed :(' });
    });
});

export default handler;
