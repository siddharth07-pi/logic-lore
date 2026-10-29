import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShoppingBag,
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
  Check,
} from 'lucide-react';
import { FLAGSHIP_PRODUCT, PRODUCTS_CATALOG } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailsPage: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Set document title
  useEffect(() => {
    document.title = 'The Last Spark | Logic Lore';
  }, []);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const product = FLAGSHIP_PRODUCT;
  const currentImage = product.images.gallery[activeImageIndex] || product.images.gallery[0];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  // Related products (future concepts)
  const relatedProducts = PRODUCTS_CATALOG.filter((p) => !p.isFlagship).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to="/products" className="hover:text-white transition-colors">
          Kits Catalogue
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-[#00D9FF] font-semibold">{product.title}</span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Product Gallery with Switcher */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Active Image Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-[#071426] border border-[#00D9FF]/30 shadow-2xl aspect-[16/10] sm:aspect-[16/11]">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/50 to-transparent p-4">
              <p className="text-xs text-slate-200 font-medium">
                {currentImage.caption}
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-[#071426]/85 backdrop-blur-md px-3 py-1 rounded-lg border border-[#00D9FF]/40 text-xs font-bold text-[#00D9FF]">
              CONCEPT PREVIEW
            </div>
          </div>

          {/* Gallery Thumbnails Switcher */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {product.images.gallery.map((img, idx) => (
              <button
                key={img.url + idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? 'border-[#00D9FF] shadow-lg shadow-[#00D9FF]/20 scale-105'
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
                aria-label={`View image: ${img.caption}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 italic text-center pt-1">
            * AI-generated concept images illustrating proposed packaging, component trays, and learning moments.
          </div>
        </div>

        {/* Right Column: Product Info & Purchase Actions */}
        <div className="lg:col-span-5 space-y-6">
          {/* Mandatory Brand & Product Presentation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 uppercase">
                {product.brand} FLAGSHIP
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FF7A30]/10 text-[#FF7A30] border border-[#FF7A30]/30">
                {product.ageRange}
              </span>
            </div>

            {/* Exact Required Presentation */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              THE LAST SPARK — BY LOGIC LORE
            </h1>

            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {product.subtitle}
            </p>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-xl bg-[#0B1F3A]/70 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black text-[#FF7A30] font-mono">
                {product.formattedPrice}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Proposed Retail Price (Incl. GST across India)
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
              Inaugural Pilot Edition
            </span>
          </div>

          {/* Short Narrative & Educational Summary */}
          <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              When a catastrophic blackout paralyses the futuristic metropolis of Neo-Veridia, a mysterious threat awakens in the darkness.
            </p>
            <p>
              Young inventors read the 36-page science-fiction comic, learn the electrical science behind each plot obstacle, assemble physical circuits on a breadboard, and solve engineering challenges to save humanity.
            </p>
          </div>

          {/* Specifications Chips */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-[#071426] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Curriculum</span>
              <strong className="text-white">Story + Circuits</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071426] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Tools Required</span>
              <strong className="text-white">None (100% Solderless)</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071426] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Power</span>
              <strong className="text-white">Safe 4.5V Low Voltage</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071426] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Included Parts</span>
              <strong className="text-white">60+ Modular Components</strong>
            </div>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="pt-2 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-slate-400">Quantity:</span>
              <div className="flex items-center border border-slate-700 rounded-xl bg-[#071426] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-white font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full sm:flex-1 py-4 px-6 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${
                  addedToast
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#102A4E] hover:bg-[#153460] text-[#00D9FF] hover:text-white border border-[#00D9FF]/40 hover:border-[#00D9FF]'
                }`}
              >
                {addedToast ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <CreditCard className="w-5 h-5" />
                <span>Buy Now &rarr;</span>
              </button>
            </div>

            {/* Fulfilment note */}
            <p className="text-[11px] text-slate-400 text-center">
              Pre-orders recorded for inaugural batch manufacturing. No payment is charged during this design demonstration.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION: DETAILED PROPOSED COMPONENT LIST                 */}
      {/* ========================================================= */}
      <section id="components" className="space-y-8 pt-8 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF]">
            PACKAGE MANIFEST
          </span>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            PROPOSED HARDWARE & COMPONENT BREAKDOWN
          </h2>
          <p className="text-sm text-slate-300">
            Carefully curated to empower hands-on learning across all 4 comic missions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.components.map((comp) => (
            <div
              key={comp.id}
              className="p-5 rounded-xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                    {comp.name}
                  </h3>
                  {comp.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF7A30]/20 text-[#FF7A30] border border-[#FF7A30]/30 font-bold">
                      {comp.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                <strong className="text-[#00D9FF]">What you explore: </strong>
                {comp.whatYouExplore}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: LEARNING OBJECTIVES & HOW THE KIT WORKS          */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 border-t border-slate-800">
        {/* Learning Objectives */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-[#00D9FF]">CURRICULUM IMPACT</span>
            <h2 className="text-2xl font-bold text-white font-heading mt-1">
              Core Learning Objectives
            </h2>
          </div>

          <div className="space-y-4">
            {product.learningObjectives.map((obj) => (
              <div key={obj.title} className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{obj.title}</h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Supervised Exploration */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400">SAFETY & GUARANTEE</span>
            <h2 className="text-2xl font-bold text-white font-heading mt-1">
              Safety Information & Guidelines
            </h2>
          </div>

          <div className="space-y-3">
            {product.safetyGuidelines.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-[#071426] border border-slate-800 text-xs text-slate-400">
              🛡️ All components conform to standard low-voltage educational hobbyist ratings. Adult guidance is encouraged to celebrate learning breakthroughs together.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION: RELATED PRODUCTS AREA                            */}
      {/* ========================================================= */}
      <section className="space-y-8 pt-8 border-t border-slate-800">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              EXPANDING THE UNIVERSE
            </span>
            <h2 className="text-2xl font-bold text-white font-heading mt-1">
              Explore More from LOGIC LORE
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs text-[#00D9FF] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>View All Kits</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};
