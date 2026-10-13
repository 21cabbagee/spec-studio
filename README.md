# SpecStudio

> **AI Media Service-as-a-Software Dispatch & Client Delivery Portal**

[![Margin Floor](https://img.shields.io/badge/Margin%20Floor-5x%20Markup%20(85%25%2B)-emerald.svg)](https://specstudio.dev)
[![Turnaround](https://img.shields.io/badge/SLA-24--48h%20Turnaround-cyan.svg)](https://specstudio.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 1. Executive Summary & Problem Thesis
**SpecStudio** is a productized client delivery portal and spec-work outbound pipeline that turns raw AI generative compute credits into **$300–$2,500/mo high-margin B2B visual deliverables** with automated margin guardrails.

### The Problem Thesis
The **grosocial.io** model proves that local businesses (real estate listing agents, restaurants, clinics, e-commerce brands) happily pay $300–$2,500 for finished visual deliverables without wanting to wrestle with AI prompt tools. However, operators executing this model face two fatal bottlenecks:
1. **The Revision / Credit Quagmire:** Revisions and runaway compute generation costs wipe out gross profit without a strict 5x markup floor and locked revision scopes.
2. **The Outbound Friction Trap:** Sending manual pitch messages gets ignored, whereas generating upfront spec-work manually takes too long without an automated pipeline to pull public assets (Zillow listings, restaurant Instagram posts), generate watermarked previews, and send teaser links.

SpecStudio productizes the entire pipeline from automated spec creation to locked client handoff.

---

## 2. Unit Economics & Market Sizing
- **5x Margin Floor Rule:**
  - Raw Model / Compute Cost per Asset: **$10 – $30** (Diffusion video generation, voice cloning, audio master).
  - Client Deliverable Price: **$150 – $800+ flat** (Job 01: Real Estate Walkthrough @ $500; Job 02: 10 Food Clips @ $1,200; Job 04: Brand Video @ $500).
  - Minimum Gross Margin: **80%–88%** (Compute cost never exceeds 20% of invoice).
- **Bottoms-Up TAM:**
  - Target Service Buyers: 2,500,000 local businesses in the US/EU across real estate, hospitality, and professional practices.
  - Value Capture: $2,500/year average visual asset spend = **$6.25 Billion TAM**.
- **Desperation Filter:** 
  - Real estate agents with $900k listings lose days and pay $1,500+ for legacy drone videography crews.
  - Restaurants have static menu photos but cannot afford production agency retainers for dynamic Reels/TikToks.

---

## 3. Black Car Scope (V1 MVP Architecture)

### Allowed Features (In-Scope)
1. **Automated Spec-Work Teaser Generator:**
   - Input: Paste a Zillow/Redfin listing URL, Instagram profile, or upload phone photos.
   - Pipeline: Extracts photos ➔ generates dynamic motion sample ➔ overlays branded client watermark ➔ hosts on shareable preview link.
   - Interactive split comparison slider: Original Static Photo vs. 4K Dynamic Motion Output.
2. **"Show, Never Describe" Outbound Outreach Console:**
   - 1-click email & DM pitch template generator embedding the live interactive video player preview:
     *"Hey [Name], made a quick 10-second cinematic walkthrough for your listing at [Address]. Preview it here (unwatermarked broadcast version ready to ship)."*
3. **Automated 5x Cost-Plus Quoting Engine & Revision Governor:**
   - Enforces minimum 5x client markup floor and prevents below-margin invoicing.
   - Automated contract term stamping: Exactly 1 round of minor edits included; structural changes billed at $75/round.
4. **Interactive Asset Delivery & Approval Vault:**
   - Client review screen with timestamped feedback markers (e.g. 0:04, 0:12).
   - Instant simulated Stripe payment clearance with automatic watermark removal.
   - Instant multi-format exports: 9:16 Vertical (Reels/TikTok), 16:9 Landscape (Hero web banner), and 1:1 Square.

### Strictly Out-of-Scope (Excluded by Design)
- ❌ No proprietary model training or hosting (connects via standard API/Wan2.1/Kling/ElevenLabs endpoints).
- ❌ No continuous video timeline NLE editor in-browser.
- ❌ No multi-tiered agency payroll management.

---

## 4. Technical Architecture
```
spec-studio/
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Top bar with 5x margin floor badge & navigation
│   │   ├── Hero.jsx                   # SEO H1, canonical slug, and core value proposition
│   │   ├── SpecGenerator.jsx          # Public asset intake, before/after slider & teaser
│   │   ├── OutboundConsole.jsx        # 1-click Grosocial Rule #2 pitch copy generator
│   │   ├── MarginCalculator.jsx       # 5x cost-plus pricing calculator & revision governor
│   │   ├── JobCatalog.jsx             # The 12-Job Grosocial Productized Media Catalog
│   │   ├── PricingSection.jsx         # Operator platform subscriptions ($49/mo, $129/mo)
│   │   ├── ClientPreviewModal.jsx     # Interactive client vault, Stripe unlock & format export
│   │   └── Footer.jsx                 # Long-tail SEO keywords & operational disclosures
│   ├── data/
│   │   └── grosocialJobs.js           # 12 productized jobs, compute costs, and sample specs
│   ├── index.css                      # Tailwind styling, dark theme, and comparison slider
│   └── App.jsx                        # State orchestrator & modal controller
```

---

## 5. Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/21cabbagee/spec-studio.git
cd spec-studio

# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build production bundle
npm run build
```

---

## 6. Outreach & Discovery Pitch Script (Grosocial Rule #2)
> *"We don't pitch services; we send finished assets. Upload the client's public listing photo, render the motion preview, and send them the unwatermarked file link."*
