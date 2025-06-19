
import React, { useEffect } from 'react';
import { SITE_NAME } from '../constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = `About Us | ${SITE_NAME}`;
    return () => { document.title = SITE_NAME; };
  }, []);

  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display text-au-black text-center mb-12">
          About {SITE_NAME}
        </h1>
        
        <div className="prose prose-lg lg:prose-xl max-w-none text-au-gray mx-auto">
          <p>
            Welcome to <strong>{SITE_NAME}</strong>! We are your premier online destination dedicated to everything about the Australian adventure lifestyle. 
            From rugged 4x4 expeditions across the outback to serene family camping trips, and from kitting out your ute or pickup truck to finding the perfect caravan or motorhome, we've got you covered.
          </p>
          <img 
            src="https://picsum.photos/seed/aboutus/800/500" 
            alt="Australian landscape with a 4x4" 
            className="rounded-lg shadow-xl my-8 mx-auto"
          />
          <h2 className="text-au-red">Our Mission</h2>
          <p>
            Our mission is to inspire and equip fellow Aussies to explore the incredible natural beauty our country has to offer. We provide:
          </p>
          <ul>
            <li><strong>Honest Product Reviews:</strong> Unbiased opinions on the latest gear, from rooftop tents and recovery kits to caravan accessories and vehicle modifications.</li>
            <li><strong>In-Depth Comparisons:</strong> Helping you make informed decisions by comparing top brands and products side-by-side.</li>
            <li><strong>Expert Opinions & Insights:</strong> Sharing our experiences, tips, and tricks learned from years on the road and on the tracks.</li>
            <li><strong>Practical Tutorials:</strong> Step-by-step guides for installations, maintenance, and DIY projects to enhance your adventure setup.</li>
          </ul>
          <h2 className="text-au-red">For Aussies, By Aussies</h2>
          <p>
            We understand the unique challenges and joys of exploring Australia. Our content is tailored specifically for the Australian market, considering our diverse terrains, climate conditions, and local brands.
          </p>
          <p>
            {SITE_NAME} is more than just a website; it's a community of passionate adventurers. We thrive on sharing knowledge, fostering a love for the great outdoors, and helping you make the most of your explorations.
          </p>
          <h2 className="text-au-red">Affiliate Marketing & Transparency</h2>
          <p>
            To help keep {SITE_NAME} running and continue providing valuable content, we participate in affiliate marketing programs. This means if you click on some of our product links and make a purchase, we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe in and that align with our adventurous spirit. Your trust is important to us, and we are committed to transparency.
          </p>
          <p>
            So, whether you're a seasoned overlander or just starting to dream of your first off-road trip, dive into our articles, get inspired, and gear up for your next Australian adventure!
          </p>
        </div>
      </div>
       <style>{`
        .prose h2 {
          color: #D72323; /* au-red */
          font-weight: 600;
          font-size: 1.75em; /* Tailwind prose-lg h2 is 1.5em, making it larger */
          margin-top: 2em;
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
