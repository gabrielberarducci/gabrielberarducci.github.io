
document.addEventListener('DOMContentLoaded', () => {
  const postsGrid = document.getElementById('blog-posts-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFiltersContainer = document.getElementById('category-filters-container');
  const articleCountElement = document.getElementById('article-count');
  const noResultsMessage = document.getElementById('no-results-message');
  const blogPageTitle = document.getElementById('blog-page-title');
  const blogPageSubtitle = document.getElementById('blog-page-subtitle');

  let currentSearchTerm = '';
  let currentCategorySlug = null;

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function renderPosts() {
    if (!postsGrid || !articleCountElement || !noResultsMessage) return;

    const filteredPosts = BLOG_POSTS.filter(post => {
      const matchesCategory = currentCategorySlug
        ? post.category.toLowerCase().replace(/\s+/g, '-').replace(/&amp;/g, 'and') === currentCategorySlug
        : true;
      
      const searchLower = currentSearchTerm.toLowerCase();
      const matchesSearch = currentSearchTerm
        ? post.title.toLowerCase().includes(searchLower) ||
          post.summary.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          post.category.toLowerCase().includes(searchLower)
        : true;
      return matchesCategory && matchesSearch;
    });

    postsGrid.innerHTML = ''; // Clear previous posts
    if (filteredPosts.length > 0) {
      filteredPosts.forEach(post => {
        postsGrid.innerHTML += createBlogPostCardHTML(post);
      });
      postsGrid.classList.remove('hidden');
      noResultsMessage.classList.add('hidden');
    } else {
      postsGrid.classList.add('hidden');
      noResultsMessage.classList.remove('hidden');
    }
    articleCountElement.textContent = `Showing ${filteredPosts.length} of ${BLOG_POSTS.length} articles`;

    // Update active state for category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('bg-secondary', 'text-white');
        pill.classList.add('bg-secondary-light', 'text-secondary-dark');
        if (pill.dataset.categorySlug === (currentCategorySlug || 'all-articles')) {
            pill.classList.add('bg-secondary', 'text-white');
            pill.classList.remove('bg-secondary-light', 'text-secondary-dark');
        }
    });
  }

  function setupCategoryFilters() {
    if (!categoryFiltersContainer) return;

    const allCategories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));
    let filtersHTML = createCategoryPillHTML('All Articles', 'blog.html'); // Add "All Articles" filter

    allCategories.forEach(cat => {
      filtersHTML += createCategoryPillHTML(cat, 'blog.html');
    });
    categoryFiltersContainer.innerHTML = filtersHTML;

    categoryFiltersContainer.addEventListener('click', (event) => {
      if (event.target.closest('.category-pill')) {
        event.preventDefault();
        const pill = event.target.closest('.category-pill');
        const categorySlug = pill.dataset.categorySlug;
        
        currentCategorySlug = (categorySlug === 'all-articles') ? null : categorySlug;
        
        // Update URL without full page reload
        const url = new URL(window.location);
        if (currentCategorySlug) {
            url.searchParams.set('category', currentCategorySlug);
        } else {
            url.searchParams.delete('category');
        }
        history.pushState({}, '', url);

        updatePageTitleAndSubtitle();
        renderPosts();
      }
    });
  }
  
  function updatePageTitleAndSubtitle() {
    if (!blogPageTitle || !blogPageSubtitle) return;

    if (currentCategorySlug) {
        const categoryName = currentCategorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words
        blogPageTitle.textContent = categoryName;
        blogPageSubtitle.textContent = `Browse articles in the ${categoryName} category.`;
    } else {
        blogPageTitle.textContent = 'Adventure Blog';
        blogPageSubtitle.textContent = 'Your hub for the latest tips, reviews, and guides on Aussie adventure gear.';
    }
  }


  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value;
      renderPosts();
    });
  }

  // Initial setup
  currentCategorySlug = getQueryParam('category');
  const initialSearch = getQueryParam('search');
  if(initialSearch && searchInput) {
    searchInput.value = initialSearch;
    currentSearchTerm = initialSearch;
  }

  updatePageTitleAndSubtitle();
  setupCategoryFilters();
  renderPosts(); // Initial render
});
