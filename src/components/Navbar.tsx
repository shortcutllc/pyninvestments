import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Our Team' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="no-underline flex items-center gap-2">
          <img src="/images/pyn logo.png" alt="Lower Pyne Building" className="h-7" />
          <img src="/images/pyn letter green-11.png" alt="Pyn Investments" className="h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide normal-case no-underline transition-colors pb-1 ${
                  isActive
                    ? 'text-pyn-charcoal border-b-2 border-pyn-charcoal'
                    : 'text-gray-500 hover:text-pyn-charcoal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-pyn-charcoal transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-pyn-charcoal transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-pyn-charcoal transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm tracking-wide normal-case no-underline ${
                  isActive ? 'text-pyn-charcoal font-medium' : 'text-gray-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
