import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useReveal from '../hooks/useReveal'

/* Stable placeholder images via picsum.photos seeded URLs */
const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/paywallet-${seed}/${w}/${h}`

const ITEMS = [
  { id: 1,  cat: 'events',    title: 'PayWallet Founders Day',           place: 'Bengaluru · Apr 2026', span: 'tall'  },
  { id: 2,  cat: 'merchants', title: 'Onboarding 1,000th merchant',      place: 'Hyderabad · Mar 2026', span: 'wide'  },
  { id: 3,  cat: 'office',    title: 'Bengaluru HQ rooftop',             place: 'Koramangala',          span: ''      },
  { id: 4,  cat: 'team',      title: 'Engineering offsite',              place: 'Coorg · Feb 2026',     span: ''      },
  { id: 5,  cat: 'events',    title: 'India Fintech Summit',             place: 'Mumbai · Jan 2026',    span: ''      },
  { id: 6,  cat: 'merchants', title: 'Chai vendor activation',           place: 'Old Delhi',            span: 'tall'  },
  { id: 7,  cat: 'office',    title: 'Open work area',                   place: 'Bengaluru HQ',         span: ''      },
  { id: 8,  cat: 'team',      title: 'Customer-support team',            place: 'Pune',                 span: 'wide'  },
  { id: 9,  cat: 'events',    title: 'Hack night with NPCI',             place: 'Mumbai',               span: ''      },
  { id: 10, cat: 'merchants', title: 'Kirana store QR rollout',          place: 'Chennai',              span: ''      },
  { id: 11, cat: 'office',    title: 'Design studio',                    place: 'Bengaluru HQ',         span: ''      },
  { id: 12, cat: 'team',      title: 'Diwali 2025 celebration',          place: 'Bengaluru',            span: 'tall'  },
].map(x => ({ ...x, src: img(x.id, x.span === 'wide' ? 1200 : 800, x.span === 'tall' ? 1000 : x.span === 'wide' ? 600 : 700) }))

const FILTERS = [
  { id: 'all',       label: 'All'       },
  { id: 'events',    label: 'Events'    },
  { id: 'merchants', label: 'Merchants' },
  { id: 'office',    label: 'Office'    },
  { id: 'team',      label: 'Team'      },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [openIdx, setOpenIdx] = useState(-1)
  useReveal([active])

  const items = active === 'all' ? ITEMS : ITEMS.filter(it => it.cat === active)

  const close = useCallback(() => setOpenIdx(-1), [])
  const next  = useCallback(() => setOpenIdx(i => (i + 1) % items.length), [items.length])
  const prev  = useCallback(() => setOpenIdx(i => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (openIdx === -1) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx, close, next, prev])

  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        eyebrowColor="coral"
        title={<>Moments that <span className="grad-coral">made us</span></>}
        subtitle="A peek into our offices, events, customer activations and the people behind PayWallet."
      />

      <section className="section">
        <div className="container">
          <div className="gal-tabs reveal" role="tablist">
            {FILTERS.map(f => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                className={`gal-tab ${active === f.id ? 'active' : ''}`}
                onClick={() => setActive(f.id)}>
                {f.label}
                <span className="gal-tab-count">{f.id === 'all' ? ITEMS.length : ITEMS.filter(i => i.cat === f.id).length}</span>
              </button>
            ))}
          </div>

          <div className="gal-grid" key={active}>
            {items.map((it, i) => (
              <button
                key={it.id}
                className={`gal-card ${it.span}`}
                style={{ '--i': i }}
                onClick={() => setOpenIdx(i)}>
                <img src={it.src} alt={it.title} loading="lazy" />
                <span className="gal-card-meta">
                  <strong>{it.title}</strong>
                  <small>{it.place}</small>
                </span>
                <span className="gal-card-cat">{it.cat}</span>
              </button>
            ))}
          </div>

          <div className="cta-strip reveal" style={{ marginTop: 56 }}>
            <div>
              <h3>Want to be part of the next chapter?</h3>
              <p>We're always meeting brilliant people building the future of money.</p>
            </div>
            <div className="cta-strip-actions">
              <Link to="/team" className="btn-outline big">Meet the team</Link>
              <Link to="/contact" className="btn-primary big">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      {openIdx > -1 && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={close} aria-label="Close">×</button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">›</button>

          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={items[openIdx].src.replace(/(\d+)\/(\d+)$/, '1600/1200')} alt={items[openIdx].title} />
            <figcaption>
              <strong>{items[openIdx].title}</strong>
              <small>{items[openIdx].place}</small>
              <span className="lb-counter">{openIdx + 1} / {items.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
