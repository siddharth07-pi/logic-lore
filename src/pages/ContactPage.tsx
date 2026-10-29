import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Mail, Send, CheckCircle2, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';
import type { ContactInquiry } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get('dept') || 'general';

  const [formData, setFormData] = useState<ContactInquiry>({
    fullName: '',
    email: '',
    subject: '',
    department: initialDept,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactInquiry, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dept = searchParams.get('dept');
    if (dept) {
      setFormData((prev) => ({ ...prev, department: dept }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactInquiry, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF]">
          COMMUNICATIONS DESK
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
          GET IN TOUCH WITH LOGIC LORE.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Have a question about <strong className="text-white">THE LAST SPARK</strong>, educational partnerships, curriculum design, or our pilot launch? Send us a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
        {/* Left Column: Direct Inquiries & Configurable Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00D9FF]" />
              Direct Contacts
            </h2>

            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-[#071426] border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#00D9FF] block">
                  General & Parent Support
                </span>
                <a
                  href={`mailto:${BRAND_CONFIG.contact.inquiriesEmail}`}
                  className="font-medium text-white hover:text-[#00D9FF] transition-colors"
                >
                  {BRAND_CONFIG.contact.inquiriesEmail}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-[#071426] border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#7C4DFF] block">
                  Schools & Institutional Inquiries
                </span>
                <a
                  href={`mailto:${BRAND_CONFIG.contact.institutionalEmail}`}
                  className="font-medium text-white hover:text-[#7C4DFF] transition-colors"
                >
                  {BRAND_CONFIG.contact.institutionalEmail}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-[#071426] border border-slate-800">
                <span className="text-[11px] font-mono uppercase text-[#FF7A30] block">
                  Operating Hours (IST)
                </span>
                <span className="text-slate-300 text-xs">
                  {BRAND_CONFIG.contact.responseHours}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Department Shortcuts */}
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              Specialized Portals
            </h3>
            <div className="space-y-2">
              <Link
                to="/for-schools"
                className="flex items-center justify-between p-3 rounded-xl bg-[#071426] hover:bg-[#102A4E] border border-slate-800 text-xs font-semibold text-slate-200 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#7C4DFF]" />
                  <span>Looking for Institutional Quotes?</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </Link>

              <Link
                to="/products/the-last-spark#components"
                className="flex items-center justify-between p-3 rounded-xl bg-[#071426] hover:bg-[#102A4E] border border-slate-800 text-xs font-semibold text-slate-200 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Component Specifications & Guides</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0B1F3A]/80 border border-[#00D9FF]/30 shadow-2xl">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-white font-heading">Send a Message</h2>
            <p className="text-xs text-slate-400">
              Our educational team responds within 24 to 48 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#071426] border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been received. Our team will contact you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    department: 'general',
                    message: '',
                  });
                }}
                className="text-xs text-[#00D9FF] hover:underline pt-2 font-mono"
              >
                Send Another Message &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    Your Name <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 block">
                    Your Email <span className="text-[#FF7A30]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Department */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">Department / Topic</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-slate-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                >
                  <option value="general">General Inquiry</option>
                  <option value="schools">School & Lab Partnership</option>
                  <option value="product">THE LAST SPARK Kit Question</option>
                  <option value="shipping">Shipping & Delivery Info</option>
                  <option value="safety">Safety & Component Inquiries</option>
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Subject <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question regarding component suitability for 10-year-old"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-red-400">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 block">
                  Message <span className="text-[#FF7A30]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can LOGIC LORE help you?"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A30]/30 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
