import React, { useState } from 'react';
import { Gamepad2, Play, Trophy, Users, Clock, Star } from 'lucide-react';

const GamesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const games = [
    {
      id: 1,
      title: 'Math Quest Adventure',
      category: 'Mathematics',
      difficulty: 'Easy',
      players: '1 Player',
      duration: '10-15 min',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Solve mathematical puzzles and equations in this exciting adventure game.',
      skills: ['Addition', 'Subtraction', 'Problem Solving']
    },
    {
      id: 2,
      title: 'History Timeline Challenge',
      category: 'History',
      difficulty: 'Medium',
      players: '1-4 Players',
      duration: '15-20 min',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Test your knowledge of historical events and arrange them in chronological order.',
      skills: ['Historical Knowledge', 'Critical Thinking', 'Memory']
    },
    {
      id: 3,
      title: 'Science Lab Simulator',
      category: 'Science',
      difficulty: 'Hard',
      players: '1 Player',
      duration: '20-30 min',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Conduct virtual experiments and learn scientific principles through hands-on activities.',
      skills: ['Scientific Method', 'Observation', 'Analysis']
    },
    {
      id: 4,
      title: 'Word Builder Challenge',
      category: 'Language Arts',
      difficulty: 'Easy',
      players: '1-2 Players',
      duration: '5-10 min',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Build words from letters and improve your vocabulary and spelling skills.',
      skills: ['Vocabulary', 'Spelling', 'Word Formation']
    },
    {
      id: 5,
      title: 'Geography Explorer',
      category: 'Geography',
      difficulty: 'Medium',
      players: '1-3 Players',
      duration: '15-25 min',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore different countries, capitals, and landmarks around the world.',
      skills: ['World Knowledge', 'Map Reading', 'Cultural Awareness']
    },
    {
      id: 6,
      title: 'Art Color Mixer',
      category: 'Arts',
      difficulty: 'Easy',
      players: '1 Player',
      duration: '10-15 min',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn about colors, mixing, and create beautiful digital artwork.',
      skills: ['Color Theory', 'Creativity', 'Digital Art']
    }
  ];

  const categories = ['all', 'Mathematics', 'History', 'Science', 'Language Arts', 'Geography', 'Arts'];

  const filteredGames = activeCategory === 'all' 
    ? games 
    : games.filter(game => game.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-600';
      case 'Medium': return 'bg-yellow-100 text-yellow-600';
      case 'Hard': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-100 to-teal-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Educational Games</h1>
              <p className="text-gray-600 text-lg">Learn while having fun with interactive educational games</p>
            </div>
            
            {/* Loomy Character */}
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-teal-300 rounded-full flex items-center justify-center relative">
                <div className="relative z-10 flex flex-col items-center">
                  {/* Wizard Hat */}
                  <div className="relative mb-1">
                    <div className="w-6 h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-t-full transform -rotate-12 relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Face */}
                  <div className="w-10 h-10 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center relative mb-2">
                    <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 border border-black rounded-b-full border-t-0"></div>
                  </div>

                  {/* Game Controller */}
                  <div className="w-6 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-sm"></div>
                    <div className="absolute top-1 left-1 w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <Gamepad2 className="text-gray-500" size={20} />
            <span className="text-gray-700 font-medium">Game Categories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Games' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              {/* Game Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {game.category}
                </div>
                <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </div>
              </div>

              {/* Game Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Users className="text-gray-400" size={16} />
                    <span className="text-sm text-gray-500">{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{game.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{game.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>

                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="text-gray-400" size={16} />
                  <span className="text-sm text-gray-600">{game.duration}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Play Button */}
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Play size={16} />
                  <span>Play Game</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="text-yellow-500" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Your Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">12</div>
              <div className="text-sm text-gray-600">Games Completed</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Badges Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;