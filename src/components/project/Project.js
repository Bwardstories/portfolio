import React, { useState, useEffect } from "react";
import "./Project.css";
import classnames from "classnames";

export default function Project(props) {
  const { project, id } = props;
  const [currentProjectLocation, setCurrentProjectLocation] = useState();
  const [onScreen, setOnScreen] = useState(false);

  const getElementLocation = () => {
    const currentProject = document.getElementById(`${id}`);
    if (currentProject) {
      let currentLocation = currentProject.getBoundingClientRect().y;
      setCurrentProjectLocation(currentLocation);
      return currentLocation;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getElementLocation);
    return () => window.removeEventListener("scroll", getElementLocation);
  }, [currentProjectLocation]);
  console.log(currentProjectLocation, `from project ${id}`);
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
        <div
          className={classnames("infoContainer", {
            "leftStart": currentProjectLocation >= 500,
            "leftEnd": currentProjectLocation < 500,
          })}>
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
        <div
          className={classnames("infoContainer", {
            "rightStart": currentProjectLocation >= 300,
            "rightEnd": currentProjectLocation < 300,
          })}>
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
