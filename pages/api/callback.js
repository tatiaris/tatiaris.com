import nextConnect from 'next-connect';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: '5ccab9b64be34a12bcd16ece0500995a',
  clientSecret: '99511b79fbe547fc8cd76e976e57b2ba',
  redirectUri: 'http://localhost:3000/api/callback'
});

const handler = nextConnect();

handler.get(async (req, res) => {
  const code = req.query.code;
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      // spotifyApi.setAccessToken(access_token);
      // spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      // console.log(
      //   `Sucessfully retreived access token. Expires in ${expires_in} s.`
      // );
      res.send('Success! You can now close the window.');

      // setInterval(async () => {
      //   const data = await spotifyApi.refreshAccessToken();
      //   const access_token = data.body['access_token'];

      //   console.log('The access token has been refreshed!');
      //   console.log('access_token:', access_token);
      //   spotifyApi.setAccessToken(access_token);
      // }, expires_in / 2 * 1000);
    })
    .catch((error) => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

export default handler;
