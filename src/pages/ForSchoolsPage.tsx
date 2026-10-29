import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  Cpu,
  Layers,
  Send,
  Sparkles,
} from 'lucide-react';
import type { InstitutionalInquiry } from '../types';

export const ForSchoolsPage: React.FC = () => {
  const [formData, setFormData] = useState<InstitutionalInquiry>({
    fullName: '',
    institutionName: '',
    workEmail: '',
    phoneNumber: '',
    estimatedKits: '20-50',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InstitutionalInquiry, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof InstitutionalInquiry, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!formData.institutionName.trim()) newErrors.institutionName = 'Please enter your school or organization.';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide brief details about your learning requirements.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request to institutional endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/40 text-xs font-mono text-[#00D9FF]">
          <GraduationCap className="w-4 h-4 text-[#7C4DFF]" />
          <span>INSTITUTIONAL CURRICULUM & LABS</span>
        </div>

        {/* Mandatory Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading">
          MAKE STEM LEARNING HANDS-ON.
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          LOGIC LORE combines imaginative storytelling with physical electronics to ignite curiosity in classrooms, innovation centers, Atal Tinkering Labs (ATLs), and STEM clubs.
        </p>
      </div>

      {/* Classroom Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Introductory Electronics',
            desc: 'Teach circuit loops, breadboard anatomy, polarity, and resistors through physical components without soldering risks.',
            icon: Cpu,
          },
          {
            title: 'Classroom Experiments',
            desc: 'Turn theoretical textbook physics into tactile 40-minute lab periods with step-by-step photographic guides.',
            icon: Layers,
          },
          {
            title: 'STEM & Robotics Clubs',
            desc: 'Engage after-school cohorts with mission-based circuit challenges and sensor exploration.',
            icon: Users,
          },
          {
            title: 'Group Engineering Challenges',
            desc: 'Challenge teams of students to construct emergency beacons and shadow sensors collaboratively.',
            icon: Sparkles,
          },
          {
            title: 'Practical Problem-Solving',
            desc: 'Promote analytical debugging: when a LED fails to illuminate, students trace pathways and isolate faults.',
            icon: CheckCircle2,
          },
          {
            title: 'Story-Based Science Activities',
            desc: 'Harness graphic fiction to spark interest among students who typically find rote science disengaging.',
            icon: BookOpen,
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#7C4DFF]/40 glass-panel-hover space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7C4DFF]/10 text-[#7C4DFF] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Institutional Inquiry Form Section */}
      <div id="inquiry" className="max-w-3xl mx-auto rounded-3xl bg-[#0B1F3A]/80 border border-[#00D9FF]/30 p-8 sm:p-12 shadow-2xl relative scroll-mt-24">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF]">
            PILOT PROGRAMME ENQUIRIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Request an Institutional Order & Curriculum Pack
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Submit your institution details below to receive our educator guide overview and discuss batch requirements.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#071426] border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Enquiry Received Successfully!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your institutional request for <strong>{formData.institutionName}</strong> has been logged in our demo terminal.
            </p>
            <div className="p-3 rounded-xl bg-[#0B1F3A] border border-slate-800 text-xs text-slate-400 max-w-md mx-auto">
              💡 <strong>Integration Notice:</strong> Form endpoints are ready for connection with your CRM / Email webhook service (e.g., SendGrid, Supabase, or AWS SES).
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  institutionName: '',
                  workEmail: '',
                  phoneNumber: '',
                  estimatedKits: '20-50',
                  message: '',
                });
              }}
              className="text-xs text-[#00D9FF] hover:underline pt-2 font-mono"
            >
              Submit Another Inquiry &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Educator / Contact Name <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Priya Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
              </div>

              {/* Institution Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  School / Institution Name <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  placeholder="e.g. Delhi Public School / Tinkering Hub"
                  className={`w-full px-4 py-3 rounded-xl bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.institutionName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.institutionName && <p className="text-[11px] text-red-400">{errors.institutionName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Work Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Work / Official Email <span className="text-[#FF7A30]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@school.edu.in"
                  className={`w-full px-4 py-3 rounded-xl bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                    errors.workEmail ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                  }`}
                />
                {errors.workEmail && <p className="text-[11px] text-red-400">{errors.workEmail}</p>}
              </div>

              {/* Phone Number (Optional) */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Phone Number <span className="text-slate-500 text-[10px]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-[#071426] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
                />
              </div>
            </div>

            {/* Estimated Kits */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Estimated Number of Student Kits Required
              </label>
              <select
                value={formData.estimatedKits}
                onChange={(e) => setFormData({ ...formData, estimatedKits: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#071426] border border-slate-700 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00D9FF]"
              >
                <option value="10-20">10 – 20 Kits (Single Club / Tinkering Batch)</option>
                <option value="20-50">20 – 50 Kits (Grade-Level Classroom Cohort)</option>
                <option value="50-100">50 – 100 Kits (Multiple Grade Levels / STEM Lab)</option>
                <option value="100+">100+ Kits (Multi-Campus / District Initiative)</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Message & Specific Requirements <span className="text-[#FF7A30]">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your student age group, preferred curriculum timeline, or any specific learning goals..."
                className={`w-full px-4 py-3 rounded-xl bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-[#00D9FF]'
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#6229f3] hover:from-[#8d5cf8] hover:to-[#7C4DFF] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#7C4DFF]/30 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Request...' : 'Submit Institutional Enquiry'}</span>
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-400">
                Institutional pricing and volume configuration will be confirmed upon review of your requirements.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
