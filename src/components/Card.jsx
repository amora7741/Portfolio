import TopLeftBorder from './TopLeftBorder';
import BottomRightBorder from './BottomRightBorder';
import ProjectList from './ProjectList';

const Card = ({ children }) => {
  return (
    <div className='card-wrapper'>
      <TopLeftBorder />
      <div className='card'>
        <header></header>
        <div className='card-main'>
          <div className='card-main-left'>
            <h1>Hello</h1>
          </div>
          <div className='card-main-right'>
            <ProjectList />
          </div>
        </div>
      </div>
      <BottomRightBorder />
    </div>
  );
};

export default Card;
