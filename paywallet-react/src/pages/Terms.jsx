import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

const SECTIONS = [
  {
    id: 'acceptance', title: '1. Acceptance of Terms',
    body: (
      <>
        <p>By downloading, installing, or using the PayWallet mobile application or website (collectively, the "Service"), you agree to be bound by these Terms &amp; Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
        <p>These Terms constitute a legally binding agreement between you and PayWallet Technologies Pvt. Ltd. ("PayWallet", "we", "us", or "our"). We may update these Terms from time to time and will notify you of material changes.</p>
      </>
    ),
  },
  {
    id: 'eligibility', title: '2. Eligibility',
    body: (
      <>
        <p>To use PayWallet, you must:</p>
        <ul>
          <li>Be at least 18 years of age (or the age of majority in your jurisdiction)</li>
          <li>Be a resident of India with a valid mobile number</li>
          <li>Have a bank account at an RBI-licensed bank</li>
          <li>Provide accurate KYC documents as required by Indian law</li>
        </ul>
      </>
    ),
  },
  {
    id: 'account', title: '3. Account Registration & Security',
    body: (
      <>
        <p>You are responsible for maintaining the confidentiality of your PIN, biometric credentials, and other account-access details. PayWallet will never ask for your password, PIN, OTP, or CVV.</p>
        <p>You agree to notify us immediately of any unauthorized access or suspicious activity on your account by calling 1800-123-PAYW or reporting in-app.</p>
      </>
    ),
  },
  {
    id: 'use', title: '4. Permitted & Prohibited Use',
    body: (
      <>
        <p>You agree to use PayWallet only for lawful, personal, non-commercial purposes (unless you have a verified merchant account). You will not:</p>
        <ul>
          <li>Use the Service for money laundering, terrorist financing, or any illegal activity</li>
          <li>Attempt to reverse-engineer, hack, or circumvent security features</li>
          <li>Impersonate another person or misrepresent your affiliation</li>
          <li>Use bots, scrapers, or automated tools without our written consent</li>
        </ul>
      </>
    ),
  },
  {
    id: 'fees', title: '5. Fees & Charges',
    body: (
      <>
        <p>UPI transfers, wallet payments, and bill payments are free for personal use. Some services (e.g., international remittance, instant withdrawal, premium investment plans) may carry transparent, disclosed fees. You will be shown all applicable charges before completing any transaction.</p>
      </>
    ),
  },
  {
    id: 'wallet', title: '6. Wallet & Funds',
    body: (
      <>
        <p>Money loaded into the PayWallet semi-closed PPI (Prepaid Payment Instrument) is held in a separate escrow account with a scheduled commercial bank, as per RBI's Master Directions for PPIs.</p>
        <p>Wallet balances do not earn interest. KYC limits apply as per RBI guidelines.</p>
      </>
    ),
  },
  {
    id: 'liability', title: '7. Limitation of Liability',
    body: (
      <>
        <p>PayWallet provides a zero-liability protection for unauthorized transactions reported within 3 working days, subject to RBI's customer protection framework (RBI/2017-18/15).</p>
        <p>Except as required by law, PayWallet will not be liable for indirect, incidental, or consequential damages arising from use of the Service.</p>
      </>
    ),
  },
  {
    id: 'termination', title: '8. Suspension & Termination',
    body: (
      <>
        <p>We may suspend or terminate your account if we detect fraudulent activity, breach of these Terms, or as required by law-enforcement orders. You may close your account at any time from the in-app settings.</p>
      </>
    ),
  },
  {
    id: 'disputes', title: '9. Disputes & Grievances',
    body: (
      <>
        <p>Most issues can be resolved by contacting our in-app support. For unresolved complaints, our Grievance Officer can be reached at <strong>grievance@paywallet.in</strong>. As per RBI guidelines, disputes not resolved within 30 days may be escalated to the RBI Ombudsman.</p>
      </>
    ),
  },
  {
    id: 'law', title: '10. Governing Law & Jurisdiction',
    body: (
      <>
        <p>These Terms are governed by the laws of India. Any disputes arising from the use of PayWallet are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
      </>
    ),
  },
]

export default function Terms() {
  useReveal([])
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        eyebrowColor="teal"
        title={<>Terms &amp; <span className="grad-teal">Conditions</span></>}
        subtitle="Last updated: 28 May 2026. Please read these terms carefully before using PayWallet."
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
                <Link to="/privacy" className="tx-btn outline">Privacy Policy <span>→</span></Link>
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
                <p>For questions about these Terms, contact us at <strong>legal@paywallet.in</strong> or write to: PayWallet Technologies Pvt. Ltd., 2nd Floor, Prestige Tower, Koramangala, Bengaluru 560034.</p>
              </div>

              <div className="cta-strip" style={{ marginTop: 40 }}>
                <div>
                  <h3>Have a question?</h3>
                  <p>Our team is here to help — chat with us anytime, 24/7.</p>
                </div>
                <div className="cta-strip-actions">
                  <Link to="/privacy" className="btn-outline big">Read Privacy Policy</Link>
                  <Link to="/contact" className="btn-primary big">Contact Support</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
