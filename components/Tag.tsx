import Link from 'next/link'
import kebabCase from '../lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-green-400 hover:text-green-500 dark:hover:text-green-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
