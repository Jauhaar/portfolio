import React, { useState } from 'react';
import Skill from '../components/Skill';
import Icon from '../components/Icon';
import coverImage from '../images/coverimage.png';
import '../App.css';
import {
  faLinkedin,
  faGithubSquare,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated, config } from 'react-spring';

const Home = () => {
  const [skills] = useState(['React.js', 'JavaScript', 'HTML5', 'CSS3', 'C#']);

  const [icons] = useState([
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/',
      size: '3x'
    },
    { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/', size: '3x' },
    { icon: faGithubSquare, link: 'https://github.com/jauhaar', size: '3x' }
  ]);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <animated.div className="home" style={fade}>
      <div className="container">
        <div className="app-grid">
          <div className="grid-cover-image">
            <div className="cover-text">
              Hello, I'm <span>Mohammed Jauhaar Saib</span>. I'm a passionate
              web developer.
            </div>
            <img src={coverImage} alt="" />
          </div>
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
    </animated.div>
  );
};

export default Home;
