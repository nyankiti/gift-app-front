import React from 'react'
import headerNavLinks from '../data/headerNavLink'
/* components */
import Link from '../components/Link'
import MobileNav from './MobileNav'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" px-2  sm:px-6 xl:px-0">
      <div className="flex flex-col justify-between h-screen">
        <header className="flex h-6 bg-gray-800 text-white items-center justify-between py-10">
          <div className="ml-12">
            <Link href="/" className="">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <h3>Logo</h3>
                </div>
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  Gift Innovation 合同会社
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 mr-10">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <MobileNav />
          </div>
        </header>

        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
