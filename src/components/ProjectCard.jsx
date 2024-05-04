import Card from './Card';

const ProjectCard = ({ projectDetails }) => {
  return (
    <Card>
      <h1>{projectDetails.name}</h1>
      <p>{projectDetails.description}</p>
      <div className='project-links'>
        <a rel='noopener' target='_blank' href={projectDetails.repoLink}>
          Github
        </a>
        <a rel='noopener' target='_blank' href={projectDetails.liveLink}>
          View Site
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
