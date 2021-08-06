import { createClient } from 'contentful'
/* types */

export const getAllPosts = async () => {
  // typeof で型の条件を絞る
  if (typeof process.env.CONTENTFUL_SPACE_ID === 'undefined') {
    return []
  } else if (typeof process.env.CONTENTFUL_ACCESS_KEY === 'undefined') {
    return []
  } else {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'post' })

    return res.items
  }
}

export const getOnePost = async (slug: string | string[] | undefined) => {
  // typeof で型の条件を絞る
  if (typeof process.env.CONTENTFUL_SPACE_ID === 'undefined') {
    return []
  } else if (typeof process.env.CONTENTFUL_ACCESS_KEY === 'undefined') {
    return []
  } else {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    // slugが一致するitemのみ取得する
    const res = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
    })

    return res.items
  }
}
