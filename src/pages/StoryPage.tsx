import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  Zap,
  Cpu,
  ChevronRight,
} from 'lucide-react';
import { FLAGSHIP_PRODUCT } from '../data/products';
import { STORY_CHARACTERS } from '../data/brand';

export const StoryPage: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<number>(1);
  const missions = FLAGSHIP_PRODUCT.missions;
  const activeMission = missions.find((m) => m.number === selectedMission) || missions[0];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Story Hero Banner */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-12 pb-16 overflow-hidden">
        {/* Background Comic Art */}
        <div className="absolute inset-0">
          <img
            src="/images/story-city-monster.jpg"
            alt="Futuristic city in darkness with glowing red eyes of monster and young inventors with robot"
            className="w-full h-full object-cover object-top opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/85 to-[#071426]/50" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/20 border border-[#7C4DFF]/40 text-xs font-mono font-bold text-[#00D9FF]">
            <span>AN ORIGINAL GRAPHIC NOVEL BY LOGIC LORE</span>
          </div>

          {/* Mandatory Page Heading & Supporting Line */}
          <h1 className="text-4xl sm:text-7xl font-black text-white font-heading tracking-tight text-glow-cyan">
            THE LAST SPARK
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-[#FF7A30] font-tech max-w-2xl mx-auto tracking-wide">
            One blackout. One mysterious threat. A team of young inventors. Can science save the city?
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to Neo-Veridia, year 2088. When the central fusion grid suddenly collapsed, high-altitude shadows were spotted crawling across the skyscrapers. With adult authorities trapped behind locked blast doors, three curious students and a makeshift companion bot uncover a shocking truth: electricity isn't gone — it's being redirected.
          </p>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products/the-last-spark"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] hover:from-[#ff8843] hover:to-[#FF7A30] text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>START YOUR FIRST MISSION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#missions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0B1F3A] hover:bg-[#102A4E] text-[#00D9FF] hover:text-white font-bold text-sm tracking-wider uppercase border border-[#00D9FF]/30 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore The 4 Missions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Comic Characters Dossier */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00D9FF]">
            THE INVENTOR SQUAD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            MEET THE CHARACTERS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Original young inventors created by LOGIC LORE to guide readers through physics, circuits, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORY_CHARACTERS.map((char) => (
            <div
              key={char.name}
              className="p-6 rounded-2xl bg-[#0B1F3A]/80 border border-slate-800 hover:border-[#00D9FF]/40 glass-panel-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#102A4E] to-[#071426] border border-[#00D9FF]/30 flex items-center justify-center text-3xl shadow-lg">
                  {char.avatar}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{char.name}</h3>
                  <div className="text-xs font-mono text-[#00D9FF]">{char.role}</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {char.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                <div>
                  <span className="text-slate-400 font-mono">Specialty: </span>
                  <strong className="text-slate-200">{char.techSkill}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-mono">Signature Gadget: </span>
                  <strong className="text-[#FF7A30]">{char.gadget}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Missions Timeline */}
      <section id="missions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A30]">
            HANDS-ON EPISODES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            FOUR STORY-LINKED MISSIONS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every comic chapter introduces a crisis that can only be resolved by assembling real circuits.
          </p>
        </div>

        {/* Mission Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {missions.map((m) => {
            const isSelected = selectedMission === m.number;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMission(m.number)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-[#102A4E] border-[#00D9FF] shadow-lg shadow-[#00D9FF]/20 scale-102'
                    : 'bg-[#0B1F3A]/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#00D9FF]' : 'text-slate-400'}`}>
                    MISSION 0{m.number}
                  </span>
                  {m.isFutureExpansion && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-[#FF7A30]">
                      Future Pack
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white mt-1 leading-snug">
                  {m.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Mission Active Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1F3A]/80 border border-[#00D9FF]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">
                MISSION {activeMission.number} OF 4
              </span>
              <span className="text-xs font-mono text-[#FF7A30]">
                {activeMission.comicChapter}
              </span>
              {activeMission.isFutureExpansion && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FF7A30]/20 text-[#FF7A30] border border-[#FF7A30]/30 font-bold">
                  * Planned Future Hardware Content
                </span>
              )}
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              {activeMission.title}
            </h3>

            {/* Premise */}
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                The Narrative Dilemma:
              </span>
              <p className="text-base text-slate-200 leading-relaxed bg-[#071426]/60 p-4 rounded-xl border border-slate-800">
                "{activeMission.storyPremise}"
              </p>
            </div>

            {/* Science & Hands on build */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#071426] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00D9FF] uppercase">
                  <Zap className="w-4 h-4" />
                  <span>The Science Concept</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeMission.scienceConcept}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#071426] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A30] uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>The Physical Build</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeMission.handsOnBuild}
                </p>
              </div>
            </div>

            {/* Components used in this mission */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                Hardware Utilized In This Mission:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeMission.componentsUsed.map((comp) => (
                  <span
                    key={comp}
                    className="text-xs px-3 py-1 rounded-lg bg-[#102A4E] text-slate-200 border border-[#00D9FF]/20"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission CTA */}
            <div className="pt-4">
              <Link
                to="/products/the-last-spark"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A30] to-[#E86A22] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#FF7A30]/30 hover:shadow-[#FF7A30]/50 transition-all"
              >
                <span>Order THE LAST SPARK to Solve Mission {activeMission.number}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
