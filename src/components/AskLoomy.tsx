import React, { useState } from 'react';
import { Send, Edit, History, FileText, Upload, Settings, Image, Calculator } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AskLoomy: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Loomy, your AI learning assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'd be happy to help you with that! Let me think through this step by step...",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900 text-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <h2 className="text-xl font-bold">Loomy</h2>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Edit className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-4 border-b border-slate-700">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-slate-300 hover:text-white">
              <div className="w-4 h-4 bg-slate-600 rounded"></div>
              Features
            </button>
            <button className="flex items-center gap-2 text-slate-300 hover:text-white">
              <History className="w-4 h-4" />
              History
            </button>
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 p-6">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-800 text-left">
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-sm">💬</span>
              </div>
              <span className="font-medium">Chat with AI</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left">
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-sm">🧮</span>
              </div>
              <span className="font-medium">AI Math Solver</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left">
              <Upload className="w-4 h-4" />
              <span className="font-medium">Upload & Solve</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left">
              <FileText className="w-4 h-4" />
              <span className="font-medium">PDF Homework Help</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left">
              <span className="text-sm">✨</span>
              <span className="font-medium">AI Tools</span>
              <span className="ml-auto text-slate-400">→</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <button className="flex items-center gap-2 text-slate-300 hover:text-white">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Chat Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 p-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              {/* Owl mascot */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 relative">
                <div className="w-8 h-6 bg-white rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* Ears */}
                <div className="absolute -top-2 left-2 w-3 h-4 bg-blue-600 rounded-t-full transform -rotate-12"></div>
                <div className="absolute -top-2 right-2 w-3 h-4 bg-blue-600 rounded-t-full transform rotate-12"></div>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">How can I help you today?</h1>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <p>{message.text}</p>
                <div className={`text-xs mt-2 ${message.isUser ? 'text-blue-100' : 'text-slate-500'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm">
              <Image className="w-4 h-4" />
              Add Image
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm">
              <Calculator className="w-4 h-4" />
              Calculator
            </button>
          </div>
          
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type or control + V to paste your question here..."
              className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white"
              rows={3}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="absolute right-2 bottom-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-xs text-slate-500 mt-2 text-right">
            {inputValue.length} / 500
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskLoomy;