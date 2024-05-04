import TopLeftBorder from './TopLeftBorder';
import BottomRightBorder from './BottomRightBorder';
import ProjectList from './ProjectList';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const Card = ({ children, cardClass = '' }) => {
  const { setCard } = useContext(CardContext);

  return (
    <div className='card-wrapper'>
      <TopLeftBorder />
      <div className={`card ${cardClass}`}>
        <header>
          <button className='home-button' onClick={() => setCard('home')}>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <SocialIcons />
        </header>
        <motion.div
          className='card-main'
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='card-main-left'>{children}</div>
          <div className='card-main-right'>
            <ProjectList />
          </div>
        </motion.div>
        <footer>© amora7741</footer>
      </div>
      <BottomRightBorder />
    </div>
  );
};

export default Card;
