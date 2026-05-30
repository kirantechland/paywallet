import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Features from './pages/Features'
import Bills from './pages/Bills'
import HowItWorks from './pages/HowItWorks'
import Payments from './pages/Payments'
import Security from './pages/Security'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Download from './pages/Download'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/security" element={<Security />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Download />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
