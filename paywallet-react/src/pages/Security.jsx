import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const CELLS = [
  { title: '256-bit Encryption', desc: 'All transactions secured with military-grade AES-256 encryption.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
  { title: '2-Factor Authentication', desc: 'Every transaction verified with biometric or PIN authentication.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z"/></svg> },
  { title: 'RBI Regulated', desc: 'Fully licensed and regulated by the Reserve Bank of India (RBI).', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg> },
  { title: 'Real-time Alerts', desc: 'Instant SMS & push notifications for every account activity.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg> },
  { title: 'Zero Liability Policy', desc: '100% protection against unauthorized transactions.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> },
  { title: '24/7 Support', desc: 'Round-the-clock customer support via chat, call, or email.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z"/></svg> },
]

export default function Security() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="TRUST & SAFETY"
        eyebrowColor="teal"
        title={<>Your Money. <span className="grad-teal">Fort Knox Safe.</span></>}
        subtitle="We've built PayWallet on an unbreakable foundation of security, compliance, and transparency."
      />

      <section className="section">
        <div className="container">
          <div className="trust-grid">
            {CELLS.map(c => (
              <div className="trust-cell reveal" key={c.title}>
                <div className="t-ic mint">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="cert-strip reveal">
            <small>CERTIFIED & REGULATED BY</small>
            <div className="badges">
              {['RBI', 'NPCI', 'PCI-DSS', 'ISO 27001', 'CERT-In', 'DPDP Act'].map(b => (
                <span className="badge" key={b}>{b}</span>
              ))}
            </div>
          </div>

          <div className="cta-strip reveal">
            <div>
              <h3>Pay with confidence</h3>
              <p>10 million Indians trust PayWallet — and so can you.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/reviews" className="btn-outline big">Read reviews</Link>
              <Link to="/download" className="btn-primary big">Get the App</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
