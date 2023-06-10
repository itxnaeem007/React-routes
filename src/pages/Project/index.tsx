import { Heading, ListView, ProjectContainer } from "./style";
import { ProjectList } from "./utils";

const Project = () => {
  return (
    <ProjectContainer>
      <Heading>Project Page</Heading>

      <ListView>
        {ProjectList.map((project, index) => (
          <div className="project-item" key={index}>
            {project.title} <br />
            {project.description}
          </div>
        ))}
      </ListView>
    </ProjectContainer>
  );
};

export default Project;
