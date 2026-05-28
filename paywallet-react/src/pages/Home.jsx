import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneMockup from '../components/PhoneMockup'
import Marquee from '../components/Marquee'
import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'
import { confettiOnClick } from '../components/Confetti'

/* ===== EXPLORE PAYWALLET — tabbed explorer data ===== */
const EXPLORE_TABS = [
  {
    id: 'bills', label: 'Bills & Recharge', num: '01', to: '/bills',
    title: 'Pay All Your Bills, in One Tap',
    desc: 'Mobile, DTH, electricity, water, gas, credit card, loan EMI, insurance, Fastag — every monthly payment, one place.',
    stats: [['1,500+', 'billers'], ['5%', 'cashback'], ['3 sec', 'avg pay']],
    visual: ['📱', '📺', '⚡', '💧', '🔥', '💳', '🛡', '🚗'],
    cta: 'Open Bills & Recharge',
  },
  {
    id: 'features', label: 'Features', num: '02', to: '/features',
    title: 'One App. Infinite Possibilities.',
    desc: 'UPI, wallet, gold, stocks, mutual funds, travel & rewards — 26 features and counting, in a single elegant app.',
    stats: [['26', 'features'], ['200+', 'banks'], ['0 ₹', 'platform fee']],
    visual: ['₹', '💳', '📱', '⚡', '🏦', '📈', '🪙', '✈'],
    cta: 'Open Features',
  },
  {
    id: 'how', label: 'How It Works', num: '03', to: '/how-it-works',
    title: 'Get Started in 3 Minutes',
    desc: 'Download the app, link your bank, and start paying. No paperwork, no queues, no long forms — just three quick steps.',
    stats: [['3 min', 'setup'], ['UPI', 'verified'], ['100%', 'paperless']],
    steps: ['Download', 'Link Bank', 'Pay & Earn'],
    cta: 'See how it works',
  },
  {
    id: 'payments', label: 'Payments', num: '04', to: '/payments',
    title: 'Pay Everyone, Everywhere, Instantly',
    desc: 'UPI, NEFT/IMPS, international remittance, scheduled payments — every payment rail you will ever need.',
    stats: [['Instant', 'UPI'], ['200+', 'banks'], ['50+', 'countries']],
    rails: ['UPI', 'NEFT', 'IMPS', 'RTGS', 'BBPS', 'SWIFT', 'Bharat QR', 'e-RUPI'],
    cta: 'Explore Payments',
  },
  {
    id: 'security', label: 'Security', num: '05', to: '/security',
    title: 'Your Money. Fort Knox Safe.',
    desc: 'Built on an unbreakable foundation: AES-256 encryption, 2-factor authentication, zero-liability policy and RBI regulation.',
    stats: [['AES-256', 'encryption'], ['RBI', 'regulated'], ['24/7', 'support']],
    safe: ['256-bit Encryption', '2-Factor Authentication', 'Zero Liability', 'PCI-DSS Certified'],
    cta: 'View Safeguards',
  },
]

