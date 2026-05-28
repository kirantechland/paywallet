import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const SECTIONS = [
  {
    id: 'intro', title: '1. Introduction',
    body: (
      <>
        <p>PayWallet Technologies Pvt. Ltd. ("PayWallet", "we", "us") is committed to protecting your personal data. This Privacy Policy explains what we collect, how we use it, and the rights you have under the Digital Personal Data Protection Act, 2023 ("DPDP Act") and applicable RBI regulations.</p>
      </>
    ),
  },
  {
    id: 'data', title: '2. Data We Collect',
    body: (
      <>
        <p><strong>Identity data:</strong> name, date of birth, Aadhaar/PAN (masked for storage), photograph, address.</p>
        <p><strong>Contact data:</strong> mobile number, email address, postal address.</p>
        <p><strong>Financial data:</strong> bank account VPA, transaction history, wallet balance.</p>
        <p><strong>Device data:</strong> device ID, OS version, IP address, app version, crash logs.</p>
        <p><strong>Location data:</strong> approximate location for fraud-prevention; precise location only with explicit permission for select features (e.g., nearby merchants).</p>
      </>
    ),
  },
  {
    id: 'purpose', title: '3. How We Use Your Data',
    body: (
      <>
        <ul>
          <li>To process payments and provide the Service you requested</li>
          <li>To verify your identity and prevent fraud (KYC, AML, sanctions screening)</li>
          <li>To comply with RBI, NPCI, FIU-IND and other regulatory obligations</li>
          <li>To send transaction alerts, statements, and security notifications</li>
          <li>To improve product quality through aggregated, anonymised analytics</li>
          <li>To send marketing communications, only if you opt-in</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing', title: '4. Who We Share Data With',
    body: (
      <>
        <p>We share the minimum necessary data with:</p>
        <ul>
          <li><strong>Banks &amp; NPCI</strong> — to process UPI, IMPS, and card transactions</li>
          <li><strong>KYC partners</strong> — for identity verification (CKYC, Aadhaar e-KYC)</li>
          <li><strong>Cloud providers</strong> — AWS Mumbai region, with end-to-end encryption</li>
          <li><strong>Law enforcement</strong> — when lawfully compelled by a court or competent authority</li>
        </ul>
        <p>We <em>never</em> sell your personal data to advertisers or data brokers.</p>
      </>
    ),
  },
  {
    id: 'security', title: '5. How We Protect Your Data',
    body: (
      <>
        <ul>
          <li>AES-256 encryption at rest, TLS 1.3 in transit</li>
          <li>Tokenization of bank account and card numbers</li>
          <li>ISO 27001, PCI-DSS, and SOC 2 Type II certified infrastructure</li>
          <li>Multi-factor authentication for all admin access</li>
          <li>Annual third-party penetration testing</li>
        </ul>
      </>
    ),
  },
  {
    id: 'rights', title: '6. Your Rights (DPDP Act)',
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> a copy of the personal data we hold about you</li>
          <li><strong>Correction</strong> &amp; updating inaccurate or incomplete data</li>
          <li><strong>Erasure</strong> ("right to be forgotten") subject to legal retention requirements</li>
          <li><strong>Withdraw consent</strong> for processing, where it is consent-based</li>
          <li><strong>Grievance</strong> redressal — see Section 10</li>
          <li><strong>Nominate</strong> another person to exercise these rights on your behalf</li>
        </ul>
      </>
    ),
  },
  {
    id: 'retention', title: '7. Data Retention',
    body: (
      <>
        <p>We retain personal and transactional data for a minimum of <strong>8 years</strong> after account closure, as required under the Prevention of Money Laundering Act, 2002, and RBI guidelines. After this period, data is securely deleted or anonymised.</p>
      </>
    ),
  },
  {
    id: 'cookies', title: '8. Cookies & Tracking',
    body: (
      <>
        <p>Our website uses essential cookies for login and session management, and analytics cookies (only with your consent). You can manage cookie preferences in your browser at any time. The mobile app does not use third-party tracking SDKs.</p>
      </>
    ),
  },
  {
    id: 'children', title: '9. Children\'s Privacy',
    body: (
      <>
        <p>PayWallet is not intended for use by anyone under 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a minor, please contact us so we can delete it.</p>
      </>
    ),
  },
  {
    id: 'grievance', title: '10. Grievance Officer',
    body: (
      <>
        <p>If you have a privacy concern, please contact our Grievance Officer:</p>
        <p><strong>Ms. Anjali Rao</strong><br/>
        Grievance Officer, PayWallet Technologies Pvt. Ltd.<br/>
        Email: <strong>grievance@paywallet.in</strong><br/>
        Phone: 1800-123-PAYW (Mon–Sat, 9 AM–6 PM IST)</p>
        <p>We will acknowledge your complaint within 24 hours and resolve it within 30 days.</p>
      </>
    ),
  },
  {
    id: 'updates', title: '11. Updates to This Policy',
    body: (
      <>
        <p>We may update this Privacy Policy from time to time. Material changes will be notified via push notification, email, and an in-app banner at least 30 days before they take effect.</p>
      </>
    ),
  },
]

export default function Privacy() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        eyebrowColor="coral"
        title={<>Privacy <span className="grad-coral">Policy</span></>}
        subtitle="Last updated: 28 May 2026. Your privacy isn't a feature — it's the foundation of everything we build."
      />

      <section className="section">
        <div className="container">
          <div className="legal-layout">
            <aside className="legal-toc reveal">
              <h4>On this page</h4>
              <ul>
                {SECTIONS.map(s => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
                ))}
              </ul>
              <div className="legal-toc-foot">
                <Link to="/terms" className="tx-btn outline">Terms &amp; Conditions <span>→</span></Link>
              </div>
            </aside>

            <article className="legal-article reveal">
              {SECTIONS.map(s => (
                <section id={s.id} key={s.id} className="legal-block">
                  <h2>{s.title}</h2>
                  {s.body}
                </section>
              ))}

              <div className="legal-footnote">
                <p>For privacy questions, write to <strong>privacy@paywallet.in</strong> or our Grievance Officer at the address above.</p>
              </div>

              <div className="cta-strip" style={{ marginTop: 40 }}>
                <div>
                  <h3>Exercise your rights</h3>
                  <p>Request a copy of your data, correct it, or close your account — all from the app or by writing to us.</p>
                </div>
                <div className="cta-strip-actions">
                  <Link to="/terms" className="btn-outline big">Read Terms</Link>
                  <Link to="/contact" className="btn-primary big">Contact Privacy Team</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
