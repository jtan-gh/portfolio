import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./media.css"

const GitHubProfile = () => {
  return (
    <a className="icon-hitbox" href="https://github.com/jtan-gh">
      <div className="icon-stack">
        <FontAwesomeIcon icon={faCircle} className="icon-background" size="2x"/>
        <FontAwesomeIcon icon={faGithub} className="icon-foreground" size="2x"/>
      </div>
    </a>
  );
}

export default GitHubProfile;
