import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  res.json({
    message: 'working'
  });
});

handler.post(async (req, res) => {
  let data = req.body;
  try {
    await req.db.collection('nodes').insertOne(data);
  } catch (error) {
    console.log(error);
  }
  res.json({
    message: 'success'
  });
});

export default handler;
