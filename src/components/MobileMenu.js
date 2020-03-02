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

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtnState, setMenuBtnState] = useState('menu-btn');
  const [showMenuPanel, setShowMenuPanel] = useState('mobile-menu-panel');
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
    setShowMenuPanel(showMenu ? 'mobile-menu-panel' : 'mobile-menu-panel show');
    setShowNav(showMenu ? 'nav-item' : 'nav-item show');
    setCopiedStyle('#fff');
  };

  const OnLinkClick = () => {
    setShowMenu(!showMenu);
    setMenuBtnState('menu-btn');
    setShowMenuPanel('mobile-menu-panel');
    setShowNav('nav-item');
  };

  return (
    <div className="mobile-menu">
      {/* Menu Button */}
      <div className={menuBtnState} onClick={OnMenuBtnCLick}>
        <div className="btn-line menu-btn-animation"></div>
        <div className="btn-line menu-btn-animation"></div>
        <div className="btn-line menu-btn-animation"></div>
      </div>

      {/* Right Panel */}
      <div className={showMenuPanel}>
        <div className="mobile-menu-grid">
          <div className="grid-portrait">
            <div className="circle-crop">
              <img src={portrait} alt="" />
            </div>
            <p>Mohammed Jauhaar Saib</p>
          </div>
          <div className="grid-nav">
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
          <div className="grid-email">
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
          <div className="grid-links">
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
    </div>
  );
};

export default MobileMenu;
