import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
// import Skill from './components/Skill';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
// import Icon from './components/Icon';
// import coverImage from './images/coverimage.png';
import './App.css';
// import {
//   faLinkedin,
//   faGithubSquare,
//   faCodepen
// } from '@fortawesome/free-brands-svg-icons';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  // const [skills] = useState(['React.js', 'JavaScript', 'HTML5', 'CSS3', 'C#']);

  // const [icons] = useState([
  //   {
  //     icon: faLinkedin,
  //     link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/',
  //     size: '3x'
  //   },
  //   { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/', size: '3x' },
  //   { icon: faGithubSquare, link: 'https://github.com/jauhaar', size: '3x' }
  // ]);

  return (
    <HashRouter basename="/">
      <div className="App">
        <Menu />
        <MobileMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myprojects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contactme" component={Contact} />
        </Switch>
        {/* <Home />
        <Projects />
        <About />
        <Contact /> */}
        {/* <div className="container">
        <div className="app-grid">
          <div className="grid-cover-image">
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
      </div> */}
      </div>
    </HashRouter>
  );
};

export default App;
