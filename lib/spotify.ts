// import SpotifyWebApi from 'spotify-web-api-node'
const SpotifyWebApi = require('spotify-web-api-node')
import axios from 'axios'

export const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=250d4f4d32a84cfc9d5fdb6b9db392c4&response_type=code&redirect_uri=http://localhost:3000/spotify_page&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export const spotifyAuth = async () => {
  const res = await axios.get(AUTH_URL)
  console.log(res)
}
