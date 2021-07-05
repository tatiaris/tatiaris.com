import querystring from 'querystring';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const user_rec_playlist_id = process.env.USER_REC_PLAYLIST_ID;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

export const getSearchResults = async (query) => {
  const { access_token } = await getAccessToken();
  spotifyApi.setAccessToken(access_token);
  return new Promise((resolve, reject) => {
    spotifyApi.searchTracks(query, { limit: 5 }).then(
      (data) => {
        resolve(data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  });
};

export const getUserRecPlaylist = async () => {
  const { access_token } = await getAccessToken();
  spotifyApi.setAccessToken(access_token);
  return new Promise((resolve, reject) => {
    spotifyApi.getPlaylistTracks(user_rec_playlist_id, { fields: 'items(track.id),total' }).then(
      (data) => {
        let songIds = new Set();
        const totalSongs = data.body.total;
        data.body.items.map((t) => {
          songIds.add(t.track.id);
        });
        for (let i = 0; i < totalSongs; i += 100) {
          spotifyApi
            .getPlaylistTracks(user_rec_playlist_id, { offset: i + 100, fields: 'items(track.id),total' })
            .then((moreData) => {
              moreData.body.items.map((t) => {
                songIds.add(t.track.id);
              });
              if (songIds.size > totalSongs - 50) resolve({ data: [...songIds] });
            })
            .catch((error) => console.log(error));
        }
      },
      function (err) {
        console.error(err);
      }
    );
  });
};

export const updateUserRecPlaylist = async (songId) => {
  const { access_token } = await getAccessToken();
  spotifyApi.setAccessToken(access_token);
  return new Promise((resolve, reject) => {
    spotifyApi.addTracksToPlaylist(user_rec_playlist_id, [`spotify:track:${songId}`]).then(
      function (data) {
        resolve({ success: true, data: data });
      },
      function (err) {
        resolve({ success: false });
        console.log('Something went wrong!', err);
      }
    );
  });
};
