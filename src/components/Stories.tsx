import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, Play, ChevronRight } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  participants: number;
  category: string;
  image: string;
  featured: boolean;
}

const Stories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Science', 'History', 'Literature', 'Math', 'Adventure'];

  const stories: Story[] = [
    {
      id: '1',
      title: 'The Journey Through Time',
      description: 'Travel through different historical periods and learn about civilizations',
      duration: '15 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      participants: 1234,
      category: 'History',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
    },
    {
      id: '2',
      title: 'The Magic of Numbers',
      description: 'Discover the patterns and beauty hidden in mathematics',
      duration: '12 min',
      difficulty: 'Beginner',
      rating: 4.6,
      participants: 987,
      category: 'Math',
      image: 'https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
    {
      id: '3',
      title: 'Ocean Mysteries',
      description: 'Dive deep into the ocean and explore marine life',
      duration: '18 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      participants: 1567,
      category: 'Science',
      image: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
    },
    {
      id: '4',
      title: 'Shakespeare\'s World',
      description: 'Enter the world of Shakespeare and his timeless plays',
      duration: '20 min',
      difficulty: 'Advanced',
      rating: 4.7,
      participants: 756,
      category: 'Literature',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
    },
  ];

  const filteredStories = selectedCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const featuredStories = stories.filter(story => story.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Learning Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in educational adventures that make learning fun and memorable
          </p>
        </div>

        {/* Featured Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {story.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {story.participants}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{story.rating}</span>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Stories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-600" />
            All Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    {story.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{story.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {story.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs">{story.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      story.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      story.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {story.difficulty}
                    </span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stories;