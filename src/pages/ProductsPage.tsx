import React, { useState } from 'react';
import { Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'available' | 'concept'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter products
  const filteredProducts = PRODUCTS_CATALOG.filter((p) => {
    if (filter === 'available') return p.status === 'available';
    if (filter === 'concept') return p.status !== 'available';
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return a.isFlagship ? -1 : 1;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF]">
          LOGIC LORE CATALOGUE
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
          EXPLORE THE LOGIC LORE UNIVERSE.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          LOGIC LORE is an educational startup engineering mission-driven STEM learning kits. Discover our flagship electronics adventure, <strong className="text-white">THE LAST SPARK</strong>, alongside upcoming STEM expansions.
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#00D9FF]" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Filter:</span>
          <div className="flex items-center gap-1">
            {[
              { id: 'all', label: 'All Kits' },
              { id: 'available', label: 'Flagship Ready' },
              { id: 'concept', label: 'Upcoming Concepts' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === f.id
                    ? 'bg-[#00D9FF] text-slate-950 font-bold shadow-md shadow-[#00D9FF]/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
          >
            <option value="featured">Featured / Flagship</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Flagship Highlight Banner if visible */}
      {filter !== 'concept' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#102A4E] to-[#0B1F3A] border-2 border-[#00D9FF]/40 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF7A30] uppercase">
                <Sparkles className="w-4 h-4" />
                Featured Flagship Product
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                THE LAST SPARK — A STEM Learning Kit by LOGIC LORE
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                The only kit on the market combining a gripping 36-page sci-fi graphic comic with hands-on breadboard electronics and mission challenge cards.
              </p>
            </div>
            <div className="text-center md:text-right shrink-0">
              <div className="text-3xl font-bold text-[#00D9FF] font-mono">₹1,499</div>
              <div className="text-xs text-slate-400 mt-0.5">Proposed Retail Price</div>
            </div>
          </div>
        </div>
      )}

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            featured={product.isFlagship}
          />
        ))}
      </div>

      {/* Catalogue Architecture Transparency Note */}
      <div className="p-6 rounded-2xl bg-[#071426] border border-slate-800 text-center max-w-2xl mx-auto space-y-2">
        <h3 className="text-sm font-bold text-slate-200">
          LOGIC LORE Product Architecture
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          LOGIC LORE is the parent brand for all our educational kits. While <strong className="text-slate-200">THE LAST SPARK</strong> is our initial flagship offering, additional expansion concepts displayed above represent future research kits currently in prototype curriculum design.
        </p>
      </div>
    </div>
  );
};
