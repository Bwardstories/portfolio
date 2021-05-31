import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./AboutMe.css";
import profilePic from "../../assets/images/Profile.jpg";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [aboutMeLocation, setAboutMeLocation] = useState();
  const handleScroll = () => {
    setOffsetY(prevValue => (prevValue = window.pageYOffset));
  };
  const toggleVisible = () => {
    if (offsetY > 220) {
      setIsVisible(prevValue => (prevValue = true));
    }
    if (offsetY <= 220) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    toggleVisible();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleVisible]);

  const getElementLocation = () => {
    const aboutMe = document.getElementById("aboutMe");
    if (aboutMe) {
      let currentLocation = aboutMe.getBoundingClientRect().y;
      setAboutMeLocation(currentLocation);
      return aboutMeLocation;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getElementLocation);
    return () => window.removeEventListener("scroll", getElementLocation);
  }, [aboutMeLocation]);

  console.log(aboutMeLocation);
  return (
    <div
      id="aboutMe"
      className={classnames("aboutMeContainer", {
        "fadeIn": isVisible,
        "fadeOut": !isVisible,
      })}>
      <div className="imageContainer">
        <img src={profilePic} alt="" className="profilePic" />
      </div>
      <div className="textContainer">
        <h1>About Me</h1>
        <p className="aboutMeMainText">
          Hey! My name is Brian Ward, I am a father of 8, and I come from a
          small town near Charleston, SC. I have been in the workforce for
          nearly 20 years, and when Covid hit I decided a change was necessary.
          Fast forward a little and I am so happy I made this decision. I have
          always excelled in any job I had, and now I have found something I
          love doing. <br></br>
          <br></br>
          Here are some technologies I've been working with recently{" "}
        </p>
        <ul className="skillsList">
          <li>JavaScript (ES6+)</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>BootStrap</li>
        </ul>
      </div>
    </div>
  );
}
