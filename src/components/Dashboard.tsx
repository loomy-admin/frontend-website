import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  BookOpen, 
  Trophy, 
  Users, 
  Search, 
  Bell, 
  Settings, 
  LogOut,
  Brain,
  Target,
  Clock,
  Star,
  TrendingUp,
  Camera,
  Mic,
  FileText,
  Calculator,
  Atom,
  FlaskConical,
  Globe,
  PenTool,
  ChevronRight,
  Award,
  Zap,
  BookOpenCheck
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const quickActions = [
    {
      title: 'Ask Loomy AI',
      description: 'Get instant help with speech & image recognition',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      action: () => navigate('/ask-loomy'),
    },
    {
      title: 'Study Materials',
      description: 'Access curated learning resources',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Practice Tests',
      description: 'Test your knowledge with AI-generated quizzes',
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Study Groups',
      description: 'Connect with fellow learners',
      icon: <Users className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const subjectIcons: Record<string, React.ReactNode> = {
    'Mathematics': <Calculator className="w-5 h-5" />,
    'Physics': <Atom className="w-5 h-5" />,
    'Chemistry': <FlaskConical className="w-5 h-5" />,
    'Biology': <Star className="w-5 h-5" />,
    'English': <PenTool className="w-5 h-5" />,
    'Geography': <Globe className="w-5 h-5" />,
    'History': <BookOpen className="w-5 h-5" />,
  };

  const recentQuestions = [
    {
      subject: 'Mathematics',
      question: 'How to solve quadratic equations using the discriminant method?',
      askedBy: 'Student',
      time: '2 hours ago',
      answers: 12,
      upvotes: 24
    },
    {
      subject: 'Physics',
      question: 'What is the relationship between force, mass, and acceleration?',
      askedBy: 'Learner',
      time: '4 hours ago',
      answers: 8,
      upvotes: 15
    },
    {
      subject: 'Chemistry',
      question: 'Explain the process of photosynthesis in detail',
      askedBy: 'Student',
      time: '6 hours ago',
      answers: 6,
      upvotes: 18
    },
  ];

  const achievements = [
    { title: 'Quick Learner', description: 'Completed 5 topics this week', icon: '🚀', color: 'bg-blue-100/20 text-blue-300' },
    { title: 'Problem Solver', description: 'Solved 50 practice problems', icon: '🧩', color: 'bg-green-100/20 text-green-300' },
    { title: 'Consistent', description: '7-day learning streak', icon: '🔥', color: 'bg-orange-100/20 text-orange-300' },
  ];

  const studyStats = [
    { label: 'Questions Asked', value: '47', icon: <MessageSquare className="w-5 h-5" />, color: 'text-blue-400' },
    { label: 'Topics Mastered', value: '23', icon: <BookOpenCheck className="w-5 h-5" />, color: 'text-green-400' },
    { label: 'Study Streak', value: '7 days', icon: <Zap className="w-5 h-5" />, color: 'text-orange-400' },
    { label: 'Points Earned', value: '1,247', icon: <Award className="w-5 h-5" />, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-blue-900 to-slate-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Loomy</h1>
                <p className="text-xs text-gray-300">AI Learning Platform</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask any question or search for topics..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 hover:bg-white/20 transition-colors"
                />
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3 pl-3 border-l border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs text-gray-300">{user?.curriculum}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-300 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-gray-300">Ready to continue your learning journey?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-white/20 group hover:scale-105 hover:bg-white/20"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {action.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{action.title}</h3>
              <p className="text-sm text-gray-300">{action.description}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Study Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-6">Your Progress</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {studyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Questions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Questions</h3>
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center">
                  View all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {recentQuestions.map((question, index) => (
                  <div key={index} className="border border-white/20 rounded-xl p-4 hover:shadow-sm transition-shadow hover:bg-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                          {subjectIcons[question.subject] || <BookOpen className="w-4 h-4 text-blue-400" />}
                        </div>
                        <span className="text-xs font-medium text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                          {question.subject}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">{question.time}</span>
                    </div>
                    <h4 className="font-medium text-white mb-2 line-clamp-2">
                      {question.question}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>by {question.askedBy}</span>
                      <div className="flex items-center space-x-4">
                        <span>{question.answers} answers</span>
                        <span>{question.upvotes} upvotes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Subjects */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Your Subjects</h3>
              <div className="space-y-3">
                {user?.interests?.slice(0, 6).map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                        {subjectIcons[subject] || <BookOpen className="w-4 h-4 text-blue-400" />}
                      </div>
                      <span className="font-medium text-white">{subject}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/10 rounded-xl">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-medium text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Tip */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-3">
                <Brain className="w-6 h-6 mr-2" />
                <h3 className="font-semibold">Daily Study Tip</h3>
              </div>
              <p className="text-sm opacity-90">
                Try the Feynman Technique: Explain concepts in simple terms as if teaching someone else. This helps identify knowledge gaps!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;