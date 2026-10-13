import React from 'react';
import { Video, ShieldCheck } from 'lucide-react';

export function Footer({ onOpenGenerator, onScrollToCatalog, onScrollToCalculator }) {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Video className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-extrabold text-lg text-white font-display">
                Spec<span className="text-cyan-400">Studio</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Productized client delivery portal and spec-work outbound pipeline turning raw AI compute into $300–$2,500/mo high-margin B2B visual deliverables.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">
              The Grosocial.io Framework Automated • 5x Margin Floor
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">
              Platform Features
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={onOpenGenerator} className="hover:text-cyan-400 transition-colors">
                  Spec-Work Teaser Studio
                </button>
              </li>
              <li>
                <button onClick={onScrollToCatalog} className="hover:text-cyan-400 transition-colors">
                  12-Job Grosocial Catalog
                </button>
              </li>
              <li>
                <button onClick={onScrollToCalculator} className="hover:text-cyan-400 transition-colors">
                  5x Cost-Plus Margin Engine
                </button>
              </li>
              <li>
                <button onClick={onOpenGenerator} className="hover:text-cyan-400 transition-colors">
                  Watermark Removal & Stripe Vault
                </button>
              </li>
            </ul>
          </div>

          {/* High-Intent SEO Keywords */}
          <div>
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">
              High-Intent Solutions
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <span className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                  AI real estate walkthrough video service
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                  turn food photos into restaurant reels AI
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                  productized AI video agency client portal
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                  faceless channel video management service
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-cyan-400 cursor-pointer">
                  drone shot generator for real estate listings
                </span>
              </li>
            </ul>
          </div>

          {/* Grosocial Rule #2 Playbook */}
          <div>
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">
              The Grosocial Rule #2
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 italic leading-relaxed">
              "We don't pitch services; we send finished assets. Upload the client's public listing photo, render the motion preview, and send them the unwatermarked file link."
            </div>
            <div className="mt-2 text-[10px] text-slate-500 font-mono">
              TAM: $6.25B across 2.5M local businesses
            </div>
          </div>
        </div>

        {/* Operational Scope Disclaimers */}
        <div className="pt-6 border-t border-slate-900 text-[10px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Operational Scope Disclosure:</strong> SpecStudio is client portal and quoting governor software for media operators. SpecStudio does not train proprietary foundation models or host generative model weights (it interfaces with standard public inference APIs such as Wan2.1, Luma, Kling, and ElevenLabs). SpecStudio does not provide continuous browser-based non-linear video editing (NLE), and does not manage multi-tiered payroll or corporate employer of record services.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2">
            <div>
              © 2026 SpecStudio Inc. All rights reserved. Built for solo creators and productized agencies.
            </div>
            <div className="font-mono text-slate-600 mt-1 sm:mt-0">
              80%–88% Gross Margin Floor • 24h Turnaround SLA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
