
import React, { useState, useMemo } from 'react';
import { useArticles } from '../contexts/ArticleContext';
import ArticleCard from '../components/ArticleCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { CATEGORIES } from '../constants';
import { Article } from '../types';

const BlogListPage: React.FC = () => {
  const { articles, isLoading, error } = useArticles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      const categoryInfo = CATEGORIES.find(c => c.slug === selectedCategory);
      if (categoryInfo) {
         filtered = filtered.filter(article => article.category === categoryInfo.name);
      }
    }
    
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [articles, searchTerm, selectedCategory, sortOrder]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-display font-extrabold text-slate-800 mb-3">The Adventure Log</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Dive into our collection of reviews, guides, and stories from the Aussie bush and beyond.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-10 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-aussie-ochre focus:border-aussie-ochre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <select
            className="px-4 py-2 border border-slate-300 rounded-md focus:ring-aussie-ochre focus:border-aussie-ochre bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-slate-300 rounded-md focus:ring-aussie-ochre focus:border-aussie-ochre bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
          >
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
          </select>
        </div>
      </div>

      {filteredAndSortedArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredAndSortedArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <i className="fas fa-search text-6xl text-slate-400 mb-6"></i>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">No Tracks Found Here, Mate!</h3>
          <p className="text-slate-500">
            Couldn't find any articles matching your search criteria. Try different keywords or broaden your filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogListPage;
