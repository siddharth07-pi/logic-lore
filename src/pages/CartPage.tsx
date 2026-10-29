import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();

  const formattedSubtotal = `₹${subtotal.toLocaleString('en-IN')}`;

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#0B1F3A] border border-slate-800 flex items-center justify-center text-[#00D9FF] mx-auto shadow-xl">
          <ShoppingBag className="w-10 h-10 opacity-70" />
        </div>
        <h1 className="text-3xl font-extrabold text-white font-heading">
          Your Shopping Cart is Empty
        </h1>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          You haven’t added any STEM kits yet. Begin your adventure by exploring <strong className="text-white">THE LAST SPARK</strong> — our flagship electronics learning kit.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products/the-last-spark"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore THE LAST SPARK</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#102A4E] text-[#00D9FF] border border-[#00D9FF]/30 text-xs font-semibold"
          >
            View All Offerings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF]">
            YOUR SELECTIONS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
            Shopping Cart ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})
          </h1>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => {
            const lineTotal = item.product.price * item.quantity;
            return (
              <div
                key={item.product.id}
                className="p-4 sm:p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#00D9FF]/30 transition-all"
              >
                {/* Thumbnail & Metadata */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.product.images.primary}
                    alt={item.product.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-slate-700 shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#00D9FF] uppercase tracking-wider block">
                      {item.product.brand}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white font-tech tracking-wide">
                      {item.product.title}
                    </h2>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {item.product.subtitle}
                    </p>
                    <div className="text-xs font-mono text-[#FF7A30] pt-1">
                      Unit: {item.product.formattedPrice}
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-slate-700 rounded-xl bg-[#071426] overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-white font-mono">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right">
                    <div className="text-lg font-bold text-white font-mono">
                      ₹{lineTotal.toLocaleString('en-IN')}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[11px] text-slate-400 hover:text-red-400 transition-colors mt-0.5"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D9FF] hover:underline"
            >
              &larr; Continue Exploring Kits
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0B1F3A]/90 border border-[#00D9FF]/30 shadow-2xl space-y-6">
          <h2 className="text-xl font-bold text-white font-heading border-b border-slate-800 pb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between text-slate-300">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-mono font-bold text-white">{formattedSubtotal}</span>
            </div>

            <div className="flex items-start justify-between text-slate-400 text-xs">
              <span>Estimated Shipping</span>
              <span className="text-right italic">Calculated at checkout</span>
            </div>

            <div className="flex items-start justify-between text-slate-400 text-xs">
              <span>Applicable Taxes (GST)</span>
              <span className="text-right text-emerald-400 font-mono">Inclusive</span>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-base font-bold text-white">Estimated Total</span>
                <span className="block text-[10px] text-slate-400 font-mono">Indian Rupees (INR)</span>
              </div>
              <span className="text-2xl font-black text-[#FF7A30] font-mono">
                {formattedSubtotal}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Policy clarification */}
          <div className="p-3 rounded-xl bg-[#071426] border border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Pilot Pre-Order Guarantee</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Shipping fees and delivery schedules will be confirmed upon formal batch production release. No actual payment is taken today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