/* ===== EVERYTHING YOU NEED — feature category tabs ===== */
const FEATURE_TABS = [
  {
    id: 'recharge', label: 'Recharges',
    items: [
      { ic: '📱', title: 'Mobile Recharge',  desc: 'Prepaid & postpaid on Jio, Airtel, Vi, BSNL.' },
      { ic: '📺', title: 'DTH',              desc: 'Tata Play, Dish, Airtel DTH, Sun Direct.' },
      { ic: '🌐', title: 'Broadband',        desc: 'JioFiber, ACT, Airtel & 100+ ISPs.' },
      { ic: '🎮', title: 'App Wallet Top-up',desc: 'Google Play, iTunes, PSN, Steam.' },
    ]
  },
  {
    id: 'bills', label: 'Bills',
    items: [
      { ic: '⚡', title: 'Electricity',      desc: 'Across 100+ DISCOMs with autopay.' },
      { ic: '💧', title: 'Water & Sewage',   desc: 'Municipal water boards, India-wide.' },
      { ic: '🔥', title: 'Piped Gas',        desc: 'IGL, MGL, AGL, GGL — pay monthly bills.' },
      { ic: '🛢', title: 'LPG Cylinder',     desc: 'Indane, HP, Bharat Gas — book & pay.' },
    ]
  },
  {
    id: 'money', label: 'Money',
    items: [
      { ic: '💳', title: 'Credit Card Bill', desc: 'Pay any bank credit card via UPI.' },
      { ic: '🏠', title: 'Loan EMI',         desc: 'Home, car, personal loan EMIs.' },
      { ic: '🛡', title: 'Insurance',        desc: 'LIC, health, motor — auto-renew.' },
      { ic: '🚗', title: 'Fastag',           desc: 'Top up Fastag for all issuing banks.' },
    ]
  },
  {
    id: 'invest', label: 'Invest',
    items: [
      { ic: '📈', title: 'Mutual Funds',     desc: 'SIP & lumpsum, 5,000+ direct plans.' },
      { ic: '💼', title: 'Stocks',           desc: 'Buy & sell on NSE / BSE.' },
      { ic: '🪙', title: 'Digital Gold',     desc: '24K MMTC-PAMP — start from ₹10.' },
      { ic: '🏦', title: 'Fixed Deposits',   desc: 'Up to 8.5% p.a. with partner banks.' },
    ]
  },
  {
    id: 'travel', label: 'Travel & More',
    items: [
      { ic: '✈',  title: 'Flights',          desc: 'Domestic & international booking.' },
      { ic: '🏨', title: 'Hotels',           desc: '50,000+ hotels at best price.' },
      { ic: '🚆', title: 'Trains (IRCTC)',   desc: 'Official IRCTC partner.' },
      { ic: '🎬', title: 'Movies & Events',  desc: 'BookMyShow integration.' },
    ]
  },
]

const STEPS = [
  { n: 1, tone: 'mint',  bg: 'teal-bg',   icon: '📲', title: 'Download the App', desc: 'Available on iOS & Android. Sign up with your mobile number — under 60 seconds.' },
  { n: 2, tone: 'peach', bg: 'coral-bg',  icon: '🏦', title: 'Link Your Bank',   desc: 'Securely connect via UPI. Works with all 200+ Indian banks.' },
  { n: 3, tone: 'lilac', bg: 'violet-bg', icon: '✈',  title: 'Pay & Earn',       desc: 'Start transacting and earning cashback on every single payment.' },
]

const TRUST = [
  { ic: '🔒', title: '256-bit Encryption',     desc: 'Military-grade AES-256 on every transaction.' },
  { ic: '🛡',  title: '2-Factor Authentication',desc: 'Biometric or PIN verification on every payment.' },
  { ic: '✅', title: 'RBI Regulated',           desc: 'Fully licensed by the Reserve Bank of India.' },
]

const REVIEWS = [
  { c: 'c1', n: 'A', name: 'Arjun Reddy',   role: 'Software Engineer, Hyderabad', text: 'PayWallet has completely changed how I pay. UPI is instant and cashback is real money back!' },
  { c: 'c2', n: 'P', name: 'Priya Patel',   role: 'Business Owner, Mumbai',       text: 'QR works flawlessly, settlements are next day. Best payments app for merchants.' },
  { c: 'c3', n: 'R', name: 'Rohan Mishra',  role: 'Student, Delhi',               text: 'Best app for splitting bills. The group expense feature is super intuitive.' },
]

function Stat({ value, suffix, label, gradient, tone, ic }) {
  const [n, ref] = useCounter(value)
  return (
    <div className="stat-card reveal">
      <span className={`stat-ic ${tone}`}>{ic}</span>
      <div ref={ref} className={`stat-num ${gradient}`}>{n.toLocaleString('en-IN')}</div>
      <div className={`stat-suffix ${gradient}`}>{suffix}</div>
      <p>{label}</p>
    </div>
  )
}

