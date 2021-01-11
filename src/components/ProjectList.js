import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectAtts = projects.map(att => (
    <ProjectItem 
      key = {att.id}
      name = {att.name}
      about = {att.about}
      technologies = {att.technologies}
      />
  )

  )
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectAtts }</div>
    </div>
  );
}

export default ProjectList;
