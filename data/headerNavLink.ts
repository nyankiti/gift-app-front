type NavLink = {
  href: string
  title: string
}

type HeaderNavLinks = NavLink[]

const headerNavLinks: HeaderNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/radio', title: 'Radio' },
  // { href: '/login', title: 'Login' },
  // { href: '/register', title: 'Register' },
]

export default headerNavLinks
