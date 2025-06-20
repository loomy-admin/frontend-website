import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ChevronRight, User, Calendar, BookOpen, Heart } from 'lucide-react';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    curriculum: '',
    interests: [] as string[],
  });

  const curriculums = [
    'CBSE (Central Board of Secondary Education)',
    'IGCSE (International General Certificate of Secondary Education)',
    'IB (International Baccalaureate)',
    'SSC (Secondary School Certificate)',
    'Government Boards',
  ];

  const subjectsByCurriculum: Record<string, string[]> = {
    'CBSE (Central Board of Secondary Education)': [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Social Science', 'Computer Science', 'Economics', 'Accountancy'
    ],
    'IGCSE (International General Certificate of Secondary Education)': [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Literature', 'Geography', 'History', 'Computer Science', 'Economics'
    ],
    'IB (International Baccalaureate)': [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Economics', 'Psychology', 'Computer Science'
    ],
    'SSC (Secondary School Certificate)': [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Marathi', 'Hindi', 'History', 'Geography', 'Economics'
    ],
    'Government Boards': [
      'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Regional Language', 'Social Studies', 'Computer Science'
    ],
  };

  const steps = [
    {
      title: 'Tell us about yourself',
      icon: <User className="w-6 h-6" />,
    },
    {
      title: 'Your age',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: 'Choose your curriculum',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Select your interests',
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      updateUser({
        name: formData.name,
        age: parseInt(formData.age),
        curriculum: formData.curriculum,
        interests: formData.interests,
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim().length > 0;
      case 1:
        return formData.age && parseInt(formData.age) > 0;
      case 2:
        return formData.curriculum !== '';
      case 3:
        return formData.interests.length > 0;
      default:
        return false;
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                What's your name?
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                How old are you?
              </label>
              <input
                id="age"
                type="number"
                min="1"
                max="100"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg text-white placeholder-gray-400"
                placeholder="Enter your age"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-300 mb-4">Choose your curriculum:</p>
            {curriculums.map((curriculum) => (
              <button
                key={curriculum}
                onClick={() => setFormData(prev => ({ ...prev, curriculum }))}
                className={`w-full p-4 text-left border-2 rounded-lg transition-colors duration-200 ${
                  formData.curriculum === curriculum
                    ? 'border-blue-400 bg-blue-400/20 text-blue-300'
                    : 'border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/20'
                }`}
              >
                <span className="font-medium">{curriculum.split(' (')[0]}</span>
                <span className="text-sm text-gray-400 block">
                  {curriculum.includes('(') ? `(${curriculum.split('(')[1]}` : ''}
                </span>
              </button>
            ))}
          </div>
        );

      case 3:
        const availableSubjects = subjectsByCurriculum[formData.curriculum] || [];
        return (
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-300 mb-4">
              Select the subjects you're interested in:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {availableSubjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => toggleInterest(subject)}
                  className={`p-3 text-sm border-2 rounded-lg transition-colors duration-200 ${
                    formData.interests.includes(subject)
                      ? 'border-blue-400 bg-blue-400/20 text-blue-300'
                      : 'border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/20'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Selected: {formData.interests.length} subjects
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-blue-900 to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    index <= currentStep
                      ? 'border-blue-400 bg-blue-400 text-white'
                      : 'border-white/30 text-gray-400'
                  }`}
                >
                  {step.icon}
                </div>
              ))}
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-300 mb-6">
              Step {currentStep + 1} of {steps.length}
            </p>
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-6 py-3 text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;