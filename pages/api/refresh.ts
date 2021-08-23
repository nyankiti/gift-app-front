import type { NextApiRequest, NextApiResponse } from 'next'
const SpotifyWebApi = require('spotify-web-api-node')

export default (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method
  switch (method) {
    case 'GET': {
    }
    case 'POST': {
      console.log('post')
      const refreshToken = req.body.refreshToken
      const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URL,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      })
      spotifyApi
        .refreshAccessToken()
        .then((data: any) => {
          res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
          })
        })
        .catch((err: any) => {
          console.log(err)
          res.send(err)
        })
    }
    // default: {
    //   res.status(403).end()
    // }
  }
}
