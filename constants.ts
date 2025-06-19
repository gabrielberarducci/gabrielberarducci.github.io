
import { BlogPost, PostCategory, NavLink } from './types';

export const SITE_NAME = "AU4WD.online";
export const TAGLINE = "Your Ultimate Guide to Australian Off-Road & Adventure";

export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Gear Reviews", path: "/blog/category/product-reviews" }, // Example category link
  { label: "About Us", path: "/about" },
];

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "ultimate-rooftop-tent-aussie-outback",
    title: "The Ultimate Rooftop Tent for Aussie Outback Adventures",
    date: "October 26, 2023",
    author: "Outback Jack",
    category: PostCategory.REVIEWS,
    excerpt: "Discover the best rooftop tents built tough for the rugged Australian conditions. We review top contenders for comfort, durability, and ease of setup.",
    content: `
      <p class="mb-4">Venturing into the Australian outback demands gear that can withstand harsh conditions. A reliable rooftop tent is paramount for any serious overlander. In this review, we delve into the features that make a rooftop tent 'ultimate' for Aussie adventures.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">Key Considerations:</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li><strong>Durability:</strong> Look for ripstop canvas, heavy-duty zippers, and robust frame construction.</li>
        <li><strong>Weatherproofing:</strong> Essential for unpredictable outback weather – from scorching sun to sudden downpours.</li>
        <li><strong>Ease of Setup:</strong> After a long day on the tracks, a quick setup is a blessing.</li>
        <li><strong>Comfort:</strong> A thick mattress and good ventilation are non-negotiable.</li>
      </ul>
      <p class="mb-4">We tested three leading models: The 'Desert Dweller Pro', 'Ridgeback Expedition', and 'Horizon Nomad'. Each offers unique strengths, but one stood out for its overall performance and value.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">Our Top Pick: The Ridgeback Expedition</h3>
      <p>The Ridgeback Expedition impressed us with its quick hydraulic-assisted setup, incredibly tough 320gsm poly-cotton canvas, and a surprisingly plush 75mm mattress. It's built like a tank but offers a comfortable haven. While it's at a premium price point, the peace of mind it offers in remote locations is worth it.</p>
    `,
    imageUrl: "https://picsum.photos/seed/rooftoptent/1200/800",
    imageAlt: "Rooftop tent on a 4x4 in the Australian outback",
    keywords: ["rooftop tent", "4x4 camping", "overlanding Australia", "outback gear", "camping review"],
    affiliateLinks: [
      { text: "Check Price for Ridgeback Expedition", url: "#", storeName: "Adventure Kings" },
      { text: "Explore Desert Dweller Pro Options", url: "#", storeName: "BCF" }
    ]
  },
  {
    id: "2",
    slug: "bullbars-arb-vs-tjm-hilux",
    title: "Bullbars Face-Off: ARB vs TJM for Your Toyota Hilux",
    date: "November 5, 2023",
    author: "Steel Savvy",
    category: PostCategory.COMPARISONS,
    excerpt: "Choosing the right bullbar for your Hilux is crucial for protection and functionality. We compare ARB and TJM's leading offerings.",
    content: `
      <p class="mb-4">The Toyota Hilux is an Aussie icon, and a quality bullbar is often the first accessory owners fit. ARB and TJM are two giants in the Australian 4x4 accessory market. How do their bullbars stack up?</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">ARB Summit Bar:</h3>
      <p class="mb-4">Known for its robust construction and integrated features like winch compatibility and rated recovery points. ARB's design often complements vehicle aesthetics well.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">TJM Outback Bar:</h3>
      <p class="mb-4">TJM focuses on strength and practicality, with options for various lighting and aerial mounts. Their bars are engineered for serious off-road punishment.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">The Verdict:</h3>
      <p>Both offer excellent protection. ARB often wins on integrated design and features, while TJM can be a slightly more budget-friendly option without compromising on core strength. Your choice might come down to specific feature needs and brand preference. We recommend visiting a local installer to see them up close.</p>
    `,
    imageUrl: "https://picsum.photos/seed/bullbar/1200/800",
    imageAlt: "Toyota Hilux with a bullbar in a rugged setting",
    keywords: ["bullbar", "Toyota Hilux", "ARB", "TJM", "4x4 accessories", "ute upgrades"],
    affiliateLinks: [
      { text: "Find ARB Stockists", url: "#", storeName: "ARB" },
      { text: "Locate TJM Dealers", url: "#", storeName: "TJM" }
    ]
  },
  {
    id: "3",
    slug: "install-dual-battery-system-4wd",
    title: "How to Install a Dual Battery System in Your 4WD",
    date: "November 12, 2023",
    author: "Sparky Dave",
    category: PostCategory.TUTORIALS,
    excerpt: "A step-by-step guide to installing a dual battery system, ensuring you have power for all your accessories on remote trips.",
    content: `
      <p class="mb-4">A dual battery system is a game-changer for any 4WD enthusiast. It allows you to run fridges, lights, and charge devices without risking a flat starter battery. This guide provides a general overview of the installation process.</p>
      <strong class="text-lg text-au-red">Disclaimer: Working with vehicle electrics can be dangerous. If you're not confident, consult a qualified auto electrician.</strong>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">Components You'll Need:</h3>
      <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
        <li>Auxiliary Battery (deep cycle AGM or Lithium)</li>
        <li>Battery Tray</li>
        <li>DC-DC Charger or VSR (Voltage Sensitive Relay)</li>
        <li>Appropriate gauge wiring, fuses, and connectors</li>
        <li>Basic tools (spanners, crimpers, wire strippers)</li>
      </ul>
      <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">General Steps:</h3>
      <ol class="list-decimal list-inside mb-4 pl-4 space-y-2">
        <li><strong>Plan Your Layout:</strong> Decide where to mount the auxiliary battery and charger.</li>
        <li><strong>Install Battery Tray:</strong> Securely mount the tray, usually in the engine bay or ute tub.</li>
        <li><strong>Mount Auxiliary Battery:</strong> Place and secure the battery in the tray.</li>
        <li><strong>Install Charger/Isolator:</strong> Mount the DC-DC charger or VSR and connect it according to manufacturer instructions. This typically involves connecting to the starter battery and the auxiliary battery.</li>
        <li><strong>Wire Accessories:</strong> Run wiring from your auxiliary battery (via a fuse box) to your accessories (fridge, lights, etc.).</li>
        <li><strong>Test System:</strong> Ensure everything is charging and operating correctly.</li>
      </ol>
      <p>This is a simplified guide. Always refer to the specific instructions for your chosen components and vehicle. Safety first!</p>
    `,
    imageUrl: "https://picsum.photos/seed/dualbattery/1200/800",
    imageAlt: "Dual battery system setup in a 4WD engine bay",
    keywords: ["dual battery system", "4WD electrics", "DIY 4x4", "camping power", "ute accessories installation"],
    affiliateLinks: [
      { text: "Shop DC-DC Chargers at Jaycar", url: "#", storeName: "Jaycar" },
      { text: "Browse Deep Cycle Batteries at Battery World", url: "#", storeName: "Battery World" }
    ]
  },
  {
    id: "4",
    slug: "why-caravan-better-than-motorhome",
    title: "Why a Caravan Might Be Your Best Bet for Aussie Family Adventures",
    date: "November 18, 2023",
    author: "The Wandering Family",
    category: PostCategory.OPINIONS,
    excerpt: "Motorhomes are great, but for families exploring Australia, caravans offer flexibility and space that's hard to beat. Here's our take.",
    content: `
    <p class="mb-4">The great debate: caravan or motorhome? Both have their loyal fans, and for good reason. But after years of travelling Australia with our kids, we've firmly landed in the caravan camp. Here’s why we think a caravan offers unparalleled advantages for family adventures down under.</p>
    <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">Flexibility at Your Destination:</h3>
    <p class="mb-4">This is the big one. Once your caravan is set up at a campsite, you have your tow vehicle free to explore the local area, nip into town for groceries, or tackle those tighter 4WD tracks where a motorhome simply can't go. No need to pack up your entire living space for a day trip!</p>
    <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">More Living Space (Often):</h3>
    <p class="mb-4">For a given length, caravans often provide more usable interior living space because they don't have to accommodate a driving cabin. This can mean larger lounges, more storage, and dedicated bunk areas for kids, which is a lifesaver on extended trips or rainy days.</p>
    <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">Cost Considerations:</h3>
    <p class="mb-4">Generally, a caravan and a suitable tow vehicle can be a more cost-effective combination than a large motorhome of equivalent living standard. Plus, you might already own a capable tow vehicle (like many Aussie utes or 4WDs). Maintenance can also be simpler, with separate servicing for the vehicle and the 'home'.</p>
    <h3 class="text-2xl font-semibold mt-6 mb-3 text-au-red">The 'Home Base' Feeling:</h3>
    <p>There's something comforting about setting up your caravan as a stable home base for a few days or weeks, allowing you to truly settle in and explore a region without the constant upheaval of moving your entire dwelling.</p>
    <p class="mt-6">Of course, motorhomes offer their own benefits like ease of driving for some and quick setups for overnight stops. But for Australian families looking for a blend of comfort, space, and the freedom to explore, we believe a caravan is an exceptional choice. Happy travels!</p>
    `,
    imageUrl: "https://picsum.photos/seed/caravanlife/1200/800",
    imageAlt: "Family caravan setup in a scenic Australian campsite",
    keywords: ["caravan", "motorhome", "family travel Australia", "RV living", "Australian holidays", "towing"],
     affiliateLinks: [
      { text: "Explore New Age Caravans", url: "#", storeName: "New Age" },
      { text: "Check out Jayco Caravans", url: "#", storeName: "Jayco" }
    ]
  }
];
