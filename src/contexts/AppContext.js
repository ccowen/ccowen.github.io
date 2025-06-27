import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleContentExpanded = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <AppContext.Provider value={{
      isContentExpanded,
      setIsContentExpanded,
      toggleContentExpanded
    }}>
      {children}
    </AppContext.Provider>
  );
};