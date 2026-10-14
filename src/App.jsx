import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import OutcomeChart from './components/OutcomeChart';
import { SpecGenerator } from './components/SpecGenerator';
import { OutboundConsole } from './components/OutboundConsole';
import { MarginCalculator } from './components/MarginCalculator';
import { JobCatalog } from './components/JobCatalog';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { ClientPreviewModal } from './components/ClientPreviewModal';
import { MOCK_SPECS } from './data/grosocialJobs';
import { Check, Video } from 'lucide-react';

export default function App() {
  const [specs, setSpecs] = useState(MOCK_SPECS);
  const [activePreviewSpec, setActivePreviewSpec] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleGenerateSpec = (newSpec) => {
    setSpecs([newSpec, ...specs]);
    showToast(`Spec teaser created for ${newSpec.clientName} ($${newSpec.invoiceAmount} flat)`);
    // Automatically preview in the client approval vault
    setActivePreviewSpec(newSpec);
  };

  const handlePayAndUnlock = (specId) => {
    setSpecs(specs.map(s => 
      s.id === specId ? { 
        ...s, 
        status: 'Paid & Unlocked', 
        watermarkActive: false, 
        paidViaStripe: true,
        revisionRoundsRemaining: 0 
      } : s
    ));
    showToast("Stripe payment confirmed! Watermarks removed & broadcast 4K masters unlocked.");
    // Update active modal preview as well
    if (activePreviewSpec && activePreviewSpec.id === specId) {
      setActivePreviewSpec({
        ...activePreviewSpec,
        status: 'Paid & Unlocked',
        watermarkActive: false,
        paidViaStripe: true,
        revisionRoundsRemaining: 0
      });
    }
  };

  const scrollToGenerator = () => {
    const el = document.getElementById('generator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOutbound = () => {
    const el = document.getElementById('outbound-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 border border-cyan-500/40 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        onOpenGenerator={scrollToGenerator}
        onScrollToCatalog={scrollToCatalog}
        onScrollToCalculator={scrollToCalculator}
        onScrollToOutbound={scrollToOutbound}
      />

      <main className="flex-1">
        <Hero
          onOpenGenerator={scrollToGenerator}
          onScrollToCatalog={scrollToCatalog}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Outcome Data Chart (Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine) */}
        <OutcomeChart onCtaClick={scrollToGenerator} />

        <SpecGenerator
          onGenerateSpec={handleGenerateSpec}
          onOpenReviewVault={(spec) => setActivePreviewSpec(spec)}
          onOpenOutbound={() => scrollToOutbound()}
        />

        <OutboundConsole
          specs={specs}
          onOpenClientVault={(spec) => setActivePreviewSpec(spec)}
        />

        <JobCatalog
          onSelectJobForSpec={() => scrollToGenerator()}
        />

        <MarginCalculator
          onOpenGenerator={scrollToGenerator}
        />

        <PricingSection
          onOpenGenerator={scrollToGenerator}
        />
      </main>

      <Footer
        onOpenGenerator={scrollToGenerator}
        onScrollToCatalog={scrollToCatalog}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Client Preview & Approval Vault Modal */}
      <ClientPreviewModal
        spec={activePreviewSpec}
        isOpen={!!activePreviewSpec}
        onClose={() => setActivePreviewSpec(null)}
        onPayAndUnlock={handlePayAndUnlock}
      />
    </div>
  );
}
