import { useState } from 'react'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  useReveal([])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        eyebrowColor="coral"
        title={<>We'd love to <span className="grad-coral">hear from you</span></>}
        subtitle="Questions, feedback, partnership ideas — drop us a line and our team will get back within 24 hours."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Reach us anywhere</h3>
              <div className="contact-item">
                <span className="ci-ic mint">✉</span>
                <div><strong>Email</strong><small>support@paywallet.in</small></div>
              </div>
              <div className="contact-item">
                <span className="ci-ic peach">☎</span>
                <div><strong>Phone</strong><small>1800-123-PAYW (24/7)</small></div>
              </div>
              <div className="contact-item">
                <span className="ci-ic lilac">📍</span>
                <div><strong>HQ</strong><small>2nd Floor, Prestige Tower, Koramangala, Bengaluru 560034</small></div>
              </div>
              <div className="contact-item">
                <span className="ci-ic sky">💬</span>
                <div><strong>Live Chat</strong><small>Open inside the app — instant reply</small></div>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={onSubmit}>
              <h3>Send us a message</h3>
              <label>
                <span>Name</span>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
              </label>
              <label>
                <span>Email</span>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?"></textarea>
              </label>
              <button type="submit" className="btn-primary big">
                {sent ? 'Message sent ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
