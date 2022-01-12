import { getAllPosts } from '../../../lib/fetchContentfulPosts'
import { POSTS_PER_PAGE } from '../../blog'
import { GetStaticPaths, GetStaticProps } from 'next'
/* components */
import HomepageLayout from 'components/layouts/HomepageLayout'
import Pagination from '../../../components/Pagination'
import Card from '../../../components/Card'
import SubTitle from '../../../components/SubTitle'
/* types */
import { Post } from '../../../Type'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const {
    params: { page },
  } = context
  const posts = await getAllPosts()
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

interface Props {
  posts: Post[]
  initialDisplayPosts: Post[]
  pagination: any
}

const PostPage: React.FC<Props> = ({
  posts,
  initialDisplayPosts,
  pagination,
}) => {
  return (
    <HomepageLayout>
      <div className="divide-y w-3/4 px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <SubTitle text="All Posts" />
        <ul>
          {typeof posts !== 'undefined' && posts.length ? (
            initialDisplayPosts.map((post) => {
              return <Card key={post.sys.id} post={post} />
            })
          ) : (
            <h3>no such tag</h3>
          )}
        </ul>
        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        )}
      </div>
    </HomepageLayout>
  )
}

export default PostPage
