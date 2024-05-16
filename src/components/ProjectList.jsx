import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const ProjectList = () => {
  const { selectProject } = useContext(CardContext);

  const projects = [
    {
      name: 'X Clone',
      description:
        'X Clone is exactly what it sounds like, a clone of X/Twitter. This social media website clone contains all of the major functions of X, including creating a post, liking a post, commenting on a post, and following users. This project utilizes the MERN stack, as well as implemeting middlewares such as Passport.js for authentication.',
      repoLink: 'https://github.com/amora7741/XClone',
      liveLink: 'https://x-clone-mocha.vercel.app/',
    },
    {
      name: "Where's Waldo?",
      description:
        "Play the well-known puzzle game, Where's Waldo, where you are tasked with finding multiple characters in a very crowded scene. Built with React.js and Node.js, this app utilizes JSON webtokens to keep track of your completion time to place you on a leaderboard!",
      repoLink: 'https://github.com/amora7741/PhotoTagging-Frontend',
      liveLink: 'https://photo-tagging-frontend.vercel.app/',
    },
    {
      name: 'Breeze',
      description:
        'Go (fake) shopping on Breeze! This app utilizes the fake store API to fetch a bunch of different items as well as their information such as price, rating, and so on. Built with React.',
      repoLink: 'https://github.com/amora7741/ShoppingApp',
      liveLink: 'https://shopping-app-rose-gamma.vercel.app/',
    },
    {
      name: 'Memory Game',
      description:
        'Test your memory with this card memorization game! This app uses the PokeAPI to fetch a set of Pokemon along with their IDs. If you click the same card twice, you lose! Good luck!',
      repoLink: 'https://github.com/amora7741/MemoryGame',
      liveLink: 'https://memory-game-six-alpha.vercel.app/',
    },
    {
      name: 'Weather App',
      description:
        'This is a simple Weather App which uses WeatherAPI to fetch the location data which the user searches for. It displays the temperature, weather condition, and other useful information. Built with Next.js and Tailwind CSS.',
      repoLink: 'https://github.com/amora7741/NextWeatherApp',
      liveLink: 'https://next-weather-app-puce.vercel.app/',
    },
  ];

  return (
    <div className='project-list-wrapper'>
      <h2>Projects</h2>
      <ul className='project-list'>
        {projects.map((project, index) => (
          <li key={index}>
            <button onClick={() => selectProject(project)}>
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
