import React, { useState } from 'react';
import Icon from './Icon.js';
import portrait from '../images/portrait.jpg';
import {
  faLinkedin,
  faGithubSquare,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
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

  const [icons, setIcons] = useState([
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/',
      size: '2x'
    },
    { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/', size: '2x' },
    { icon: faGithubSquare, link: 'https://github.com/jauhaar', size: '2x' }
  ]);

  return (
    <div className="menu">
      {/* Menu Button */}
      <div className={menuBtnState} onClick={OnMenuBtnCLick}>
        <div className="btn-line menu-btn-animation"></div>
        <div className="btn-line menu-btn-animation"></div>
        <div className="btn-line menu-btn-animation"></div>
      </div>

      {/* Left Panel */}
      <div className={showLeftPanel}>
        {/* Area for self portrait and contact details */}
        <div className="left-panel-grid">
          <div className="grid-portrait">
            <div className="circle-crop">
              <img src={portrait} alt="" />
            </div>
          </div>
          <div className="grid-quote"></div>
          <div className="grid-contact-details"></div>
          <div className="grid-icon-links">
            <div className="icon-bar">
              {icons.map((item, index) => (
                <Icon
                  key={index}
                  source={item.icon}
                  link={item.link}
                  size={item.size}
                />
              ))}
            </div>
          </div>
        </div>
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
