import React, { useState } from 'react';
import { 
  Sparkles, 
  Video, 
  Layers, 
  Link as LinkIcon, 
  Upload, 
  Play, 
  Pause, 
  Eye, 
  Send, 
  Lock, 
  Unlock, 
  CheckCircle, 
  ExternalLink,
  Sliders,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GROSOCIAL_JOBS } from '../data/grosocialJobs';

export function SpecGenerator({ onGenerateSpec, onOpenReviewVault, onOpenOutbound }) {
  const [selectedJob, setSelectedJob] = useState(GROSOCIAL_JOBS[0]);
  const [sourceUrl, setSourceUrl] = useState('https://zillow.com/homes/742-evergreen-terrace-palo-alto');
  const [clientName, setClientName] = useState('Kristin Vance');
  const [addressOrCompany, setAddressOrCompany] = useState('742 Evergreen Terrace, Palo Alto, CA');
  const [aspectRatio, setAspectRatio] = useState('16:9'); // '16:9', '9:16', '1:1'
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 for before/after comparison
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setClientName(job.sampleClient.split(' (')[0]);
    setAddressOrCompany(job.propertyAddress);
    setSourceUrl(job.id === 'job_01' ? 'https://zillow.com/homes/742-evergreen-terrace' : 'https://instagram.com/sample.brand');
  };

  const handleSimulateRender = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // safe fallback
      }

      const newSpec = {
        id: `spec_${Date.now()}`,
        jobId: selectedJob.id,
        clientName: clientName || "Prospective Client",
        companyOrAddress: addressOrCompany || "Client Asset Location",
        targetRole: selectedJob.targetBuyer.split(' (')[0],
        status: "Draft Spec",
        invoiceAmount: selectedJob.retailPrice,
        computeCost: selectedJob.rawComputeCost,
        grossMarginUSD: selectedJob.retailPrice - selectedJob.rawComputeCost,
        marginPercent: selectedJob.marginPercent,
        sourceUrl: sourceUrl,
        aspectRatio: `${aspectRatio} ${aspectRatio === '9:16' ? 'Vertical Reel' : 'Landscape'}`,
        watermarkActive: true,
        feedbackMarkers: [],
        revisionRoundsRemaining: 1,
        paidViaStripe: false,
        originalPhoto: selectedJob.originalPhoto,
        aiMotionVideo: selectedJob.aiMotionVideo
      };

      onGenerateSpec(newSpec);
    }, 1200);
  };

  return (
    <section id="generator-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automated Upfront Spec Creation</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          Turn Raw Public Photos Into Watermarked Teasers in 60s
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Grosocial Rule #2: <em>"Never pitch a service; pitch the finished asset."</em> Paste a public listing URL or Instagram profile to generate a dynamic motion teaser preview.
        </p>
      </div>

      {/* Preset Service Job Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
        {GROSOCIAL_JOBS.map((job) => (
          <button
            key={job.id}
            onClick={() => handleJobSelect(job)}
            className={`p-4 rounded-xl text-left transition-all border ${
              selectedJob.id === job.id
                ? 'bg-surface border-cyan-500 shadow-lg shadow-cyan-500/15 ring-1 ring-cyan-500/50'
                : 'bg-surface/50 border-border hover:border-slate-700 hover:bg-surface'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/30">
                {job.jobNumber}
              </span>
              <span className="text-xs font-bold text-emerald-400 font-mono">
                ${job.retailPrice} Flat
              </span>
            </div>
            <div className="font-bold text-sm text-white">{job.title}</div>
            <div className="text-xs text-slate-400 mt-1 line-clamp-1">
              Target: {job.targetBuyer}
            </div>
            <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500">Compute: ${job.rawComputeCost}</span>
              <span className="text-cyan-400 font-bold">{job.marginPercent}% Margin</span>
            </div>
          </button>
        ))}
      </div>

      {/* Studio Workspace: Inputs & Controls (Left) vs Interactive Video Comparison Player (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Spec Pipeline Inputs */}
        <div className="lg:col-span-5 bg-surface border border-border rounded-2xl p-6 shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Public Asset Intake Pipeline</span>
            </h3>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              {selectedJob.markupMultiplier}x Target Markup
            </span>
          </div>

          {/* Listing / Profile URL */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center justify-between">
              <span>Public Listing or Profile URL *</span>
              <span className="text-[10px] text-slate-500 font-mono">Zillow / Redfin / IG</span>
            </label>
            <div className="relative">
              <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://zillow.com/homes/..."
                className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5 block">
              Extracts high-res public listing photography and neighborhood metadata.
            </span>
          </div>

          {/* Client & Address Info */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Target Decision Maker *</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Kristin Vance"
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Company / Property *</label>
              <input
                type="text"
                value={addressOrCompany}
                onChange={(e) => setAddressOrCompany(e.target.value)}
                placeholder="e.g. 742 Evergreen Terr"
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-1 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Output Format Aspect Ratio */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Deliverable Aspect Ratio</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '16:9', label: '16:9 Landscape', desc: 'MLS & Web Banner' },
                { id: '9:16', label: '9:16 Vertical', desc: 'Reels, TikTok, Shorts' },
                { id: '1:1', label: '1:1 Square', desc: 'Instagram Feed' }
              ].map(ratio => (
                <button
                  key={ratio.id}
                  type="button"
                  onClick={() => setAspectRatio(ratio.id)}
                  className={`p-2 rounded-lg text-center border text-xs transition-all ${
                    aspectRatio === ratio.id
                      ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold'
                      : 'bg-slate-900 border-slate-700/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-mono">{ratio.id}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{ratio.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Unit Economics Guardrail Summary */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Raw Model Compute:</span>
              <span className="font-mono text-red-400 font-semibold">${selectedJob.rawComputeCost}.00 (Wan2.1 / Kling / Audio)</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Locked Client Invoice:</span>
              <span className="font-mono text-white font-bold">${selectedJob.retailPrice}.00 Flat</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-800">
              <span className="text-emerald-400 font-semibold">Net Operator Profit:</span>
              <span className="font-mono text-emerald-400 font-extrabold text-sm">
                +${selectedJob.retailPrice - selectedJob.rawComputeCost}.00 ({selectedJob.marginPercent}%)
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleSimulateRender}
              disabled={isGenerating}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isGenerating ? "Synthesizing Motion Teaser..." : "Generate Watermarked Spec Teaser"}</span>
            </button>

            <button
              onClick={() => onOpenOutbound({
                clientName,
                propertyAddress: addressOrCompany,
                jobTitle: selectedJob.title,
                outreachHook: selectedJob.outreachHook,
                retailPrice: selectedJob.retailPrice
              })}
              className="py-3 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shrink-0"
              title="Launch 1-Click Outbound Pitch"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Outbound Pitch</span>
            </button>
          </div>
        </div>

        {/* Right Column: Custom Interactive Comparison Video Player */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full relative">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-3 px-1 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Split Comparison: Static Photo vs AI Motion Render</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWatermarkEnabled(!watermarkEnabled)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono flex items-center gap-1 border transition-colors ${
                    watermarkEnabled
                      ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                      : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                  }`}
                  title="Toggle client review watermark simulation"
                >
                  {watermarkEnabled ? <Lock className="w-3 h-3 text-amber-400" /> : <Unlock className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{watermarkEnabled ? 'Watermark: LOCKED' : 'Watermark: UNLOCKED'}</span>
                </button>
              </div>
            </div>

            {/* Video Player Display Container */}
            <div className={`relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl ${
              aspectRatio === '9:16' ? 'aspect-[9/16] max-w-sm mx-auto' : aspectRatio === '1:1' ? 'aspect-square max-w-lg mx-auto' : 'aspect-video'
            }`}>
              {/* Left Side: Original Static Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedJob.originalPhoto})` }}
              >
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-slate-300 border border-slate-700/80">
                  ORIGINAL STATIC PHOTO
                </div>
              </div>

              {/* Right Side: AI Motion Video Render (Clipped by slider position) */}
              <div 
                className="absolute inset-0 bg-cover bg-center overflow-hidden transition-all duration-75"
                style={{ 
                  backgroundImage: `url(${selectedJob.aiMotionVideo})`,
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                }}
              >
                <div className="absolute top-3 right-3 bg-cyan-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>AI DYNAMIC MOTION (4K)</span>
                </div>
              </div>

              {/* Center Slider Divider Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-7 h-7 rounded-full bg-white text-slate-950 shadow-lg flex items-center justify-center -ml-3 cursor-ew-resize">
                  <Sliders className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>

              {/* Watermark Overlay (Locked Mode) */}
              {watermarkEnabled && (
                <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 watermark-pattern">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-white/40 uppercase bg-black/40 px-2 py-0.5 rounded">
                      SPEC TEASER PREVIEW
                    </span>
                    <span className="font-mono text-[11px] font-bold text-white/40">
                      ID: {selectedJob.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Big diagonal watermark text */}
                  <div className="text-center my-auto -rotate-12 select-none">
                    <div className="text-2xl sm:text-4xl font-black text-white/25 uppercase tracking-widest font-display drop-shadow-md">
                      SPECSTUDIO WATERMARK
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-cyan-400/30 font-semibold tracking-wider mt-1">
                      4K BROADCAST UNLOCKED UPON STRIPE DEPOSIT
                    </div>
                  </div>

                  <div className="text-center font-mono text-[10px] text-white/40">
                    Prepared for: {clientName} • {addressOrCompany}
                  </div>
                </div>
              )}

              {/* Bottom Video Progress Bar Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-300">0:05 / 0:30 (Teaser Loop)</span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400">
                  Audio: Ambient Cinematic Mix
                </div>
              </div>
            </div>

            {/* Slider Range Input */}
            <div className="mt-4 p-3 bg-surface border border-border rounded-xl space-y-2">
              <div className="flex justify-between text-xs text-slate-300 font-medium">
                <span>Drag to Compare: Static Source Photo</span>
                <span className="text-cyan-400 font-mono font-bold">4K Dynamic Motion Output ({sliderPosition}%)</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-ew-resize"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
