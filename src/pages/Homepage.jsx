import AboutUs from '../components/AboutUs'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Features from '../components/Features'
import Hero from '../components/Hero'

export default function Homepage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <Hero />
      <AboutUs />
      <Categories />
      <BestSellers />
      <Features />
    </div>
  )
}
