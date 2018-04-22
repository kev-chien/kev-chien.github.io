import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu = (props) => {
  return (
    <Menu className = "only-visible-sm" right>
      <a className="burger-menu-item" href="/about">About</a>
      <a className="burger-menu-item" href="/kevin_chien_resume.pdf">Resume</a>
      <a className="burger-menu-item" href="/projects">Projects</a>
    </Menu>
  );
}

export default BurgerMenu;