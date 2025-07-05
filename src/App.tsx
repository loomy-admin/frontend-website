<<<<<<< HEAD
import React from 'react';
import Header from './components/Layout/Header';
import HomePage from './components/Home/HomePage';
import AskLoomyPage from './components/AskLoomy/AskLoomyPage';
import StoriesPage from './components/Stories/StoriesPage';
import GamesPage from './components/Games/GamesPage';
import ForumPage from './components/Forum/ForumPage';
import ProfilePage from './components/Profile/ProfilePage';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const { currentSection, setCurrentSection } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentSection) {
      case 'home':
        return <HomePage />;
      case 'ask-loomy':
        return <AskLoomyPage />;
      case 'stories':
        return <StoriesPage />;
      case 'games':
        return <GamesPage />;
      case 'forum':
        return <ForumPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
=======
import React, { useState } from 'react';
import { Home, MessageCircle, BookOpen, Users, Gamepad2, Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import AskLoomy from './components/AskLoomy';
import Stories from './components/Stories';
import Forum from './components/Forum';
import Games from './components/Games';

type Page = 'home' | 'ask-loomy' | 'stories' | 'forum' | 'games';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ask-loomy', label: 'Ask Loomy', icon: MessageCircle },
    { id: 'stories', label: 'Stories', icon: BookOpen },
    { id: 'forum', label: 'Forum', icon: Users },
    { id: 'games', label: 'Games', icon: Gamepad2 },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'ask-loomy':
        return <AskLoomy />;
      case 'stories':
        return <Stories />;
      case 'forum':
        return <Forum />;
      case 'games':
        return <Games />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
>>>>>>> cd864cb002f2180965523574f37fd07757c9d7b8
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderCurrentPage()}
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                LOOMY
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as Page)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-indigo-100 text-indigo-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-indigo-100 text-indigo-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {renderPage()}
>>>>>>> cd864cb002f2180965523574f37fd07757c9d7b8
      </main>
    </div>
  );
}

export default App;