import TopLeftBorder from './TopLeftBorder';
import BottomRightBorder from './BottomRightBorder';
import ProjectList from './ProjectList';

const Card = ({ children }) => {
  return (
    <div className='card-wrapper'>
      <TopLeftBorder />
      <div className='card'>
        <header>
          <h1>Logo</h1>
          <h2>Icons</h2>
        </header>
        <div className='card-main'>
          <div className='card-main-left'>{children}</div>
          <div className='card-main-right'>
            <ProjectList />
          </div>
        </div>
        <footer>Footer</footer>
      </div>
      <BottomRightBorder />
    </div>
  );
};

export default Card;
