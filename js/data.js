
const FEATURED_PRODUCTS = [
  {
    id: 'prod1',
    name: 'Heavy-Duty Rooftop Tent (Outback Edition)',
    imageUrl: 'https://picsum.photos/seed/rooftoptent/600/400',
    description: 'Sleep under the stars in comfort. Quick setup, durable materials, perfect for Aussie conditions.',
    affiliateLink: '#product-link-rooftoptent',
    price: 'Approx. $1,800',
    brand: 'TerraTrek',
    retailer: 'Adventure Kings'
  },
  {
    id: 'prod2',
    name: 'All-Terrain Ute Tray Canopy',
    imageUrl: 'https://picsum.photos/seed/utecanopy/600/400',
    description: 'Secure your gear with this robust and weatherproof ute canopy. Customizable options available.',
    affiliateLink: '#product-link-utecanopy',
    price: 'From $3,500',
    brand: 'RhinoMax',
    retailer: 'TJM'
  },
  {
    id: 'prod3',
    name: 'Portable 12V Camping Fridge/Freezer (50L)',
    imageUrl: 'https://picsum.photos/seed/campfridge/600/400',
    description: 'Keep your tucker and bevvies cold on the go. Energy efficient and built tough for 4x4 adventures.',
    affiliateLink: '#product-link-campfridge',
    price: 'Around $799',
    brand: 'Coolabah',
    retailer: 'BCF'
  },
];

const BLOG_POSTS = [
  {
    id: '1',
    slug: 'ultimate-guide-to-4x4-recovery-gear',
    title: 'The Ultimate Guide to 4x4 Recovery Gear for Aussie Terrains',
    date: 'October 26, 2023',
    author: 'Dave "Dingo" Wilson',
    category: '4x4 Gear',
    heroImage: 'https://picsum.photos/seed/4x4recovery/1200/600',
    summary: 'Don\'t get stuck in the mulga! We cover essential recovery gear every 4x4 enthusiast needs for exploring Australia.',
    tags: ['4x4', 'Recovery', 'Off-road', 'Safety'],
    content: `
        <p class="mb-4 text-lg text-neutral-dark">
          Heading off the beaten track in Australia means being prepared. One of the most critical aspects of 4x4 touring is having the right recovery gear and knowing how to use it. This guide will walk you through the essentials.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">Snatch Straps &amp; Shackles</h3>
        <p class="mb-4 text-neutral-dark">
          A quality snatch strap is your best mate when bogged. Ensure it's correctly rated for your vehicle. Always use rated recovery points – never the tow ball! Pair it with appropriately rated D-shackles or soft shackles.
        </p>
        <img src="https://picsum.photos/seed/snatchstrap/800/450" alt="Snatch strap in use" class="rounded-lg shadow-md my-4" />
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">Winches: Electric vs. Hand</h3>
        <p class="mb-4 text-neutral-dark">
          Electric winches are convenient but require good battery setup. Hand winches (like Tirfor style) are bulletproof but require more elbow grease. Consider your typical trips and vehicle.
        </p>
        <!-- PRODUCT_CARD_PLACEHOLDER:prod1 -->
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">High-Lift Jacks</h3>
        <p class="mb-4 text-neutral-dark">
          Versatile for lifting, winching (in a pinch), and clamping. Handle with extreme care as they can be dangerous if not used correctly. Ensure your vehicle has suitable jacking points.
        </p>
        <p class="mt-6 text-neutral-dark">
          <strong>Keywords:</strong> 4x4 recovery, off-road Australia, snatch strap, winch, high-lift jack, outback safety, 4WD essentials.
        </p>
    `,
    relatedProducts: ['prod1', 'prod2'], // Store IDs, product objects can be looked up
  },
  {
    id: '2',
    slug: 'choosing-your-first-caravan',
    title: 'Choosing Your First Caravan: A Beginner\'s Guide for Aussies',
    date: 'November 5, 2023',
    author: 'Sheila "Caravan Queen" Jones',
    category: 'Caravans & Motorhomes',
    heroImage: 'https://picsum.photos/seed/caravanchoice/1200/600',
    summary: 'Dreaming of the big lap? Our guide helps you navigate the choices when buying your first caravan in Australia.',
    tags: ['Caravan', 'Motorhome', 'Travel Australia', 'Beginner Guide'],
    content: `
        <p class="mb-4 text-lg text-neutral-dark">
          The allure of hitting the open road with your home on wheels is strong. But choosing your first caravan can be daunting. Let&apos;s break down the key considerations for aspiring Aussie nomads.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">Size and Layout</h3>
        <p class="mb-4 text-neutral-dark">
          Consider who&apos;s travelling. A couple? Family with kids? This dictates the number of berths and layout (island bed, bunks, ensuite). Think about maneuverability and tow vehicle capacity.
        </p>
        <img src="https://picsum.photos/seed/caravaninterior/800/450" alt="Caravan interior layout" class="rounded-lg shadow-md my-4" />
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">On-Road vs. Off-Road</h3>
        <p class="mb-4 text-neutral-dark">
          Where do you plan to go? Smooth highways and caravan parks, or corrugated tracks and national parks? Off-road vans offer greater durability and ground clearance but come at a higher price.
        </p>
        <!-- PRODUCT_CARD_PLACEHOLDER:prod3 -->
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">Budgeting: Beyond the Purchase Price</h3>
        <p class="mb-4 text-neutral-dark">
          Factor in insurance, registration, maintenance, storage, and accessories (awnings, solar panels, fridges). It all adds up!
        </p>
        <p class="mt-6 text-neutral-dark">
          <strong>Keywords:</strong> caravan buying guide, first caravan Australia, motorhome tips, Australian road trip, travel trailer.
        </p>
    `,
    relatedProducts: ['prod3'],
  },
  {
    id: '3',
    slug: 'top-5-ute-canopy-setups',
    title: 'Top 5 Ute Canopy Setups for Tradies &amp; Adventurers',
    date: 'November 12, 2023',
    author: 'Bruce "The Builder" Smith',
    category: 'Ute Equipment',
    heroImage: 'https://picsum.photos/seed/utecanopies/1200/600',
    summary: 'Maximise your ute\'s potential with these popular canopy setups. We explore options for work, play, or a bit of both.',
    tags: ['Ute', 'Canopy', '4x4 Accessories', 'Tradie Gear'],
    content: `
        <p class="mb-4 text-lg text-neutral-dark">
          A ute is the Aussie workhorse, but a good canopy transforms it into a versatile machine for both work and adventure. Here are five popular setup styles.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">1. The Empty Shell</h3>
        <p class="mb-4 text-neutral-dark">
          Basic, secure, and weatherproof. Perfect for those who want a blank canvas to DIY their internal setup or just need to keep tools and gear dry.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">2. The Tradie Special</h3>
        <p class="mb-4 text-neutral-dark">
          Often features built-in shelving, drawers, and compartments for tool organization. Ladder racks on top are common.
        </p>
        <img src="https://picsum.photos/seed/tradiecanopy/800/450" alt="Tradie ute canopy setup" class="rounded-lg shadow-md my-4" />
        <!-- PRODUCT_CARD_PLACEHOLDER:prod2 -->
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">3. The Weekender Warrior</h3>
        <p class="mb-4 text-neutral-dark">
          A balance between work and play. Might include a fridge slide, basic 12V system, and enough space for camping gear.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">4. The Touring Titan</h3>
        <p class="mb-4 text-neutral-dark">
          Fully kitted out for remote travel. Expect integrated kitchens, water tanks, sophisticated power systems, and often a rooftop tent.
        </p>
        <h3 class="text-2xl font-semibold text-primary-dark mt-6 mb-3">5. The Full Custom Build</h3>
        <p class="mb-4 text-neutral-dark">
          For those with specific needs and a bigger budget. Custom fabricators can build a canopy to your exact specifications.
        </p>
        <p class="mt-6 text-neutral-dark">
          <strong>Keywords:</strong> ute canopy, pickup truck canopy, 4x4 canopy, tradie setup, touring canopy, Australian utes.
        </p>
    `,
    relatedProducts: ['prod1', 'prod2', 'prod3'],
  },
];

