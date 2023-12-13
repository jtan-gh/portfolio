import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./media.css"

const GitHubProfile = () => {
  return (
    <a href="https://github.com/Jtan99" className="white-mask">
      <div className="icon-stack">
        <FontAwesomeIcon icon={faCircle} className="icon-background" size="2x"/>
        <FontAwesomeIcon icon={faGithub} className="icon-foreground" size="2x"/>
      </div>
    </a>
  );
}

export default GitHubProfile;
