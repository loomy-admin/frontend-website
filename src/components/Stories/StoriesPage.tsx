import React, { useState } from 'react';
import { BookOpen, Clock, Star, User, Search, Filter } from 'lucide-react';

const StoriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const stories = [
    {
      id: 1,
      title: 'The Magic of Mathematics',
      author: 'Dr. Sarah Johnson',
      category: 'Mathematics',
      readTime: '5 min read',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover the fascinating world of numbers and equations through interactive storytelling.',
      tags: ['Algebra', 'Geometry', 'Fun Learning']
    },
    {
      id: 2,
      title: 'Journey Through Ancient History',
      author: 'Prof. Michael Chen',
      category: 'History',
      readTime: '8 min read',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Travel back in time to explore ancient civilizations and their remarkable achievements.',
      tags: ['Ancient Rome', 'Egypt', 'Archaeology']
    },
    {
      id: 3,
      title: 'The Science of Nature',
      author: 'Dr. Emily Rodriguez',
      category: 'Science',
      readTime: '6 min read',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore the wonders of biology, chemistry, and physics through engaging narratives.',
      tags: ['Biology', 'Chemistry', 'Physics']
    },
    {
      id: 4,
      title: 'Creative Writing Adventures',
      author: 'Ms. Lisa Thompson',
      category: 'Language Arts',
      readTime: '4 min read',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Unleash your creativity with storytelling techniques and writing exercises.',
      tags: ['Creative Writing', 'Grammar', 'Vocabulary']
    },
    {
      id: 5,
      title: 'Geography Explorations',
      author: 'Mr. David Wilson',
      category: 'Geography',
      readTime: '7 min read',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Discover different cultures, landscapes, and environments around the world.',
      tags: ['World Geography', 'Cultures', 'Environment']
    },
    {
      id: 6,
      title: 'Art and Creativity',
      author: 'Ms. Anna Martinez',
      category: 'Arts',
      readTime: '5 min read',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Express yourself through various art forms and creative techniques.',
      tags: ['Drawing', 'Painting', 'Digital Art']
    }
  ];

  const categories = ['all', 'Mathematics', 'History', 'Science', 'Language Arts', 'Geography', 'Arts'];

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Educational Stories</h1>
              <p className="text-gray-600 text-lg">Learn through engaging narratives and interactive content</p>
            </div>
            
            {/* Loomy Character */}
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full flex items-center justify-center relative">
                <div className="relative z-10 flex flex-col items-center">
                  {/* Wizard Hat */}
                  <div className="relative mb-1">
                    <div className="w-6 h-8 bg-gradient-to-b from-purple-400 to-purple-500 rounded-t-full transform -rotate-12 relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Face */}
                  <div className="w-10 h-10 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center relative mb-2">
                    <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 border border-black rounded-b-full border-t-0"></div>
                  </div>

                  {/* Book */}
                  <div className="w-6 h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-amber-100 to-amber-200 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="text-gray-500" size={20} />
            <span className="text-gray-700 font-medium">Categories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Stories' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              {/* Story Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {story.category}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-gray-400" size={16} />
                    <span className="text-sm text-gray-500">{story.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{story.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{story.description}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <User className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600">{story.author}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Button */}
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <BookOpen size={16} />
                  <span>Read Story</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;