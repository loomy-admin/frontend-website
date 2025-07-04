import React, { useState } from 'react';
import { Search, Lightbulb, TrendingUp, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('ask-loomy');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      {/* Navigation Bar */}
      <nav className="bg-transparent px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-lg">
            LOOMY
          </div>
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <button className="hover:text-blue-600 transition-colors">Home</button>
            <button className="hover:text-blue-600 transition-colors">About</button>
            <button className="hover:text-blue-600 transition-colors">Features</button>
            <button className="hover:text-blue-600 transition-colors">Contact</button>
            <button className="hover:text-blue-600 transition-colors">Log in</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Go from questioning
                <br />
                to understanding
              </h1>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What is your question?"
                    className="w-full px-6 py-4 pr-16 rounded-full border-0 shadow-lg text-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Content - Wizard Mascot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background gradient circles */}
                <div className="absolute -top-8 -left-8 w-80 h-80 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-60"></div>
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full opacity-40"></div>
                
                {/* Main character container */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Wizard character */}
                  <div className="relative">
                    {/* Hat */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-teal-400 to-teal-500 rounded-t-full" 
                         style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'}}></div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-sm rotate-45"></div>
                    
                    {/* Head */}
                    <div className="w-20 h-20 bg-yellow-300 rounded-full relative">
                      {/* Eyes */}
                      <div className="absolute top-6 left-4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-6 right-4 w-2 h-2 bg-black rounded-full"></div>
                      {/* Smile */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-full"></div>
                    </div>
                    
                    {/* Book */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-amber-800 rounded-sm">
                      <div className="w-full h-1 bg-amber-900 mt-2"></div>
                      <div className="w-full h-1 bg-amber-900 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solve any problem</h3>
              <p className="text-gray-600">within a click</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get step-by-step</h3>
              <p className="text-gray-600">solutions</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Instant solution</h3>
              <p className="text-gray-600">for all the subjects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What would you like to explore?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('ask-loomy')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧙‍♂️</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Ask Loomy</h3>
                  <p className="text-gray-600">Get instant help with any question</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('stories')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Stories</h3>
                  <p className="text-gray-600">Learn through interactive stories</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('forum')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Forum</h3>
                  <p className="text-gray-600">Join discussions with other learners</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('games')}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">Games</h3>
                  <p className="text-gray-600">Learn while having fun</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;