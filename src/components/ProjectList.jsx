import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const ProjectList = () => {
  const { setCard } = useContext(CardContext);

  return (
    <div className='project-list-wrapper'>
      <h2>Projects</h2>
      <ul className='project-list'>
        <li>
          <button>X Clone</button>
        </li>
        <li>
          <button>PhotoTagging/Where's Waldo?</button>
        </li>
        <li>
          <button>Shopping App</button>
        </li>
        <li>
          <button>Memory Game</button>
        </li>
        <li>
          <button>Coming Soon</button>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
