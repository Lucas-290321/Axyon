import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [contactSubmissions, setContactSubmissions] = useState([]);

  const addContactSubmission = (submission) => {
    setContactSubmissions(prev => [...prev, submission]);
  };

  return (
    <AuthContext.Provider value={{ contactSubmissions, addContactSubmission }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
