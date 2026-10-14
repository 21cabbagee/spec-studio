import React, { useState } from 'react';
import { TrendingUp, Video, Zap, DollarSign, Clock, Users, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

/**
 * OutcomeChart for SpecStudio (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $8,500/mo traditional video agency retainers & $50k production shoots ($6 layer)
 * with Autonomous High-Margin Productized AI Video Deliverables & Spec Engines ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Productized AI Video Deliverable & Spec Engine",
  defaultCampaigns = 8,
  onCtaClick
}) {
  const [campaigns, setCampaigns] = useState(defaultCampaigns);

  // Traditional Video Production Agency: $8,500 base retainer + $1,200 equipment & revision overhead per batch
  const legacyServicesCost = 8500 + (campaigns * 350);
  // SpecStudio Autonomous Platform: $39/mo base subscription + $14 compute credit per deliverable (sold at 5x markup = $350 client billable)
  const autoSoftwareCost = 39 + (campaigns * 14);
  const netValueReclaimed = Math.max(legacyServicesCost - autoSoftwareCost, 0);
  const turnaroundDaysLegacy = "21–28 Days";
  const turnaroundDaysSpec = "4.2 Minutes";

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 4);

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-cyan-500/40 text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $8,500/mo Creative Video Production Agencies ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Economic Arbitrage: Automated Spec Deliverables vs Agency Retainers
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            "Software is the $1, Services is the $6 sitting next to it." Reclaim creative margin with automated spec-work.
          </p>
        </div>

        {/* Live Metrics Counter */}
        <div className="flex items-center gap-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl px-4 py-2.5">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300/80">Net Monthly Savings</div>
            <div className="text-xl font-black text-cyan-300 font-mono">
              ${netValueReclaimed.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Parameter Control */}
      <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-2/3">
          <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
            <span className="flex items-center gap-1.5 font-medium">
              <Video className="w-3.5 h-3.5 text-cyan-400" />
              Monthly Client Video Deliverables / Spec Pitch Campaigns:
            </span>
            <span className="font-bold text-cyan-400 text-sm">{campaigns} Deliverables</span>
          </div>
          <input
            type="range"
            min="2"
            max="30"
            value={campaigns}
            onChange={(e) => setCampaigns(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>2 Campaigns</span>
            <span>15 Campaigns</span>
            <span>30 Campaigns</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-right w-full sm:w-auto justify-end">
          <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300">
            <span className="block text-[10px] text-rose-400 uppercase">Legacy Turnaround</span>
            <span className="font-bold">{turnaroundDaysLegacy}</span>
          </div>
          <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
            <span className="block text-[10px] text-emerald-400 uppercase">SpecStudio Turnaround</span>
            <span className="font-bold">{turnaroundDaysSpec}</span>
          </div>
        </div>
      </div>

      {/* Comparative Bklit Chart Columns */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        {/* Legacy Column ($6 Layer) */}
        <div className="rounded-xl border border-rose-500/20 bg-gradient-to-b from-rose-950/20 to-slate-950 p-5 relative">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Traditional Creative Agency ($6 Layer)
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">Inefficient Retainer</span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-rose-200 font-mono">
            ${legacyServicesCost.toLocaleString()}
            <span className="text-xs font-normal text-slate-400 font-sans ml-1">/ month</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Includes $8.5k/mo agency retainer, gear amortization, lighting crews, storyboard artists, and 4 weeks of subjective review meetings before first draft delivery.
          </p>

          <div className="mt-6 h-36 flex items-end">
            <div
              className="w-full bg-gradient-to-t from-rose-600 to-rose-400/80 rounded-t-lg transition-all duration-500 relative flex items-center justify-center text-xs font-mono font-bold text-white shadow-lg shadow-rose-950/50"
              style={{ height: `${legacyBarHeight}%` }}
            >
              ${legacyServicesCost.toLocaleString()}
            </div>
          </div>
          <div className="mt-3 flex justify-between text-[11px] font-mono text-slate-400 border-t border-rose-500/20 pt-2">
            <span>Average Margin: 18%</span>
            <span className="text-rose-400 font-semibold">21–28 Day Turnaround</span>
          </div>
        </div>

        {/* SpecStudio Software Engine ($1 Layer) */}
        <div className="rounded-xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 to-slate-950 p-5 relative shadow-xl shadow-cyan-950/40">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SpecStudio Autonomous Platform ($1 Layer)
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
              5x Gross Margin Floor
            </span>
          </div>
          <div className="text-2xl md:text-3xl font-black text-cyan-300 font-mono">
            ${autoSoftwareCost.toLocaleString()}
            <span className="text-xs font-normal text-slate-400 font-sans ml-1">/ month total cost</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Automates public listing scrapers into broadcast-ready spec teasers. Generates watermarked approval vaults with 1-click Stripe unlock. $14 compute cost billed at $350.
          </p>

          <div className="mt-6 h-36 flex items-end">
            <div
              className="w-full bg-gradient-to-t from-cyan-600 to-indigo-400 rounded-t-lg transition-all duration-500 relative flex items-center justify-center text-xs font-mono font-bold text-white shadow-lg shadow-cyan-950/50"
              style={{ height: `${autoBarHeight}%` }}
            >
              ${autoSoftwareCost.toLocaleString()}
            </div>
          </div>
          <div className="mt-3 flex justify-between text-[11px] font-mono text-slate-400 border-t border-cyan-500/20 pt-2">
            <span className="text-cyan-400 font-semibold">Gross Margin: 88%–92%</span>
            <span className="text-cyan-400 font-semibold">4.2 Min Generation</span>
          </div>
        </div>
      </div>

      {/* Larry Ellison Playbook SLA Banner */}
      <div className="mt-6 rounded-xl bg-slate-900/90 border border-cyan-500/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Larry Ellison Contract SLA Guarantee</div>
            <div className="text-[11px] text-slate-400">
              If an automated spec deliverable fails to hit 5x compute credit markup or takes longer than 10 minutes to render, the entire month is free.
            </div>
          </div>
        </div>

        {onCtaClick && (
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-500/20 active:scale-95 whitespace-nowrap"
          >
            Deploy Spec Engine
          </button>
        )}
      </div>
    </div>
  );
}
