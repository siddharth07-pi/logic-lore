import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Info,
  ChevronRight,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { FLAGSHIP_PRODUCT } from '../data/products';

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  notes?: string;
}

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Assam',
  'Bihar',
  'Delhi NCR',
  'Gujarat',
  'Haryana',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Punjab',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal',
  'Other State / Union Territory',
];

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();

  // If cart is empty, fallback to offering 1 flagship kit for demo testing
  const isCartEmpty = cart.length === 0;

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Karnataka',
    pinCode: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [demoRegistered, setDemoRegistered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const displaySubtotal = isCartEmpty ? FLAGSHIP_PRODUCT.price : subtotal;

  const validate = () => {
    const errs: Partial<Record<keyof CheckoutFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full recipient name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required for dispatch updates.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = '10-digit mobile number required for courier delivery.';
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.address.trim()) errs.address = 'Street and building address is required.';
    if (!formData.city.trim()) errs.city = 'City name is required.';
    if (!formData.pinCode.trim()) {
      errs.pinCode = '6-digit postal PIN code is required.';
    } else if (!/^[1-9][0-9]{5}$/.test(formData.pinCode.trim())) {
      errs.pinCode = 'Please enter a valid 6-digit Indian PIN code.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegisterPreOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setDemoRegistered(true);
      clearCart();
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Title & Breadcrumb */}
      <div>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/cart" className="hover:text-white">Cart</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#00D9FF]">Demonstration Checkout</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Checkout & Dispatch Registration
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Inaugural Pilot Batch • India Pre-Launch Order Processing Flow
        </p>
      </div>

      {/* Mandatory Demo Architecture Notice Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0B1F3A] border-2 border-[#00D9FF]/40 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#00D9FF] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-[#00D9FF] block uppercase tracking-wider text-xs">
            Startup Architecture Demo Notice:
          </strong>
          <p className="text-slate-300 leading-relaxed text-xs">
            This checkout workflow illustrates the customer ordering interface for <strong className="text-white">LOGIC LORE</strong>. We do not solicit or store real credit card or net banking details directly on the frontend. When production dispatch launches, this form directly triggers secure server-side session tokens with an authorized Indian payment gateway (e.g., Razorpay / Cashfree) with webhook verification.
          </p>
        </div>
      </div>

      {demoRegistered ? (
        /* Demo Registration Success Screen */
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0B1F3A]/90 border border-emerald-500/40 text-center space-y-6 shadow-2xl animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
              Demo Registration Recorded
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Pilot Pre-Order Intimation Registered!
            </h2>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your test pre-order details for delivery to <strong>{formData.city}, {formData.state} - {formData.pinCode}</strong> have been saved in local simulation state.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#071426] border border-slate-800 text-left space-y-2 text-xs text-slate-300">
            <div className="font-mono text-[#00D9FF] uppercase tracking-wider font-bold">
              Integration Readiness Checklist:
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-400 text-[11px]">
              <li>Customer delivery payload validated against Indian postal standards.</li>
              <li>Ready to connect to `POST /api/orders/create` with Razorpay Order API.</li>
              <li>Ready to trigger transactional confirmation emails via SendGrid / Resend.</li>
              <li>Zero live payment credentials handled directly on frontend (PCI-DSS compliant).</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00D9FF] hover:bg-[#38e2ff] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Explore More Kits
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        /* Form & Order Review Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0B1F3A]/70 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white font-heading border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>1. Delivery & Contact Details</span>
              <span className="text-xs font-mono text-[#00D9FF]">India Express</span>
            </h2>

            <form onSubmit={handleRegisterPreOrder} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Full Recipient Name <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Vikram Malhotra"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    Email Address <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    Mobile Number <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Delivery Street Address <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Flat / House No., Building Name, Street"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.address ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-red-400">{errors.address}</p>}
              </div>

              {/* City, State, PIN */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    City <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bengaluru"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.city ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-400">{errors.city}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    State <span className="text-[#FF7A30]">*</span>
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                  >
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    PIN Code <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.pinCode}
                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                    placeholder="560001"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.pinCode ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.pinCode && <p className="text-[11px] text-red-400">{errors.pinCode}</p>}
                </div>
              </div>

              {/* Delivery Notes */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Delivery Instructions <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Leave with security / Call upon arrival"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                />
              </div>

              {/* Payment Section (Clearly Defined Demo Gateway Integration Point) */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#FF7A30] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>2. Payment Processing Architecture</span>
                </h3>

                <div className="p-4 rounded-xl bg-[#071426] border border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Payment Gateway Mode:</span>
                    <span className="text-[#00D9FF] font-mono bg-[#00D9FF]/10 px-2 py-0.5 rounded">
                      Demo Simulation Mode
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    In production, clicking the button below redirects to Razorpay / UPI intent modal. To prevent simulated payment vulnerabilities, zero payment cards are accepted in this preview.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {isProcessing
                    ? 'Validating Order Payload...'
                    : `Confirm Pre-Order Intimation (₹${displaySubtotal.toLocaleString('en-IN')})`}
                </span>
              </button>
            </form>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#0B1F3A]/90 border border-[#00D9FF]/30 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold text-white font-heading border-b border-slate-800 pb-3">
              Order Review
            </h2>

            {/* Product items */}
            <div className="space-y-3">
              {(isCartEmpty ? [{ product: FLAGSHIP_PRODUCT, quantity: 1 }] : cart).map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#071426] border border-slate-800">
                  <img
                    src={item.product.images.primary}
                    alt={item.product.title}
                    className="w-14 h-14 object-cover rounded-lg border border-slate-700 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-[#00D9FF] uppercase truncate">
                      {item.product.brand}
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {item.product.title}
                    </div>
                    <div className="text-xs text-slate-400">
                      Qty: {item.quantity} × {item.product.formattedPrice}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[#FF7A30] font-mono">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Items Subtotal:</span>
                <span className="font-mono font-semibold text-white">
                  ₹{displaySubtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Standard Express Delivery:</span>
                <span className="italic text-slate-300">To be confirmed</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>GST (Goods & Services Tax):</span>
                <span className="text-emerald-400 font-mono">Included in proposed price</span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-bold text-white block">Proposed Order Total:</span>
                  <span className="text-[10px] text-slate-400 font-mono">Indian Rupees (INR)</span>
                </div>
                <span className="text-2xl font-black text-[#FF7A30] font-mono">
                  ₹{displaySubtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>LOGIC LORE Verified Educational Standard</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-colour 36-page comic & experiment guide included</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Solderless safe low-voltage electronics</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
