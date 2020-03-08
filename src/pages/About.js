import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const About = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <animated.div className="about center" style={fade}>
      <h1>About Page Coming Soon! ( ^-^)</h1>
    </animated.div>
  );
};
export default About;
