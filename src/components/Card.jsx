import TopLeftBorder from './TopLeftBorder';
import BottomRightBorder from './BottomRightBorder';

const Card = () => {
  return (
    <div className='card-wrapper'>
      <TopLeftBorder />
      <div className='card'>
        <h1>Hello</h1>
      </div>
      <BottomRightBorder />
    </div>
  );
};

export default Card;
