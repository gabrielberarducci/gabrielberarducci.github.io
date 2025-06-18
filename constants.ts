
import { Article, AffiliateProduct, ContentBlockType } from './types';

export const SITE_NAME = "Aussie Adventure Hub";

export const CATEGORIES = [
  { name: "4x4 & Utes", slug: "4x4-utes" },
  { name: "Camping Gear", slug: "camping-gear" },
  { name: "Caravans & Motorhomes", slug: "caravans-motorhomes" },
  { name: "Product Reviews", slug: "reviews" },
  { name: "Tutorials", slug: "tutorials" },
];

export const ALL_PRODUCTS: AffiliateProduct[] = [
  {
    id: "prod1",
    name: "Heavy-Duty Rooftop Tent (Outback King)",
    brand: "Outback Gear Co.",
    imageUrl: "https://picsum.photos/seed/rooftoptent/600/400",
    description: "Sleep under the stars in comfort with this durable, quick-setup rooftop tent. Perfect for Australian outback adventures. Weatherproof and spacious.",
    price: "AUD 1,499.00",
    rating: 4.5,
    affiliateLink: "#product-link-rooftoptent",
    retailer: "AdventureStore AU"
  },
  {
    id: "prod2",
    name: "12V Portable Camping Fridge/Freezer (ChillMate 50L)",
    brand: "Frosty Adventures",
    imageUrl: "https://picsum.photos/seed/fridge/600/400",
    description: "Keep your food fresh and drinks cold on the go. Low power consumption, robust design for 4WD touring Australia. Essential for long trips.",
    price: "AUD 799.00",
    rating: 4.8,
    affiliateLink: "#product-link-fridge",
    retailer: "4x4 Supercentre"
  },
  {
    id: "prod3",
    name: "All-Terrain Tyre Set (TerraGrip Pro)",
    brand: "TyreMax AU",
    imageUrl: "https://picsum.photos/seed/tyres/600/400",
    description: "Conquer any terrain with these high-performance all-terrain tyres. Excellent grip and durability for Australian conditions. Best 4x4 tyres for off-road.",
    price: "AUD 350.00 / tyre",
    rating: 4.6,
    affiliateLink: "#product-link-tyres",
    retailer: "OzTyres Online"
  },
  {
    id: "prod4",
    name: "Compact Caravan Awning (ShadeMaster 3000)",
    brand: "SunBlocker",
    imageUrl: "https://picsum.photos/seed/awning/600/400",
    description: "Extend your living space with this easy-to-install caravan awning. UV resistant and waterproof. Ideal for caravan holidays Australia.",
    price: "AUD 450.00",
    rating: 4.2,
    affiliateLink: "#product-link-awning",
    retailer: "Caravan World"
  },
  {
    id: "prod5",
    name: "Ute Tray Toolbox (SecureStore Pro)",
    brand: "UteMate",
    imageUrl: "https://picsum.photos/seed/toolbox/600/400",
    description: "Keep your tools safe and organised with this heavy-duty aluminium ute toolbox. Weather-sealed and lockable. Top ute accessories.",
    price: "AUD 599.00",
    rating: 4.7,
    affiliateLink: "#product-link-toolbox",
    retailer: "Tradie Superstore"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "ultimate-guide-rooftop-tents-australia",
    title: "The Ultimate Guide to Rooftop Tents in Australia: 2024 Review",
    date: "October 26, 2023",
    author: "Dave 'Outback' Wilson",
    category: "Camping Gear",
    imageUrl: "https://picsum.photos/seed/rooftoptentguide/1200/800",
    imageAlt: "A 4x4 vehicle with a rooftop tent deployed in the Australian outback at sunset.",
    summary: "Exploring the best rooftop tents for Australian conditions. We review top models, discuss pros and cons, and help you choose the perfect setup for your 4WD touring adventures. Keywords: rooftop tents Australia, 4WD camping, overlanding gear.",
    keywords: ["rooftop tents Australia", "4WD camping", "overlanding gear", "best camping gear AU", "adventure travel"],
    contentBlocks: [
      { type: ContentBlockType.Paragraph, text: "Rooftop tents (RTTs) have revolutionized how we camp in Australia. Offering convenience, comfort, and a quick setup, they are perfect for adventurers who love to explore remote locations. This guide dives deep into the best RTTs available in Australia for 2024." },
      { type: ContentBlockType.Heading, level: 2, text: "Why Choose a Rooftop Tent?" },
      { type: ContentBlockType.Paragraph, text: "Speed of setup, comfort off the ground, and better views are just a few reasons. They keep you away from critters and often provide better ventilation than traditional ground tents. Ideal for 4x4 touring and quick weekend getaways." },
      { type: ContentBlockType.Image, src: "https://picsum.photos/seed/rttinterior/800/500", alt: "Interior view of a spacious rooftop tent.", caption: "Spacious interior of a modern rooftop tent." },
      { type: ContentBlockType.Heading, level: 3, text: "Top Pick: Outback King" },
      { type: ContentBlockType.ProductHighlight, productId: "prod1" },
      { type: ContentBlockType.Paragraph, text: "The Outback King stands out for its rugged build quality and ease of use. We tested it extensively in various conditions, from coastal winds to dusty outback tracks. It's a solid investment for serious adventurers." },
      { type: ContentBlockType.ComparisonTable, title: "Rooftop Tent Comparison", productNames: ["Outback King", "SkyLodge Explorer", "BudgetTrekker"], rows: [
        { feature: "Setup Time", "Outback King": "5 mins", "SkyLodge Explorer": "7 mins", "BudgetTrekker": "10 mins" },
        { feature: "Weatherproofing", "Outback King": "Excellent", "SkyLodge Explorer": "Good", "BudgetTrekker": "Fair" },
        { feature: "Price Range", "Outback King": "$$$", "SkyLodge Explorer": "$$$$", "BudgetTrekker": "$$" },
      ], productAffiliateLinks: { "Outback King": "#prod1-link", "SkyLodge Explorer": "#skylodge-link", "BudgetTrekker": "#budgettrekker-link" } },
    ],
    relatedProducts: [ALL_PRODUCTS[0], ALL_PRODUCTS[1]]
  },
  {
    id: "2",
    slug: "installing-ute-toolbox-guide",
    title: "DIY Guide: Installing a Ute Tray Toolbox Like a Pro",
    date: "November 5, 2023",
    author: "Sarah 'Spanner' Mitchell",
    category: "Tutorials",
    imageUrl: "https://picsum.photos/seed/utetoolboxinstall/1200/800",
    imageAlt: "A person installing a metal toolbox onto the tray of a ute.",
    summary: "Step-by-step tutorial on how to securely install an aluminium toolbox on your ute tray. Essential tools, safety tips, and common pitfalls to avoid. Keywords: ute toolbox installation, DIY ute accessories, tradie gear.",
    keywords: ["ute toolbox installation", "DIY ute accessories", "ute mods Australia", "pickup truck accessories"],
    contentBlocks: [
      { type: ContentBlockType.Paragraph, text: "Adding a toolbox to your ute tray is a great way to secure your gear. This tutorial will walk you through the process, ensuring a safe and sturdy installation. This is a popular modification for tradies and adventurers alike." },
      { type: ContentBlockType.Heading, level: 2, text: "Tools & Materials Needed" },
      { type: ContentBlockType.Paragraph, text: "You'll need: your chosen toolbox (we recommend the SecureStore Pro), drill, drill bits, spanner set, measuring tape, marker, safety glasses, and appropriate bolts/nuts/washers." },
      { type: ContentBlockType.ProductHighlight, productId: "prod5" },
      { type: ContentBlockType.TutorialStep, stepNumber: 1, title: "Positioning the Toolbox", description: "Carefully place the toolbox on the ute tray. Measure to ensure it's centered and allows for tailgate clearance. Mark drilling points." , imageUrl: "https://picsum.photos/seed/toolboxposition/600/400"},
      { type: ContentBlockType.TutorialStep, stepNumber: 2, title: "Drilling Mounting Holes", description: "Remove the toolbox. Drill pilot holes, then enlarge to the correct bolt size. Use cutting fluid if drilling thick steel." },
      { type: ContentBlockType.TutorialStep, stepNumber: 3, title: "Securing the Toolbox", description: "Place the toolbox back. Insert bolts from inside, with large washers underneath the tray to distribute load. Tighten nuts securely." , imageUrl: "https://picsum.photos/seed/toolboxsecure/600/400"},
      { type: ContentBlockType.Paragraph, text: "Always double-check your measurements and ensure the toolbox is rigidly mounted. A loose toolbox can be dangerous." },
    ],
    relatedProducts: [ALL_PRODUCTS[4]]
  },
  {
    id: "3",
    slug: "best-portable-fridges-camping-australia",
    title: "Top 5 Portable Camping Fridges for Aussie Adventures (2024)",
    date: "November 12, 2023",
    author: "Mike 'Chilly' Chambers",
    category: "Product Reviews",
    imageUrl: "https://picsum.photos/seed/campingfridges/1200/800",
    imageAlt: "A collection of portable camping fridges in an outdoor setting.",
    summary: "Don't let your tucker go warm! We compare the best 12V portable fridges and freezers for camping, 4x4 touring, and caravan trips in Australia. Keywords: portable camping fridge, 12V fridge Australia, 4x4 fridge freezer.",
    keywords: ["portable camping fridge", "12V fridge Australia", "4x4 fridge freezer", "caravan accessories", "off-road essentials"],
    contentBlocks: [
      { type: ContentBlockType.Paragraph, text: "A reliable portable fridge is a game-changer for any extended trip into the Australian bush or along the coast. Keeping your food fresh and drinks icy cold makes all the difference. We've tested the top contenders." },
      { type: ContentBlockType.Heading, level: 2, text: "Key Features to Look For" },
      { type: ContentBlockType.Paragraph, text: "Consider capacity, power consumption (especially on solar), insulation, durability, and compressor type. Dual-zone fridge/freezers offer maximum versatility." },
      { type: ContentBlockType.Image, src: "https://picsum.photos/seed/fridgefeatures/800/500", alt: "Close up of a portable fridge control panel." },
      { type: ContentBlockType.Heading, level: 3, text: "Our Top Rated: Frosty Adventures ChillMate 50L" },
      { type: ContentBlockType.ProductHighlight, productId: "prod2" },
      { type: ContentBlockType.Paragraph, text: "The ChillMate 50L consistently impressed us with its efficiency and robust build. It handled corrugated roads without a hiccup and kept a steady temperature even on hot days." },
    ],
    relatedProducts: [ALL_PRODUCTS[1], ALL_PRODUCTS[0]]
  }
];
