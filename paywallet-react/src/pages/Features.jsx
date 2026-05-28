import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const CORE = [
  { ic: '₹',  tone: 'mint',  color: 'teal',   title: 'Instant UPI Payments',  desc: 'Send and receive money instantly via UPI. Pay anyone, anytime — friends, family, or merchants.' },
  { ic: '💳', tone: 'peach', color: 'coral',  title: 'Smart Digital Wallet',   desc: 'Store money securely. Add funds from any bank and spend at millions of outlets.' },
  { ic: '📷', tone: 'lilac', color: 'violet', title: 'Scan & Pay',             desc: 'Scan any QR code to pay any merchant — works with Bharat QR, PayWallet QR, and more.' },
  { ic: '🏦', tone: 'sky',   color: 'sky',    title: 'Bank-to-Bank Transfer',  desc: 'NEFT, IMPS, RTGS — for higher-value transfers between any Indian bank.' },
]

const RECHARGE = [
  { ic: '📱', tone: 'peach', color: 'coral',  title: 'Mobile Recharge',        desc: 'Prepaid and postpaid on Jio, Airtel, Vi, BSNL — with instant cashback.' },
  { ic: '📺', tone: 'lilac', color: 'violet', title: 'DTH Recharge',           desc: 'Tata Play, Dish, Airtel DTH, Sun Direct — recharge for any subscriber number.' },
  { ic: '🌐', tone: 'sky',   color: 'sky',    title: 'Broadband & Wi-Fi',      desc: 'JioFiber, ACT, Airtel Xstream and 100+ other ISPs.' },
  { ic: '🎮', tone: 'mint',  color: 'teal',   title: 'App Store Credits',      desc: 'Top up Google Play, iTunes, PSN, Xbox, Steam wallets in seconds.' },
]

const BILLS = [
  { ic: '⚡', tone: 'peach', color: 'coral',  title: 'Electricity Bills',      desc: 'Pay across 100+ DISCOMs. Autopay so you never miss a due date.' },
  { ic: '💧', tone: 'sky',   color: 'sky',    title: 'Water & Sewage',         desc: 'BWSSB, DJB, MJP and other municipal water boards.' },
  { ic: '🔥', tone: 'mint',  color: 'teal',   title: 'Piped Gas',              desc: 'IGL, MGL, Adani Gas, GGL — pay your monthly piped gas bill.' },
  { ic: '🛢', tone: 'lilac', color: 'violet', title: 'LPG Cylinder Booking',   desc: 'Indane, HP, Bharat Gas refills booked & paid in one tap.' },
  { ic: '🏠', tone: 'peach', color: 'coral',  title: 'Rent & Maintenance',     desc: 'Pay your landlord or RWA directly through PayWallet — earn rewards.' },
  { ic: '🏛', tone: 'sky',   color: 'sky',    title: 'Municipal Taxes',        desc: 'Property tax, professional tax, and other civic dues.' },
]

const FINANCE = [
  { ic: '💳', tone: 'lilac', color: 'violet', title: 'Credit Card Bills',      desc: 'Pay any bank credit card via UPI. Earn reward points on every payment.' },
  { ic: '🏠', tone: 'mint',  color: 'teal',   title: 'Loan EMI',               desc: 'Home loan, car loan, personal loan EMIs paid securely and on time.' },
  { ic: '🛡', tone: 'peach', color: 'coral',  title: 'Insurance Premiums',     desc: 'LIC, health, motor, term — auto-renew with reminders.' },
  { ic: '🚗', tone: 'sky',   color: 'sky',    title: 'Fastag Recharge',        desc: 'All issuing banks. Top up, link a new tag, or check balance.' },
]

