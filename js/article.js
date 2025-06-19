
document.addEventListener('DOMContentLoaded', () => {
  renderArticlePage();
});

function renderArticlePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  const articleTitleTag = document.getElementById('article-title-tag');
  const articleMainContainer = document.getElementById('article-main-container');
  const articleNotFoundDiv = document.getElementById('article-not-found');
  const articleHeroContainer = document.getElementById('article-hero-container');
  const articleBodyContainer = document.getElementById('article-body-container');
  const articleSidebarContent = document.getElementById('article-sidebar-content');
  const fullWidthRelatedProductsContainer = document.getElementById('full-width-related-products-container');
  const fullWidthRelatedProductsGrid = document.getElementById('full-width-related-products-grid');

  if (!slug) {
    showArticleNotFound();
    return;
  }

  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    showArticleNotFound();
    return;
  }
  
  if (articleMainContainer) articleMainContainer.classList.remove('hidden');
  if (articleNotFoundDiv) articleNotFoundDiv.classList.add('hidden');
  if (articleTitleTag) articleTitleTag.textContent = `${post.title} - Adventure Gear Australia`;


  // Render Hero
  if (articleHeroContainer) {
    articleHeroContainer.style.backgroundImage = `url(${post.heroImage})`;
    articleHeroContainer.innerHTML = `
      <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
          <div class="mb-2">
            ${createCategoryPillHTML(post.category, 'blog.html')}
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-3 font-poppins leading-tight">${post.title}</h1>
          <p class="text-lg">By ${post.author} - Published on ${post.date}</p>
        </div>
      </div>
    `;
  }

  // Render Article Body
  if (articleBodyContainer) {
    // Replace product card placeholders in the content
    let finalContent = renderProductPlaceholders(post.content);
    articleBodyContainer.innerHTML = finalContent;
  }

  // Render Sidebar
  if (articleSidebarContent) {
    let sidebarHTML = '';

    // Related Products for Sidebar (max 2)
    const relatedProductsData = post.relatedProducts
        .map(id => getProductById(id))
        .filter(p => p); // Ensure product exists

    if (relatedProductsData.length > 0) {
      sidebarHTML += `
        <div>
          <h3 class="text-xl font-semibold text-neutral-darker mb-4 font-poppins">Related Gear</h3>
          <div class="space-y-4">
            ${relatedProductsData.slice(0, 2).map(product => createProductCardHTML(product)).join('')}
          </div>
        </div>
      `;
    }

    // Sidebar Ad
    const sideAd = MOCK_ADS[0]; // Example ad
    if (sideAd) {
      sidebarHTML += `
        <div>
          <h3 class="text-xl font-semibold text-neutral-darker mb-4 font-poppins">Sponsored</h3>
          <a href="${sideAd.link}" target="_blank" rel="noopener noreferrer sponsored" class="block group">
            <div class="bg-neutral-light rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <img src="${sideAd.image}" alt="Advertisement" class="w-full h-auto object-cover rounded mb-2"/>
              <p class="text-sm text-neutral-dark group-hover:text-primary transition-colors">${sideAd.text}</p>
              <span class="text-xs text-secondary group-hover:underline">Learn More</span>
            </div>
          </a>
        </div>
      `;
    }

    // Tags
    if (post.tags && post.tags.length > 0) {
      sidebarHTML += `
        <div>
          <h3 class="text-xl font-semibold text-neutral-darker mb-4 font-poppins">Tags</h3>
          <div class="flex flex-wrap gap-2">
            ${post.tags.map(tag => `
              <a 
                href="blog.html?search=${encodeURIComponent(tag)}"
                class="bg-neutral text-neutral-dark px-3 py-1 rounded-full text-sm hover:bg-neutral-medium hover:text-white transition-colors"
              >
                #${tag}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
    articleSidebarContent.innerHTML = sidebarHTML;
  }
  
  // Full-width Related Products (if more than 2)
  const allRelatedProducts = post.relatedProducts
      .map(id => getProductById(id))
      .filter(p => p);

  if (fullWidthRelatedProductsContainer && fullWidthRelatedProductsGrid && allRelatedProducts.length > 0) {
    fullWidthRelatedProductsGrid.innerHTML = allRelatedProducts.map(product => createProductCardHTML(product)).join('');
    fullWidthRelatedProductsContainer.classList.remove('hidden');
  } else if (fullWidthRelatedProductsContainer) {
    fullWidthRelatedProductsContainer.classList.add('hidden');
  }

  function showArticleNotFound() {
    if (articleMainContainer) articleMainContainer.classList.add('hidden');
    if (articleNotFoundDiv) articleNotFoundDiv.classList.remove('hidden');
    if (articleTitleTag) articleTitleTag.textContent = "Article Not Found - Adventure Gear Australia";
    // Hide footer or show minimal footer if needed
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) footerContainer.classList.add('hidden');

  }
}
