import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = ({ handleClick, menuOpen }) => {
  return (
    menuOpen ? (
      <div className={"menu-icon menuActive"} onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} color="white" style={{ fontSize: '2rem' }}/>
      </div>
    ) : (
      <div
        className={"menu-icon"}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} color="black" style={{ fontSize: '1.5rem' }}/>
      </div>
    )
  );
};

export default MenuIcon;
