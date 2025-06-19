
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});

// --- Icon SVGs ---
const MENU_ICON_SVG = `
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
`;

const CLOSE_ICON_SVG = `
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
`;

const EXTERNAL_LINK_ICON_SVG = `
  <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
`;

// --- Navbar ---
function renderNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  if (!navbarContainer) return;

  let navLinksHTML = '';
  NAV_LINKS.forEach(link => {
    // Basic active link highlighting based on current page filename
    const isActive = window.location.pathname.endsWith(link.path.split('?')[0]) || (window.location.pathname === '/' && link.path === 'index.html');
    const activeClass = isActive ? 'bg-primary-dark text-white' : 'text-neutral-light hover:bg-primary hover:text-white';
    navLinksHTML += `
      <a href="${link.path}" class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${activeClass}">
        ${link.label}
      </a>
    `;
  });

  navbarContainer.innerHTML = `
    <nav class="bg-primary shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center">
            <a href="index.html" class="flex-shrink-0">
              <span class="text-3xl font-bold text-white font-poppins tracking-tight">
                Adventure<span class="text-secondary">Gear</span>.AU
              </span>
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              ${navLinksHTML}
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              class="bg-primary-dark inline-flex items-center justify-center p-2 rounded-md text-neutral-light hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <span id="mobile-menu-icon-container">${MENU_ICON_SVG}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          ${NAV_LINKS.map(link => {
            const isActive = window.location.pathname.endsWith(link.path.split('?')[0]) || (window.location.pathname === '/' && link.path === 'index.html');
            const activeClass = isActive ? 'bg-primary-dark text-white' : 'text-neutral-light hover:bg-primary hover:text-white';
            return `<a href="${link.path}" class="block px-3 py-2 rounded-md text-base font-medium ${activeClass}">${link.label}</a>`;
          }).join('')}
        </div>
      </div>
    </nav>
  `;

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuIconContainer = document.getElementById('mobile-menu-icon-container');

  if (mobileMenuButton && mobileMenu && mobileMenuIconContainer) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      mobileMenuIconContainer.innerHTML = isExpanded ? MENU_ICON_SVG : CLOSE_ICON_SVG;
    });
  }
}

// --- Footer ---
function renderFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const categoriesLinksHTML = FOOTER_LINKS.categories.map(link => `
    <li>
      <a href="${link.path}" class="text-base text-neutral-medium hover:text-secondary transition-colors duration-150">
        ${link.label}
      </a>
    </li>
  `).join('');

  const companyLinksHTML = FOOTER_LINKS.company.map(link => `
    <li>
      <a href="${link.path}" class="text-base text-neutral-medium hover:text-secondary transition-colors duration-150">
        ${link.label}
      </a>
    </li>
  `).join('');

  footerContainer.innerHTML = `
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-white tracking-wider uppercase font-poppins">Categories</h3>
          <ul class="mt-4 space-y-2">
            ${categoriesLinksHTML}
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white tracking-wider uppercase font-poppins">Company</h3>
          <ul class="mt-4 space-y-2">
            ${companyLinksHTML}
          </ul>
        </div>
        <div class="col-span-2 md:col-span-2">
           <h3 class="text-lg font-semibold text-white tracking-wider uppercase font-poppins">AdventureGear.AU</h3>
          <p class="mt-4 text-base text-neutral-medium">
            Your trusted source for unbiased reviews and guides on adventure travel gear in Australia. We help you gear up for your next big Aussie adventure!
          </p>
          <p class="mt-2 text-sm text-neutral-medium">
            Note: As an affiliate marketing website, we may earn commissions from qualifying purchases made through links on this site, at no extra cost to you.
          </p>
        </div>
      </div>
      <div class="mt-8 border-t border-neutral-dark pt-8">
        <p class="text-base text-neutral-medium text-center">
          &copy; ${new Date().getFullYear()} AdventureGear.AU. All rights reserved. Made with 🏕️ in Australia.
        </p>
      </div>
    </div>
  `;
}

// --- HTML Generation Functions ---

