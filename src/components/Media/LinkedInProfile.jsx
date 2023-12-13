import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const LinkedInProfile = () => {
  return (
    <a href="https://ca.linkedin.com/in/johnson-tan-a84552193">
      <div className="icon-stack">
        <FontAwesomeIcon icon={faSquare} className="icon-background" size="2x"/>
        <FontAwesomeIcon icon={faLinkedin} className="icon-foreground" size="2x" />
      </div>
    </a>
  );
}

export default LinkedInProfile;
