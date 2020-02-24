import React, { useState } from 'react';
import Skill from './components/Skill';
import Menu from './components/Menu';
import Icon from './components/Icon';
import './App.css';
import {
  faLinkedin,
  faGithubSquare,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [skills, setSkills] = useState([
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'C#'
  ]);

  const [icons, setIcons] = useState([
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/'
    },
    { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/' },
    { icon: faGithubSquare, link: 'https://github.com/jauhaar' }
  ]);

  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div className="app-grid">
          <div className="grid-skills-bar">
            <div className="skills-bar">
              {skills.map((item, index) => (
                <Skill key={index} skills={item} />
              ))}
            </div>
          </div>
          <div className="grid-icon-bar">
            <div className="icon-bar">
              {icons.map((item, index) => (
                <Icon key={index} source={item.icon} link={item.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
