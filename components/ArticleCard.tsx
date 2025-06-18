
import React from 'react';
import { Link } from 'react-router-dom';
import { Article, NavigationPath } from '../types';
import { ChevronRightIcon } from './icons';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-secondary/50 hover:scale-[1.02]">
      <Link to={`${NavigationPath.Article}/${article.slug}`} className="block">
        <img 
          src={article.imageUrl} 
          alt={article.imageAlt} 
          className="w-full h-64 object-cover" 
          loading="lazy"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{article.category}</span>
        </div>
        <Link to={`${NavigationPath.Article}/${article.slug}`} className="block">
          <h3 className="text-2xl font-heading font-bold text-primary hover:text-secondary transition-colors mb-3 leading-tight">
            {article.title}
          </h3>
        </Link>
        <p className="text-mutedText text-sm mb-4 flex-grow">{article.summary}</p>
        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs text-mutedText mb-3">
            <span>By {article.author}</span>
            <span>{article.date}</span>
          </div>
          <Link
            to={`${NavigationPath.Article}/${article.slug}`}
            className="inline-flex items-center font-semibold text-secondary hover:text-orange-600 transition-colors group"
          >
            Read More
            <ChevronRightIcon className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
