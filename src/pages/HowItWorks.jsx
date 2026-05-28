import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const STEPS = [
  {
    n: 1, tone: 'mint', bg: 'teal-bg',
    title: 'Download the App',
    desc: 'Available on iOS & Android. Install in seconds and sign up with your mobile number — no paperwork.',
    bullets: ['Free forever', 'No subscription', 'Works on 5G/4G/Wi-Fi'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
    ),
  },
  {
    n: 2, tone: 'peach', bg: 'coral-bg',
    title: 'Link Your Bank',
    desc: 'Securely connect your bank account via UPI or add money to your wallet instantly. Works with all 200+ Indian banks.',
    bullets: ['Aadhaar-based KYC', 'OTP verified', 'Multiple banks supported'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h16v11H4z"/><path d="M2 9l10-6 10 6"/><line x1="8" y1="13" x2="8" y2="17"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="16" y1="13" x2="16" y2="17"/></svg>
    ),
  },
  {
    n: 3, tone: 'lilac', bg: 'violet-bg',
    title: 'Pay & Earn',
    desc: 'Start transacting and earning cashback on every single payment you make. Scan, send, split — all in one tap.',
    bullets: ['Instant cashback', 'Reward points', 'Tier upgrades'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    ),
  },
]

const FAQ = [
  { q: 'How long does setup actually take?', a: 'Under 3 minutes for most users with KYC documents handy. Bank linking via UPI is instant.' },
  { q: 'Do I need an existing UPI ID?', a: 'No. PayWallet generates one for you during sign-up, or you can use any existing UPI handle.' },
  { q: 'Are my bank details safe?', a: 'Yes. We never store your bank credentials — all logins happen through your bank\'s secure UPI handshake.' },
  { q: 'When do I start earning cashback?', a: 'Immediately. Your very first transaction is eligible for our welcome bonus + standard cashback.' },
]

export default function HowItWorks() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="SIMPLE STEPS"
        eyebrowColor="teal"
        title={<>Get Started in <span className="grad-teal">3 Minutes</span></>}
        subtitle="No paperwork. No queues. No long forms. Just download, link, and pay — that's it."
      />

      <section className="section">
        <div className="container">
          <div className="how-stack">
            {STEPS.map((s, i) => (
              <div className={`how-row reveal ${i % 2 ? 'reverse' : ''}`} key={s.n}>
                <div className={`how-visual ${s.tone}`}>
                  <span className={`step-num ${s.bg}`}>{s.n}</span>
                  <span className="how-icon">{s.icon}</span>
                </div>
                <div className="how-text">
                  <span className={`eyebrow ${i === 0 ? 'teal' : i === 1 ? 'coral' : 'violet'}`}>STEP 0{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="how-bullets">
                    {s.bullets.map(b => <li key={b}><span className="tick">✓</span>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow coral">FREQUENTLY ASKED</span>
            <h2>Quick <span className="grad-coral">answers</span></h2>
          </div>
          <div className="faq-grid">
            {FAQ.map((f, i) => (
              <details className="faq-card reveal" key={i}>
                <summary><span>Q.</span> {f.q}<span className="chev">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <div className="cta-strip reveal">
            <div>
              <h3>Now you know how it works</h3>
              <p>Ready to make smarter, faster payments?</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/features" className="btn-outline big">See all features</Link>
              <Link to="/download" className="btn-primary big">Get the App</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
