import React, { useState, useEffect } from "react";
import Project from "../project/Project";
import pokemonImage from "../../assets/images/pokemon.png";
import moodifyImage from "../../assets/images/moodify.png";
import classnames from "classnames";
import "./ProjectSection.css";
const projectList = [
  {
    "id": 1,
    "title": "Moodify",
    "skills": ["React", "MongoDB", "Express", "Node.js", "Bootstrap"],
    "miniDesc": "App for creating and sharing song lists for different moods",
    "description":
      "This was a group project for Kenzie Academy.  The group project asked for a MVP (Minimum Viable Product). It interacts with the spotify API and allows users to create a secure user profile which then allows you to create, share, and rate custom playlists.  We utilized the MERN stack for this app.",
    "url": "https://sarahedwards715.github.io/capstonegroup7/",
    "image": moodifyImage,
  },
  {
    "id": 2,
    "title": "Pokemon Search Engine",
    "skills": ["Javascript", "CSS", "HTML", "API"],
    "minDesc": "Pokemon search engine",
    "description":
      "A pokemon search engine which uses the Pokemon API, and then takes all of the stats for each pokemon and displays them on a card",
    "url": "https://bwardstories.github.io/Pokemon-Search-Engine/",
    "image": pokemonImage,
  },
];

export default function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(prevValue => (prevValue = window.pageYOffset));
  };
  const toggleVisible = () => {
    if (offsetY > 900) {
      setIsVisible(prevValue => (prevValue = true));
    }
    if (offsetY <= 900) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    toggleVisible();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleVisible]);

  return (
    <div
      id="projectSection"
      className={classnames("projectSectionContainer", {
        "fadeIn": isVisible,
        "fadeOut": !isVisible,
      })}>
      <h1 className="projectSectionHeader">Notable Projects</h1>
      {projectList.map((project, index) => (
        <Project project={project} key={index} id={project.id} />
      ))}
    </div>
  );
}
