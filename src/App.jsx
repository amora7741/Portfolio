import './style.scss';
import WelcomeCard from './components/WelcomeCard';
import { useContext } from 'react';
import { CardContext } from './context/CardContext';
import ProjectCard from './components/ProjectCard';

function App() {
  const { card } = useContext(CardContext);

  return <main>{card === 'home' ? <WelcomeCard /> : <ProjectCard />}</main>;
}

export default App;
