import { getUserRecPlaylist, updateUserRecPlaylist } from '../../../lib/spotify';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      getUserRecPlaylist()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          res.json({ error: 'Could not fetch playlist.' });
        });
      break;
    case 'PUT':
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
      break;
    default:
      res.json({ error: 'Invalid request method.' });
      break;
  }
}