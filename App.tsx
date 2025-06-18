
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import { NavigationPath, Article } from './types';
import { ARTICLES, CATEGORIES } from './constants';
import ArticleCard from './components/ArticleCard';

// Generic Category Page (can be expanded)
const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const categoryArticles = ARTICLES.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (!category) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Category Not Found</h2>
        <p className="text-mutedText mb-8">Sorry, we couldn't find articles for this category.</p>
        <Link to={NavigationPath.Home} className="text-secondary hover:text-orange-600 font-semibold">
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-heading font-bold text-primary mb-2 text-center">{category.name}</h1>
      <p className="text-mutedText text-lg mb-12 text-center">
        Browse all articles in the "{category.name}" category. Your guide to Australian {category.name.toLowerCase()}.
      </p>
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-mutedText text-center">No articles found in this category yet. Check back soon!</p>
      )}
    </div>
  );
};


// All Articles Page
const AllArticlesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-heading font-bold text-primary mb-12 text-center">All Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        {ARTICLES.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={NavigationPath.Home} element={<HomePage />} />
            <Route path={`${NavigationPath.Article}/:slug`} element={<ArticleDetailPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/articles" element={<AllArticlesPage />} />
            {/* Fallback route for any undefined paths */}
            <Route path="*" element={<Navigate to={NavigationPath.Home} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

// Need to import useParams and Link for CategoryPage
import { useParams, Link } from 'react-router-dom';

export default App;
