import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Eye, 
  Mail, 
  MessageSquare, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Layers,
  Sparkles
} from 'lucide-react';

export function OutboundConsole({ specs, onOpenClientVault }) {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState('email'); // 'email', 'dm', 'sms'

  const copyOutreachMessage = (spec, channel) => {
    let message = "";
    const previewLink = `${window.location.origin}${window.location.pathname}#/preview/${spec.id}`;

    if (channel === 'email') {
      message = `Subject: Quick 10s cinematic motion preview for ${spec.companyOrAddress}\n\nHey ${spec.clientName},\n\nNoticed your listing at ${spec.companyOrAddress}. Instead of standard static photography, we rendered a quick 10-second 4K cinematic motion walkthrough.\n\nYou can preview the watermarked teaser directly here: ${previewLink}\n\nThe unwatermarked broadcast-ready file is rendered and ready to ship if you'd like to use it for your MLS listing and Instagram Reels ($${spec.invoiceAmount} flat).\n\nBest,\nYour Studio Team`;
    } else if (channel === 'dm') {
      message = `Hey ${spec.clientName} 👋 Made a quick 10-second cinematic motion walkthrough for your listing at ${spec.companyOrAddress}. Check out the watermarked preview here: ${previewLink} (Broadcast unwatermarked 4K master is ready to ship!)`;
    } else {
      message = `Hey ${spec.clientName}, made a quick cinematic motion video for ${spec.companyOrAddress}. Preview here: ${previewLink} — let me know if you want the unwatermarked 4K file!`;
    }

    navigator.clipboard.writeText(message);
    setCopiedId(spec.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="outbound-section" className="py-14 sm:py-20 border-t border-border/80 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-2">
              <Send className="w-3.5 h-3.5" />
              <span>Grosocial Outbound Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              "Show, Never Describe" Outbound Outreach Console
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Grosocial Rule #2: Stop sending generic cold pitches. Generate the finished asset first, send a watermarked teaser link, and let the visual quality close the deal.
            </p>
          </div>

          {/* Channel selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-700/80 rounded-xl text-xs">
            <button
              onClick={() => setSelectedChannel('email')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                selectedChannel === 'email' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Pitch</span>
            </button>
            <button
              onClick={() => setSelectedChannel('dm')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                selectedChannel === 'dm' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Instagram / LinkedIn DM</span>
            </button>
          </div>
        </div>

        {/* Active Spec Outbound Table */}
        <div className="overflow-x-auto border border-border rounded-xl bg-surface/80 shadow-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-slate-900/80 text-slate-400 uppercase font-mono tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Client Decision Maker & Property</th>
                <th className="py-3.5 px-4">Invoice & 5x Margin</th>
                <th className="py-3.5 px-4">Format / Revisions</th>
                <th className="py-3.5 px-4 text-center">Pipeline Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {specs.map((spec) => (
                <tr key={spec.id} className="hover:bg-slate-900/40 transition-colors">
                  {/* Client & Address */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-white text-sm">{spec.clientName}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                      <span className="text-cyan-400 font-semibold">{spec.targetRole}</span>
                      <span>•</span>
                      <span className="truncate max-w-xs">{spec.companyOrAddress}</span>
                    </div>
                  </td>

                  {/* Invoice & Margin */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-white text-sm font-mono">
                      ${spec.invoiceAmount}.00 Flat
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                      Net Profit: +${spec.grossMarginUSD} ({spec.marginPercent}%)
                    </div>
                  </td>

                  {/* Format & Revisions */}
                  <td className="py-4 px-4 font-mono text-slate-300">
                    <div className="text-xs">{spec.aspectRatio}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Revisions remaining: <strong className="text-slate-300">{spec.revisionRoundsRemaining} / 1</strong>
                    </div>
                  </td>

                  {/* Pipeline Status */}
                  <td className="py-4 px-4 text-center">
                    {spec.status === 'Paid & Unlocked' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-mono">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>Paid & Unlocked</span>
                      </span>
                    ) : spec.status === 'Delivered - Payment Pending' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/40 font-mono">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>Payment Pending</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-mono">
                        <Send className="w-3 h-3 text-cyan-400" />
                        <span>Outbound Sent</span>
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => copyOutreachMessage(spec, selectedChannel)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all flex items-center gap-1"
                        title="Copy 1-click personalized pitch copy"
                      >
                        {copiedId === spec.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Copy Pitch</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onOpenClientVault(spec)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all flex items-center gap-1 active:scale-95"
                        title="Open interactive client approval screen & watermark unlock"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Client Vault</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
