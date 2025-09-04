import React from 'react';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Lookbook | Fashion Forward',
  description: 'Explore our latest fashion looks and style inspirations',
};

const LookbookPage: React.FC = () => {
  const looks = [
    {
      id: 1,
      title: 'Urban Chic',
      description: 'Effortless style for the modern city dweller',
      image: '/images/lookbook/urban-chic.jpg',
      tags: ['Casual', 'Streetwear', 'Minimalist']
    },
    {
      id: 2,
      title: 'Evening Elegance',
      description: 'Sophisticated looks for special occasions',
      image: '/images/lookbook/evening-elegance.jpg',
      tags: ['Formal', 'Luxury', 'Evening Wear']
    },
    {
      id: 3,
      title: 'Weekend Vibes',
      description: 'Comfortable yet stylish weekend outfits',
      image: '/images/lookbook/weekend-vibes.jpg',
      tags: ['Casual', 'Comfort', 'Relaxed']
    },
    {
      id: 4,
      title: 'Office Ready',
      description: 'Professional attire with a modern twist',
      image: '/images/lookbook/office-ready.jpg',
      tags: ['Professional', 'Business', 'Contemporary']
    },
    {
      id: 5,
      title: 'Summer Breeze',
      description: 'Light and airy outfits for warm weather',
      image: '/images/lookbook/summer-breeze.jpg',
      tags: ['Summer', 'Light', 'Breezy']
    },
    {
      id: 6,
      title: 'Winter Wonderland',
      description: 'Cozy and warm looks for colder days',
      image: '/images/lookbook/winter-wonderland.jpg',
      tags: ['Winter', 'Cozy', 'Layered']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Fashion Lookbook
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the latest trends and style inspirations from our curated collection
          </p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {looks.map((look) => (
            <div key={look.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Placeholder - Replace with actual images */}
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-6xl mb-2">👗</div>
                  <p className="text-sm">{look.title}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{look.title}</h3>
                  <p className="text-sm mb-4">{look.description}</p>
                  <Button variant="primary" size="sm">
                    View Look
                  </Button>
                </div>
              </div>
              
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {look.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Try These Looks?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Shop the pieces featured in our lookbook and create your own unique style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg">
              Get Style Tips
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookbookPage;