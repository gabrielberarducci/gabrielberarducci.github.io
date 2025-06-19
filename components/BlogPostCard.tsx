
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import Button from './Button';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
      <Link to={`/post/${post.slug}`} className="block">
        <img 
          src={`${post.imageUrl}?${post.id}`} // Add ID to vary picsum images
          alt={post.imageAlt} 
          className="w-full h-56 object-cover" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/seed/default/600/400'; // Fallback
          }}
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-au-red font-semibold uppercase tracking-wide">{post.category}</p>
        <Link to={`/post/${post.slug}`} className="block mt-2">
          <h3 className="text-2xl font-bold text-au-black hover:text-au-red transition-colors duration-200">{post.title}</h3>
        </Link>
        <p className="mt-3 text-base text-gray-600 flex-grow">{post.excerpt}</p>
        <div className="mt-6">
          <Button href={`/post/${post.slug}`} variant="outline" size="sm">
            Read More &raquo;
          </Button>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <span>{post.date}</span> &bull; <span>By {post.author}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
