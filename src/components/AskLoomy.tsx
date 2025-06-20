import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Camera, 
  Image, 
  Send, 
  Brain,
  User,
  Bot,
  Volume2,
  VolumeX,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  hasAudio?: boolean;
  hasImage?: boolean;
  imageUrl?: string;
}

const AskLoomy: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm Loomy, your AI learning assistant. I can help you with any subject through text, voice, or images. What would you like to learn today?",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsRecording(false);
      };

      recognitionRef.current.onerror = () => {
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const startRecording = () => {
    if (recognitionRef.current) {
      setIsRecording(true);
      recognitionRef.current.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        sendMessage('I uploaded an image for you to analyze.', true, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async (text: string, hasImage = false, imageUrl?: string) => {
    if (!text.trim() && !hasImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date(),
      hasImage,
      imageUrl,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! Let me break this down for you step by step...",
        "I can help you understand this concept better. Here's what you need to know:",
        "That's an interesting problem! Let's work through it together:",
        "I see what you're asking about. This is a fundamental concept in this subject:",
        "Perfect! This is a great opportunity to learn something new. Let me explain:",
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)] + 
                "\n\nThis is a simulated response. In a real implementation, this would connect to an AI service to provide detailed, subject-specific help based on your curriculum and learning level.",
        timestamp: new Date(),
        hasAudio: true,
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-blue-900 to-slate-700 flex flex-col">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm shadow-sm border-b border-white/20 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-white">Ask Loomy</h1>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-300">AI Assistant</span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                    : 'bg-gradient-to-r from-green-500 to-teal-500'
                }`}>
                  {message.type === 'user' ? 
                    <User className="w-4 h-4 text-white" /> : 
                    <Bot className="w-4 h-4 text-white" />
                  }
                </div>

                {/* Message Content */}
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
                }`}>
                  {message.hasImage && message.imageUrl && (
                    <img 
                      src={message.imageUrl} 
                      alt="Uploaded content" 
                      className="max-w-sm rounded-lg mb-2"
                    />
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  
                  {/* Message Actions */}
                  {message.type === 'assistant' && (
                    <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-white/20">
                      <button
                        onClick={() => isSpeaking ? stopSpeaking() : speakText(message.content)}
                        className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors"
                        title={isSpeaking ? "Stop speaking" : "Read aloud"}
                      >
                        {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => copyToClipboard(message.content)}
                        className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors"
                        title="Copy message"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors"
                        title="Good response"
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white transition-colors"
                        title="Poor response"
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-3xl">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            {/* Voice Recording Button */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-3 rounded-full transition-all duration-200 ${
                isRecording 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              title={isRecording ? "Stop recording" : "Start voice input"}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Image Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white rounded-full transition-colors"
              title="Upload image"
            >
              <Camera className="w-5 h-5" />
            </button>

            {/* Text Input */}
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isRecording ? "Listening..." : "Ask Loomy anything..."}
                className="w-full resize-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent max-h-32 text-white placeholder-gray-400"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(inputText);
                  }
                }}
                disabled={isRecording}
              />
            </div>

            {/* Send Button */}
            <button
              onClick={() => sendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
              className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              title="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Recording Indicator */}
          {isRecording && (
            <div className="flex items-center justify-center mt-3 text-red-400">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm">Recording... Speak now</span>
            </div>
          )}

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AskLoomy;