import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Calculator, AlertTriangle, CheckCircle2, ArrowRight, Zap, FileText } from 'lucide-react';

export function MarginCalculator({ onOpenGenerator }) {
  const [computeCost, setComputeCost] = useState(18); // Default $18 for real estate
  const [selectedJobType, setSelectedJobType] = useState('real_estate');

  // Multiplier logic
  const minMarkupMultiplier = 5.0; // 5x Floor rule
  const minimumInvoiceFloor = computeCost * minMarkupMultiplier;
  
  // Suggested market price based on job
  const suggestedPrice = 
    selectedJobType === 'real_estate' ? 500 :
    selectedJobType === 'food_clips' ? 1200 :
    selectedJobType === 'medspa_story' ? 500 : 400;

  const actualMarkup = (suggestedPrice / computeCost).toFixed(1);
  const netProfit = suggestedPrice - computeCost;
  const grossMargin = (((suggestedPrice - computeCost) / suggestedPrice) * 100).toFixed(1);

  return (
    <section id="calculator-section" className="py-16 sm:py-24 border-t border-border/80 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Automated 5x Cost-Plus Pricing Guardrail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            The 5x Margin Floor & Revision Governor Engine
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Never let client revisions wipe out your compute budget. Input your raw model tokens — SpecStudio enforces minimum 5x pricing floors and stamps contract revision guardrails.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-surface via-slate-900 to-surface border border-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Inputs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Calculator className="w-4 h-4" />
                <span>OPERATOR COMPUTE COST INPUT</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Grosocial Job Template
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'real_estate', label: 'Job 01: Real Estate Walkthrough ($500)' },
                    { id: 'food_clips', label: 'Job 02: 10 Food Reels Retainer ($1,200)' },
                    { id: 'medspa_story', label: 'Job 04: Medspa Brand Story ($500)' },
                    { id: 'ecommerce', label: 'Job 07: 3D Product Turntable ($400)' }
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedJobType(item.id);
                        if (item.id === 'real_estate') setComputeCost(18);
                        if (item.id === 'food_clips') setComputeCost(24);
                        if (item.id === 'medspa_story') setComputeCost(15);
                        if (item.id === 'ecommerce') setComputeCost(12);
                      }}
                      className={`p-2.5 rounded-lg text-left text-xs border transition-all ${
                        selectedJobType === item.id
                          ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 font-semibold'
                          : 'bg-slate-900 border-slate-700/80 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
                  <span>Estimated Model / API Compute Cost:</span>
                  <span className="font-mono text-red-400 font-bold">${computeCost}.00 USD</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={computeCost}
                  onChange={(e) => setComputeCost(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Includes Kling / Wan2.1 diffusion video generations + ElevenLabs audio master + rendering.
                </span>
              </div>

              {/* Revision Governor Callout */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-wider text-[11px] font-mono">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Automated Contract Revision Stamping</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  <strong>Contract Term Rule:</strong> Exactly 1 round of minor polish (timing, subtitle tweaks, color adjustments) is included. Structural prompt regenerations are locked and auto-billed at <strong>$75/round</strong> via Stripe.
                </p>
              </div>
            </div>

            {/* Calculations Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase font-mono">5x Minimum Price Floor</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-1">
                  ${minimumInvoiceFloor.toFixed(0)}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Absolute floor — system blocks client checkout below 5x markup.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                <div className="text-[10px] text-cyan-300 uppercase font-mono">Retail Deliverable Price</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                  ${suggestedPrice}.00
                </div>
                <div className="text-[11px] text-cyan-400 font-mono mt-1 font-bold">
                  {actualMarkup}x Actual Markup Multiplier
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-mono uppercase font-semibold">
                    Operator Net Profit Per Deliverable
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {grossMargin}% Margin
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mt-1">
                  +${netProfit}.00 USD
                </div>
                <div className="text-xs text-slate-300 mt-2">
                  Turnaround: 24h • Compute burn is capped at <strong className="text-white">${computeCost}</strong>.
                </div>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  onClick={onOpenGenerator}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Build Client Spec at ${suggestedPrice}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
