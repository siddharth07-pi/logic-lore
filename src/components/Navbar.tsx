import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SearchModal } from './SearchModal';
import { AccountModal } from './AccountModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore Kits', path: '/products' },
    { label: 'The Story', path: '/story' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'For Schools', path: '/for-schools' },
    { label: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071426]/95 backdrop-blur-md border-b border-[#00D9FF]/20 shadow-lg shadow-[#071426]/80'
            : 'bg-[#071426]/80 backdrop-blur-sm border-b border-slate-800/80'
        }`}
      >
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-[#0B1F3A] via-[#0D264A] to-[#0B1F3A] border-b border-[#00D9FF]/10 text-xs py-1.5 px-4 text-center text-slate-300 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 text-[#00D9FF] font-semibold tracking-wider uppercase text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A30]" />
            Inaugural Pre-Orders Open
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="text-slate-300">
            Meet <strong className="text-white">THE LAST SPARK</strong> — Our Flagship Electronics Kit for Ages 8–14.
          </span>
          <Link
            to="/products/the-last-spark"
            className="text-[#00D9FF] hover:text-white underline decoration-[#00D9FF]/50 hover:decoration-white font-medium ml-1 transition-colors"
          >
            Explore &rarr;
          </Link>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] rounded-lg p-1 transition-transform hover:scale-[1.02]"
            title="LOGIC LORE — Story-Driven STEM Learning"
          >
            <img
              src="/images/logic-lore-logo.png"
              alt="LOGIC LORE"
              className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,122,48,0.25)] group-hover:drop-shadow-[0_0_16px_rgba(0,217,255,0.4)] transition-all"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    active
                      ? 'text-[#00D9FF] bg-[#0B1F3A] shadow-inner border border-[#00D9FF]/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00D9FF] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search kit components and missions"
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account Trigger */}
            <button
              onClick={() => setAccountOpen(true)}
              aria-label="Inventor Profile / Demo Account"
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart Link with Live Counter */}
            <Link
              to="/cart"
              aria-label={`Shopping cart containing ${totalItems} items`}
              className="relative p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#FF7A30] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-[#FF7A30]/50 animate-bounce">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Prominent Flagship CTA: SHOP THE KIT */}
            <Link
              to="/products/the-last-spark"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-semibold text-sm shadow-md shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>SHOP THE KIT</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-[#00D9FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071426] border-b border-[#00D9FF]/20 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                      active
                        ? 'text-[#00D9FF] bg-[#0B1F3A] border-l-4 border-[#00D9FF]'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <Link
                  to="/products/the-last-spark"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#FF7A30] to-[#E86A22] text-white font-bold text-center shadow-lg shadow-[#FF7A30]/30"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>SHOP THE KIT — THE LAST SPARK</span>
                </Link>

                <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-2">
                  <span>LOGIC LORE Educational Kits</span>
                  <span className="text-[#00D9FF]">India Edition (₹)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  );
};
