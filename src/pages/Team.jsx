import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const av = (n) => `https://i.pravatar.cc/400?img=${n}`

const CEO = {
  name: 'Aarav Mehta',
  role: 'Founder & CEO',
  photo: av(15),
  location: 'Bengaluru',
  prev: 'ex-Razorpay · IIT Bombay \'08',
  bio: [
    "I started PayWallet with a single conviction: every Indian deserves payments that just work — instantly, safely, and rewardingly. Not eventually. Not after a tutorial. Just work.",
    "We're building the most trusted digital payments platform in India by obsessing over the details no one else does — the first-time setup, the cashback you can actually spend, the support call that ends on the first ring."
  ],
  focus: ['Customer obsession', 'Trust by design', 'Long-term thinking'],
}

const LEADERSHIP = [
  { n: 'Priya Krishnan',  role: 'Chief Technology Officer',   loc: 'Bengaluru', prev: 'ex-Stripe',  img: av(32), tags: ['Infrastructure', 'Security'] },
  { n: 'Rohan Desai',     role: 'Chief Operating Officer',    loc: 'Mumbai',    prev: 'ex-Paytm',   img: av(11), tags: ['Operations', 'Scale'] },
  { n: 'Anjali Rao',      role: 'Chief Financial Officer',    loc: 'Bengaluru', prev: 'ex-CRED',    img: av(20), tags: ['Finance', 'Strategy'] },
  { n: 'Vikram Singh',    role: 'Chief Marketing Officer',    loc: 'Mumbai',    prev: 'ex-Zomato',  img: av(13), tags: ['Brand', 'Growth'] },
  { n: 'Sneha Iyer',      role: 'Head of Engineering',        loc: 'Bengaluru', prev: 'ex-Google',  img: av(45), tags: ['Platform', 'Mobile'] },
  { n: 'Karthik Nair',    role: 'Head of Product',            loc: 'Bengaluru', prev: 'ex-PhonePe', img: av(8),  tags: ['UPI', 'Wallet'] },
]

const VALUES = [
  { ic: '🧭', title: 'Customer obsession', desc: "Every roadmap starts with a customer ticket, a support call, or a one-star review." },
  { ic: '🔒', title: 'Trust by design',    desc: "If a feature would surprise our grandparents, it doesn't ship." },
  { ic: '🌱', title: 'Long-term thinking', desc: "We optimise for the next decade, not the next quarter." },
  { ic: '🤝', title: 'Together, candidly', desc: "We disagree in the room — never in the corridor." },
]

export default function Team() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="OUR TEAM"
        eyebrowColor="teal"
        title={<>The people <span className="grad-teal">behind PayWallet</span></>}
        subtitle="A passionate group of engineers, designers, operators and customer-obsessed humans, building the most trusted way to pay in India."
      />

      {/* Featured CEO */}
      <section className="section">
        <div className="container">
          <div className="ceo-card reveal">
            <div className="ceo-photo-wrap">
              <img src={CEO.photo} alt={CEO.name} className="ceo-photo" />
              <span className="ceo-badge">Founder &amp; CEO</span>
            </div>
            <div className="ceo-body">
              <span className="eyebrow teal">A WORD FROM OUR FOUNDER</span>
              <h2>{CEO.name}</h2>
              <div className="ceo-meta">
                <span>📍 {CEO.location}</span>
                <span>•</span>
                <span>{CEO.prev}</span>
              </div>
              {CEO.bio.map((p, i) => <p key={i}>{p}</p>)}
              <div className="ceo-focus">
                {CEO.focus.map(f => <span key={f} className="ceo-chip">{f}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership grid */}
      <section className="section" style={{ background: 'var(--surface-soft, #fafaff)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow coral">LEADERSHIP</span>
            <h2>The leadership <span className="grad-coral">team</span></h2>
            <p className="lead">Builders, operators and craftspeople who've shipped at the world's best fintech and consumer companies.</p>
          </div>

          <div className="team-grid">
            {LEADERSHIP.map((m, i) => (
              <article className="tm-card reveal" key={m.n} style={{ '--i': i }}>
                <div className="tm-photo-wrap">
                  <img src={m.img} alt={m.n} loading="lazy" />
                  <span className="tm-ring" />
                </div>
                <div className="tm-body">
                  <h3>{m.n}</h3>
                  <small className="tm-role">{m.role}</small>
                  <div className="tm-meta">
                    <span>📍 {m.loc}</span>
                    <span>•</span>
                    <span>{m.prev}</span>
                  </div>
                  <div className="tm-tags">
                    {m.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="tm-social">
                    <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4.1 0 4.9 2.7 4.9 6.3V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9-1.8 0-2 1.4-2 2.8V21h-4V9z"/></svg></a>
                    <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 9c0 .3 0 .6.1.9A11.6 11.6 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.4A4 4 0 0 1 3 9.5v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.3a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">HOW WE WORK</span>
            <h2>Our <span className="grad-teal">values</span></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div className="value-card reveal" key={v.title} style={{ '--i': i }}>
                <span className="value-ic">{v.ic}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="cta-strip reveal" style={{ marginTop: 48 }}>
            <div>
              <h3>We're hiring across India</h3>
              <p>Engineering, design, product, operations, support — find your team.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/gallery" className="btn-outline big">See us at work</Link>
              <Link to="/contact" className="btn-primary big">View open roles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
