import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Phone, ArrowLeft, Send } from 'lucide-react'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Reset active image and scroll to top when product ID changes
  useEffect(() => {
    setActiveImageIndex(0)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20 flex flex-col items-center justify-center font-body px-6">
        <h2 className="font-display italic text-4xl text-[#241C15] mb-4">Product Not Found</h2>
        <p className="text-sm text-slate-500 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link
          to="/products"
          className="bg-[#A63446] hover:bg-[#8f2b3a] text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
        >
          View All Products
        </Link>
      </div>
    )
  }

  const activeImg = product.images[activeImageIndex] || product.images[0]

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-28 pb-20 font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Decorative dot background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#241C15 0.7px, transparent 0.7px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Breadcrumb & Navigation links */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#241C15]/60 hover:text-[#A63446] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products Catalogue
          </Link>
          <div className="text-xs sm:text-sm font-semibold text-[#241C15]/40">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/products" className="hover:underline">Catalogue</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#A63446] line-clamp-1 inline">{product.name}</span>
          </div>
        </div>

        {/* Main Details Panel */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left: Interactive Image Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="relative aspect-square w-full rounded-2xl bg-[#fafaf9] border border-slate-100/80 overflow-hidden flex items-center justify-center p-6 group">
                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-sm bg-[#A63446]">
                  {product.badge}
                </span>

                {/* Rating */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <span className="text-xs font-bold text-slate-800">{product.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-slate-400">({product.reviews} reviews)</span>
                </div>

                {/* Main Product Image with subtle hover zoom */}
                <img
                  src={activeImg}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Thumbnails list */}
              {product.images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl border overflow-hidden p-1.5 bg-white transition-all cursor-pointer ${
                        idx === activeImageIndex
                          ? 'border-[#A63446] ring-3 ring-[#A63446]/10 scale-105 shadow-sm'
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info & Pricing */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#146B5E] bg-[#146B5E]/5 px-3.5 py-1 rounded-full">
                    {product.category === 'polymer' ? 'Polymer Film Roll' : 'Embroidery Sheet'}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Min. Order Quantity: {product.minOrder}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241C15] leading-snug mb-4">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Estimated Wholesaler Rate</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#A63446] mt-0.5">{product.price}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#241C15]/50 mb-3">Product Description</h3>
                  <p className="text-sm sm:text-base text-[#241C15]/75 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons for Direct Inquiry */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#241C15]/50 mb-4">Direct Buying Inquiry</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918866304000"
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#A63446] hover:bg-[#8f2b3a] text-white text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Sales Manager</span>
                  </a>
                  <a
                    href={`https://wa.me/918866304000?text=Hi!%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.price)}).%20Please%20send%20specs%20and%20delivery%20terms.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 text-sm font-semibold transition-all cursor-pointer text-center"
                  >
                    <Send className="w-4 h-4 text-emerald-500 fill-current" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm mb-20">
          <h2 className="text-lg sm:text-xl font-bold text-[#241C15] mb-6 pb-3 border-b border-slate-100 uppercase tracking-wider">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-3 border-b border-slate-50 text-sm">
                <span className="text-[#241C15]/50 font-semibold uppercase text-xs">{key}</span>
                <span className="text-[#241C15]/90 font-medium text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="border-t border-slate-200/60 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A63446] uppercase mb-3 inline-block">
              Recommendations
            </span>
            <h2 className="font-display italic text-3xl sm:text-4xl text-[#241C15]">
              Explore Our <span className="not-italic font-semibold text-[#146B5E]">Other Products</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Browse through our complete list of premium polymer rolls and embroidery materials.
            </p>
          </div>

          {/* List of recommended products (all products) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => {
              const isActive = p.id === id
              return (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className={`group flex flex-col bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-pointer ${
                    isActive ? 'border-[#A63446] ring-2 ring-[#A63446]/5' : 'border-slate-100'
                  }`}
                >
                  <div className="relative aspect-square w-full bg-[#fafaf9] overflow-hidden flex items-center justify-center p-4">
                    {/* Badge */}
                    <span className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase text-white shadow-sm bg-[#A63446]">
                      {p.badge}
                    </span>

                    {/* Image */}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-104 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] font-bold text-[#146B5E] mb-1.5 uppercase tracking-wider">
                      {p.category === 'polymer' ? 'Polymer Film' : 'Embroidery'}
                    </span>
                    
                    <h3 className="font-semibold text-[#241C15] text-sm leading-snug mb-2 group-hover:text-[#A63446] transition-colors line-clamp-2 h-10">
                      {p.name}
                    </h3>

                    <div className="border-t border-slate-100 pt-2.5 mt-auto flex justify-between items-center">
                      <span className="text-[10px] text-slate-400">Rate</span>
                      <span className="font-bold text-sm text-[#A63446]">{p.price}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
