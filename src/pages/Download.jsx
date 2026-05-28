import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'
import { confettiOnClick } from '../components/Confetti'

export default function Download() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="GET PAYWALLET"
        eyebrowColor="teal"
        title={<>Ready to Experience <span className="grad-teal">PayWallet?</span></>}
        subtitle="Join 10 million+ Indians who've already made the switch to smarter, faster, more rewarding payments."
      />

      <section className="section">
        <div className="container">
          <div className="download-card reveal">
            <span className="cta-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            </span>

            <div className="store-row">
              <a href="#" className="store dark" onClick={confettiOnClick}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12.5c0-2.5 2-3.7 2.1-3.7-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8 1.5 0 2 .8 3.4.8 1.4 0 2.3-1.2 3.1-2.5.7-1.1 1-2.2 1.3-3.4-3-1.1-3-3.5-3-3.6zM14.5 5.7c.7-.9 1.2-2.1 1.1-3.4-1 .1-2.3.7-3 1.5-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.5 3-1.3z"/></svg>
                <div><small>Download on the</small><strong>App Store</strong></div>
              </a>
              <a href="#" className="store grad" onClick={confettiOnClick}>
                <svg viewBox="0 0 24 24"><defs><linearGradient id="pg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#00d4ff"/><stop offset="1" stopColor="#fbb040"/></linearGradient></defs><path fill="url(#pg)" d="M3 2.4v19.2c0 .5.2.9.5 1.1L14.4 12 3.5 1.3c-.3.2-.5.6-.5 1.1zM16.8 9.6 5.9 1l11.7 11.7-11.7 11.7L16.8 14.4l3.4-1.9c1.3-.7 1.3-2.3 0-3l-3.4-1.9z"/></svg>
                <div><small>Get it on</small><strong>Google Play</strong></div>
              </a>
            </div>

            <div className="cta-foot">
              <span>✓ Free forever</span>
              <span>✓ No hidden charges</span>
              <span>✓ Instant activation</span>
              <span>✓ Works with all banks</span>
            </div>

            <div className="qr-box">
              <div className="qr">
                <div className="qr-grid">
                  {Array.from({ length: 169 }).map((_, i) => (
                    <span key={i} style={{ background: Math.random() > 0.55 ? '#0f172a' : 'transparent' }}></span>
                  ))}
                </div>
              </div>
              <div>
                <h4>Scan to install</h4>
                <p>Point your phone camera at the QR code to download PayWallet instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
