import React, { useState } from 'react';
import '../App.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtnState, setMenuBtmState] = useState('menu-btn');
  const [showLeftPanel, setShowLeftPanel] = useState('left-panel');
  const [showRightPanel, setShowRightPanel] = useState('right-panel');
  const [showNav, setShowNav] = useState('nav-item');

  const OnMenuBtnCLick = () => {
    setShowMenu(!showMenu);
    setMenuBtmState(showMenu ? 'menu-btn' : 'menu-btn close');
    setShowLeftPanel(showMenu ? 'left-panel' : 'left-panel show');
    setShowRightPanel(showMenu ? 'right-panel' : 'right-panel show');
    setShowNav(showMenu ? 'nav-item' : 'nav-item show');
  };

  return (
    <div className="menu">
      {/* Menu Button */}
      <div className={menuBtnState} onClick={OnMenuBtnCLick}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      {/* Left Panel */}
      <div className={showLeftPanel}>
        {/* Area for self portrait and contact details */}
      </div>

      {/* Right Panel */}
      <div className={showRightPanel}>
        <ul className="menu-nav">
          <li className={showNav}>
            <p className="nav-link">Home</p>
          </li>
          <li className={showNav}>
            <p className="nav-link">My Work</p>
          </li>
          <li className={showNav}>
            <p className="nav-link">About</p>
          </li>
          <li className={showNav}>
            <p className="nav-link">Contact Me</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
