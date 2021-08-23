import React, { useEffect } from 'react'
import useSpotifyAuth from '../hooks/useSpotifyAuth'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

type Props = {
  code: string
}

export const SpotifyDashboard = ({ code }: Props) => {
  const accessToken = useSpotifyAuth(code)
  console.log(accessToken)

  useEffect(() => {
    if (!accessToken) return

    spotifyApi.setAccessToken(accessToken)
    spotifyApi
      .getMe()
      .then((data: any) => {
        console.log(data)
      })
      .cathc((err: any) => {
        console.log(err)
      })
  }, [accessToken])

  // useEffect(() => {
  //   spotifyApi.ser
  // }, [accessToken])

  return <div></div>
}
