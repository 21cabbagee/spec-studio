import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Download, 
  CheckCircle, 
  CreditCard, 
  MessageSquare, 
  Plus, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Video,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ClientPreviewModal({ spec, isOpen, onClose, onPayAndUnlock }) {
  const [newFeedbackNote, setNewFeedbackNote] = useState('');
  const [feedbackList, setFeedbackList] = useState(spec ? spec.feedbackMarkers : []);
  const [isProcessingStripe, setIsProcessingStripe] = useState(false);

  if (!isOpen || !spec) return null;

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (!newFeedbackNote.trim()) return;

    const newMarker = {
      time: "0:08",
      note: newFeedbackNote
    };

    setFeedbackList([...feedbackList, newMarker]);
    setNewFeedbackNote('');
  };

  const handleSimulateStripePayment = () => {
    setIsProcessingStripe(true);
    setTimeout(() => {
      setIsProcessingStripe(false);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // safe fallback
      }

      onPayAndUnlock(spec.id);
    }, 1200);
  };

  const isUnlocked = spec.paidViaStripe || !spec.watermarkActive;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="p-4 bg-slate-950 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <Video className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">{spec.companyOrAddress}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                  {spec.id}
                </span>
                {isUnlocked ? (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>BROADCAST 4K UNLOCKED</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>WATERMARKED PREVIEW</span>
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400">
                Prepared for {spec.clientName} ({spec.targetRole})
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player & Interactive Client Vault */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-h-[82vh] overflow-y-auto">
          {/* Left: Video Player (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-black shadow-2xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${spec.aiMotionVideo || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80"})` }}
              />

              {/* Watermark Overlay (Only if locked) */}
              {!isUnlocked && (
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 watermark-pattern">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] font-bold text-white/50 uppercase bg-black/50 px-2 py-0.5 rounded">
                      SPEC PREVIEW
                    </span>
                    <span className="font-mono text-[10px] font-bold text-white/50">
                      ID: {spec.id}
                    </span>
                  </div>

                  <div className="text-center my-auto -rotate-12 select-none">
                    <div className="text-2xl font-black text-white/30 uppercase tracking-widest font-display">
                      SPECSTUDIO WATERMARK
                    </div>
                    <div className="text-xs font-mono text-cyan-400/40 font-semibold tracking-wider mt-1">
                      4K BROADCAST UNLOCKED UPON APPROVAL
                    </div>
                  </div>

                  <div className="text-center font-mono text-[10px] text-white/40">
                    Client: {spec.clientName}
                  </div>
                </div>
              )}

              {/* Top Status Tag */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white flex items-center gap-1.5 border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>4K 60FPS AI MOTION RENDER</span>
              </div>
            </div>

            {/* Unlocked Multi-Format Downloads (If Paid) */}
            {isUnlocked ? (
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Watermark Removed • Broadcast Masters Ready</span>
                  </span>
                  <span className="font-mono text-emerald-400">$0.00 Remaining Balance</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <button className="p-2.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-500/50 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>9:16 Vertical Reel</span>
                  </button>
                  <button className="p-2.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-500/50 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>16:9 4K Web</span>
                  </button>
                  <button className="p-2.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-500/50 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>1:1 Square Feed</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Stripe Checkout Deposit Button (Locked State) */
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Approve & Unlock 4K Broadcast Master
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Instantly removes all watermarks and delivers raw ProRes / MP4 files.
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-white font-mono">
                      ${spec.invoiceAmount}.00
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">Flat Invoice</div>
                  </div>
                </div>

                <button
                  onClick={handleSimulateStripePayment}
                  disabled={isProcessingStripe}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4 text-slate-950" />
                  <span>
                    {isProcessingStripe ? "Processing Stripe Clearance..." : `Pay $${spec.invoiceAmount} & Unlock Master Files`}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Right: Revision Governor & Timestamped Feedback (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Revision Governor Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Contract Revision Allowance:</span>
                <span className="font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  {spec.revisionRoundsRemaining} / 1 Round Remaining
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Standard client agreement includes 1 round of minor tweaks (pacing, text, color). Structural prompt re-renders billed at $75/round.
              </p>
            </div>

            {/* Timestamped Feedback Notes */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timestamped Feedback Markers</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {feedbackList.length} notes
                </span>
              </div>

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {feedbackList.length === 0 ? (
                  <div className="text-[11px] text-slate-500 italic py-2 text-center">
                    No revision notes submitted yet. Video approved as-is.
                  </div>
                ) : (
                  feedbackList.map((f, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs flex items-start gap-2">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 shrink-0">
                        {f.time}
                      </span>
                      <span className="text-slate-300 text-[11px] leading-tight">{f.note}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Add Feedback Input */}
              {!isUnlocked && spec.revisionRoundsRemaining > 0 && (
                <form onSubmit={handleAddFeedback} className="pt-2 border-t border-slate-800 flex gap-2">
                  <input
                    type="text"
                    value={newFeedbackNote}
                    onChange={(e) => setNewFeedbackNote(e.target.value)}
                    placeholder="e.g. Add listing price banner at 0:08"
                    className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs focus:ring-1 focus:ring-cyan-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium shrink-0"
                  >
                    Add Note
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