function ExplorePanel({ tab }) {
  return (
    <div className="tx-panel" key={tab.id}>
      <div className="tx-left">
        <span className="tx-num" style={{ '--i': 0 }}>{tab.num} / 05</span>
        <h3 style={{ '--i': 1 }}>{tab.title}</h3>
        <p style={{ '--i': 2 }}>{tab.desc}</p>
        <div className="tx-stats" style={{ '--i': 3 }}>
          {tab.stats.map(([v, l], i) => (
            <div key={l} style={{ '--i': i }}><strong>{v}</strong><small>{l}</small></div>
          ))}
        </div>
        <Link to={tab.to} className="tx-btn" style={{ '--i': 4 }}>{tab.cta} <span>→</span></Link>
      </div>

      <div className="tx-right">
        {tab.visual && (
          <div className="tx-visual-grid">
            {tab.visual.map((e, i) => <span className="tx-tile" key={i} style={{ '--i': i }}>{e}</span>)}
          </div>
        )}
        {tab.steps && (
          <div className="tx-steps">
            {tab.steps.map((s, i) => (
              <div className="tx-step" key={s} style={{ '--i': i }}>
                <span className="tx-step-num">{i + 1}</span>
                <strong>{s}</strong>
              </div>
            ))}
          </div>
        )}
        {tab.rails && (
          <div className="tx-rails">
            {tab.rails.map((r, i) => <span className="tx-rail" key={r} style={{ '--i': i }}>{r}</span>)}
          </div>
        )}
        {tab.safe && (
          <ul className="tx-safe">
            {tab.safe.map((s, i) => (
              <li key={s} style={{ '--i': i }}><span className="tx-check">✓</span>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function FeaturePanel({ tab }) {
  return (
    <div className="fx-grid" key={tab.id}>
      {tab.items.map((it, i) => (
        <div className="fx-card" key={it.title} style={{ '--i': i }}>
          <span className="fx-ic">{it.ic}</span>
          <strong>{it.title}</strong>
          <small>{it.desc}</small>
        </div>
      ))}
    </div>
  )
}

/* Tab strip with sliding underline indicator */
function TabStrip({ items, active, onChange, variant = 'tx' }) {
  const ref = useRef(null)
  const [ind, setInd] = useState({ left: 0, width: 0, ready: false })

  useEffect(() => {
    const update = () => {
      const btn = ref.current?.querySelector(`.${variant}-tab.active`)
      if (btn) setInd({ left: btn.offsetLeft, width: btn.offsetWidth, ready: true })
    }
    update()
    const ro = new ResizeObserver(update)
    if (ref.current) ro.observe(ref.current)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [active, variant])

  return (
    <div className={`${variant}-tabs`} ref={ref} role="tablist">
      {items.map(t => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          className={`${variant}-tab ${active === t.id ? 'active' : ''}`}
          onClick={() => onChange(t.id)}>
          {variant === 'tx' && <span className="tx-tab-num">{t.num}</span>}
          <span className={`${variant}-tab-label`}>{t.label}</span>
        </button>
      ))}
      {ind.ready && (
        <span className={`${variant}-indicator`} style={{ left: ind.left, width: ind.width }} aria-hidden="true" />
      )}
    </div>
  )
}

export default function Home() {
  useReveal([])
  const [exploreId, setExploreId] = useState(EXPLORE_TABS[0].id)
  const [featureId, setFeatureId] = useState(FEATURE_TABS[0].id)
  const explore = EXPLORE_TABS.find(t => t.id === exploreId)
  const feature = FEATURE_TABS.find(t => t.id === featureId)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="pill">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
              India's #1 Trusted Payment App
            </span>
            <h1 className="hero-title">
              <span className="hw" style={{ '--i': 0 }}>Pay</span>{' '}
              <span className="hw grad-teal" style={{ '--i': 1 }}>Smarter.</span><br/>
              <span className="hw" style={{ '--i': 2 }}>Save</span>{' '}
              <span className="hw grad-coral" style={{ '--i': 3 }}>More.</span><br/>
              <span className="hw" style={{ '--i': 4 }}>Live</span>{' '}
              <span className="hw grad-violet" style={{ '--i': 5 }}>Better.</span>
            </h1>
            <p className="hero-sub">
              PayWallet combines <b>UPI payments</b>, <b>bill payments</b>, <b>digital wallet</b>, and <b>smart rewards</b> in one powerful app —
              trusted by 10 million+ Indians for fast, safe, and rewarding transactions.
            </p>
            <div className="hero-actions">
              <Link to="/download" className="btn-primary big" onClick={confettiOnClick}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                Download Free
              </Link>
              <Link to="/bills" className="btn-outline big">
                Pay a Bill
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-card">
                <span className="trust-ic green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z"/></svg>
                </span>
                <div>
                  <strong>100% Secure</strong>
                  <small>Bank-grade SSL</small>
                  <div className="stars">★★★★★ <em>4.9</em></div>
                </div>
              </div>
            </div>
          </div>

          <PhoneMockup />
        </div>
      </section>

      <Marquee />

      {/* STATS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">BY THE NUMBERS</span>
            <h2>India Trusts <span className="grad-teal">PayWallet</span></h2>
          </div>
          <div className="stat-grid">
            <Stat value={10}    suffix="M+"  gradient="grad-teal"   tone="mint"  label="Happy Users"          ic="👥" />
            <Stat value={50000} suffix=" Cr+" gradient="grad-coral" tone="peach" label="Transactions Processed" ic="📈" />
            <Stat value={5}     suffix="M+"  gradient="grad-violet" tone="lilac" label="Merchants Onboarded"   ic="🏬" />
            <Stat value={48}    suffix="%"   gradient="grad-sky"    tone="sky"   label="Cashback Earned"       ic="🏅" />
          </div>
        </div>
      </section>

      {/* EXPLORE — clean tabbed explorer */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow coral">EXPLORE PAYWALLET</span>
            <h2>One place. <span className="grad-coral">Five stories.</span></h2>
            <p className="lead">Click through to preview each part of PayWallet — then dive into the full page.</p>
          </div>

          <div className="tx reveal">
            <TabStrip items={EXPLORE_TABS} active={exploreId} onChange={setExploreId} variant="tx" />
            <ExplorePanel tab={explore} />
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED — tabbed feature explorer */}
      <section className="section" style={{ background: '#fafaff' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow coral">EVERYTHING YOU NEED</span>
            <h2>One App. <span className="grad-coral">Infinite Possibilities.</span></h2>
            <p className="lead">Browse by category — from recharges to investments, every service in one elegant tap.</p>
          </div>

          <div className="fx reveal">
            <TabStrip items={FEATURE_TABS} active={featureId} onChange={setFeatureId} variant="fx" />
            <FeaturePanel tab={feature} />
            <div className="fx-foot">
              <span>Showing 4 of 26 features in {feature.label.toLowerCase()}.</span>
              <Link to="/features" className="tx-btn outline">See all features <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS preview */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">SIMPLE STEPS</span>
            <h2>Get Started in <span className="grad-teal">3 Minutes</span></h2>
          </div>

          <div className="steps-row">
            {STEPS.map(s => (
              <div className="step-tile reveal" key={s.n}>
                <span className={`step-num ${s.bg}`}>{s.n}</span>
                <div className={`step-ic ${s.tone}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 30 }} className="reveal">
            <Link to="/how-it-works" className="btn-outline big">See detailed walkthrough →</Link>
          </div>
        </div>
      </section>

      {/* PAYMENTS dark banner */}
      <section className="payments">
        <div className="container payments-grid">
          <div className="reveal">
            <span className="eyebrow coral on-dark">PAYMENTS</span>
            <h2 className="on-dark">Pay Everyone,<br/>Everywhere, <span className="grad-mint">Instantly</span></h2>
            <p className="on-dark-sub">Whether it's splitting dinner, paying rent, or topping up your Fastag — every rupee moves at the speed of light.</p>

            <div className="pay-list">
              <div className="pay-row"><span className="tick">✓</span><div><strong>Bank Transfer</strong><small>Instant NEFT/IMPS</small></div></div>
              <div className="pay-row"><span className="tick">✓</span><div><strong>UPI Payments</strong><small>Scan any QR code</small></div></div>
              <div className="pay-row"><span className="tick">✓</span><div><strong>International</strong><small>Remit globally</small></div></div>
              <div className="pay-row"><span className="tick">✓</span><div><strong>Scheduled Pay</strong><small>Automate bills</small></div></div>
            </div>

            <div style={{ marginTop: 32 }}>
              <Link to="/payments" className="btn-primary big">Explore Payments →</Link>
            </div>
          </div>

          <div className="pay-cards reveal">
            <div className="pay-card"><span className="pc-ic">₹</span><small>UPI Send</small><strong>₹1,500</strong><span className="tag green">Sent</span></div>
            <div className="pay-card"><span className="pc-ic blue">⚡</span><small>Electricity</small><strong>₹1,240</strong><span className="tag teal">Paid</span></div>
            <div className="pay-card"><span className="pc-ic violet">📱</span><small>Recharge</small><strong>₹299</strong><span className="tag violet">Done</span></div>
            <div className="pay-card"><span className="pc-ic peach">🛍</span><small>Shopping</small><strong>₹3,499</strong><span className="tag coral">Saved ₹200</span></div>
          </div>
        </div>
      </section>

      {/* TRUST preview */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">TRUST &amp; SAFETY</span>
            <h2>Your Money. <span className="grad-teal">Fort Knox Safe.</span></h2>
            <p className="lead">Built on an unbreakable foundation of security, compliance, and transparency.</p>
          </div>

          <div className="trust-grid">
            {TRUST.map(t => (
              <div className="trust-cell reveal" key={t.title}>
                <div className="t-ic mint" style={{ fontSize: 22 }}>{t.ic}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="cert-strip reveal">
            <small>CERTIFIED &amp; REGULATED BY</small>
            <div className="badges">
              {['RBI', 'NPCI', 'PCI-DSS', 'ISO 27001', 'CERT-In', 'DPDP Act'].map(b => (
                <span className="badge" key={b}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }} className="reveal">
            <Link to="/security" className="btn-outline big">See all safety features →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS preview — horizontal auto-scrolling marquee */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #fff, #fbf9ff)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow coral">REVIEWS</span>
            <h2>Loved by <span className="grad-coral">Millions</span></h2>
            <div className="rating">★★★★★ <b>4.8 / 5</b> · 2M+ Reviews</div>
          </div>
        </div>

        <div className="rv-marquee reveal" aria-label="User reviews">
          <div className="rv-track">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div className="rv-card" key={i}>
                <div className="stars-row">★★★★★</div>
                <p>"{r.text}"</p>
                <div className="reviewer">
                  <span className={`r-av ${r.c}`}>{r.n}</span>
                  <div><strong>{r.name}</strong><small>{r.role}</small></div>
                  <span className="verify">✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div style={{ textAlign: 'center', marginTop: 36 }} className="reveal">
            <Link to="/reviews" className="btn-primary big">Read all reviews →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'radial-gradient(700px 400px at 50% 0%, #f3e8ff 0%, transparent 60%), #fff', textAlign: 'center' }}>
        <div className="container">
          <div className="cta-inner reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            <span className="cta-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            </span>
            <h2>Ready to Experience <span className="grad-teal">PayWallet?</span></h2>
            <p style={{ marginTop: 14, fontSize: 18 }}>Join 10 million+ Indians who've already made the switch to smarter, faster, more rewarding payments.</p>

            <div className="store-row">
              <a href="#" className="store dark" onClick={confettiOnClick}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12.5c0-2.5 2-3.7 2.1-3.7-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.5 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1.1 1-2.2 1.3-3.4-3-1.1-3-3.5-3-3.6zM14.5 5.7c.7-.9 1.2-2.1 1.1-3.4-1 .1-2.3.7-3 1.5-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.5 3-1.3z"/></svg>
                <div><small>Download on the</small><strong>App Store</strong></div>
              </a>
              <a href="#" className="store grad" onClick={confettiOnClick}>
                <svg viewBox="0 0 24 24"><defs><linearGradient id="pgh" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#00d4ff"/><stop offset="1" stopColor="#fbb040"/></linearGradient></defs><path fill="url(#pgh)" d="M3 2.4v19.2c0 .5.2.9.5 1.1L14.4 12 3.5 1.3c-.3.2-.5.6-.5 1.1zM16.8 9.6 5.9 1l11.7 11.7-11.7 11.7L16.8 14.4l3.4-1.9c1.3-.7 1.3-2.3 0-3l-3.4-1.9z"/></svg>
                <div><small>Get it on</small><strong>Google Play</strong></div>
              </a>
            </div>

            <div className="cta-foot">
              <span>✓ Free forever</span><span>✓ No hidden charges</span><span>✓ Instant activation</span><span>✓ Works with all banks</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
