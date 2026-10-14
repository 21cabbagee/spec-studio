import React from 'react';
import { Video, Sparkles, ArrowRight, ShieldCheck, DollarSign, CheckCircle2, AlertTriangle, Layers, Zap } from 'lucide-react';
import ParticlesCanvas from './ParticlesCanvas';

export function Hero({ onOpenGenerator, onScrollToCatalog, onScrollToCalculator }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-border/60">
      {/* Background WebGL particle simulator & glow */}
      <ParticlesCanvas particleColor="6, 182, 212" particleCount={55} />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-mono shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Target Canonical:</span>
            <span className="text-cyan-400 font-semibold">/tools/ai-media-service-dispatch-studio</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Grosocial.io Productized Service Playbook</span>
          </div>
        </div>

        {/* Mandatory SEO H1 */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] font-display">
            Productized AI Video Deliverables & Spec-Outbound Engine for Solo Creators
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Turn raw AI compute credits into <strong className="text-cyan-400 font-bold">$300–$2,500/mo high-margin B2B deliverables</strong> for local businesses without handling camera gear. Automate spec-work teasers from public listings, enforce a strict <strong className="text-emerald-400 font-bold">5x markup margin floor</strong>, and lock client handoffs.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenGenerator}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-xl shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Spec-Work Teaser</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onScrollToCatalog}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore 12 Productized Jobs</span>
            </button>

            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>5x Margin Calculator</span>
            </button>
          </div>

          {/* Contrast Matrix: The 2 Bottlenecks Solved */}
          <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>The Revision & Compute Quagmire</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Amateur operators let clients ask for 6 rounds of re-prompts, blowing through API credits and turning a $500 invoice into negative hourly wage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>The SpecStudio Margin Governor</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Enforces a strict 5x markup floor (compute &le;20% of invoice). Locks contracts to exactly 1 revision round; structural re-renders billed at $75/round.
              </p>
            </div>
          </div>
        </div>

        {/* Live Metrics Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3.5 rounded-xl bg-surface/60 border border-border/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">80%–88%</div>
            <div className="text-xs text-slate-400 mt-1">Minimum Net Gross Margin</div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface/60 border border-border/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">12 Jobs</div>
            <div className="text-xs text-slate-400 mt-1">Pre-Packaged Grosocial Services</div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface/60 border border-border/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">5x Floor</div>
            <div className="text-xs text-slate-400 mt-1">Automatic Client Markup Guardrail</div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface/60 border border-border/60 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">$6.25B</div>
            <div className="text-xs text-slate-400 mt-1">Local B2B Visual Asset TAM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
