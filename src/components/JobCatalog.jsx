import React from 'react';
import { Layers, Sparkles, DollarSign, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { GROSOCIAL_JOBS } from '../data/grosocialJobs';

export function JobCatalog({ onSelectJobForSpec }) {
  const extendedCatalog = [
    ...GROSOCIAL_JOBS,
    {
      id: "job_03",
      jobNumber: "Job 03",
      title: "Faceless Shorts / TikTok Batching",
      targetBuyer: "Content Creators & Affiliate Brands",
      retailPrice: 1000,
      rawComputeCost: 20,
      marginPercent: 98.0,
      markupMultiplier: 50.0,
      turnaround: "48 Hours",
      deliverables: "30x viral vertical clips with animated captions and voiceover",
      outreachHook: "Hey, we generated 3 sample vertical motion shorts for your brand. Check the preview."
    },
    {
      id: "job_05",
      jobNumber: "Job 05",
      title: "Social Motion Content Engine Retainer",
      targetBuyer: "Boutique Agencies & D2C Brands",
      retailPrice: 1500,
      rawComputeCost: 35,
      marginPercent: 97.6,
      markupMultiplier: 42.8,
      turnaround: "Monthly Retainer",
      deliverables: "20 bespoke visual video assets delivered per month with audio master",
      outreachHook: "Ready to replace your freelance videographer retainer with 24h turnaround AI deliverables?"
    },
    {
      id: "job_06",
      jobNumber: "Job 06",
      title: "Luxury Commercial Real Estate Showcase",
      targetBuyer: "Commercial Brokers ($5M+ Assets)",
      retailPrice: 2500,
      rawComputeCost: 45,
      marginPercent: 98.2,
      markupMultiplier: 55.5,
      turnaround: "48 Hours",
      deliverables: "90-sec broadcast architectural cinematic master with day-to-night transitions",
      outreachHook: "Turned the exterior renderings of your commercial development into a 4K flyover."
    }
  ];

  return (
    <section id="catalog-section" className="py-16 sm:py-24 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The 12-Job Productized Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            The Grosocial.io Productized Media Catalog
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Stop selling hours or vague "AI consulting." Sell pre-priced, standardized visual deliverables with guaranteed 24–48 hour turnaround and an 80%+ profit margin floor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extendedCatalog.map((job) => (
            <div 
              key={job.id} 
              className="p-6 rounded-2xl bg-surface border border-border hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/30 font-bold">
                    {job.jobNumber}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {job.marginPercent}% Gross Margin
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {job.title}
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  Target: <strong className="text-slate-300">{job.targetBuyer}</strong>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Retail Invoice:</span>
                    <span className="font-mono font-bold text-white">${job.retailPrice} Flat</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500">Raw Model Compute:</span>
                    <span className="font-mono text-red-400">${job.rawComputeCost}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800">
                    <span className="text-slate-500">Turnaround SLA:</span>
                    <span className="font-mono text-cyan-400">{job.turnaround}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  {job.deliverables}
                </p>
              </div>

              <button
                onClick={() => onSelectJobForSpec(job)}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Generate Spec for This Job</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
