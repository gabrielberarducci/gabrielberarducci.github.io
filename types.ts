
export interface AffiliateLink {
  text: string;
  url: string;
  platform?: string; // e.g., Amazon, eBay, Specific Retailer
}

export interface ArticleContentBlock {
  type: 'paragraph' | 'heading' | 'image' | 'list' | 'affiliateBanner';
  content?: string; // For paragraph, heading
  level?: number; // For heading (e.g., 2 for h2)
  items?: string[]; // For list
  imageUrl?: string; // For image
  altText?: string; // For image
  affiliateLinks?: AffiliateLink[]; // For affiliateBanner
  caption?: string; // For image
}

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string; // ISO 8601 format
  category: string;
  tags: string[];
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  contentBlocks: ArticleContentBlock[];
  relatedProducts?: AffiliateLink[]; // Main products featured
}

export enum ArticleCategory {
  CAMPING = "Camping Gear",
  FOURWD = "4x4 & Off-road",
  UTES = "Utes & Pickups",
  CARAVANS = "Caravans & Motorhomes",
  TRAVEL = "Adventure Travel",
  TUTORIALS = "DIY & Tutorials"
}
