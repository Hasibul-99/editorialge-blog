import React, { useState, useEffect } from 'react';
import { IoLanguageOutline } from 'react-icons/io5';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
  ];

  useEffect(() => {
    // Get current language from URL path
    const path = window.location.pathname;
    if (path.startsWith('/bn')) {
      setCurrentLang('bn');
    } else {
      setCurrentLang('en');
    }
  }, []);

  const handleLanguageChange = (langCode) => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    let newPath;

    if (langCode === 'bn') {
      // Switch to Bengali
      if (currentPath.startsWith('/bn')) {
        newPath = currentPath; // Already in Bengali
      } else {
        newPath = '/bn' + currentPath;
      }
    } else {
      // Switch to English
      if (currentPath.startsWith('/bn')) {
        newPath = currentPath.replace('/bn', '') || '/';
      } else {
        newPath = currentPath; // Already in English
      }
    }

    // Navigate to new path
    window.location.href = newPath + currentSearch;
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  };

  return (
    <div className="language-switcher relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
        aria-label="Choose language"
      >
        <IoLanguageOutline className="w-4 h-4" />
        <span className="hidden sm:inline">{getCurrentLanguage().name}</span>
        <span className="sm:hidden">{getCurrentLanguage().flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  handleLanguageChange(language.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3 ${
                  currentLang === language.code
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLang === language.code && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;