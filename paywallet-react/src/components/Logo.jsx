import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="logo" aria-label="PayWallet home">
      <span className="logo-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 7h12l-1 13H7L6 7z"/>
          <path d="M9 7V5a3 3 0 0 1 6 0v2"/>
        </svg>
      </span>
      <span className={`logo-text ${light ? 'light' : ''}`}>Pay<span className="logo-accent">Wallet</span></span>
    </Link>
  )
}
