import React from 'react'
import { createClient } from 'contentful'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import formatDate from '../../lib/utils/formatDate'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getAllPosts, getOnePost } from '../../lib/fetchContentfulPosts'
/* components */
import Tag from '../../components/Tag'
/* types */
import { Post } from '../../Type'

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getAllPosts()

  const paths = items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths: paths,
    fallback: true,
  }
}

// 上のコードは以下のように省略できる
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params === 'undefined') {
    return {
      props: {
        post: [],
      },
    }
  } else {
    const items = await getOnePost(params.slug)

    // itemが存在しないページにアクセスされたときはredirectする
    if (!items.length) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return {
      props: {
        post: items[0],
      },
      revalidate: 10,
    }
  }
}

type Props = {
  post: Post
}

const PostDetail: React.FC<Props> = ({ post }) => {
  // ISRによるリビルド中に表示するページ
  if (!post) return <h1>now SSR..</h1>

  const { mediaImage, title, tags, contents } = post.fields
  const date = Date.parse(post.sys.updatedAt)

  return (
    <article className="w-3/4 px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <header>
        <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={post.sys.updatedAt}>{formatDate(date)}</time>
            </dd>
          </dl>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {title}
            </h1>
          </div>
        </div>
      </header>
      <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ">
        {typeof mediaImage === 'undefined' ? (
          <h3>no media image</h3>
        ) : (
          <div className="banner">
            <Image
              src={'https:' + mediaImage.fields.file.url}
              width={mediaImage.fields.file.details.image.width}
              height={mediaImage.fields.file.details.image.height}
            />
            <h2>{title}</h2>
          </div>
        )}

        <div className="info">
          {typeof tags === 'undefined' ? (
            <h3>no such tag</h3>
          ) : (
            tags.map((tag) => <Tag key={tag} text={tag} />)
          )}
        </div>

        <div className="method">
          <div>{documentToReactComponents(contents)}</div>
        </div>
      </div>
    </article>
  )
}

export default PostDetail
