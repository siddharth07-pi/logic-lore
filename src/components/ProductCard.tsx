import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Check, Clock } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);

  const isAvailable = product.status === 'available';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAvailable) return;
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div
      className={`group relative rounded-2xl bg-[#0B1F3A]/90 border transition-all duration-300 flex flex-col overflow-hidden ${
        featured
          ? 'border-[#00D9FF]/40 shadow-xl shadow-[#00D9FF]/10 hover:border-[#00D9FF] hover:shadow-2xl hover:shadow-[#00D9FF]/20'
          : 'border-slate-800 hover:border-slate-700 hover:bg-[#0D223F]'
      }`}
    >
      {/* Top Media / Thumbnail */}
      <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden bg-[#071426]">
        <img
          src={product.images.primary}
          alt={`${product.title} by ${product.brand}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />

        {/* Brand Eyebrow Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#071426]/90 border border-[#00D9FF]/30 text-[#00D9FF] backdrop-blur-md uppercase tracking-wider">
            {product.brand}
          </span>
          {product.badge && (
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md uppercase tracking-wider ${
                product.isFlagship
                  ? 'bg-[#FF7A30] text-white shadow-md shadow-[#FF7A30]/30'
                  : 'bg-slate-800/90 text-slate-300 border border-slate-700'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Age Badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#071426]/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {product.ageRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors font-tech tracking-wide">
              {product.title}
            </h3>
            <span className="text-lg font-bold text-[#FF7A30] font-mono">
              {product.formattedPrice}
            </span>
          </div>

          <p className="text-xs text-slate-400 font-medium tracking-wide">
            {product.subtitle}
          </p>

          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#102A4E] hover:bg-[#153460] text-white hover:text-[#00D9FF] font-semibold text-xs tracking-wide border border-[#00D9FF]/20 hover:border-[#00D9FF]/60 transition-all flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {isAvailable ? (
            <button
              onClick={handleAddToCart}
              className={`py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50'
              }`}
              title="Add to Cart"
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          ) : (
            <span className="py-2.5 px-3 rounded-xl bg-slate-800 text-slate-400 font-medium text-xs flex items-center gap-1 cursor-not-allowed">
              <Clock className="w-3.5 h-3.5" />
              <span>Concept Only</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
