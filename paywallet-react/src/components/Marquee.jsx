const ITEMS = [
  'Instant Settlement', 'Zero Fees', 'RBI Regulated', 'UPI Payments',
  'Digital Wallet', 'Bill Payments', 'Cashback Offers', 'Secure Transactions',
]

export default function Marquee() {
  const full = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {full.map((t, i) => <span key={i}>● {t}</span>)}
      </div>
    </div>
  )
}
