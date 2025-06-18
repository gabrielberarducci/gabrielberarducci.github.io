
export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  description: string;
  price?: string; // Optional price
  rating?: number; // Optional rating 0-5
  affiliateLink: string;
  retailer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  keywords: string[]; // For SEO
  contentBlocks: ContentBlock[];
  relatedProducts?: AffiliateProduct[];
}

export enum ContentBlockType {
  Paragraph = 'paragraph',
  Heading = 'heading',
  Image = 'image',
  ProductHighlight = 'productHighlight',
  TutorialStep = 'tutorialStep',
  ComparisonTable = 'comparisonTable', // Added for comparisons
}

export interface ParagraphBlock {
  type: ContentBlockType.Paragraph;
  text: string;
}

export interface HeadingBlock {
  type: ContentBlockType.Heading;
  level: 2 | 3 | 4; // h2, h3, h4
  text: string;
}

export interface ImageBlock {
  type: ContentBlockType.Image;
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductHighlightBlock {
  type: ContentBlockType.ProductHighlight;
  productId: string; // Refers to an AffiliateProduct id
}

export interface TutorialStepBlock {
  type: ContentBlockType.TutorialStep;
  stepNumber: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ComparisonTableRow {
  feature: string;
  [productName: string]: string; // Dynamically add product values
}

export interface ComparisonTableBlock {
  type: ContentBlockType.ComparisonTable;
  title: string;
  productNames: string[]; // Names of products being compared
  rows: ComparisonTableRow[];
  productAffiliateLinks?: { [productName: string]: string }; // Links for products in table
}


export type ContentBlock = ParagraphBlock | HeadingBlock | ImageBlock | ProductHighlightBlock | TutorialStepBlock | ComparisonTableBlock;

export enum NavigationPath {
  Home = '/',
  Article = '/article',
}
