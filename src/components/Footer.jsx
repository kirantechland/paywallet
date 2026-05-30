import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="f-about">India's most trusted digital payments platform. Secure, instant, rewarding — that's the PayWallet promise.</p>
          <div className="socials">
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 9c0 .3 0 .6.1.9A11.6 11.6 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.4A4 4 0 0 1 3 9.5v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.3a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4.1 0 4.9 2.7 4.9 6.3V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9-1.8 0-2 1.4-2 2.8V21h-4V9z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 6.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-8.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.8.3c-.4.1-1.4.1-2.3 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.7c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.6 0 7.8-.3c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7zM9.8 14.7V8.4l5.9 3.2-5.9 3.1z"/></svg></a>
          </div>
        </div>
        <div>
          <h5>Product</h5>
          <Link to="/features">Features</Link>
          <Link to="/bills">Bills & Recharge</Link>
          <Link to="/security">Security</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/download">Download</Link>
        </div>
        <div>
          <h5>Company</h5>
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
          <a href="#">Careers</a>
        </div>
        <div>
          <h5>Support</h5>
          <Link to="/contact">Contact Us</Link>
          <a href="#">Help Center</a>
          <a href="#">Status</a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container foot-bar">
        <small>© 2026 PayWallet Technologies Pvt. Ltd. · Made with ♥ in India</small>
        <div className="foot-legal">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <span>·</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
