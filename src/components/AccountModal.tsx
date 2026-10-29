import React, { useState } from 'react';
import { X, Award, ShieldCheck, Zap, User, Sparkles, BookOpen, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [inventorName, setInventorName] = useState('Cadet Inventor');
  const [isEditing, setIsEditing] = useState(false);
  const { totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#0B1F3A] border border-[#00D9FF]/40 rounded-2xl shadow-2xl overflow-hidden p-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D9FF] to-[#7C4DFF] flex items-center justify-center shadow-lg shadow-[#00D9FF]/20">
              <User className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Young Inventor ID</h3>
              <p className="text-xs text-slate-400">Logic Lore Cadet Terminal (Demo Access)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="mt-5 p-4 rounded-xl bg-[#071426] border border-slate-700/80 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider">
                Explorer Handle
              </span>
              {isEditing ? (
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={inventorName}
                    onChange={(e) => setInventorName(e.target.value)}
                    className="bg-[#0B1F3A] border border-[#00D9FF] px-2 py-1 rounded text-sm text-white focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsEditing(false)}
                    className="text-xs px-2 py-1 rounded bg-[#00D9FF] text-slate-950 font-bold"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-1">
                  <h4 className="text-lg font-bold text-white">{inventorName}</h4>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-xs text-[#00D9FF] hover:underline"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            <div className="text-right">
              <span className="text-[11px] font-mono text-[#FF7A30] uppercase tracking-wider">
                Rank Level
              </span>
              <div className="text-sm font-bold text-slate-200 flex items-center justify-end gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A30]" />
                Level 1 Apprentice
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
            <div className="p-2 rounded bg-[#0B1F3A]/60">
              <div className="text-xs text-slate-400">Cart Items</div>
              <div className="text-base font-bold text-[#00D9FF]">{totalItems}</div>
            </div>
            <div className="p-2 rounded bg-[#0B1F3A]/60">
              <div className="text-xs text-slate-400">Missions</div>
              <div className="text-base font-bold text-white">4 Available</div>
            </div>
            <div className="p-2 rounded bg-[#0B1F3A]/60">
              <div className="text-xs text-slate-400">Kit Badge</div>
              <div className="text-base font-bold text-[#FF7A30]">Spark-01</div>
            </div>
          </div>
        </div>

        {/* Mission Badges */}
        <div className="mt-5 space-y-2">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#FF7A30]" />
            Story Missions Unlocked
          </h4>

          <div className="space-y-2">
            {[
              { id: '1', name: 'Restore the Lights', status: 'Ready to Build', icon: Zap },
              { id: '2', name: 'Detect the Shadows', status: 'Ready to Build', icon: ShieldCheck },
              { id: '3', name: 'Find the Fault', status: 'Ready to Build', icon: BookOpen },
              { id: '4', name: 'Rescue Robot Crawler', status: 'Expansion Mission', icon: Clock },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#071426]/60 border border-slate-800 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-[#102A4E] text-[#00D9FF]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-slate-200">Mission {m.id}: {m.name}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-[#00D9FF] font-mono">
                    {m.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-5 p-3 rounded-lg bg-[#102A4E]/50 border border-[#00D9FF]/20 text-xs text-slate-300">
          <p>
            💡 <strong>Startup Pitch Notice:</strong> This profile terminal represents the future student dashboard where children record completed circuits, unlock story chapters, and share their STEM creations.
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close Terminal
          </button>
        </div>
      </div>
    </div>
  );
};
