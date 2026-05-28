export default function PageHero({ eyebrow, eyebrowColor = 'teal', title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner reveal">
          {eyebrow && <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>}
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-sub">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
