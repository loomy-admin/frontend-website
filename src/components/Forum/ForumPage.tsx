import React, { useState } from 'react';
import { Search, MessageCircle, Heart, Share2, MoreHorizontal } from 'lucide-react';

const ForumPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('qa');

  const forumPosts = [
    {
      id: 1,
      author: 'Student A',
      time: '2 hours ago',
      title: 'What does biology of cellular respiration contain?',
      content: 'I need help understanding cellular respiration and its components. Can someone explain the main processes involved?',
      likes: 12,
      replies: 5,
      category: 'Biology'
    },
    {
      id: 2,
      author: 'Student B',
      time: '4 hours ago',
      title: 'How to solve quadratic equations?',
      content: 'I am struggling with quadratic equations. What are the different methods to solve them?',
      likes: 8,
      replies: 3,
      category: 'Mathematics'
    },
    {
      id: 3,
      author: 'Student C',
      time: '1 day ago',
      title: 'Best practices for essay writing',
      content: 'Looking for tips on how to write compelling essays. Any suggestions for structure and style?',
      likes: 15,
      replies: 7,
      category: 'English'
    },
    {
      id: 4,
      author: 'Student D',
      time: '2 days ago',
      title: 'Understanding photosynthesis process',
      content: 'Can someone break down the photosynthesis process step by step? I find it confusing.',
      likes: 6,
      replies: 4,
      category: 'Biology'
    },
    {
      id: 5,
      author: 'Student E',
      time: '3 days ago',
      title: 'Chemistry bonding concepts',
      content: 'Need help with ionic and covalent bonding. What are the key differences?',
      likes: 9,
      replies: 2,
      category: 'Chemistry'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to the forum</h1>
              <p className="text-gray-600 text-lg">Connect and share your problems together!</p>
            </div>
            
            {/* Loomy Character */}
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center relative">
                {/* Loomy Character */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Wizard Hat */}
                  <div className="relative mb-1">
                    <div className="w-6 h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-t-full transform -rotate-12 relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* Face */}
                  <div className="w-10 h-10 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center relative mb-2">
                    {/* Eyes */}
                    <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full"></div>
                    {/* Mouth */}
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

      {/* Search and Navigation */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg max-w-md">
            <button
              onClick={() => setActiveTab('qa')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'qa'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Q&A
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'community'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Community Feed
            </button>
          </div>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {forumPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {post.author.charAt(post.author.length - 1)}
                  </span>
                </div>

                {/* Post Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-900">{post.author}</span>
                    <span className="text-gray-500 text-sm">{post.time}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.content}</p>

                  {/* Post Actions */}
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart size={16} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle size={16} />
                      <span className="text-sm">{post.replies}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Share2 size={16} />
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;