const NAV_LINKS = [
  { label: 'Home', path: 'index.html' },
  { label: 'Blog', path: 'blog.html' },
  { label: '4x4 Gear', path: 'blog.html?category=4x4-Gear' }, 
  { label: 'Camping Tips', path: 'blog.html?category=Camping-Tips' }, // Assuming 'Camping-Tips' is a valid category slug
  { label: 'Caravans', path: 'blog.html?category=Caravans-Motorhomes' },
];

const FOOTER_LINKS = {
  categories: [
    { label: '4x4 & Off-Road', path: 'blog.html?category=4x4-Gear'},
    { label: 'Camping Equipment', path: 'blog.html?category=Camping-Equipment'}, // Assuming 'Camping-Equipment' is a valid category slug
    { label: 'Ute Accessories', path: 'blog.html?category=Ute-Equipment'},
    { label: 'Caravans & RVs', path: 'blog.html?category=Caravans-Motorhomes'},
    { label: 'Product Reviews', path: 'blog.html?category=Reviews'}, // Assuming 'Reviews' is a valid category slug
  ],
  company: [
    // These would ideally be separate HTML pages if they have substantial content
    // For now, linking to placeholders or a generic "about.html", "contact.html"
    { label: 'About Us', path: '#about'}, // Or 'about.html'
    { label: 'Contact', path: '#contact'}, // Or 'contact.html'
    { label: 'Affiliate Disclosure', path: '#disclosure'}, // Or 'disclosure.html'
  ]
};

const MOCK_ADS = [
  { id: 'ad1', text: 'AD: Get 15% off Rooftop Tents at AdventureKings.com!', link: '#ad-link1', image: 'https://picsum.photos/seed/ad1/300/250' },
  { id: 'ad2', text: 'AD: Explore Cape York with Our 4x4 Tours!', link: '#ad-link2', image: 'https://picsum.photos/seed/ad2/300/250' },
];

// Helper function to get product by ID
function getProductById(id) {
  return FEATURED_PRODUCTS.find(p => p.id === id);
}
