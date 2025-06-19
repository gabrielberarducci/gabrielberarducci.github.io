
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, TAGLINE, SAMPLE_BLOG_POSTS } from '../constants';
import BlogPostCard from '../components/BlogPostCard';
import Button from '../components/Button';
import { PostCategory } from '../types';

const HomePage: React.FC = () => {
  const featuredPosts = SAMPLE_BLOG_POSTS.slice(0, 3); // Show first 3 posts

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 md:py-48 text-white" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/aussiehero/1600/900')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-wider leading-tight">
            {SITE_NAME}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-sans font-light">
            {TAGLINE}
          </p>
          <div className="mt-10">
            <Button href="/blog" variant="primary" size="lg">
              Explore Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-au-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-center text-au-black mb-12">
            Latest Adventures & Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/blog" variant="secondary" size="md">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-center text-au-black mb-12">
            Discover Your Next Adventure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "4x4 Expeditions", imgSeed: "4x4action", link: "/blog/category/travel-guides" },
              { name: "Camping Gear", imgSeed: "campgear", link: "/blog/category/gear" },
              { name: "Ute & Truck Mods", imgSeed: "utemods", link: "/blog/category/tutorials" },
              { name: "Caravan Life", imgSeed: "caravanpark", link: "/blog/category/opinions" },
              { name: "Product Reviews", imgSeed: "prodreview", link: "/blog/category/product-reviews" },
              { name: "Travel Tips", imgSeed: "traveltips", link: "/blog/category/opinions" },
            ].map((category) => (
              <Link key={category.name} to={category.link} className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={`https://picsum.photos/seed/${category.imgSeed}/600/400`} 
                  alt={category.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                  <h3 className="text-2xl font-display text-white text-center uppercase tracking-wide">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-au-red text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display mb-6">Ready for an Upgrade?</h2>
          <p className="text-lg mb-8">
            Find the best deals on 4x4 accessories, camping equipment, and caravan essentials through our curated affiliate links. Support AU4WD.online and gear up for your next adventure!
          </p>
          <Button href="/blog/category/gear" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-au-red">
            Shop Top Gear
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
