import React from 'react';
import { Brain } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-blue-900 to-slate-700 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-blue-400 rounded-full animate-spin border-t-transparent mx-auto"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to Loomy</h2>
        <p className="text-blue-200">Loading your learning experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;