import React from 'react';
import Icon from './Icon';
import '../App.css';

const Project = ({ project, getPopUpState, togglePopUp }) => {
  const OnProjectClicked = () => {
    getPopUpState(project);
    togglePopUp('bg-popup show');
  };

  return (
    <div className="project" onClick={OnProjectClicked}>
      <div className="project-grid">
        <div className="grid-title center">
          <p>{project.title}</p>
        </div>
        <div className="grid-thumbnail center">
          <img src={project.thumbnail} alt="" />
        </div>
        <div className="grid-description center">
          <p>{project.description}</p>
        </div>
        <div className="grid-links">
          {project.icons.map((item, index) => (
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
  );
};

export default Project;
