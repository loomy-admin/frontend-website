import React, { useState } from 'react';
import { MessageCircle, Calculator, Upload, Send, BarChart3, FileText, Sparkles, Settings, History } from 'lucide-react';

const AskLoomyPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm Loomy, your AI learning assistant. How can I help you today?",
      time: '00:56:36'
    }
  ]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setMessage(value);
      setCharCount(value.length);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
      setCharCount(0);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-gray-900 text-white flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">L</span>
            </div>
            <span className="font-semibold">Loomy</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors">
            <MessageCircle size={16} />
            <span>New Chat</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex space-x-4 mb-4">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <Sparkles size={16} />
              <span className="text-sm">Features</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <History size={16} />
              <span className="text-sm">History</span>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 p-4 space-y-2">
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-800 text-white">
              <MessageCircle size={20} />
              <span>Chat with AI</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <BarChart3 size={20} />
              <span>AI Math Solver</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <Upload size={20} />
              <span>Upload & Solve</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <FileText size={20} />
              <span>PDF Homework Help</span>
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="p-4 border-t border-gray-700">
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">How can I help you today?</h1>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md p-4 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  <p>{msg.message}</p>
                  <span className={`text-xs mt-2 block ${
                    msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-white border-t border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Upload size={16} />
              <span>Add Image</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calculator size={16} />
              <span>Calculator</span>
            </button>
          </div>
          
          <div className="relative">
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Type or control + V to paste your question here..."
              className="w-full border border-gray-300 rounded-lg p-4 pr-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <span className="text-sm text-gray-500">{charCount} / 500</span>
              <button 
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskLoomyPage;