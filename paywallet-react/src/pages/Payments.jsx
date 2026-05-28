import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const TYPES = [
  { tick: '✓', title: 'Bank Transfer', sub: 'Instant NEFT/IMPS' },
  { tick: '✓', title: 'UPI Payments',  sub: 'Scan any QR code' },
  { tick: '✓', title: 'International', sub: 'Remit globally' },
  { tick: '✓', title: 'Scheduled Pay', sub: 'Automate bills' },
  { tick: '✓', title: 'Split Bills',   sub: 'With friends & groups' },
  { tick: '✓', title: 'Fastag Top-up', sub: 'For all toll plazas' },
]

const CARDS = [
  { ic: '₹', tone: '',       label: 'UPI Send',   amount: '₹1,500', tag: 'Sent',         tagTone: 'green' },
  { ic: '⚡', tone: 'blue',   label: 'Electricity',amount: '₹1,240', tag: 'Paid',         tagTone: 'teal' },
  { ic: '📱', tone: 'violet', label: 'Recharge',   amount: '₹299',   tag: 'Done',         tagTone: 'violet' },
  { ic: '🛍', tone: 'peach',  label: 'Shopping',   amount: '₹3,499', tag: 'Saved ₹200',   tagTone: 'coral' },
  { ic: '🍔', tone: 'blue',   label: 'Food Order', amount: '₹450',   tag: '5% back',      tagTone: 'green' },
  { ic: '🚖', tone: 'violet', label: 'Cab Ride',   amount: '₹220',   tag: 'Auto-paid',    tagTone: 'teal' },
]

export default function Payments() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="PAYMENTS"
        eyebrowColor="coral"
        title={<>Pay Everyone,<br/><span className="grad-coral">Everywhere, Instantly</span></>}
        subtitle="Whether it's splitting dinner, paying rent, or topping up your Fastag — PayWallet makes every rupee move at the speed of light."
      />

      <section className="payments">
        <div className="container payments-grid">
          <div className="reveal">
            <span className="eyebrow coral on-dark">SEND & RECEIVE</span>
            <h2 className="on-dark">Any payment method, <span className="grad-mint">one app</span></h2>
            <p className="on-dark-sub">From neighborhood paan shops to global suppliers — PayWallet supports every payment rail you'll ever need.</p>

            <div className="pay-list">
              {TYPES.map(t => (
                <div className="pay-row" key={t.title}>
                  <span className="tick">{t.tick}</span>
                  <div><strong>{t.title}</strong><small>{t.sub}</small></div>
                </div>
              ))}
            </div>
          </div>

          <div className="pay-cards reveal">
            {CARDS.map(c => (
              <div className="pay-card" key={c.label}>
                <span className={`pc-ic ${c.tone}`}>{c.ic}</span>
                <small>{c.label}</small>
                <strong>{c.amount}</strong>
                <span className={`tag ${c.tagTone}`}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow teal">UNDER THE HOOD</span>
            <h2>Built on <span className="grad-teal">India's payment stack</span></h2>
          </div>
          <div className="rail-grid">
            <div className="rail reveal"><strong>UPI</strong><span>Unified Payments Interface — for instant bank-to-bank transfers.</span></div>
            <div className="rail reveal"><strong>NEFT / IMPS</strong><span>For larger transfers, business payouts, and 24/7 settlement.</span></div>
            <div className="rail reveal"><strong>Bharat QR</strong><span>One QR for cards, UPI, and wallet payments at any merchant.</span></div>
            <div className="rail reveal"><strong>BBPS</strong><span>Bharat Bill Pay for all utility, recharge, and subscription billers.</span></div>
            <div className="rail reveal"><strong>e-RUPI</strong><span>Voucher-based, prepaid digital payments — government-backed.</span></div>
            <div className="rail reveal"><strong>SWIFT</strong><span>For international remittance to 50+ countries at low FX margins.</span></div>
          </div>

          <div className="cta-strip reveal">
            <div>
              <h3>Move money like a pro</h3>
              <p>Switch to PayWallet for payments that just work — every time.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/security" className="btn-outline big">Is it safe?</Link>
              <Link to="/download" className="btn-primary big">Download Free</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
