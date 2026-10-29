import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Sparkles, Shield, GraduationCap } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050E1B] border-t border-[#183359] text-slate-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C4DFF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1F3A] to-[#071426] border border-[#00D9FF]/40 flex items-center justify-center group-hover:border-[#00D9FF] transition-all">
                <Zap className="w-5 h-5 text-[#00D9FF] group-hover:text-[#FF7A30] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-wider text-white font-tech">
                  LOGIC LORE
                </span>
                <span className="text-[10px] tracking-widest text-[#00D9FF]/80 uppercase font-semibold">
                  READ. BUILD. SAVE HUMANITY.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              LOGIC LORE is an educational startup combining imaginative science-fiction storytelling with real electronic circuits, illustrated experiment guides, and practical engineering challenges for young inventors aged 8–14.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1F3A] border border-[#00D9FF]/20 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                <span>Flagship Product: <strong className="text-white">THE LAST SPARK</strong></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <div className="text-xs uppercase font-semibold tracking-wider text-slate-400 mb-2">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                {[
                  { name: 'X / Twitter', url: BRAND_CONFIG.socialLinks.twitter, label: '𝕏' },
                  { name: 'Instagram', url: BRAND_CONFIG.socialLinks.instagram, label: 'IG' },
                  { name: 'YouTube', url: BRAND_CONFIG.socialLinks.youtube, label: 'YT' },
                  { name: 'LinkedIn', url: BRAND_CONFIG.socialLinks.linkedin, label: 'in' },
                  { name: 'GitHub', url: BRAND_CONFIG.socialLinks.github, label: 'git' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0B1F3A] border border-slate-700 hover:border-[#00D9FF] text-slate-300 hover:text-[#00D9FF] flex items-center justify-center text-xs font-mono transition-colors"
                    title={s.name}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00D9FF]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white hover:underline transition-colors">
                  Explore STEM Kits
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-white hover:underline transition-colors">
                  The Story Universe
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-white hover:underline transition-colors">
                  How Logic Lore Works
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF7A30]">
              The Flagship Kit
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products/the-last-spark"
                  className="font-semibold text-white hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7A30]" />
                  THE LAST SPARK Kit
                </Link>
              </li>
              <li>
                <Link to="/products/the-last-spark#components" className="hover:text-white hover:underline transition-colors">
                  Hardware Components
                </Link>
              </li>
              <li>
                <Link to="/story#missions" className="hover:text-white hover:underline transition-colors">
                  Hands-on Missions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Future Kit Concepts
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white hover:underline transition-colors">
                  View Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7C4DFF]">
              Institutions & Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/for-schools"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 text-slate-200"
                >
                  <GraduationCap className="w-4 h-4 text-[#7C4DFF]" />
                  For Schools & Labs
                </Link>
              </li>
              <li>
                <Link to="/for-schools#inquiry" className="hover:text-white hover:underline transition-colors">
                  Request Institutional Quote
                </Link>
              </li>
              <li>
                <Link to="/contact?dept=safety" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  Safety & Standards
                </Link>
              </li>
              <li>
                <Link to="/contact?dept=shipping" className="hover:text-white hover:underline transition-colors">
                  Shipping & Dispatch
                </Link>
              </li>
              <li>
                <Link to="/contact?dept=returns" className="hover:text-white hover:underline transition-colors">
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  Terms & Privacy Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <p>© 2026 Logic Lore. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 mt-1">
              THE LAST SPARK is a STEM learning kit created and sold by LOGIC LORE.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <span>Prices in Indian Rupees (₹)</span>
            <span>•</span>
            <span>Story-Driven Electronics for Ages 8–14</span>
            <span>•</span>
            <Link to="/contact" className="text-[#00D9FF] hover:underline">
              support@logiclore.in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
