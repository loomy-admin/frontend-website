import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      await login(provider);
      navigate('/onboarding');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-blue-900 to-slate-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">
            LOOMY <span className="text-blue-300">AI</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium">Your Homework Buddy</p>
        </div>

        {/* Loomy Character */}
        <div className="flex justify-center mb-12">
          <div className="w-48 h-48 relative">
            {/* Character Body */}
            <div className="w-40 h-40 mx-auto bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full relative">
              {/* Wizard Hat */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-16 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-full relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-yellow-400 rounded-sm"></div>
                </div>
                <div className="w-24 h-4 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full -mt-1"></div>
              </div>
              
              {/* Eyes */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              
              {/* Smile */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-black rounded-full"></div>
              
              {/* Book */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm">
                <div className="w-full h-1 bg-amber-700 mt-1"></div>
                <div className="w-full h-1 bg-amber-700 mt-1"></div>
                <div className="w-full h-1 bg-amber-700 mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => handleSocialLogin('google')}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50"
          >
            <div className="w-8 h-8 mr-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="text-lg font-medium">Continue with Google</span>
          </button>

          <button
            onClick={() => handleSocialLogin('apple')}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50"
          >
            <div className="w-8 h-8 mr-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <span className="text-lg font-medium">Continue with Apple</span>
          </button>

          <button
            onClick={() => handleSocialLogin('email')}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50"
          >
            <div className="w-8 h-8 mr-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="text-lg font-medium">Continue with Mail</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;