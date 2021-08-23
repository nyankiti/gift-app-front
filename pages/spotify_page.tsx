import React from 'react'
import { GetStaticProps } from 'next'
import { spotifyAuth, AUTH_URL } from '../lib/spotify'
/* components */
import { SpotifyDashboard } from '../components/SpotifyDashboard'
import { useRouter } from 'next/router'

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </button>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   spotifyAuth()
//   return {
//     props: {},
//     revalidate: 10,
//   }
// }

type Props = {}

const spotify_page = ({}: Props) => {
  // const code = new URLSearchParams(window.location.search).get('code')
  const router = useRouter()
  const code = router.query.code

  return code ? <SpotifyDashboard code={code} /> : <Login />
}

export default spotify_page