const INVEST = [
  { ic: '📈', tone: 'mint',  color: 'teal',   title: 'Mutual Funds',           desc: 'SIP & lumpsum across 5,000+ schemes — direct plans, zero commission.' },
  { ic: '💼', tone: 'lilac', color: 'violet', title: 'Stocks (NSE/BSE)',       desc: 'Buy and sell Indian stocks. Real-time quotes, no brokerage on delivery.' },
  { ic: '🪙', tone: 'peach', color: 'coral',  title: 'Digital Gold',           desc: '24K MMTC-PAMP gold. Start from ₹10. Sell anytime, instant credit.' },
  { ic: '🏦', tone: 'sky',   color: 'sky',    title: 'Fixed Deposits',         desc: 'Earn up to 8.5% p.a. with partner banks. No paperwork.' },
]

const TRAVEL = [
  { ic: '✈',  tone: 'sky',   color: 'sky',    title: 'Flights',                desc: 'Domestic & international flights. Member-only fare discounts.' },
  { ic: '🏨', tone: 'peach', color: 'coral',  title: 'Hotels',                 desc: '50,000+ hotels across India and abroad. Best price guarantee.' },
  { ic: '🚆', tone: 'mint',  color: 'teal',   title: 'Trains (IRCTC)',         desc: 'Official IRCTC partner — book without leaving the app.' },
  { ic: '🚌', tone: 'lilac', color: 'violet', title: 'Bus Tickets',            desc: 'RedBus inventory — pan-India operators.' },
  { ic: '🎬', tone: 'peach', color: 'coral',  title: 'Movies & Events',        desc: 'BookMyShow integration — movie tickets, concerts, sports.' },
  { ic: '🍔', tone: 'sky',   color: 'sky',    title: 'Food Delivery',          desc: 'Swiggy & Zomato vouchers. Get extra cashback on every order.' },
]

function FeatureBlock({ eyebrow, title, color, items }) {
  return (
    <div className="feature-section reveal">
      <div className="section-head" style={{ textAlign: 'left', margin: '0 0 28px', maxWidth: 720 }}>
        <span className={`eyebrow ${color}`}>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="feature-grid">
        {items.map(f => (
          <article className="feature-card" key={f.title}>
            <div className={`f-ic ${f.tone}`}>{f.ic}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <a href="#" className={`learn ${f.color}`}>Learn more →</a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="EVERYTHING YOU NEED"
        eyebrowColor="coral"
        title={<>One App. <span className="grad-coral">Infinite Possibilities.</span></>}
        subtitle="From paying your chai wala to settling international invoices, from booking flights to investing in gold — PayWallet handles it all with elegance."
      />

      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          <FeatureBlock eyebrow="CORE PAYMENTS"        color="teal"   title={<>The basics, <span className="grad-teal">done beautifully</span></>}        items={CORE} />
          <FeatureBlock eyebrow="RECHARGES"            color="coral"  title={<>Recharge <span className="grad-coral">anything</span></>}                     items={RECHARGE} />
          <FeatureBlock eyebrow="BILL PAYMENTS"        color="violet" title={<>Every <span className="grad-violet">monthly bill</span></>}                   items={BILLS} />
          <FeatureBlock eyebrow="CREDIT & PROTECTION" color="sky"    title={<>Credit, loans &amp; <span className="grad-sky">insurance</span></>}              items={FINANCE} />
          <FeatureBlock eyebrow="INVEST & GROW"        color="teal"   title={<>Invest, save &amp; <span className="grad-teal">grow your wealth</span></>}      items={INVEST} />
          <FeatureBlock eyebrow="TRAVEL & LIFESTYLE"   color="coral"  title={<>Book, travel &amp; <span className="grad-coral">enjoy</span></>}                items={TRAVEL} />
        </div>

        <div className="container">
          <div className="cta-strip reveal">
            <div>
              <h3>Try every feature, free.</h3>
              <p>No subscription. No hidden charges. Just rewards from day one.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/bills" className="btn-outline big">Pay a bill now</Link>
              <Link to="/download" className="btn-primary big">Download Free</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
