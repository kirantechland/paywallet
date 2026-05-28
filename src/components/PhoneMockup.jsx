import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  { ic: '📱', label: 'Mobile',     tone: 'svc-pink'   },
  { ic: '📺', label: 'DTH',        tone: 'svc-purple' },
  { ic: '⚡', label: 'Electricity', tone: 'svc-amber'  },
  { ic: '💧', label: 'Water',      tone: 'svc-cyan'   },
  { ic: '🔥', label: 'Gas',        tone: 'svc-coral'  },
  { ic: '💳', label: 'Credit Card',tone: 'svc-violet' },
  { ic: '🛡', label: 'Insurance',  tone: 'svc-mint'   },
  { ic: '🚗', label: 'Fastag',     tone: 'svc-blue'   },
]

const MONEY = [
  { ic: '↗',  label: 'Send' },
  { ic: '🏦', label: 'Bank' },
  { ic: '💰', label: 'Invest' },
  { ic: '🪙', label: 'Gold' },
]

export default function PhoneMockup() {
  const [balance, setBalance] = useState(12450)
  const [cashback, setCashback] = useState(48.50)
  const wrapRef = useRef(null)

  useEffect(() => {
    const id1 = setInterval(() => setBalance(b => b + Math.floor(Math.random() * 14 - 5)), 4000)
    const id2 = setInterval(() => setCashback(c => c + Math.random() * 0.6), 5000)
    return () => { clearInterval(id1); clearInterval(id2) }
  }, [])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const cards = wrap.querySelectorAll('.floating-card')
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      cards.forEach((c, i) => {
        const depth = (i + 1) * 8
        c.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }
    const onLeave = () => cards.forEach(c => c.style.transform = '')
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className="hero-phone reveal" ref={wrapRef}>
      <div className="floating-card cb-card">
        <span className="cb-ic">★</span>
        <div>
          <strong>Cashback!</strong>
          <small>Earned Today</small>
          <div className="cb-amount">₹{cashback.toFixed(2)}</div>
          <small className="cb-foot">On 3 transactions</small>
        </div>
      </div>

      <div className="floating-card upi-card">
        <span className="upi-ic">₹</span>
        <div>
          <strong>UPI Payment</strong>
          <small>Instant Transfer</small>
          <div className="upi-amount">₹2,500</div>
          <small className="upi-foot">Sent Successfully ✓</small>
        </div>
      </div>

      <div className="phone">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="status-bar">
            <span>9:41</span>
            <span className="status-right">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9z"/></svg>
              <b>•••</b>
            </span>
          </div>

          <div className="wallet">
            <div className="wallet-head">
              <div>
                <small>Good Morning</small>
                <strong>Rahul Kumar <span className="wave">👋</span></strong>
              </div>
              <div className="avatar">RK</div>
            </div>

            <div className="balance-card">
              <small>Wallet Balance</small>
              <div className="balance">₹{balance.toLocaleString('en-IN')}.00</div>
              <div className="balance-actions">
                <button>↗ Send</button>
                <button>₹ Add</button>
                <button>📷 Scan</button>
              </div>
            </div>

            <div className="quick">
              <h4>Recharge &amp; Pay Bills</h4>
              <div className="svc-grid">
                {SERVICES.map(s => (
                  <div className="svc-tile" key={s.label}>
                    <span className={`svc-ic ${s.tone}`}>{s.ic}</span>
                    <small>{s.label}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="quick" style={{ paddingTop: 4 }}>
              <h4>Money</h4>
              <div className="quick-grid">
                {MONEY.map((m, i) => (
                  <div className={`q-tile g${i + 1}`} key={m.label}>
                    <span>{m.ic}</span>
                    <small>{m.label}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="recent">
              <h4>Recent</h4>
              <div className="r-row">
                <span className="r-av c1">P</span>
                <div className="r-mid"><strong>Priya Sharma</strong><small>2 min ago</small></div>
                <span className="r-amt neg">-₹500</span>
              </div>
              <div className="r-row">
                <span className="r-av c2">E</span>
                <div className="r-mid"><strong>Electricity Bill</strong><small>Yesterday</small></div>
                <span className="r-amt neg">-₹1,240</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-card users-card">
        <small>Happy Users</small>
        <strong className="users-num">10M+</strong>
        <div className="user-avs">
          <span className="u u1">R</span>
          <span className="u u2">P</span>
          <span className="u u3">A</span>
          <span className="u u4">S</span>
        </div>
      </div>
    </div>
  )
}
