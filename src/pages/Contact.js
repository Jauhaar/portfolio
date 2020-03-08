import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Contact = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <animated.div className="contact center" style={fade}>
      <h1>Contact Page Coming Soon! ( ^-^)</h1>
    </animated.div>
  );
};

export default Contact;
