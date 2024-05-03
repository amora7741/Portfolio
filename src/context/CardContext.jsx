import { useState, createContext } from 'react';

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState('home');

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};
