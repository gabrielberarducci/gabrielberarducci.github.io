
import React, { useState, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { SAMPLE_BLOG_POSTS } from '../constants';
import BlogPostCard from '../components/BlogPostCard';
import { BlogPost, PostCategory } from '../types';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BlogPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const query = useQuery();
  const searchQuery = query.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | 'all'>(
    categoryName ? (PostCategory[categoryName.toUpperCase().replace(/-/g, '_') as keyof typeof PostCategory] || 'all') : 'all'
  );

  const filteredPosts = useMemo(() => {
    return SAMPLE_BLOG_POSTS.filter(post => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const searchMatch = searchQuery 
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  // Extract category from URL path if present e.g. /blog/category/product-reviews
  React.useEffect(() => {
    if (categoryName) {
      const foundCategory = Object.values(PostCategory).find(
        (catVal) => catVal.toLowerCase().replace(/\s&?\s?/g, '-').replace(/[^\w-]+/g, '') === categoryName
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      } else {
        setSelectedCategory('all');
      }
    } else {
         setSelectedCategory('all');
    }
  }, [categoryName]);


  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value as PostCategory | 'all');
  };
  
  const pageTitle = selectedCategory === 'all' 
    ? "All Blog Posts" 
    : selectedCategory;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display text-au-black">{pageTitle}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {searchQuery ? `Search results for "${searchQuery}"` : "Explore our latest articles, reviews, and adventure guides."}
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category:</label>
          <select
            id="categoryFilter"
            name="categoryFilter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-au-red focus:border-au-red sm:text-sm rounded-md shadow-sm"
          >
            <option value="all">All Categories</option>
            {Object.values(PostCategory).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post: BlogPost) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-700">No posts found.</h2>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
