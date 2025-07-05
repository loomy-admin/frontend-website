import React, { useState } from 'react';
import { Play, Star, Clock, Users, Trophy, Zap, BookOpen, Calculator, Globe, Gamepad2 } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  players: number;
  rating: number;
  image: string;
  featured: boolean;
}

const Games: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Math', 'Science', 'History', 'Language', 'Logic'];

  const games: Game[] = [
    {
      id: '1',
      title: 'Math Racing Challenge',
      description: 'Solve math problems as fast as you can to win the race!',
      category: 'Math',
      difficulty: 'Medium',
      duration: '10 min',
      players: 2456,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: true,
    },
    {
      id: '2',
      title: 'Science Lab Explorer',
      description: 'Conduct virtual experiments and discover scientific principles',
      category: 'Science',
      difficulty: 'Hard',
      duration: '20 min',
      players: 1834,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1458897/pexels-photo-1458897.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: true,
    },
    {
      id: '3',
      title: 'Time Travel History',
      description: 'Journey through different time periods and learn about civilizations',
      category: 'History',
      difficulty: 'Easy',
      duration: '15 min',
      players: 3421,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: false,
    },
    {
      id: '4',
      title: 'Word Building Adventure',
      description: 'Build words and expand your vocabulary while exploring new worlds',
      category: 'Language',
      difficulty: 'Medium',
      duration: '12 min',
      players: 1967,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: false,
    },
    {
      id: '5',
      title: 'Logic Puzzle Master',
      description: 'Challenge your mind with increasingly complex logic puzzles',
      category: 'Logic',
      difficulty: 'Hard',
      duration: '18 min',
      players: 892,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: false,
    },
    {
      id: '6',
      title: 'Geography Quest',
      description: 'Explore the world and learn about countries, capitals, and cultures',
      category: 'Geography',
      difficulty: 'Easy',
      duration: '14 min',
      players: 2134,
      rating: 4.4,
      image: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=300',
      featured: false,
    },
  ];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const featuredGames = games.filter(game => game.featured);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Math': return Calculator;
      case 'Science': return Zap;
      case 'History': return BookOpen;
      case 'Language': return Globe;
      case 'Logic': return Gamepad2;
      default: return Play;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Educational Games
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn while having fun with our collection of interactive educational games
          </p>
        </div>

        {/* Featured Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Featured Games
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGames.map((game) => {
              const Icon = getCategoryIcon(game.category);
              return (
                <div key={game.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Icon className="w-3 h-3" />
                      {game.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
                    <p className="text-gray-600 mb-4">{game.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {game.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {game.players}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{game.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {game.difficulty}
                      </span>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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

        {/* All Games */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-purple-600" />
            All Games
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => {
              const Icon = getCategoryIcon(game.category);
              return (
                <div key={game.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Icon className="w-3 h-3" />
                      {game.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{game.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {game.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs">{game.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {game.difficulty}
                      </span>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Play
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Games;