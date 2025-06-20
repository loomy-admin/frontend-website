import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage';
import Dashboard from './components/Dashboard';
import AskLoomy from './components/AskLoomy';
import LoadingScreen from './components/LoadingScreen';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={
        isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
      } />
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      <Route path="/onboarding" element={
        <ProtectedRoute>
          {user && (!user.curriculum || user.interests.length === 0) ? (
            <OnboardingPage />
          ) : (
            <Navigate to="/dashboard" />
          )}
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          {user && user.curriculum && user.interests.length > 0 ? (
            <Dashboard />
          ) : (
            <Navigate to="/onboarding" />
          )}
        </ProtectedRoute>
      } />
      <Route path="/ask-loomy" element={
        <ProtectedRoute>
          <AskLoomy />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;