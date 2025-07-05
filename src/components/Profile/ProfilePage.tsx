import React, { useState } from 'react';
import { User, Mail, Calendar, Trophy, BookOpen, Gamepad2, MessageCircle, Settings, Edit3, Camera } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    storiesRead: 24,
    gamesPlayed: 18,
    forumPosts: 12,
    achievementsBadges: 8,
    totalPoints: 1250,
    currentStreak: 7
  };

  const recentActivity = [
    {
      type: 'story',
      title: 'Completed "The Magic of Mathematics"',
      time: '2 hours ago',
      points: 50
    },
    {
      type: 'game',
      title: 'Played "Math Quest Adventure"',
      time: '1 day ago',
      points: 75
    },
    {
      type: 'forum',
      title: 'Posted in Biology Discussion',
      time: '2 days ago',
      points: 25
    },
    {
      type: 'achievement',
      title: 'Earned "Math Master" badge',
      time: '3 days ago',
      points: 100
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Math Master',
      description: 'Complete 10 math games',
      icon: '🧮',
      earned: true,
      progress: 100
    },
    {
      id: 2,
      title: 'Story Explorer',
      description: 'Read 20 educational stories',
      icon: '📚',
      earned: true,
      progress: 100
    },
    {
      id: 3,
      title: 'Community Helper',
      description: 'Help 5 students in forum',
      icon: '🤝',
      earned: false,
      progress: 60
    },
    {
      id: 4,
      title: 'Science Enthusiast',
      description: 'Complete all science games',
      icon: '🔬',
      earned: false,
      progress: 30
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={40} />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Camera size={16} className="text-gray-600" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Alex Johnson</h1>
                <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Edit3 size={20} />
                </button>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Joined March 2024</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                  Level 5 Learner
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-indigo-600">{userStats.totalPoints}</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-600">{userStats.currentStreak}</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'activity', label: 'Activity', icon: BookOpen },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="text-blue-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Stories Read</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{userStats.storiesRead}</div>
                <p className="text-gray-600 text-sm">Keep reading to unlock new achievements!</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Gamepad2 className="text-green-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Games Played</h3>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{userStats.gamesPlayed}</div>
                <p className="text-gray-600 text-sm">Try new games to improve your skills!</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="text-purple-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Forum Posts</h3>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{userStats.forumPosts}</div>
                <p className="text-gray-600 text-sm">Share knowledge with the community!</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="text-yellow-500" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Badges Earned</h3>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{userStats.achievementsBadges}</div>
                <p className="text-gray-600 text-sm">Collect more badges by completing challenges!</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                      activity.type === 'story' ? 'bg-blue-500' :
                      activity.type === 'game' ? 'bg-green-500' :
                      activity.type === 'forum' ? 'bg-purple-500' : 'bg-yellow-500'
                    }`}>
                      {activity.type === 'story' ? '📖' :
                       activity.type === 'game' ? '🎮' :
                       activity.type === 'forum' ? '💬' : '🏆'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <p className="text-xs text-green-600">+{activity.points} points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${
                achievement.earned ? 'ring-2 ring-yellow-200' : ''
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`text-4xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      achievement.earned ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          achievement.earned ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{achievement.progress}% Complete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Johnson"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="alex.johnson@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Preferences</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Visual Learner</option>
                    <option>Auditory Learner</option>
                    <option>Kinesthetic Learner</option>
                  </select>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="notifications" className="rounded" />
                  <label htmlFor="notifications" className="text-sm text-gray-700">
                    Receive email notifications for new content
                  </label>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;