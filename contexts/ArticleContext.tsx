
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article } from '../types';
import { articles as mockArticles } from '../services/articleData'; // Using mock data

interface ArticleContextType {
  articles: Article[];
  getArticleBySlug: (slug: string) => Article | undefined;
  getArticlesByCategory: (categorySlug: string) => Article[];
  isLoading: boolean;
  error: string | null;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call:
        // const response = await fetch('/api/articles');
        // const data = await response.json();
        // setArticles(data);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
        setArticles(mockArticles);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        setArticles([]); // Clear articles on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
  };

  const getArticlesByCategory = (categorySlug: string): Article[] => {
    const normalizedQuery = categorySlug.toLowerCase().replace(/\s+/g, '-');
    return articles.filter(article => 
        article.category.toLowerCase().replace(/\s+/g, '-') === normalizedQuery
    );
  };

  return (
    <ArticleContext.Provider value={{ articles, getArticleBySlug, getArticlesByCategory, isLoading, error }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};
