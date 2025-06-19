
export enum PostCategory {
  REVIEWS = "Product Reviews",
  COMPARISONS = "Comparisons",
  OPINIONS = "Opinions & Insights",
  TUTORIALS = "How-To & Tutorials",
  TRAVEL_GUIDES = "Adventure Guides",
  GEAR = "Gear & Equipment"
}

export interface AffiliateLink {
  text: string;
  url: string;
  storeName: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: PostCategory;
  excerpt: string;
  content: string; // Can be simple text, or HTML-like strings for basic formatting
  imageUrl: string;
  imageAlt: string;
  keywords: string[];
  affiliateLinks?: AffiliateLink[];
}

export interface NavLink {
  label: string;
  path: string;
}
