import { useState, createContext } from 'react';

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState('home');
  const [projectDetails, setProjectDetails] = useState(null);

  const selectProject = (details) => {
    setProjectDetails(details);
    setCard(details.name);
  };

  return (
    <CardContext.Provider value={{ card, projectDetails, selectProject }}>
      {children}
    </CardContext.Provider>
  );
};
