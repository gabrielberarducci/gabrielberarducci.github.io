
document.addEventListener('DOMContentLoaded', () => {
  renderHomePageContent();
});

function renderHomePageContent() {
  renderHeroSection();
  renderFeaturedPosts();
  renderFeaturedProducts();
  renderAds();
}

function renderHeroSection() {
  const heroContainer = document.getElementById('hero-section-container');
  if (!heroContainer) return;

  // This data can also come from data.js if it needs to be more dynamic
  const heroData = {
    title: "Explore Australia, Geared Up!",
    subtitle: "Your ultimate Aussie resource for adventure travel, 4x4s, camping, ute gear, caravans, and motorhomes. Find expert reviews, tips, and the best equipment.",
    imageUrl: "https://picsum.photos/seed/aussieadventure/1920/1080",
    ctaText: "Discover Our Latest Guides",
    ctaLink: "blog.html"
  };

  heroContainer.innerHTML = `
    <div
      class="relative bg-cover bg-center text-white py-24 md:py-40"
      style="background-image: url(${heroData.imageUrl})"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
          ${heroData.title}
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          ${heroData.subtitle}
        </p>
        <a
          href="${heroData.ctaLink}"
          class="inline-block bg-secondary hover:bg-secondary-dark text-neutral-darker font-semibold py-4 px-10 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          ${heroData.ctaText}
        </a>
      </div>
    </div>
  `;
}

function renderFeaturedPosts() {
  const postsGrid = document.getElementById('featured-posts-grid');
  if (!postsGrid) return;

  const featuredPosts = BLOG_POSTS.slice(0, 3); // Show first 3 posts
  let postsHTML = '';
  featuredPosts.forEach(post => {
    postsHTML += createBlogPostCardHTML(post);
  });
  postsGrid.innerHTML = postsHTML;
}

function renderFeaturedProducts() {
  const productsGrid = document.getElementById('featured-products-grid');
  if (!productsGrid) return;

  let productsHTML = '';
  FEATURED_PRODUCTS.slice(0,3).forEach(product => { // Show first 3 products
    productsHTML += createProductCardHTML(product);
  });
  productsGrid.innerHTML = productsHTML;
}

function renderAds() {
  const adsContainer = document.getElementById('ads-container');
  if (!adsContainer) return;

  let adsHTML = '';
  MOCK_ADS.forEach(ad => {
    adsHTML += createAdCardHTML(ad);
  });
  adsContainer.innerHTML = adsHTML;
}
