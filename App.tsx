
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import BlogListPage from './pages/BlogListPage';
import { ArticleProvider } from './contexts/ArticleContext';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <ArticleProvider>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/blog" element={<BlogListPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ArticleProvider>
  );
};

export default App;
