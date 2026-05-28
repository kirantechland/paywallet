const colors = ['#14b8a6', '#ff6a4d', '#a78bfa', '#38bdf8', '#fbbf24', '#34d399']

let injected = false
function ensureStyle() {
  if (injected) return
  injected = true
  const style = document.createElement('style')
  style.textContent = `
    .confetti{position:fixed;width:8px;height:12px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFly 1.1s cubic-bezier(.2,.6,.3,1) forwards;}
    @keyframes confettiFly{0%{transform:translate(-50%,-50%) rotate(0);opacity:1}100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) rotate(var(--rot));opacity:0}}
  `
  document.head.appendChild(style)
}

export function spawnConfetti(x, y) {
  ensureStyle()
  for (let i = 0; i < 22; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti'
    piece.style.background = colors[Math.floor(Math.random() * colors.length)]
    piece.style.left = x + 'px'
    piece.style.top = y + 'px'
    const dx = (Math.random() - 0.5) * 240
    const dy = (Math.random() - 1) * 240
    const rot = (Math.random() - 0.5) * 720
    piece.style.setProperty('--dx', dx + 'px')
    piece.style.setProperty('--dy', dy + 'px')
    piece.style.setProperty('--rot', rot + 'deg')
    document.body.appendChild(piece)
    setTimeout(() => piece.remove(), 1200)
  }
}

export function confettiOnClick(e) {
  const r = e.currentTarget.getBoundingClientRect()
  spawnConfetti(r.left + r.width / 2, r.top + r.height / 2)
}
