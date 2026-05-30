import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/payments', label: 'Payments' },
  { to: '/security', label: 'Security' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'active' : ''}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn-ghost">Sign In</Link>
          <Link to="/download" className="btn-primary glow">Download App</Link>
        </div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
        ))}
        <Link to="/contact" className="btn-ghost" onClick={() => setOpen(false)}>Sign In</Link>
        <Link to="/download" className="btn-primary" onClick={() => setOpen(false)}>Download App</Link>
      </div>
    </header>
  )
}
