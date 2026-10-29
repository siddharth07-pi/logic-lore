import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#00D9FF]/30 text-xs font-mono text-[#00D9FF]">
          OUR FOUNDING ETHOS
        </div>

        {/* Mandatory Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading">
          WE BELIEVE SCIENCE SHOULD BE EXPERIENCED.
        </h1>

        {/* Mandatory Brand Description */}
        <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal">
          LOGIC LORE is an educational startup built around a simple idea: science becomes more engaging when you can experience it. By combining imaginative storytelling with hands-on electronics, we aim to help young learners explore engineering one experiment at a time.
        </p>
      </div>

      {/* Hero Visual Section: Lifestyle Learning Image */}
      <div className="rounded-3xl overflow-hidden border border-[#00D9FF]/30 relative aspect-video sm:aspect-[21/9] max-w-5xl mx-auto shadow-2xl">
        <img
          src="/images/children-building-kit.jpg"
          alt="Two young inventors collaborating on breadboard electronics experiment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
          <span className="bg-[#071426]/90 px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-[#00D9FF]">
            Curiosity • Collaboration • Critical Thinking
          </span>
          <span className="hidden sm:inline bg-[#071426]/90 px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-slate-400">
            Ages 8–14 Learning Experience
          </span>
        </div>
      </div>

      {/* 4 Pillars: Mission, Approach, Why Storytelling Matters, Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Our Mission */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">Our Mission</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our mission is to replace passive rote memorization with active tactile engineering. We want children to understand how the electronic devices around them actually operate — from switches and resistors to sensors and acoustic signals — before they feel intimidated by complex formulas.
          </p>
        </div>

        {/* Our Approach */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#7C4DFF]/40 glass-panel-hover space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#7C4DFF]/10 text-[#7C4DFF] flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">Our Approach</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every kit we design follows a four-step pedagogical cycle: <strong>Read the Story</strong>, <strong>Understand the Science</strong>, <strong>Build the Circuit</strong>, and <strong>Solve the Challenge</strong>. This contextual scaffold gives children a genuine reason to experiment, troubleshoot, and succeed.
          </p>
        </div>

        {/* Why Storytelling Matters */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#FF7A30]/40 glass-panel-hover space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#FF7A30]/10 text-[#FF7A30] flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">Why Storytelling Matters</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Storytelling creates emotional investment. When characters face an urgent crisis in a blackout metropolis, a circuit isn't just an exercise on a desk; it becomes an emergency tool to restore power. Narratives transform science from an abstract subject into an unforgettable adventure.
          </p>
        </div>

        {/* Our Vision */}
        <div className="p-8 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-emerald-500/40 glass-panel-hover space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">Our Vision</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            We envision an expanding educational universe where LOGIC LORE introduces multi-discipline STEM adventures — spanning electronics, robotics, renewable energy, and IoT automation — helping millions of young minds build the future with their own hands.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#0B1F3A] to-[#102A4E] border border-[#00D9FF]/30 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white font-heading">
          Ready to join the mission?
        </h3>
        <p className="text-sm text-slate-300">
          Explore our flagship STEM adventure kit, THE LAST SPARK, or reach out to partner with us.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/products/the-last-spark"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
          >
            <span>Explore THE LAST SPARK</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#071426] hover:bg-[#0B1F3A] text-slate-200 border border-slate-700 text-xs font-semibold"
          >
            Contact LOGIC LORE
          </Link>
        </div>
      </div>
    </div>
  );
};
