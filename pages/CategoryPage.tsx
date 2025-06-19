
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticleContext';
import ArticleCard from '../components/ArticleCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { CATEGORIES } from '../constants';
import { Article } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { getArticlesByCategory, isLoading, error } = useArticles();
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);

  const currentCategory = CATEGORIES.find(cat => cat.slug === categoryName);

  useEffect(() => {
    if (categoryName) {
      setCategoryArticles(getArticlesByCategory(categoryName));
    }
  }, [categoryName, getArticlesByCategory, isLoading]); // Depend on isLoading to refilter when articles load

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  
  const pageTitle = currentCategory ? currentCategory.name : "Category Articles";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 pb-4 border-b border-slate-200">
        <h1 className="text-4xl font-display font-bold text-slate-800">
          {currentCategory?.icon && <i className={`${currentCategory.icon} mr-3 text-aussie-ochre`}></i>}
          {pageTitle}
        </h1>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <img src="https://picsum.photos/seed/emptycategory/300/200" alt="Empty road" className="mx-auto mb-4 rounded-lg shadow"/>
          <p className="text-xl text-slate-600 mb-2">Looks like this trail is a bit quiet for now...</p>
          <p className="text-slate-500 mb-6">No articles found in the "{pageTitle}" category yet. How about exploring others?</p>
          <Link 
            to="/blog" 
            className="bg-eucalyptus-green hover:bg-eucalyptus-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Explore All Articles
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
