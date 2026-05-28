import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const RECHARGES = [
  { ic: '📱', tone: 'svc-pink',   label: 'Mobile Recharge',      sub: 'Prepaid / Postpaid' },
  { ic: '📺', tone: 'svc-purple', label: 'DTH',                  sub: 'Tata Play, Airtel, Dish' },
  { ic: '🌐', tone: 'svc-cyan',   label: 'Broadband',            sub: 'JioFiber, ACT, Airtel' },
  { ic: '📞', tone: 'svc-blue',   label: 'Landline',             sub: 'BSNL, MTNL & more' },
  { ic: '🎮', tone: 'svc-violet', label: 'Google Play / iTunes', sub: 'Top-up your wallet' },
  { ic: '🚇', tone: 'svc-mint',   label: 'Metro Card',           sub: 'DMRC, BMRCL, CMRL' },
]

const BILLS = [
  { ic: '⚡', tone: 'svc-amber',  label: 'Electricity',     sub: '100+ DISCOMs' },
  { ic: '💧', tone: 'svc-cyan',   label: 'Water',           sub: 'Municipal corporations' },
  { ic: '🔥', tone: 'svc-coral',  label: 'Piped Gas',       sub: 'IGL, MGL, AGL, GGL' },
  { ic: '🛢', tone: 'svc-amber',  label: 'Gas Cylinder',    sub: 'Indane, HP, Bharat Gas' },
  { ic: '🏠', tone: 'svc-mint',   label: 'Rent Pay',        sub: 'To any landlord via UPI' },
  { ic: '🏘', tone: 'svc-purple', label: 'Society Maintenance', sub: 'RWA dues' },
  { ic: '🏛', tone: 'svc-blue',   label: 'Municipal Taxes', sub: 'Property tax & more' },
  { ic: '🎓', tone: 'svc-pink',   label: 'Education Fees',  sub: 'Schools, colleges, coaching' },
]

const MONEY = [
  { ic: '💳', tone: 'svc-violet', label: 'Credit Card Bill', sub: 'All Indian banks' },
  { ic: '🏠', tone: 'svc-mint',   label: 'Loan EMI',         sub: 'Home, car, personal' },
  { ic: '🛡', tone: 'svc-cyan',   label: 'Insurance',        sub: 'LIC, health, motor' },
  { ic: '🚗', tone: 'svc-blue',   label: 'Fastag Recharge',  sub: 'All issuing banks' },
  { ic: '📲', tone: 'svc-pink',   label: 'Subscriptions',    sub: 'Netflix, Hotstar, Spotify' },
  { ic: '🛍', tone: 'svc-coral',  label: 'Donations',        sub: 'NGOs & temples' },
]

const INVEST = [
  { ic: '📈', tone: 'svc-mint',   label: 'Mutual Funds',  sub: 'SIP & lumpsum' },
  { ic: '💼', tone: 'svc-violet', label: 'Stocks',        sub: 'NSE & BSE' },
  { ic: '🪙', tone: 'svc-amber',  label: 'Digital Gold',  sub: '24K MMTC-PAMP' },
  { ic: '🏦', tone: 'svc-cyan',   label: 'Fixed Deposits',sub: 'Upto 8.5% interest' },
  { ic: '🧮', tone: 'svc-pink',   label: 'Tax-saving ELSS', sub: 'Save under 80C' },
  { ic: '🎯', tone: 'svc-purple', label: 'Goal Planner',  sub: 'Save for a dream' },
]

const TRAVEL = [
  { ic: '✈',  tone: 'svc-cyan',   label: 'Flights',  sub: 'Domestic & international' },
  { ic: '🏨', tone: 'svc-pink',   label: 'Hotels',   sub: '50,000+ hotels' },
  { ic: '🚆', tone: 'svc-amber',  label: 'Trains',   sub: 'IRCTC official partner' },
  { ic: '🚌', tone: 'svc-violet', label: 'Buses',    sub: 'Pan-India operators' },
  { ic: '🚖', tone: 'svc-blue',   label: 'Cabs',     sub: 'Uber, Ola top-ups' },
  { ic: '🎬', tone: 'svc-coral',  label: 'Movies & Events', sub: 'BookMyShow tickets' },
]

function Grid({ title, hint, items, eyebrow, color = 'coral' }) {
  const onTileMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div className="bill-section reveal">
      <div className="bill-section-head">
        <span className={`eyebrow ${color}`}>{eyebrow}</span>
        <h2>{title}</h2>
        {hint && <p>{hint}</p>}
      </div>
      <div className="bill-grid">
        {items.map((it, i) => (
          <button className="bill-tile" key={it.label} style={{ '--i': i }} onMouseMove={onTileMove}>
            <span className={`bill-ic ${it.tone}`}>{it.ic}</span>
            <strong>{it.label}</strong>
            <small>{it.sub}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Bills() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="BILLS & RECHARGE"
        eyebrowColor="coral"
        title={<>Pay every bill, <span className="grad-coral">in one tap</span></>}
        subtitle="Mobile recharge, electricity, water, gas, broadband, credit card, EMI, insurance, Fastag, subscriptions — all your monthly payments. Set autopay and never miss a due date again."
      >
        <div className="bill-stat-row">
          <div><strong>1,500+</strong><small>billers supported</small></div>
          <div><strong>0 ₹</strong><small>convenience fees</small></div>
          <div><strong>3 sec</strong><small>average payment time</small></div>
          <div><strong>5% back</strong><small>on every bill paid</small></div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container bill-stack">
          <Grid eyebrow="RECHARGES" color="coral"  title={<>Recharges, simplified</>}                   hint="Top up mobiles, DTH, broadband and more — for yourself or your loved ones."     items={RECHARGES} />
          <Grid eyebrow="BILL PAYMENTS" color="teal" title={<>All your <span className="grad-teal">monthly bills</span></>} hint="Pay electricity, water, gas, rent, fees & municipal taxes from one place." items={BILLS} />
          <Grid eyebrow="FINANCE" color="violet" title={<>Manage <span className="grad-violet">credit, loans & insurance</span></>} hint="Credit card bills, EMIs, premiums, Fastag — paid securely and on time." items={MONEY} />
          <Grid eyebrow="INVEST & GROW" color="sky" title={<>Invest, save & <span className="grad-sky">grow your wealth</span></>} hint="Mutual funds, gold, FDs, ELSS, stocks — built right into PayWallet." items={INVEST} />
          <Grid eyebrow="TRAVEL & ENTERTAINMENT" color="coral" title={<>Book travel & <span className="grad-coral">movie tickets</span></>} hint="Flights, hotels, trains, buses, cabs, movies — book anything, anywhere." items={TRAVEL} />
        </div>

        <div className="container">
          <div className="cta-strip reveal">
            <div>
              <h3>Set it. Forget it. Save it.</h3>
              <p>Enable autopay on any biller and let PayWallet handle the rest — for free.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/features"  className="btn-outline big">See all features</Link>
              <Link to="/download" className="btn-primary big">Get the App</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
