import Card from './Card';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const ProjectCard = () => {
  const { projectDetails } = useContext(CardContext);

  return (
    <Card>
      <h1>{projectDetails.name}</h1>
      <p>{projectDetails.description}</p>
      <a href={projectDetails.repoLink}>Github</a>
      <a href={projectDetails.liveLink}>View Site</a>
    </Card>
  );
};

export default ProjectCard;
