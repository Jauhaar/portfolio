import React, { useState } from 'react';
import Skill from './components/Skill';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  const [skills, setSkills] = useState([
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'C#'
  ]);

  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div className="skills-bar">
          {skills.map((item, index) => (
            <Skill key={index} skills={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