function createCategoryPillHTML(category, basePath = 'blog.html') {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/&amp;/g, 'and');
  const linkTo = category.toLowerCase() === 'all articles' ? `${basePath}` : `${basePath}?category=${categorySlug}`;
  return `
    <a 
      href="${linkTo}"
      data-category-slug="${categorySlug}"
      class="category-pill inline-block bg-secondary-light text-secondary-dark text-xs font-semibold mr-2 px-2.5 py-1 rounded-full uppercase hover:bg-secondary hover:text-white transition-colors duration-150"
    >
      ${category}
    </a>
  `;
}

function createAffiliateLinkButtonHTML({ href, text, retailer, className = '' }) {
  return `
    <a
      href="${href}"
      target="_blank"
      rel="noopener noreferrer sponsored"
      class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-light transition-colors duration-150 ${className}"
    >
      ${text} ${retailer ? `at ${retailer}` : ''}
      ${EXTERNAL_LINK_ICON_SVG}
    </a>
  `;
}

function createProductCardHTML(product) {
  if (!product) return '';
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
      <div class="aspect-w-4 aspect-h-3">
         <img src="${product.imageUrl}" alt="${product.name}" class="object-cover w-full h-full" />
      </div>
      <div class="p-5 flex flex-col flex-grow">
        <h4 class="text-xl font-semibold text-neutral-darker mb-1 font-poppins">${product.name}</h4>
        ${product.brand ? `<p class="text-sm text-neutral-medium mb-2">Brand: ${product.brand}</p>` : ''}
        <p class="text-neutral-dark text-sm mb-3 h-16 overflow-hidden">${product.description}</p>
        ${product.price ? `<p class="text-lg font-bold text-primary mb-4">${product.price}</p>` : ''}
        <div class="mt-auto">
          ${createAffiliateLinkButtonHTML({ href: product.affiliateLink, text: "Check Price", retailer: product.retailer, className: "w-full" })}
        </div>
      </div>
    </div>
  `;
}

function createBlogPostCardHTML(post) {
  if (!post) return '';
  return `
    <article class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl h-full">
      <a href="article.html?slug=${post.slug}" class="block">
        <img
          class="w-full h-56 object-cover"
          src="${post.heroImage}"
          alt="${post.title}"
        />
      </a>
      <div class="p-6 flex flex-col flex-grow">
        <div class="mb-3">
          ${createCategoryPillHTML(post.category)}
        </div>
        <a href="article.html?slug=${post.slug}" class="block hover:text-primary transition-colors">
          <h3 class="text-2xl font-semibold text-neutral-darker font-poppins mb-2">
            ${post.title}
          </h3>
        </a>
        <p class="text-neutral-dark text-sm mb-3">
          By ${post.author} on ${post.date}
        </p>
        <p class="text-neutral-dark flex-grow mb-4">${post.summary}</p>
        <div class="mt-auto">
          <a
            href="article.html?slug=${post.slug}"
            class="inline-block text-primary hover:text-primary-dark font-semibold transition-colors duration-150"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </article>
  `;
}

function createAdCardHTML(ad) {
  if(!ad) return '';
  return `
    <a href="${ad.link}" target="_blank" rel="noopener noreferrer sponsored" class="block group">
      <div class="bg-neutral rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
        <img src="${ad.image}" alt="Advertisement" class="h-24 w-24 object-cover rounded"/>
        <div>
          <p class="text-neutral-dark group-hover:text-primary transition-colors">${ad.text}</p>
          <span class="text-sm text-secondary group-hover:underline">Learn More</span>
        </div>
      </div>
    </a>
  `;
}

// Function to replace product card placeholders in article content
function renderProductPlaceholders(contentHTML) {
    return contentHTML.replace(/<!-- PRODUCT_CARD_PLACEHOLDER:(.*?) -->/g, (match, productId) => {
        const product = getProductById(productId.trim());
        if (product) {
            return `
                <div class="my-6">
                    <h4 class="text-xl font-semibold text-neutral-darker mb-3">Featured Product:</h4>
                    ${createProductCardHTML(product)}
                </div>
            `;
        }
        return ''; // Remove placeholder if product not found
    });
}
