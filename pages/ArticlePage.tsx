
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticleContext';
import LoadingSpinner from '../components/LoadingSpinner';
import AffiliateLinkButton from '../components/AffiliateLinkButton';
import { ArticleContentBlock } from '../types';
import ArticleCard from '../components/ArticleCard'; // For related articles

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticleBySlug, articles, isLoading: articlesLoading } = useArticles();
  const [article, setArticle] = useState(getArticleBySlug(slug || ''));

  useEffect(() => {
    if (slug) {
      setArticle(getArticleBySlug(slug));
    }
  }, [slug, getArticleBySlug]);

  if (articlesLoading) return <LoadingSpinner />;
  if (!article) return <div className="text-center py-10 text-xl text-slate-700">Crikey! Article not found.</div>;

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const renderContentBlock = (block: ArticleContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        const Tag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        return <Tag key={index} className={`font-display text-slate-800 ${block.level === 2 ? 'text-3xl mt-8 mb-4' : 'text-2xl mt-6 mb-3'} font-bold`}>{block.content}</Tag>;
      case 'paragraph':
        return <p key={index} className="text-slate-700 leading-relaxed my-4 text-lg" dangerouslySetInnerHTML={{ __html: block.content || '' }}></p>;
      case 'image':
        return (
          <figure key={index} className="my-6">
            <img src={block.imageUrl} alt={block.altText || article.title} className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md mx-auto" />
            {block.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.caption}</figcaption>}
          </figure>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside text-slate-700 my-4 pl-4 space-y-1 text-lg">
            {block.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ul>
        );
      case 'affiliateBanner':
        return (
          <div key={index} className="my-8 p-6 bg-sandy-beige rounded-lg shadow flex flex-col sm:flex-row items-center justify-center gap-4">
            {block.affiliateLinks?.map((link, i) => (
              <AffiliateLinkButton key={i} link={link} className="w-full sm:w-auto"/>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-xl">
      <header className="mb-8 border-b pb-8 border-slate-200">
        <Link to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold uppercase text-aussie-ochre hover:text-aussie-ochre-dark mb-2 block">
          {article.category}
        </Link>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-4">{article.title}</h1>
        <div className="text-slate-500 text-sm">
          <span>By {article.author}</span> | <span>Published on {new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </header>

      {article.heroImage && (
        <img 
          src={article.heroImage} 
          alt={article.heroImageAlt} 
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-10" 
        />
      )}
      
      <article className="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:text-slate-800 prose-a:text-aussie-ochre hover:prose-a:text-aussie-ochre-dark">
        {article.contentBlocks.map(renderContentBlock)}
      </article>

      {article.relatedProducts && article.relatedProducts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">Gear We Mentioned:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {article.relatedProducts.map((link, index) => (
              <AffiliateLinkButton key={index} link={link} />
            ))}
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">You Might Also Like:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map(relArt => (
              <ArticleCard key={relArt.slug} article={relArt} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
