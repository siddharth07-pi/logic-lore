import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NotificationToast: React.FC = () => {
  const { notificationMessage, dismissNotification, lastAddedProduct } = useCart();

  if (!notificationMessage) return null;

  return (
    <aside
      aria-label="Notification alert"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#0B1F3A] border border-[#00D9FF] rounded-xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#00D9FF]/20 text-[#00D9FF] shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{notificationMessage}</p>
          <p className="text-xs text-slate-300 mt-0.5">
            {lastAddedProduct?.brand} — {lastAddedProduct?.subtitle}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Link
              to="/cart"
              onClick={dismissNotification}
              className="text-xs px-3 py-1.5 rounded-lg bg-[#FF7A30] hover:bg-[#E86A22] text-white font-bold flex items-center gap-1.5 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={dismissNotification}
              className="text-xs px-3 py-1.5 rounded-lg bg-[#102A4E] hover:bg-[#153460] text-[#00D9FF] border border-[#00D9FF]/40 font-semibold transition-colors"
            >
              Quick Checkout
            </Link>
          </div>
        </div>
        <button
          onClick={dismissNotification}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
