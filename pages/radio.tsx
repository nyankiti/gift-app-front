import React from 'react'
import { GetStaticProps } from 'next'
import { getRadioFeed } from '../lib/anchor'
/* components */
import RadioCard from '../components/RadioCard'

export const getStaticProps: GetStaticProps = async () => {
  const feeds = await getRadioFeed()
  return {
    props: {
      feeds: feeds,
    },
    revalidate: 10,
  }
}

type Props = {
  feeds: any
}

const radio = ({ feeds }: Props) => {
  console.log(feeds)
  return (
    <div className="bg-gray-200 flex px-14 py-6">
      <div className="max-w-screen-xl w-full m-auto ">
        <div className="css-1qygjso items-end justify-between mb-8 flex">
          <h1 className="text-5xl font-extrabold">Episodes</h1>
        </div>
        <div className="bg-white rounded-md">
          <div className="css-e41cq9 grid gap-4 h-14 justify-items-end pl-6">
            <div
              aria-label="Episode name"
              className="css-tqeezv font-bold h-8 flex items-center self-center p-2 text-gray-900"
            >
              Name
            </div>
            <div className="css-1ldkqm3 font-bold h-8 flex items-center p-2 text-gray-900 self-center">
              Length
            </div>
            <div className="css-1h6ttj8 font-bold h-8 flex items-center p-2 text-gray-900 self-center">
              Plays
            </div>
            <div className="css-7cyujr font-bold h-8 flex items-center p-2 text-gray-900 self-center">
              Ads
            </div>
            <div className="css-14mt7s3 font-bold h-8 flex items-center p-2 text-gray-900 self-center">
              Date
            </div>
            <div
              aria-label="Episode publish status"
              className="css-vf411m font-bold h-8 flex items-center p-2 text-gray-900 self-center"
            >
              Status
            </div>
            <div aria-label="Episode actions" className="css-3v0u6u"></div>
          </div>

          <ul className="css-urc5lr m-0 p-0">
            {feeds.map((feed: any) => {
              return <RadioCard feed={feed} key={feed.guid} />
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default radio
