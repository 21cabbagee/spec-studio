import React from 'react';
import { Check, Sparkles, Video, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function PricingSection({ onOpenGenerator }) {
  return (
    <section id="pricing-section" className="py-16 sm:py-24 border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Operator Platform Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Built for Solo Operators Closing $300–$2,500 Deliverables
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            One closed Real Estate Walkthrough ($500) covers your entire annual platform subscription. Everything else is pure profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Solo Creator */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-300">Solo Operator</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono">$49</span>
                <span className="text-xs text-slate-400">/month</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For individual AI creators executing 3–10 productized deliverables per month.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 15 active spec teaser previews / mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5x Margin Floor pricing calculator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Watermarked client review portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 revision round contract governor</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenGenerator}
              className="mt-8 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
            >
              Start Solo Plan
            </button>
          </div>

          {/* Agency Scale (Highlighted) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-surface to-surface border-2 border-cyan-500/60 flex flex-col justify-between relative shadow-xl shadow-cyan-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>Most Popular</span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-300">Agency Scale</span>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded">
                  Unlimited Specs
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono">$129</span>
                <span className="text-xs text-slate-400">/month</span>
              </div>
              <p className="text-xs text-cyan-200/80 mt-2">
                For boutique visual agencies and teams doing $5k–$20k/mo in deliverable volume.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">Unlimited active spec teaser previews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom branded client preview domains</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Stripe instant payment clearance & 4K unlock</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Timestamped feedback markers vault</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-cyan-300 font-medium">3 Operator Seats Included</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenGenerator}
              className="mt-8 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-500/25 active:scale-95"
            >
              Start Agency Scale ($129/mo)
            </button>
          </div>

          {/* Lifetime Founder */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm">
            <div>
              <div className="text-sm font-semibold text-slate-300">Lifetime Founder Pass</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono">$299</span>
                <span className="text-xs text-slate-400">/one-time</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Limited to the first 25 founding operators. Lifetime platform access with zero recurring fees.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lifetime SpecStudio platform access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All 12 Grosocial job templates & scripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated 5x margin contract stoper</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Private VIP operator mastermind community</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenGenerator}
              className="mt-8 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
            >
              Claim Lifetime Pass ($299)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
