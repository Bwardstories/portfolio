import React from "react";
import "./Project.css";

export default function Project(props) {
  const { project, id } = props;
  console.log(project, id);
  return (
    <div id={id} className="projectContainer">
      <div className="projectImageContainer">
        <img src={project.image} alt="" className="projectImage" />
      </div>
      <div className="projectInfoContainer">
        <h2 className="projectTitle">{project.title}</h2>
        <div className="infoContainer">
          <div className="descriptionContainer">{project.description}</div>
          <ul className="skillList">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
