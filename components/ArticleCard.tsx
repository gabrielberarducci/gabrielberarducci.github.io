
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <Link to={`/articles/${article.slug}`} className="block">
        <img 
          src={article.heroImage} 
          alt={article.heroImageAlt} 
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" 
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <Link to={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs font-semibold uppercase text-aussie-ochre hover:text-aussie-ochre-dark">
            {article.category}
          </Link>
        </div>
        <Link to={`/articles/${article.slug}`} className="block">
          <h3 className="text-xl font-display font-bold text-slate-800 hover:text-eucalyptus-green transition-colors duration-200 mb-2 leading-tight">
            {article.title}
          </h3>
        </Link>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{article.summary}</p>
        <div className="mt-auto">
          <Link
            to={`/articles/${article.slug}`}
            className="inline-flex items-center text-eucalyptus-green hover:text-eucalyptus-green-dark font-semibold transition-colors duration-200"
          >
            Read More <i className="fas fa-chevron-right ml-2 text-xs"></i>
          </Link>
        </div>
         <div className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-200">
            By {article.author} on {new Date(article.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
      </div>
    </div>
  );
};

export default ArticleCard;
