import React from 'react';
import { Search, Lightbulb, TrendingUp, Book } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Go from questioning
                  <br />
                  <span className="text-blue-600">to understanding</span>
                </h1>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="What is your question?"
                    className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none text-lg"
                  />
                  <button className="bg-black text-white p-4 hover:bg-gray-800 transition-colors">
                    <Search size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Loomy Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background Circle */}
                <div className="w-80 h-80 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center relative">
                  {/* Decorative Dots */}
                  <div className="absolute inset-0">
                    <div className="absolute top-16 right-12 w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute top-24 right-8 w-1 h-1 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-20 right-16 w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute bottom-24 right-20 w-1 h-1 bg-green-500 rounded-full"></div>
                    <div className="absolute top-20 left-12 w-1 h-1 bg-green-400 rounded-full"></div>
                    <div className="absolute bottom-16 left-8 w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Loomy Character */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Wizard Hat */}
                    <div className="relative mb-2">
                      <div className="w-16 h-20 bg-gradient-to-b from-green-400 to-green-500 rounded-t-full transform -rotate-12 relative">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-sm rotate-45"></div>
                      </div>
                    </div>

                    {/* Face */}
                    <div className="w-24 h-24 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center relative mb-4">
                      {/* Eyes */}
                      <div className="absolute top-8 left-6 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-8 right-6 w-2 h-2 bg-black rounded-full"></div>
                      {/* Mouth */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-black rounded-b-full border-t-0"></div>
                    </div>

                    {/* Book */}
                    <div className="w-16 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm relative shadow-md">
                      <div className="absolute inset-1 bg-gradient-to-r from-amber-100 to-amber-200 rounded-sm"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-amber-800"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-1 w-6 h-0.5 bg-amber-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Solve any problem</h3>
              <p className="text-gray-600 text-sm">within a click</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get step-by-step</h3>
              <p className="text-gray-600 text-sm">solutions</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Book className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Instant solution</h3>
              <p className="text-gray-600 text-sm">for all the subjects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;