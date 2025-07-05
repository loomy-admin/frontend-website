import { useState } from 'react';

export const useNavigation = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return {
    currentSection,
    setCurrentSection,
  };
};