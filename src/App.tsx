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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;