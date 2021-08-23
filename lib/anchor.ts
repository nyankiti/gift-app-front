import Parser from 'rss-parser'

export const getRadioFeed = async () => {
  const parser = new Parser()
  const feeds = await parser.parseURL(
    'https://anchor.fm/s/67fb36c0/podcast/rss'
  )
  console.log(feeds)
  return feeds.items
}
