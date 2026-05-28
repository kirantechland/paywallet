import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'
import useCounter from '../hooks/useCounter'

function Stat({ value, suffix, label, gradient, tone, icon }) {
  const [n, ref] = useCounter(value)
  return (
    <div className="stat-card reveal">
      <span className={`stat-ic ${tone}`}>{icon}</span>
      <div ref={ref} className={`stat-num ${gradient}`}>{n.toLocaleString('en-IN')}</div>
      <div className={`stat-suffix ${gradient}`}>{suffix}</div>
      <p>{label}</p>
    </div>
  )
}

export default function About() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="ABOUT PAYWALLET"
        eyebrowColor="teal"
        title={<>Building India's <span className="grad-teal">payments future</span></>}
        subtitle="We're on a mission to make digital payments effortless, rewarding, and accessible to every Indian — from metro cities to remote villages."
      />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">BY THE NUMBERS</span>
            <h2>India Trusts <span className="grad-teal">PayWallet</span></h2>
          </div>
          <div className="stat-grid">
            <Stat value={10} suffix="M+" gradient="grad-teal" tone="mint" label="Happy Users" icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            } />
            <Stat value={50000} suffix=" Cr+" gradient="grad-coral" tone="peach" label="Transactions Processed" icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            } />
            <Stat value={5} suffix="M+" gradient="grad-violet" tone="lilac" label="Merchants Onboarded" icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3"/><path d="M8 13h8"/></svg>
            } />
            <Stat value={48} suffix="%" gradient="grad-sky" tone="sky" label="Cashback Earned by Users" icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            } />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story reveal">
              <span className="eyebrow coral">OUR MISSION</span>
              <h2>Payments should be <span className="grad-coral">invisible</span></h2>
              <p>We believe paying for things should feel as natural as breathing — instant, secure, and rewarding. PayWallet was founded in 2019 in Bengaluru with a simple goal: build the payments app Indians deserve.</p>
              <p>Today, we're trusted by 10 million Indians and 5 million merchants — and we're just getting started.</p>
            </div>
            <div className="story-stat reveal">
              <div className="story-box gradient-1">
                <span>2019</span>
                <small>Founded in Bengaluru</small>
              </div>
              <div className="story-box gradient-2">
                <span>500+</span>
                <small>Team across India</small>
              </div>
              <div className="story-box gradient-3">
                <span>200+</span>
                <small>Banks supported</small>
              </div>
              <div className="story-box gradient-4">
                <span>24/7</span>
                <small>Customer support</small>
              </div>
            </div>
          </div>

          <div className="cta-strip reveal">
            <div>
              <h3>Want to be part of the journey?</h3>
              <p>Whether as a user, merchant, or teammate — we'd love to have you.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/contact" className="btn-outline big">Talk to us</Link>
              <Link to="/download" className="btn-primary big">Download Free</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
