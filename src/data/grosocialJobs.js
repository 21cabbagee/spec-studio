export const GROSOCIAL_JOBS = [
  {
    id: "job_01",
    jobNumber: "Job 01",
    title: "Real Estate 4K Cinematic Walkthrough",
    targetBuyer: "Active Listing Agents ($700k+ Homes)",
    retailPrice: 500,
    rawComputeCost: 18,
    marginPercent: 96.4,
    markupMultiplier: 27.7,
    turnaround: "24 Hours",
    deliverables: "30-sec 4K drone flythrough + interior pan + AI voice narration + subtitles",
    originalPhoto: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    aiMotionVideo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
    sampleClient: "Kristin Vance (Compass Real Estate)",
    propertyAddress: "742 Evergreen Terrace, Palo Alto, CA",
    listingPrice: "$1,850,000",
    outreachHook: "Hey Kristin, made a quick 10-second cinematic drone & interior walkthrough for your new Palo Alto listing. Preview the watermarked cut here — broadcast 4K unwatermarked cut is ready to ship."
  },
  {
    id: "job_02",
    jobNumber: "Job 02",
    title: "10 Dynamic Food & Cocktail Reels",
    targetBuyer: "Independent Restaurants & Cocktail Bars",
    retailPrice: 1200,
    rawComputeCost: 24,
    marginPercent: 98.0,
    markupMultiplier: 50.0,
    turnaround: "48 Hours",
    deliverables: "10x 9:16 vertical motion clips with sizzling steam, pour physics, and trending audio",
    originalPhoto: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    aiMotionVideo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    sampleClient: "Chef Marco Valenti (Osteria Bella)",
    propertyAddress: "Osteria Bella, Downtown Austin, TX",
    listingPrice: "Signature Truffle Ribeye",
    outreachHook: "Hey Marco, saw the static photo of your Truffle Ribeye on Instagram. We turned it into a 4K sizzling slow-motion Reel with dynamic lighting. Take a look at the watermarked preview here."
  },
  {
    id: "job_04",
    jobNumber: "Job 04",
    title: "Clinic / Medspa Founder Story Video",
    targetBuyer: "Medspas, Dental Boutiques, Chiropractic",
    retailPrice: 500,
    rawComputeCost: 15,
    marginPercent: 97.0,
    markupMultiplier: 33.3,
    turnaround: "24 Hours",
    deliverables: "45-sec high-trust authority video with facial motion sync, studio b-roll, and caption styling",
    originalPhoto: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    aiMotionVideo: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    sampleClient: "Dr. Elena Rostova (Aura Aesthetics Medspa)",
    propertyAddress: "Aura Aesthetics, Beverly Hills, CA",
    listingPrice: "Laser Rejuvenation Package",
    outreachHook: "Hey Dr. Rostova, took your headshot and practice photo and created a broadcast-grade patient welcome teaser. Preview the motion sample here."
  },
  {
    id: "job_07",
    jobNumber: "Job 07",
    title: "E-Commerce 3D Product Turntable Video",
    targetBuyer: "Shopify Brands & Amazon FBA Sellers",
    retailPrice: 400,
    rawComputeCost: 12,
    marginPercent: 97.0,
    markupMultiplier: 33.3,
    turnaround: "24 Hours",
    deliverables: "4x studio lighting turntable loops + exploded view product animation in 9:16 & 1:1",
    originalPhoto: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    aiMotionVideo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    sampleClient: "Marcus Vance (ChronoTech Watches)",
    propertyAddress: "ChronoTech Direct DTC",
    listingPrice: "$450 Automatic Diver",
    outreachHook: "Hey Marcus, turned your flat catalog watch photo into an Apple-style floating 3D studio turntable with reflective metallic lighting. Check out the watermarked render."
  }
];

export const MOCK_SPECS = [
  {
    id: "spec_881",
    jobId: "job_01",
    clientName: "Kristin Vance",
    companyOrAddress: "742 Evergreen Terrace, Palo Alto, CA",
    targetRole: "Lead Listing Broker",
    status: "Delivered - Payment Pending", // 'Draft Spec', 'Outbound Sent', 'Delivered - Payment Pending', 'Paid & Unlocked'
    invoiceAmount: 500,
    computeCost: 18,
    grossMarginUSD: 482,
    marginPercent: 96.4,
    sourceUrl: "https://zillow.com/homes/742-evergreen-terrace-palo-alto",
    aspectRatio: "16:9 Landscape & 9:16 Reel",
    watermarkActive: true,
    feedbackMarkers: [
      { time: "0:04", note: "Can we brighten the master bedroom lighting slightly?" },
      { time: "0:12", note: "Add the MLS listing number in the bottom right corner" }
    ],
    revisionRoundsRemaining: 1, // Contract limit: exactly 1 round included
    paidViaStripe: false
  },
  {
    id: "spec_882",
    jobId: "job_02",
    clientName: "Chef Marco Valenti",
    companyOrAddress: "Osteria Bella, Downtown Austin, TX",
    targetRole: "Executive Chef & Owner",
    status: "Paid & Unlocked",
    invoiceAmount: 1200,
    computeCost: 24,
    grossMarginUSD: 1176,
    marginPercent: 98.0,
    sourceUrl: "https://instagram.com/osteriabella.atx",
    aspectRatio: "9:16 Vertical Reels Pack (10 clips)",
    watermarkActive: false,
    feedbackMarkers: [
      { time: "0:03", note: "Approved! Love the slow motion smoke physics." }
    ],
    revisionRoundsRemaining: 0,
    paidViaStripe: true
  },
  {
    id: "spec_883",
    jobId: "job_04",
    clientName: "Dr. Elena Rostova",
    companyOrAddress: "Aura Aesthetics Medspa, Beverly Hills",
    targetRole: "Medical Director",
    status: "Outbound Sent",
    invoiceAmount: 500,
    computeCost: 15,
    grossMarginUSD: 485,
    marginPercent: 97.0,
    sourceUrl: "https://auraaesthetics.com",
    aspectRatio: "9:16 Vertical Reel",
    watermarkActive: true,
    feedbackMarkers: [],
    revisionRoundsRemaining: 1,
    paidViaStripe: false
  }
];
