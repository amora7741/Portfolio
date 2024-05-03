import './style.scss';
import WelcomeCard from './components/WelcomeCard';
import { useState } from 'react';

function App() {
  const [card, setCard] = useState('home');

  return <main>{card === 'home' && <WelcomeCard />}</main>;
}

export default App;
