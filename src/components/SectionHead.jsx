export default function SectionHead({ eyebrow, eyebrowColor = 'teal', title, children, onDark = false }) {
  return (
    <div className="section-head reveal">
      <span className={`eyebrow ${eyebrowColor} ${onDark ? 'on-dark' : ''}`}>{eyebrow}</span>
      <h2 className={onDark ? 'on-dark' : ''}>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  )
}
