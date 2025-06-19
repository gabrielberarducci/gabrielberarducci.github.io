
import React from 'react';
import HeroSection from '../components/HeroSection';
import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../contexts/ArticleContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const HomePage: React.FC = () => {
  const { articles, isLoading, error } = useArticles();

  const recentArticles = articles.slice(0, 3); // Show latest 3 articles

  return (
    <div className="space-y-12">
      <HeroSection
        title="Your Aussie Adventure Starts Here!"
        subtitle="Discover the best gear, tips, and destinations for exploring the great Australian outdoors. From rugged 4x4 tracks to serene campsites, we've got you covered."
        imageUrl="https://picsum.photos/seed/aussiehero/1600/900"
        ctaText="Explore Articles"
        ctaLink="/blog"
      />

      <section>
        <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 text-center">
          Latest from the Blog
        </h2>
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!isLoading && !error && recentArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
         {!isLoading && !error && recentArticles.length === 0 && (
            <p className="text-slate-600 text-center">No articles found yet. Check back soon, mate!</p>
        )}
        {!isLoading && articles.length > 3 && (
            <div className="text-center mt-12">
                <Link 
                    to="/blog" 
                    className="bg-eucalyptus-green hover:bg-eucalyptus-green-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    View All Articles <i className="fas fa-arrow-right ml-2"></i>
                </Link>
            </div>
        )}
      </section>

      <section className="py-12 bg-sandy-beige rounded-lg shadow">
        <h2 className="text-3xl font-display font-bold text-slate-800 mb-10 text-center">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {CATEGORIES.map(category => (
            <Link 
              key={category.slug} 
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-aussie-ochre transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className={`${category.icon} text-4xl text-eucalyptus-green group-hover:text-white mb-3 transition-colors duration-300`}></i>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-white text-center transition-colors duration-300">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Placeholder for Gemini-powered tool */}
      <section className="py-12">
        <div className="bg-eucalyptus-green text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Need Gear Advice?</h2>
          <p className="mb-6 text-lg">
            Our AI-powered assistant (coming soon!) can help you find the perfect gear for your next adventure based on your needs.
          </p>
          <button 
            disabled 
            className="bg-aussie-ochre text-white font-semibold py-3 px-6 rounded-lg opacity-50 cursor-not-allowed">
            Ask Our AI (Coming Soon)
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
