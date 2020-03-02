import React, { useState } from 'react';
import Icon from './Icon.js';
import portrait from '../images/portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import '../App.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtnState, setMenuBtnState] = useState('menu-btn');
  const [showLeftPanel, setShowLeftPanel] = useState('left-panel');
  const [showRightPanel, setShowRightPanel] = useState('right-panel');
  const [showNav, setShowNav] = useState('nav-item');

  const [icons] = useState([
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/',
      size: '2x'
    },
    { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/', size: '2x' },
    { icon: faGithubSquare, link: 'https://github.com/jauhaar', size: '2x' }
  ]);

  const [copiedStyle, setCopiedStyle] = useState('#a3a3a3');

  const OnMenuBtnCLick = () => {
    setShowMenu(!showMenu);
    setMenuBtnState(showMenu ? 'menu-btn' : 'menu-btn close');
    setShowLeftPanel(showMenu ? 'left-panel' : 'left-panel show');
    setShowRightPanel(showMenu ? 'right-panel' : 'right-panel show');
    setShowNav(showMenu ? 'nav-item' : 'nav-item show');
    setCopiedStyle('#fff');
  };

  const OnLinkClick = () => {
    setShowMenu(!showMenu);
    setMenuBtnState('menu-btn');
    setShowLeftPanel('left-panel');
    setShowRightPanel('right-panel');
    setShowNav('nav-item');
  };

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
            <p>Mohammed Jauhaar Saib</p>
          </div>
          <div className="grid-info">
            <div className="info-card">
              <p>
                “Give a man a program, frustrate him for a day. Teach a man to
                program, frustrate him for a lifetime.”
              </p>
              <span>-A frustrated programmer</span>
            </div>
          </div>
          <div className="grid-contact-details">
            <div className="contact-card">
              <span className="txt-email">m.jauhaar.saib@gmail.com</span>
              <CopyToClipboard
                text="m.jauhaar.saib@gmail.com"
                onCopy={() => {
                  setCopiedStyle('#1eff1e');
                }}
              >
                <IconButton>
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="1x"
                    className="icon"
                    style={{ color: copiedStyle }}
                  ></FontAwesomeIcon>
                </IconButton>
              </CopyToClipboard>
            </div>
          </div>
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
            <Link to="/" className="link" onClick={OnLinkClick}>
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li className={showNav}>
            <Link to="/myprojects" className="link" onClick={OnLinkClick}>
              <p className="nav-link">My Work</p>
            </Link>
          </li>
          <li className={showNav}>
            <Link to="/about" className="link" onClick={OnLinkClick}>
              <p className="nav-link">About</p>
            </Link>
          </li>
          <li className={showNav}>
            <Link to="/contactme" className="link" onClick={OnLinkClick}>
              <p className="nav-link">Contact Me</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
