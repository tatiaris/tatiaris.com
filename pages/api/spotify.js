import nextConnect from 'next-connect';
import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

const spotifyApi = new SpotifyWebApi({
  clientId: '5ccab9b64be34a12bcd16ece0500995a',
  clientSecret: '99511b79fbe547fc8cd76e976e57b2ba',
  redirectUri: 'http://localhost:3000/api/callback'
});

const handler = nextConnect();

handler.get(async (req, res) => {
  const redirectURL = spotifyApi.createAuthorizeURL(scopes);
  res.redirect(redirectURL);
  // console.log(redirectURL);
  // res.send(redirectURL)
});

export default handler;

// export default function handler(req, res) {
//   res.redirect(spotifyApi.createAuthorizeURL(scopes))
// }

/*

AQDUX__XSAaWabXWI5WRuRg5IIvrztb9xdJQtT2LCFr1Nl8Swj70YPWqwl2o6XvyclpqQ-eUqpabIKwsvsXtZyIFd9Ga36sBW2qaaWdt8rhRELqI6Ke1Bw5f9n3Dv-6jmTftBLd4IniLTP_oH1PoGn7xP-TKPiug2grsZRzAK_9iEFN9iaw_sIm-SCpvk8t0_pfWf4wfwsX4uvOuWGvEOYH8QUa488e913Zzt_sEaxiyFzP3WYDR859dZuj0Ahy3N5hIVLMLZ3BZ9o95DNNSvANIseyu3sOaiwFm8Qd9LWB7P0vHE6ZZvRENRCSQjQVcG9IDLTACbJB2s6L_zAd_6aV6P4PWHoOiZege1mc3f8M3uazcIArdf7osc42gHaWULGI6AUMurCYL4WNaRSDdFN9RdOTLTv3N61V3hBBXj0SwUANZe8fqqNZYclWtTpigNHFQzUx7_013ekzSlKWo8uu8kU7NWql4DJhiYibZLXZtUN_7DspFpU3sypG7hOXXLmqueTfUwAFoRWJWD4fv2zKayVqBYagof62c3Qn4SX9771OWokGa6dXskzoX-hFQBj_gERbQiQuoNKoqybht19OgdtoHI58X9hZKGt6bvRKdAPDzLUKyNyp_W5d_ziVC7eR5zFjfGACrO_ZLw5RGTgM7_53l_Ms6ynwi5h7OBK1yCDAh2df31z_HoBYibtUEWnljlOvLVxJ5tgicT0r7IQ3xBsucloo3

curl -H "Authorization: Basic NWNjYWI5YjY0YmUzNGExMmJjZDE2ZWNlMDUwMDk5NWE=:OTk1MTFiNzlmYmU1NDdmYzhjZDc2ZTk3NmU1N2IyYmE=" -d grant_type=authorization_code -d code=AQDUX__XSAaWabXWI5WRuRg5IIvrztb9xdJQtT2LCFr1Nl8Swj70YPWqwl2o6XvyclpqQ-eUqpabIKwsvsXtZyIFd9Ga36sBW2qaaWdt8rhRELqI6Ke1Bw5f9n3Dv-6jmTftBLd4IniLTP_oH1PoGn7xP-TKPiug2grsZRzAK_9iEFN9iaw_sIm-SCpvk8t0_pfWf4wfwsX4uvOuWGvEOYH8QUa488e913Zzt_sEaxiyFzP3WYDR859dZuj0Ahy3N5hIVLMLZ3BZ9o95DNNSvANIseyu3sOaiwFm8Qd9LWB7P0vHE6ZZvRENRCSQjQVcG9IDLTACbJB2s6L_zAd_6aV6P4PWHoOiZege1mc3f8M3uazcIArdf7osc42gHaWULGI6AUMurCYL4WNaRSDdFN9RdOTLTv3N61V3hBBXj0SwUANZe8fqqNZYclWtTpigNHFQzUx7_013ekzSlKWo8uu8kU7NWql4DJhiYibZLXZtUN_7DspFpU3sypG7hOXXLmqueTfUwAFoRWJWD4fv2zKayVqBYagof62c3Qn4SX9771OWokGa6dXskzoX-hFQBj_gERbQiQuoNKoqybht19OgdtoHI58X9hZKGt6bvRKdAPDzLUKyNyp_W5d_ziVC7eR5zFjfGACrO_ZLw5RGTgM7_53l_Ms6ynwi5h7OBK1yCDAh2df31z_HoBYibtUEWnljlOvLVxJ5tgicT0r7IQ3xBsucloo3 -d redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback https://accounts.spotify.com/api/token
curl -H "Authorization: Basic NWNjYWI5YjY0YmUzNGExMmJjZDE2ZWNlMDUwMDk5NWE=:OTk1MTFiNzlmYmU1NDdmYzhjZDc2ZTk3NmU1N2IyYmE=" -d grant_type=AQBzJ3vuPriXv7KJiwqYbxFwRJ7dReRUUA8JBXR5rRTWcXmHOIPQ4BQieVYnLDgkxR-lobKsogUuAG9174l8Wm0n3J_2dX5BnpRpZ4GBAtoqll2vdXVrvPFFsWbNs-OWNzCK4ZTrvI0_ZunM2tjEhbMQhF344eA8D7PCMqMgl4HhjrD9rDlj5WuvB32zJGiAtuXlNQbI6tq2OSY7-dsoZSbM83KLBQwm8wUZ4ifrRGsMekOflaL1PCysWBtTm7Glzwrbgm18YruHbjX89w0FFUK6YARkiWtOkm5ZI-sYPN-UiPrFxKNsHCPWsoObBgR0T7NLIwVp1pkN-UKZW3i72lT6mjjq_pSfIjaAtcVKVyTvNRohbTlN9w2SfqomWEfdJvHK6MszTLcY15uN9iO0MKuC0XBw_SAPyjuHiVa9rEtWvzlPjDIMF-t5QOWxHH_VRjX6vM8IEnH1Ya4gtJ2grlYDjCrNupY4D6l8km3hpYpUaZVFF8yIFKKDPoUZ7cGdY4cIQuDR0NonxhvfMKR06iNuAe37-JzMibZaZQi2h4L8_qEvH2ZHF4WlVEDxdwMBom1kF8Fdp9_fG-04JPYNWPg8EZUsMKmArCocJbBh2hgsOoCY2MlhkXgC8-4vUhmj8LKUDB4maBbFEpgZgwTggG2MorlxzZj_Ovon7b0SVP9iSpowvpr_3rl1PUasO8JBgRwRgFMCty7b1KqvG8sw9omy8HBOF5I9 -d code=<code> -d redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback https://accounts.spotify.com/api/token

*/
