import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  BookOpen,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Activity,
  GraduationCap,
  Lightbulb,
  Radio,
  Volume2,
  ToggleRight,
  Sun,
  BatteryCharging,
  Cable,
  Check,
  Users,
} from 'lucide-react';
import { FLAGSHIP_PRODUCT } from '../data/products';
import { FAQ_LIST, STORY_CHARACTERS } from '../data/brand';
import { useCart } from '../context/CartContext';

// Map icon string to Lucide component
const getComponentIcon = (name: string) => {
  switch (name) {
    case 'Cpu': return Cpu;
    case 'Lightbulb': return Lightbulb;
    case 'Activity': return Activity;
    case 'Cable': return Cable;
    case 'Sun': return Sun;
    case 'Volume2': return Volume2;
    case 'ToggleRight': return ToggleRight;
    case 'Radio': return Radio;
    case 'BatteryCharging': return BatteryCharging;
    case 'BookOpen': return BookOpen;
    default: return Sparkles;
  }
};

export const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [added, setAdded] = useState(false);

  const handleAddFlagship = () => {
    addToCart(FLAGSHIP_PRODUCT, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ========================================================= */}
      {/* SECTION B: CINEMATIC HERO SECTION                         */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center pt-8 sm:pt-16 pb-16 overflow-hidden">
        {/* Subtle Circuit Grid and Radial Glows */}
        <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#00D9FF]/15 via-[#7C4DFF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Brand Message & Hierarchy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#00D9FF]/30 text-xs font-semibold tracking-wider text-[#00D9FF] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
                <span>INTRODUCING LOGIC LORE</span>
              </div>

              {/* Mandatory Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
                THE FUTURE NEEDS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#7C4DFF] to-[#FF7A30]">
                  YOUNG INVENTORS.
                </span>
              </h1>

              {/* Product Title Separately Displayed & Tagline */}
              <div className="py-1">
                <div className="text-xs uppercase font-mono tracking-widest text-slate-400">
                  FLAGSHIP LEARNING KIT
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-tech tracking-wider text-glow-cyan">
                  THE LAST SPARK
                </div>
                <div className="text-sm sm:text-base font-bold text-[#FF7A30] tracking-widest uppercase mt-0.5">
                  READ. BUILD. SAVE HUMANITY.
                </div>
              </div>

              {/* Mandatory Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                What if a comic could lead to a real electronics experiment? Discover a new way to explore science through storytelling, hands-on circuits, and engineering challenges.
              </p>

              {/* Concise Supporting Label */}
              <div className="inline-block text-xs font-mono uppercase tracking-wider text-slate-400 bg-slate-900/70 border border-slate-800 px-3 py-1 rounded-md">
                STORY-DRIVEN STEM LEARNING FOR AGES 8–14
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products/the-last-spark"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2 group active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                  <span>EXPLORE THE KIT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/story"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0B1F3A] hover:bg-[#102A4E] text-[#00D9FF] hover:text-white font-bold text-sm tracking-wider uppercase border border-[#00D9FF]/40 hover:border-[#00D9FF] transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>ENTER THE STORY</span>
                </Link>
              </div>

              {/* Quick Trust / Hardware Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-800/80 text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-xs text-slate-400">Target Age</div>
                  <div className="text-sm font-bold text-white">8–14 Years</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Proposed Price</div>
                  <div className="text-sm font-bold text-[#00D9FF]">₹1,499</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Safety Design</div>
                  <div className="text-sm font-bold text-emerald-400">100% Solderless</div>
                </div>
              </div>
            </div>

            {/* Right Column: Closed Product Box & Bundle Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative group w-full max-w-lg">
                {/* Electric Cyan Glow Backing */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00D9FF] to-[#7C4DFF] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden bg-[#071426] border border-[#00D9FF]/30 shadow-2xl">
                  <img
                    src="/images/product-bundle.png"
                    alt="LOGIC LORE THE LAST SPARK Flagship Kit Concept"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#071426]/90 backdrop-blur-md border border-[#00D9FF]/20 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#00D9FF] uppercase tracking-wider">
                        Concept Showcase Visual
                      </div>
                      <div className="text-xs font-bold text-white">
                        THE LAST SPARK — A STEM Kit by LOGIC LORE
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF7A30] font-mono bg-[#FF7A30]/10 px-2 py-1 rounded border border-[#FF7A30]/30">
                      ₹1,499
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION C: INTRODUCTION TO THE BRAND                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00D9FF]">
            THE LOGIC LORE METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            SCIENCE IS BETTER WHEN YOU CAN EXPERIENCE IT.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            LOGIC LORE is an educational startup built around a foundational idea: children learn deepest not by memorizing formulas, but by solving gripping problems. We blend science-fiction graphic narrative with tactile breadboard electronics so science becomes an adventure.
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">1. LEARN BY DOING</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Children explore electronics through practical experiments. By placing resistors, LEDs, and sensors directly onto a solderless breadboard, abstract electricity becomes visible light, sound, and action.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-[#00D9FF]">
              Hands-on Tactile Exploration
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 hover:border-[#7C4DFF]/40 glass-panel-hover flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/30 flex items-center justify-center text-[#7C4DFF]">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">2. THINK LIKE AN ENGINEER</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Children investigate problems, test ideas, and discover how components work together. They learn to diagnose why a circuit doesn't close and discover the thrill of debugging their own creations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-[#7C4DFF]">
              Diagnostic & Analytical Thinking
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 hover:border-[#FF7A30]/40 glass-panel-hover flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A30]/10 border border-[#FF7A30]/30 flex items-center justify-center text-[#FF7A30]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">3. FOLLOW THE ADVENTURE</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A science-fiction story provides the context for learning and experimentation. Components are not isolated lab parts; they are tools the young characters need to restore electricity and protect the city.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-[#FF7A30]">
              Narrative-Driven Engagement
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION D: FLAGSHIP PRODUCT SHOWCASE                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#0B1F3A] to-[#071426] border border-[#00D9FF]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#00D9FF]/20 shadow-xl bg-[#050E1B]">
                <img
                  src="/images/product-open-kit.png"
                  alt="THE LAST SPARK Electronics Kit open tray with components"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#071426]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#00D9FF]/40 text-xs font-bold text-[#00D9FF]">
                  THE LAST SPARK KIT
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-widest text-[#FF7A30] mb-2 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  FLAGSHIP PRODUCT
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                  MEET YOUR FIRST MISSION.
                </h2>
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase font-mono text-slate-400">
                  Brand: <strong className="text-white">LOGIC LORE</strong>
                </div>
                <div className="text-2xl font-black text-white font-tech tracking-wide">
                  THE LAST SPARK
                </div>
                <div className="text-3xl font-extrabold text-[#FF7A30] font-mono">
                  ₹1,499
                  <span className="text-xs text-slate-400 font-normal ml-2 font-sans">
                    (Proposed Retail Price • India Edition)
                  </span>
                </div>
              </div>

              {/* Mandatory Description */}
              <p className="text-slate-300 text-base leading-relaxed">
                A science-fiction comic and hands-on electronics learning kit that invites young inventors to explore real circuits and solve engineering challenges.
              </p>

              {/* Included items summary */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>36-Page Graphic Comic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>400-Point Breadboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Sensors (LDR & Ultrasonic)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                  <span>Engineering Challenge Cards</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 italic bg-[#071426]/60 p-3 rounded-lg border border-slate-800">
                * Note: Currently in prototype pre-order phase. Displays concept photography and proposed retail pricing. Commercial fulfillment will commence with the inaugural batch.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={handleAddFlagship}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart — ₹1,499</span>
                    </>
                  )}
                </button>

                <Link
                  to="/products/the-last-spark"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#102A4E] hover:bg-[#153460] text-white hover:text-[#00D9FF] font-semibold text-sm border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all text-center"
                >
                  View Details & Gallery &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION E: HOW LOGIC LORE WORKS                           */}
      {/* ========================================================= */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00D9FF]">
            THE FOUR-STAGE LEARNING LOOP
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            EVERY STORY LEADS TO A DISCOVERY.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our structured mission journey connects reading to real experimentation.
          </p>
        </div>

        {/* 4 Connected Stages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Stage 1 */}
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                  STAGE 01
                </span>
                <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-[#00D9FF] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                READ THE STORY
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Meet the young inventors and discover the mystery threatening their city. The narrative frames the challenge with high stakes and real urgency.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Context & Motivation
            </div>
          </div>

          {/* Stage 2 */}
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#7C4DFF]/10 text-[#7C4DFF] border border-[#7C4DFF]/20">
                  STAGE 02
                </span>
                <Activity className="w-5 h-5 text-slate-400 group-hover:text-[#7C4DFF] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                UNDERSTAND THE SCIENCE
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Learn the electronic concepts that connect to the story. Illustrated guides demystify voltage, resistance, current, and optical sensing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Principles & Schematics
            </div>
          </div>

          {/* Stage 3 */}
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FF7A30]/10 text-[#FF7A30] border border-[#FF7A30]/20">
                  STAGE 03
                </span>
                <Cpu className="w-5 h-5 text-slate-400 group-hover:text-[#FF7A30] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                BUILD THE CIRCUIT
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Use real electronic components to create an experiment. Place resistors, LEDs, and sensors on the solderless breadboard to see theory turn into reality.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Tactile Hardware Prototyping
            </div>
          </div>

          {/* Stage 4 */}
          <div className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  STAGE 04
                </span>
                <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">
                COMPLETE THE MISSION
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Apply scientific reasoning to solve an engineering challenge. Debug circuits, test threshold values, and trigger devices to save the fictional city.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Critical Engineering Success
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION F: ENTER THE STORY UNIVERSE                       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#00D9FF]/30 bg-[#071426] shadow-2xl">
          {/* Background Story Artwork */}
          <div className="relative aspect-[21/9] sm:aspect-[16/8] lg:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/story-city-monster.jpg"
              alt="Futuristic city in blackout with giant monster silhouette and young inventors"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/75 to-transparent" />
          </div>

          <div className="p-6 sm:p-12 relative z-10 -mt-24 sm:-mt-32 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/40 text-xs font-mono text-[#00D9FF]">
              THE LAST SPARK COMIC UNIVERSE
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight">
              THE CITY IS DARK. <br />
              <span className="text-[#00D9FF] text-glow-cyan">THE MISSION IS YOURS.</span>
            </h2>

            {/* Mandatory Story Description */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              When a mysterious force plunges a futuristic city into darkness, a group of young inventors discovers that science may hold the key to humanity's survival. Through electronics, sensors, experimentation, and clever engineering, they must uncover the mystery and help restore the city.
            </p>

            {/* Characters Overview */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STORY_CHARACTERS.map((char) => (
                <div key={char.name} className="p-2.5 rounded-xl bg-[#0B1F3A]/80 border border-slate-700/60 text-xs">
                  <div className="text-lg">{char.avatar}</div>
                  <div className="font-bold text-white mt-1">{char.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">{char.role}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/story"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5825df] hover:from-[#895df7] hover:to-[#7C4DFF] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#7C4DFF]/30 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>DISCOVER THE STORY</span>
              </Link>

              <Link
                to="/products/the-last-spark"
                className="px-6 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#102A4E] text-[#00D9FF] border border-[#00D9FF]/30 text-sm font-semibold flex items-center gap-2"
              >
                <span>Explore the Physical Kit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION G: WHAT'S INSIDE THE KIT?                         */}
      {/* ========================================================= */}
      <section id="components" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00D9FF]">
            PROPOSED HARDWARE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            REAL COMPONENTS. REAL EXPERIMENTS.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Inside THE LAST SPARK, every piece of hardware is a standard industrial electronic component — not a plastic toy simulation.
          </p>
        </div>

        {/* 12 Kit Components Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FLAGSHIP_PRODUCT.components.map((comp) => {
            const Icon = getComponentIcon(comp.iconName);
            return (
              <div
                key={comp.id}
                className="p-5 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#102A4E] border border-slate-700 group-hover:border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {comp.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF7A30]/20 text-[#FF7A30] border border-[#FF7A30]/30 font-bold uppercase">
                        {comp.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                    {comp.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-[#00D9FF] block mb-0.5">
                    What Children Explore:
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">
                    {comp.whatYouExplore}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical clarification note */}
        <div className="mt-8 p-4 rounded-xl bg-[#071426] border border-slate-800 text-xs text-slate-400 text-center max-w-2xl mx-auto">
          💡 <strong>Component Note:</strong> The ultrasonic distance sensor introduces distance measurement via sonic reflection. In advanced experiments, it connects to optional controller boards and future expansion modules.
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION H: LEARNING BENEFITS                              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF7A30]">
            FOUNDATIONAL VALUE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            MORE THAN A COMIC. MORE THAN A KIT.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We focus on cultivating lasting habits of mind, tactile confidence, and genuine scientific curiosity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLAGSHIP_PRODUCT.learningObjectives.map((obj) => (
            <div
              key={obj.title}
              className="p-6 rounded-2xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{obj.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{obj.description}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                Core Competency
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION I: SAFETY SECTION                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1F3A]/60 border border-[#00D9FF]/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#00D9FF]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SAFETY-FIRST CURRICULUM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              BUILT FOR CURIOUS MINDS.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              The proposed experiments are intentionally designed around beginner-friendly, low-voltage, battery-powered electronics. No high-voltage mains electricity, no hazardous chemicals, and zero soldering irons are needed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Illustrated step-by-step connection instructions</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Safe direct-current low-voltage (4.5V AA battery pack)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Adult supervision recommended for inventors under 10</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Safe handling guidelines and component color guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION J: SCHOOLS AND INSTITUTIONS                       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#102A4E] to-[#0B1F3A] border border-[#7C4DFF]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#7C4DFF] font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATIONAL INSTITUTIONS & LABS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                BRING HANDS-ON STEM LEARNING TO YOUR CLASSROOM.
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                LOGIC LORE kits are designed to support practical electronics in schools, Atal Tinkering Labs (ATLs), robotics academies, and after-school clubs. We supply modular classroom packs, educator curriculum guides, and challenge rubrics.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/for-schools"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#6229f3] hover:from-[#8d5cf8] hover:to-[#7C4DFF] text-white font-bold text-sm tracking-wider uppercase text-center shadow-lg shadow-[#7C4DFF]/30 transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>ENQUIRE FOR INSTITUTIONAL ORDERS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION K: FREQUENTLY ASKED QUESTIONS                     */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00D9FF]">
            CLEAR ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about the LOGIC LORE brand, THE LAST SPARK kit, and our curriculum.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#0B1F3A]/70 border border-slate-800 hover:border-slate-700 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00D9FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FF7A30]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
