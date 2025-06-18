
import React from 'react';
import HeroSection from '../components/HeroSection';
import ArticleCard from '../components/ArticleCard';
import { ARTICLES, CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredArticles = ARTICLES.slice(0, 3); // Show first 3 articles as featured

  return (
    <div>
      <HeroSection
        title="Explore Wild Australia"
        subtitle="Your ultimate resource for Aussie adventures: 4x4s, camping, caravans, ute gear, and unbiased reviews to fuel your journey."
        imageUrl="https://picsum.photos/seed/aussiehero/1920/1080"
        imageAlt="Epic Australian landscape with a 4x4 vehicle"
        ctaText="Discover Articles"
        ctaLink="#featured-articles" // Link to section on page or a category page
      />

      <section id="categories" className="py-16 bg-lightBg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <h3 className="text-2xl font-heading font-semibold text-primary group-hover:text-secondary transition-colors mb-2">{category.name}</h3>
                <p className="text-mutedText text-sm">Explore {category.name.toLowerCase()} articles and guides.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-articles" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
            Latest Adventures & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          {ARTICLES.length > 3 && (
             <div className="text-center mt-12">
                <Link 
                    to="/articles" // Assuming a future route for all articles
                    className="bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg shadow-md"
                >
                    View All Articles
                </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Gear Up for Your Next Adventure!</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Find honest reviews on the latest 4x4 accessories, camping equipment, caravan essentials and more. We help you choose the right gear for Australian conditions.
              </p>
              <Link 
                  to="/category/reviews"
                  className="bg-secondary hover:bg-orange-500 text-primary font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-xl"
              >
                  Read Product Reviews
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
