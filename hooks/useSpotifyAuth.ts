import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function useAuth(code: string) {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/spotify', {
        code,
      })
      .then((res) => {
        console.log(res.data)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        // window.history.pushState({}, null, '/')
        // router.push('/spotify_page')
      })
      .catch((err) => {
        console.log(err)
        // window.location = '/'
        router.push('/')
      })
  }, [code])

  useEffect(() => {
    // refreshTokenとexpiresInのどちらも存在しないときは何もしない
    if (!refreshToken || !expiresIn) return

    // setIntervalを用いてexpiresInが切れる度に実行するようにしている
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3001/api/refresh', {
          refreshToken,
        })
        .then((res) => {
          console.log('refresh' + res.data)
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          router.push('/')
        })
    }, (expiresIn - 60) * 1000)

    // 一度実行するとintervalの間隔をclearして元に戻す
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}
