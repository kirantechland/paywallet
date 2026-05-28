import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner reveal in" style={{ textAlign: 'center' }}>
          <span className="eyebrow coral">ERROR 404</span>
          <h1 className="page-title">Looks like that page <span className="grad-coral">wandered off</span></h1>
          <p className="page-sub">The link you followed may be broken or the page may have been removed.</p>
          <div style={{ marginTop: 24 }}>
            <Link to="/" className="btn-primary big">← Back to home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
