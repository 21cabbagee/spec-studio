import React from 'react';
import { Video, Sparkles, ShieldCheck, Flame, Send, DollarSign, Layers } from 'lucide-react';

export function Header({ onOpenGenerator, onScrollToCatalog, onScrollToCalculator, onScrollToOutbound }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/85 border-b border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/30">
            <Video className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                Spec<span className="text-cyan-400">Studio</span>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-mono">
                5x Margin Floor
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Productized AI Media Service & Spec Outbound Engine
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button 
            onClick={onOpenGenerator}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Spec Teaser Studio
          </button>
          <button 
            onClick={onScrollToCatalog}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            12-Job Catalog
          </button>
          <button 
            onClick={onScrollToCalculator}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            5x Margin Engine
          </button>
          <button 
            onClick={onScrollToOutbound}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Send className="w-4 h-4 text-slate-400" />
            Outbound Console
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenGenerator}
            className="px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/25 active:scale-95 flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Spec Teaser</span>
          </button>
        </div>
      </div>
    </header>
  );
}
