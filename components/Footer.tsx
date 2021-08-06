import React from 'react'
import Link from './Link'
import headerNavLinks from '../data/headerNavLink'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-20 mt-20">
      <div className="sm:grid grid-cols-2 w-4/5 pb-10 m-auto border-b-2 border-gray-700">
        <div>
          <h3 className="text-l sm:font-bold text-gray-100">Pages</h3>
          <ul className="py-4 sm:text-s pt-4 text-gray-400">
            {headerNavLinks.map((link) => (
              <li key={link.title} className="pb-1">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-l sm:font-bold text-gray-100">Find Us</h3>
          <ul className="py-4 sm:text-s pt-4 text-gray-400">
            <li className="pb-1">
              <Link href="/">What we do</Link>
            </li>
            <li className="pb-1">
              <Link href="/">Address</Link>
            </li>
            <li className="pb-1">
              <Link href="/">Phone</Link>
            </li>
            <li className="pb-1">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="w-25 w-4/5 pb-3 m-auto text-xs text-gray-100 pt-6">
        Copyright 2021-2024 Code With Kentaro. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
