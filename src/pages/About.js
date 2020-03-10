import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const isMobile = window.innerWidth < 600;

  const [icons, setIcons] = useState([
    {
      icon: faLightbulb,
      heading: 'Intuitive',
      description: 'Easy to use, intuitive UX/UI.'
    },
    {
      icon: faRocket,
      heading: 'Dynamic',
      description: 'Static is boring. I love making websites come to life.'
    }
  ]);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  const slideInText = useSpring({
    from: { opacity: 0, transform: 'translate3d(200%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 500 }
  });

  const slideInLine = useSpring({
    from: { opacity: 0, transform: 'translate3d(200%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 750 }
  });

  // GRAPH STUFF
  const beginner = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 }
  });
  const intermediate = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1500 }
  });
  const advanced = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 2000 }
  });

  return (
    <animated.div className="about" style={fade}>
      <div className="about-page-grid">
        <div className="grid-heading center">
          <animated.p style={slideInText}>ABOUT ME</animated.p>
          <animated.span className="line" style={slideInLine}></animated.span>
        </div>
        <div className="grid-graph">
          <div className="graph-container">
            <div className="graph-container-grid">
              {/* HEADINGS */}
              <div className="heading beginner">Beginner</div>
              <div className="heading intermediate">Intermediate</div>
              <div className="heading advanced">Advanced</div>
              <div className="heading expert">Expert</div>
              {/* JavaScript */}
              <div className="side-heading js">JavaScript</div>
              <animated.div
                className="cell js-beg"
                style={beginner}
              ></animated.div>
              <animated.div
                className="cell js-int"
                style={intermediate}
              ></animated.div>
              <animated.div
                className="cell js-adv"
                style={advanced}
              ></animated.div>
              {/* HTML */}
              <div className="side-heading html">HTML5</div>
              <animated.div
                className="cell html-beg"
                style={beginner}
              ></animated.div>
              <animated.div
                className="cell html-int"
                style={intermediate}
              ></animated.div>
              <animated.div
                className="cell html-adv"
                style={advanced}
              ></animated.div>
              {/* CSS */}
              <div className="side-heading css">CSS</div>
              <animated.div
                className="cell css-beg"
                style={beginner}
              ></animated.div>
              <animated.div
                className="cell css-int"
                style={intermediate}
              ></animated.div>
              <animated.div
                className="cell css-adv"
                style={advanced}
              ></animated.div>
              {/* REACT */}
              <div className="side-heading react">React.js</div>
              <animated.div
                className="cell react-beg"
                style={beginner}
              ></animated.div>
              <animated.div
                className="cell react-int"
                style={intermediate}
              ></animated.div>
              {/* C# */}
              <div className="side-heading cs">C# MVC</div>
              <animated.div
                className="cell cs-beg"
                style={beginner}
              ></animated.div>
              {/* PHOTOSHOP */}
              <div className="side-heading ps">Photoshop</div>
              <animated.div
                className="cell ps-beg"
                style={beginner}
              ></animated.div>
              <animated.div
                className="cell ps-int"
                style={intermediate}
              ></animated.div>
            </div>
          </div>
        </div>
        <div className="grid-icons">
          {icons.map((item, index) => (
            <div className="icon-section">
              <FontAwesomeIcon
                icon={item.icon}
                size={isMobile ? '3x' : '4x'}
                className="icon"
              />
              <p className="title">{item.heading}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid-about">
          <h1>Who am I?</h1>
          <p>
            I am a Web Developer from Durban, South Africa. I have a passion for
            UI effects and intuitive and dynamic design that bring websites to
            life.
          </p>
        </div>
      </div>
    </animated.div>
  );
};
export default About;
