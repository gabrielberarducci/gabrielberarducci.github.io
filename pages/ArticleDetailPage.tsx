
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES, ALL_PRODUCTS } from '../constants';
import { Article, ContentBlockType, AffiliateProduct, ParagraphBlock, HeadingBlock, ImageBlock, ProductHighlightBlock, TutorialStepBlock, ComparisonTableBlock, NavigationPath } from '../types';
import AffiliateButton from '../components/AffiliateButton';
import StarRating from '../components/StarRating';
import { ChevronRightIcon } from '../components/icons';

const ProductCard: React.FC<{ product: AffiliateProduct }> = ({ product }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
    <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h4 className="text-xl font-heading font-semibold text-primary mb-2">{product.name}</h4>
    <p className="text-sm text-mutedText mb-1">{product.brand}</p>
    {product.rating && <StarRating rating={product.rating} className="text-secondary mb-2" />}
    <p className="text-sm text-darkText mb-4">{product.description}</p>
    {product.price && <p className="text-lg font-semibold text-primary mb-3">{product.price}</p>}
    <AffiliateButton href={product.affiliateLink} text="Check Price" retailer={product.retailer} className="w-full" />
  </div>
);

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = ARTICLES.find(art => art.slug === slug);
    setArticle(foundArticle || null);
    if (foundArticle) {
      document.title = `${foundArticle.title} | Aussie Adventure Hub`;
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Article Not Found</h2>
        <p className="text-mutedText mb-8">Sorry, we couldn't find the article you're looking for.</p>
        <Link to={NavigationPath.Home} className="text-secondary hover:text-orange-600 font-semibold">
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  const renderContentBlock = (block: any, index: number) => { // Using 'any' for block type due to discriminated union complexity in JSX switch
    switch (block.type) {
      case ContentBlockType.Paragraph:
        return <p key={index} className="text-lg text-darkText leading-relaxed mb-6">{ (block as ParagraphBlock).text }</p>;
      case ContentBlockType.Heading:
        const HeadingTag = `h${(block as HeadingBlock).level}` as keyof JSX.IntrinsicElements;
        return <HeadingTag key={index} className="font-heading font-bold text-primary mt-10 mb-4">{ (block as HeadingBlock).text }</HeadingTag>;
      case ContentBlockType.Image:
        const imgBlock = block as ImageBlock;
        return (
          <figure key={index} className="my-8">
            <img src={imgBlock.src} alt={imgBlock.alt} className="w-full h-auto max-h-[700px] object-contain rounded-lg shadow-lg mx-auto" />
            {imgBlock.caption && <figcaption className="text-center text-sm text-mutedText mt-2">{imgBlock.caption}</figcaption>}
          </figure>
        );
      case ContentBlockType.ProductHighlight:
        const product = ALL_PRODUCTS.find(p => p.id === (block as ProductHighlightBlock).productId);
        return product ? <div key={index} className="my-8 p-6 bg-lightBg rounded-lg shadow-md"><ProductCard product={product} /></div> : null;
      case ContentBlockType.TutorialStep:
        const stepBlock = block as TutorialStepBlock;
        return (
          <div key={index} className="my-8 p-6 bg-blue-50 border-l-4 border-secondary rounded-r-lg">
            <h4 className="text-xl font-heading font-semibold text-primary mb-2">Step {stepBlock.stepNumber}: {stepBlock.title}</h4>
            <p className="text-darkText mb-3">{stepBlock.description}</p>
            {stepBlock.imageUrl && <img src={stepBlock.imageUrl} alt={stepBlock.title} className="w-full max-w-md h-auto rounded-md shadow-sm my-3"/>}
          </div>
        );
      case ContentBlockType.ComparisonTable:
        const tableBlock = block as ComparisonTableBlock;
        return (
          <div key={index} className="my-8 overflow-x-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{tableBlock.title}</h3>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-sm font-semibold text-primary uppercase">Feature</th>
                  {tableBlock.productNames.map(name => (
                    <th key={name} className="py-3 px-4 border-b text-left text-sm font-semibold text-primary uppercase">{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableBlock.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-lightBg' : 'bg-white'}>
                    <td className="py-3 px-4 border-b text-sm text-darkText font-medium">{row.feature}</td>
                    {tableBlock.productNames.map(name => (
                      <td key={name} className="py-3 px-4 border-b text-sm text-mutedText">{row[name]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {tableBlock.productAffiliateLinks && (
              <div className="mt-4 flex flex-wrap gap-4">
                {tableBlock.productNames.map(name => {
                  const link = tableBlock.productAffiliateLinks?.[name];
                  return link ? <AffiliateButton key={name} href={link} text={`Shop ${name}`} className="text-sm py-2 px-4" /> : null;
                })}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Image for Article */}
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <img src={article.imageUrl} alt={article.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-end pb-12 md:pb-16">
          <nav aria-label="breadcrumb" className="text-sm text-lightBg mb-2">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to={NavigationPath.Home} className="hover:text-secondary">Home</Link>
                <ChevronRightIcon className="w-4 h-4 mx-1" />
              </li>
              <li className="flex items-center">
                <Link to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-secondary">{article.category}</Link>
                <ChevronRightIcon className="w-4 h-4 mx-1" />
              </li>
              <li className="flex items-center text-gray-300" aria-current="page">
                {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-xl">{article.title}</h1>
          <div className="text-sm text-gray-200 mt-2">
            <span>By {article.author}</span> | <span>{article.date}</span> | <span>Category: {article.category}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-mutedText leading-relaxed mb-8 italic">{article.summary}</p>
          {article.contentBlocks.map((block, index) => renderContentBlock(block, index))}
          
          {article.relatedProducts && article.relatedProducts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Related Gear</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {article.relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
             <h3 className="text-2xl font-heading font-bold text-primary mb-4">Keywords for this article:</h3>
             <div className="flex flex-wrap gap-2">
                {article.keywords.map(keyword => (
                    <span key={keyword} className="bg-accent/30 text-primary text-xs font-semibold px-3 py-1 rounded-full">{keyword}</span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
