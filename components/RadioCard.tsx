import React from 'react'
/* types */
import { RadioFeeds } from '../Type'

interface Props {
  feed: RadioFeeds
}

const RadioCard = ({ feed }: Props) => {
  const { title, content, creator, enclosure, itunes, pubDate } = feed
  const date = new Date(pubDate)
  // console.log(date.getFullYear().toString().slice(-2))
  return (
    <li className="css-15tg9dg grid gap-4 items-center bg-white">
      <button
        data-cy="episode-e165ib3"
        className="css-ukn458 grid text-gray-800 font-normal text-2xl gap-4 pl-6"
        aria-label="navigate to podcast episode: 語り明かし"
      >
        <div className="css-1u6wh4y justify-self-start font-bold">
          <div className="max-w-md w-full text-left">{title}</div>
        </div>
        <div className="css-joz84f">26:39</div>
        <div className="css-s2me8g">4</div>
        <div className="css-5oq08x">0</div>
        <div className="css-1flkdfl">
          <div className="css-1rqsibs text-gray-600 justify-self-end">
            Published on
          </div>
          {date.getMonth() +
            1 +
            '/' +
            date.getDate() +
            '/' +
            date.getFullYear().toString().slice(-2)}
        </div>
        <div className="css-2ee2cz">
          <div aria-label="Episode is published" className="w-6 h-6"></div>
        </div>
      </button>
      <div className="css-u8juio">
        <div className="relative">
          <button
            aria-expanded="false"
            aria-haspopup="true"
            aria-label="Show options menu for 語り明かし"
            type="button"
            className="p-0"
          >
            <span className="focus-span css-xu4tf8" tabIndex={-1}>
              <div className="flex w-12 h-12 px-2 py-3">
                <svg
                  viewBox="0 0 23 5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(-339.000000, -60.000000)"
                  >
                    <g fill="#C9CBCD">
                      <g transform="translate(350.500000, 62.500000) rotate(-90.000000) translate(-350.500000, -62.500000) translate(348.000000, 51.000000)">
                        <circle cx="2.5" cy="2.5" r="2.5"></circle>
                        <circle cx="2.5" cy="11.5" r="2.5"></circle>
                        <circle cx="2.5" cy="20.5" r="2.5"></circle>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default RadioCard
