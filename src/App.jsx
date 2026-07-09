import Navbar from './components/global/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/global/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#8a2b53]/10 selection:text-[#8a2b53]">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Homepage />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default App
