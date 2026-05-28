import { useEffect } from 'react'

export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!els.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = [...entry.target.parentElement.children].indexOf(entry.target)
          entry.target.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
