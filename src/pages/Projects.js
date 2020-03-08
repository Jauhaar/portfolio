import React, { useState } from 'react';
import Project from '../components/Project';
import Icon from '../components/Icon';
import thumbnailStarwars from '../images/thumbnail-starwars.jpg';
import thumbnailTodos from '../images/thumbnail-todos.jpg';
import thumbnailFlappyClone from '../images/thumbnail-flappyclone.jpg';
import {
  faGithubSquare,
  faCodepen,
  faHtml5,
  faJsSquare,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Star Wars Website',
      thumbnail: thumbnailStarwars,
      description:
        'A Star Wars themed website that I created for Immedia Summer School 2019.',
      icons: [
        {
          icon: faGithubSquare,
          link: 'https://github.com/Jauhaar/SummerSchool_StarWarsWebsite',
          size: '2x'
        },
        {
          icon: faPlayCircle,
          link: 'https://jauhaar.github.io/SummerSchool_StarWarsWebsite/',
          size: '2x'
        }
      ],
      longDescription:
        'This project is a complete website, featuring simulated ticket booking, coded entirely by myself. This project shows off my proficiency in Web Development with HTML5, CSS3 and Vanilla JavaScript DOM manipulation.',
      languages: [{ icon: faCss3Alt }, { icon: faHtml5 }, { icon: faJsSquare }]
    },
    {
      title: 'Todos Web App',
      thumbnail: thumbnailTodos,
      description:
        'A simplistic To Do List Web App, created in HTML5, CSS3 and Vanilla JavaScript.',
      icons: [
        {
          icon: faGithubSquare,
          link: 'https://github.com/Jauhaar/To-Do-List-Web-App',
          size: '2x'
        },
        {
          icon: faCodepen,
          link: 'https://codepen.io/Jauhaar/full/LYYoWyy',
          size: '2x'
        },
        {
          icon: faPlayCircle,
          link: 'https://jauhaar.github.io/To-Do-List-Web-App/',
          size: '2x'
        }
      ],
      longDescription:
        'This project, simple yet feature rich, features robust search and filtering. This project displays my proficiency in creating Web Apps with HTML5, CSS3 and Vanilla JavaScript.',
      languages: [{ icon: faCss3Alt }, { icon: faHtml5 }, { icon: faJsSquare }]
    },
    {
      title: 'Flappy Bird Clone',
      thumbnail: thumbnailFlappyClone,
      description:
        'A barebones Flappy Bird Web App created with HTML5 Canvas and Vanilla JavaScript.',
      icons: [
        {
          icon: faGithubSquare,
          link: 'https://github.com/Jauhaar/FlappyBirdClone',
          size: '2x'
        },
        {
          icon: faPlayCircle,
          link: 'https://jauhaar.github.io/FlappyBirdClone/',
          size: '2x'
        }
      ],
      longDescription:
        'My first JavaScript project, in which I utilised gamification to learn the programming language. Featuring Object Pooling, a popular technique used in game development.',
      languages: [{ icon: faHtml5 }, { icon: faJsSquare }]
    }
  ]);

  const [popUpState, setPopUpState] = useState({
    title: 'temp',
    thumbnail: thumbnailStarwars,
    description: 'temp',
    icons: [
      {
        icon: faGithubSquare,
        link: 'temp',
        size: 'sm'
      }
    ],
    longDescription: 'temp',
    languages: [{ icon: faJsSquare }]
  });
  const GetPopUpState = state => {
    setPopUpState(state);
  };

  const [showPopup, setShowPopup] = useState('bg-popup');
  const TogglePopUp = state => {
    setShowPopup(state);
  };

  const ClosePopup = () => {
    setShowPopup('bg-popup');
  };

  // ANIMATION EFFECTS
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  const slideInText = useSpring({
    from: { opacity: 0, transform: 'translate3d(300%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 500 }
  });
  const slideInLine = useSpring({
    from: { opacity: 0, transform: 'translate3d(300%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 750 }
  });

  return (
    <animated.div className="projects" style={fade}>
      {/* Pop Up Overlay*/}
      <div className={showPopup}>
        <div className="close-popup" onClick={ClosePopup}></div>
        <div className="popup">
          <div className="popup-grid">
            <div className="grid-title center">
              <div className="btn-close" onClick={ClosePopup}>
                +
              </div>
              <p>{popUpState.title}</p>
            </div>
            <div className="grid-carousel">
              {/* Slideshow here */}
              <img src={popUpState.thumbnail} alt="" />
            </div>
            <div className="grid-description center">
              <p>{popUpState.longDescription}</p>
            </div>
            <div className="grid-icons center">
              <div className="languages-container">
                {popUpState.languages.map((item, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={item.icon}
                    size="sm"
                    className="icon"
                  />
                ))}
              </div>
              <div className="links-container">
                {popUpState.icons.map((item, index) => (
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
      {/* Project Page */}
      <div className="projects-page-grid">
        <div className="top center">
          <animated.p style={slideInText}>PROJECTS</animated.p>
          <animated.span className="line" style={slideInLine}></animated.span>
        </div>
        <div className="projects-container">
          {projects.map((item, index) => (
            <Project
              key={index}
              project={item}
              getPopUpState={GetPopUpState}
              togglePopUp={TogglePopUp}
            />
          ))}
          {/* {console.log(popUpState)} */}
        </div>
      </div>
    </animated.div>
  );
};

export default Projects;
