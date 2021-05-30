import React from "react";
import "./Project.css";

export default function Project(props) {
  const { project, id } = props;
  console.log(project, id);
  return id % 2 == 0 ? (
    <div
      id={id}
      className={id % 2 == 0 ? "projectContainer" : "projectContainer"}>
      <a href={project.url}>
        <div
          className="projectImageContainer"
          style={{ backgroundImage: `url(${project.image})` }}></div>
      </a>
      <div className="projectInfoContainer">
        <h2 className="projectTitle">{project.title}</h2>
        <div className="infoContainer">
          <div className="descriptionContainer">{project.description}</div>
          <ul className="evenSkillList">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div
      id={id}
      className={id % 2 == 0 ? "projectContainer" : "projectContainer"}>
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
      <a href={project.url}>
        <div
          className="projectImageContainer"
          style={{ backgroundImage: `url(${project.image})` }}></div>
      </a>
    </div>
  );
}
