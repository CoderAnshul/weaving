import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Homepage from './pages/Homepage'
import ShivShaktiPolyfilms from './pages/ShivShaktiPolyfilms'
import Footer from './components/global/Footer'

function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is fully loaded before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#8a2b53]/10 selection:text-[#8a2b53]">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shiv-shakti-polyfilms" element={<ShivShaktiPolyfilms />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default App
