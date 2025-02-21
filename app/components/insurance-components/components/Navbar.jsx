"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <nav className="w-full bg-white text-black shadow-sm sticky top-0">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main navbar row */}
          <div className="h-16 flex items-center justify-between">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link href="/">
                {/* Use next/image if desired; this is fine for a quick example */}
                <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* HAMBURGER BUTTON (MOBILE) */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
              <Link href="/" className="hover:text-gray-600">
                Solutions
              </Link>
              <Link href="/" className="hover:text-gray-600">
                Industries
              </Link>
              <Link href="/" className="hover:text-gray-600">
                Who We Are
              </Link>
              <Link href="/" className="hover:text-gray-600">
                Resources+ Insights
              </Link>
              <Link href="/" className="hover:text-gray-600">
                Contact Us
              </Link>
              <span className="mx-2 text-gray-300">|</span>
              <Link href="/" className="hover:text-gray-600">
                Quote Online
              </Link>
              <Link href="/search" className="hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE MENU (DROPDOWN) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-200">
            <ul className="flex flex-col space-y-1 py-2">
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Resources+ Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Quote Online
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  onClick={toggleMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

    </>
  )
}

export default Navbar
