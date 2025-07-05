import React, { useState } from 'react';
import { Search, Plus, ArrowLeft, ThumbsUp, MessageCircle, Eye } from 'lucide-react';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  timeAgo: string;
  subject: string;
  answers: number;
  likes: number;
  views: number;
  isAnswered: boolean;
}

const Forum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Q&A' | 'Community Feed'>('Q&A');
  const [searchQuery, setSearchQuery] = useState('');

  const posts: ForumPost[] = [
    {
      id: '1',
      title: 'What does inertia of motion mean?',
      content: 'I need help understanding this physics concept',
      author: 'Student No 1',
      timeAgo: '10 hrs',
      subject: 'Grade XII - 10 yrs',
      answers: 7,
      likes: 23,
      views: 156,
      isAnswered: true,
    },
    {
      id: '2',
      title: 'What does inertia of motion mean?',
      content: 'I need help understanding this physics concept',
      author: 'Student No 1',
      timeAgo: '10 hrs',
      subject: 'Grade XII - 10 yrs',
      answers: 7,
      likes: 23,
      views: 156,
      isAnswered: false,
    },
    {
      id: '3',
      title: 'What does inertia of motion mean?',
      content: 'I need help understanding this physics concept',
      author: 'Student No 1',
      timeAgo: '10 hrs',
      subject: 'Grade XII - 10 yrs',
      answers: 7,
      likes: 23,
      views: 156,
      isAnswered: true,
    },
    {
      id: '4',
      title: 'What does inertia of motion mean?',
      content: 'I need help understanding this physics concept',
      author: 'Student No 1',
      timeAgo: '10 hrs',
      subject: 'Grade XII - 10 yrs',
      answers: 7,
      likes: 23,
      views: 156,
      isAnswered: false,
    },
    {
      id: '5',
      title: 'What does inertia of motion mean?',
      content: 'I need help understanding this physics concept',
      author: 'Student No 1',
      timeAgo: '10 hrs',
      subject: 'Grade XII - 10 yrs',
      answers: 7,
      likes: 23,
      views: 156,
      isAnswered: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      {/* Header */}
      <div className="bg-transparent p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          {/* Mascot and Title */}
          <div className="text-center mb-8">
            {/* Wizard mascot */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Hat */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-14 bg-gradient-to-b from-teal-400 to-teal-500 rounded-t-full" 
                     style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)'}}></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-sm rotate-45"></div>
                
                {/* Head */}
                <div className="w-16 h-16 bg-yellow-300 rounded-full relative">
                  {/* Eyes */}
                  <div className="absolute top-5 left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute top-5 right-3 w-1.5 h-1.5 bg-black rounded-full"></div>
                  {/* Smile */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
                </div>
                
                {/* Book */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-amber-800 rounded-sm">
                  <div className="w-full h-0.5 bg-amber-900 mt-1.5"></div>
                  <div className="w-full h-0.5 bg-amber-900 mt-1"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the forum</h1>
            <p className="text-gray-600">Connect with your peers and solve your problems together!</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-12 pr-12 py-3 bg-white rounded-full border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-full p-1 mb-6 shadow-sm">
            <div className="flex">
              <button
                onClick={() => setActiveTab('Q&A')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'Q&A'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Q&A
              </button>
              <button
                onClick={() => setActiveTab('Community Feed')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'Community Feed'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Community Feed
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={post.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium text-sm">S</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">{post.author}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.subject}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.timeAgo}</span>
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-900 mb-2">{post.title}</h3>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.answers} Answer{post.answers !== 1 ? 's' : ''}</span>
                      </div>
                      {post.isAnswered && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          Answer
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex-shrink-0">
                    <button className="text-gray-400 hover:text-gray-600 text-xs">
                      CORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;