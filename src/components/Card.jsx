import TopLeftBorder from './TopLeftBorder';
import BottomRightBorder from './BottomRightBorder';
import ProjectList from './ProjectList';
import { motion } from 'framer-motion';

const Card = ({ children, cardClass = '' }) => {
  return (
    <div className='card-wrapper'>
      <TopLeftBorder />
      <div className={`card ${cardClass}`}>
        <header>
          <h1>Logo</h1>
          <h2>Icons</h2>
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
        <footer>Footer</footer>
      </div>
      <BottomRightBorder />
    </div>
  );
};

export default Card;
