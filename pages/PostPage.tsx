
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_BLOG_POSTS } from '../constants';
import { BlogPost, AffiliateLink } from '../types';
import Button from '../components/Button';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const foundPost = SAMPLE_BLOG_POSTS.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} | AU4WD.online`;
    } else {
      setError("Sorry, we couldn't find that adventure story. It might have wandered off-track!");
      document.title = "Post Not Found | AU4WD.online";
    }
     // Clean up title on unmount
    return () => {
      document.title = 'AU4WD Adventure Online';
    };
  }, [slug]);

  if (error) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-4xl font-display text-au-red mb-4">Oops! Lost Trail...</h1>
        <p className="text-xl text-gray-700 mb-8">{error}</p>
        <img src="https://picsum.photos/seed/lostmap/500/300" alt="Lost map" className="rounded-lg shadow-md mb-8"/>
        <Button href="/blog" variant="primary">
          Back to All Posts
        </Button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-au-red"></div>
        <p className="mt-4 text-xl text-gray-700">Loading Adventure...</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-8 md:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 md:mb-12">
          <Link to={`/blog/category/${post.category.toLowerCase().replace(/\s&?\s?/g, '-').replace(/[^\w-]+/g, '')}`} className="text-au-red uppercase font-semibold tracking-wider text-sm hover:underline">
            {post.category}
          </Link>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-au-black leading-tight font-display">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            By <span className="font-semibold text-au-gray">{post.author}</span> on <span className="font-semibold text-au-gray">{post.date}</span>
          </p>
        </header>

        <figure className="mb-8 md:mb-12 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={`${post.imageUrl}?id=${post.id}`} 
            alt={post.imageAlt} 
            className="w-full h-auto max-h-[600px] object-cover" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/defaultpost/1200/600'; // Fallback
            }}
          />
        </figure>

        <div 
          className="prose prose-lg lg:prose-xl max-w-none text-au-gray blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {post.affiliateLinks && post.affiliateLinks.length > 0 && (
          <section className="mt-12 py-8 border-t-2 border-au-red">
            <h2 className="text-2xl font-semibold text-au-black mb-6">Gear Up For Your Adventure:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.affiliateLinks.map((link: AffiliateLink, index: number) => (
                <Button 
                  key={index} 
                  href={link.url} 
                  variant="primary"
                  className="w-full text-center"
                >
                  {link.text} 
                  <span className="block text-xs opacity-80">(on {link.storeName})</span>
                </Button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">
              By clicking these links and making a purchase, you support AU4WD.online at no extra cost to you. Thanks for your support!
            </p>
          </section>
        )}

        <div className="mt-12 py-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Keywords: {post.keywords.join(', ')}
          </p>
          <div className="mt-6">
            <Button href="/blog" variant="secondary">
              &laquo; Back to All Posts
            </Button>
          </div>
        </div>
      </article>
      <style>{`
        .blog-content h3 {
          color: #D72323; /* au-red */
          font-weight: 600;
          font-size: 1.5em;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        .blog-content p {
          margin-bottom: 1em;
          line-height: 1.7;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 1.5em;
          margin-bottom: 1em;
          list-style-position: outside;
        }
        .blog-content li {
          margin-bottom: 0.5em;
        }
        .blog-content strong {
            color: #1a1a1a; /* au-black */
        }
        .blog-content a {
            color: #D72323; /* au-red */
            text-decoration: underline;
        }
        .blog-content a:hover {
            color: #A01C1C; /* au-red-dark */
        }
      `}</style>
    </div>
  );
};

export default PostPage;
