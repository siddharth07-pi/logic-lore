import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Zap, Cpu, BookOpen, ArrowRight } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const flagship = PRODUCTS_CATALOG[0];

  // Search through components, products, missions
  const cleanQ = query.trim().toLowerCase();

  const matchingComponents = cleanQ
    ? flagship.components.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQ) ||
          c.description.toLowerCase().includes(cleanQ) ||
          c.whatYouExplore.toLowerCase().includes(cleanQ)
      )
    : [];

  const matchingMissions = cleanQ
    ? flagship.missions.filter(
        (m) =>
          m.title.toLowerCase().includes(cleanQ) ||
          m.scienceConcept.toLowerCase().includes(cleanQ) ||
          m.handsOnBuild.toLowerCase().includes(cleanQ)
      )
    : [];

  const matchingProducts = cleanQ
    ? PRODUCTS_CATALOG.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQ) ||
          p.shortDescription.toLowerCase().includes(cleanQ) ||
          p.brand.toLowerCase().includes(cleanQ)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0B1F3A] border border-[#00D9FF]/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3 border-b border-slate-700/80 bg-[#071426]">
          <Search className="w-5 h-5 text-[#00D9FF] shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search kits, components (e.g. LDR, Breadboard, LED), or missions..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <span className="text-xs font-mono uppercase bg-slate-800 px-2 py-1 rounded border border-slate-700">ESC</span>
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query ? (
            <div className="py-6 text-center text-slate-400 space-y-3">
              <Zap className="w-8 h-8 text-[#00D9FF] mx-auto opacity-70 animate-pulse" />
              <p className="text-sm">Search the LOGIC LORE universe: kits, components, science concepts, or story missions.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['The Last Spark', 'LDR Sensor', 'Breadboard', 'Ultrasonic', 'Mission 1', 'Resistors'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-800 hover:bg-[#102A4E] text-slate-300 hover:text-[#00D9FF] border border-slate-700 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Products */}
              {matchingProducts.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#00D9FF] font-semibold mb-2">
                    Educational Kits ({matchingProducts.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingProducts.map((p) => (
                      <Link
                        key={p.id}
                        to={`/products/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#071426]/70 hover:bg-[#102A4E] border border-slate-700/50 hover:border-[#00D9FF]/40 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.images.primary}
                            alt={p.title}
                            className="w-12 h-12 object-cover rounded-lg border border-slate-700"
                          />
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                              {p.title}
                            </div>
                            <div className="text-xs text-slate-400">{p.subtitle} • {p.formattedPrice}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00D9FF] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Components */}
              {matchingComponents.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#00D9FF] font-semibold mb-2">
                    Kit Electronics Components ({matchingComponents.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingComponents.map((c) => (
                      <Link
                        key={c.id}
                        to="/products/the-last-spark#components"
                        onClick={onClose}
                        className="block p-3 rounded-xl bg-[#071426]/70 hover:bg-[#102A4E] border border-slate-700/50 hover:border-[#00D9FF]/40 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#00D9FF]">
                            <Cpu className="w-4 h-4 text-[#00D9FF]" />
                            <span>{c.name}</span>
                          </div>
                          <span className="text-[11px] uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                            {c.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">{c.whatYouExplore}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Missions */}
              {matchingMissions.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#7C4DFF] font-semibold mb-2">
                    Story Missions ({matchingMissions.length})
                  </h4>
                  <div className="space-y-2">
                    {matchingMissions.map((m) => (
                      <Link
                        key={m.id}
                        to="/story"
                        onClick={onClose}
                        className="block p-3 rounded-xl bg-[#071426]/70 hover:bg-[#102A4E] border border-slate-700/50 hover:border-[#7C4DFF]/40 transition-all group"
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#7C4DFF]">
                          <BookOpen className="w-4 h-4 text-[#7C4DFF]" />
                          <span>MISSION {m.number}: {m.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          <strong>Science:</strong> {m.scienceConcept}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {matchingProducts.length === 0 &&
                matchingComponents.length === 0 &&
                matchingMissions.length === 0 && (
                  <div className="py-8 text-center text-slate-400">
                    <p>No results found for "{query}".</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Try searching for "LED", "Breadboard", "Aarav", or "Sensor".
                    </p>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
