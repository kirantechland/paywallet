import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const REVIEWS = [
  { c: 'c1', n: 'A', name: 'Arjun Reddy',   role: 'Software Engineer, Hyderabad', text: 'PayWallet has completely changed how I pay. UPI transfers are instant and the cashback is real money back in my pocket!' },
  { c: 'c2', n: 'P', name: 'Priya Patel',   role: 'Business Owner, Mumbai',       text: 'As a merchant, PayWallet is my go-to for collecting payments. The QR code works flawlessly and settlements are next day.' },
  { c: 'c3', n: 'R', name: 'Rohan Mishra',  role: 'Student, Delhi',               text: 'Best app for splitting bills with friends. The group expense feature is super intuitive. Highly recommend!' },
  { c: 'c4', n: 'S', name: 'Sunita Kumari', role: 'Teacher, Bengaluru',           text: 'I was skeptical at first but now I can\'t imagine life without PayWallet. Paying bills is so convenient now.' },
  { c: 'c5', n: 'V', name: 'Vikram Singh',  role: 'Freelancer, Pune',             text: 'Receiving payments from clients is a breeze. Professional, fast, and reliable. The support team is also excellent.' },
  { c: 'c6', n: 'M', name: 'Meena Iyer',    role: 'Homemaker, Chennai',           text: 'I use it for grocery shopping and utility bills. The rewards really add up! Saved ₹4,000 in cashback this year.' },
  { c: 'c1', n: 'K', name: 'Karthik Nair',  role: 'Doctor, Kochi',                text: 'Clinic collections used to be messy with cash. PayWallet QR fixed that overnight — patients love it too.' },
  { c: 'c3', n: 'D', name: 'Divya Sharma',  role: 'Designer, Gurgaon',            text: 'The UI is just gorgeous. Smooth animations, no clutter. It\'s the only fintech app that feels designed.' },
  { c: 'c5', n: 'J', name: 'Joseph Thomas', role: 'Retiree, Bengaluru',           text: 'At 68, I was nervous about digital payments. PayWallet support walked me through everything. I now pay all my bills here.' },
]

export default function Reviews() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="REVIEWS"
        eyebrowColor="coral"
        title={<>Loved by <span className="grad-coral">Millions</span></>}
        subtitle="4.8 ★ average across 2M+ reviews on Play Store and App Store."
      >
        <div className="rating big-rating">★★★★★ <b>4.8 / 5</b> · 2M+ Reviews</div>
      </PageHero>

      <section className="section">
        {(() => {
          const half = Math.ceil(REVIEWS.length / 2)
          const row1 = REVIEWS.slice(0, half)
          const row2 = REVIEWS.slice(half)
          return (
            <>
              <div className="rv-marquee reveal" aria-label="User reviews row 1">
                <div className="rv-track">
                  {[...row1, ...row1, ...row1].map((r, i) => (
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

              <div className="rv-marquee reverse reveal" aria-label="User reviews row 2" style={{ marginTop: 22 }}>
                <div className="rv-track">
                  {[...row2, ...row2, ...row2].map((r, i) => (
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
            </>
          )
        })()}

        <div className="container">
          <div className="cta-strip reveal">
            <div>
              <h3>Join 10 million Indians</h3>
              <p>See why people across India are switching to PayWallet.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/about" className="btn-outline big">Our Story</Link>
              <Link to="/download" className="btn-primary big">Try PayWallet</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
