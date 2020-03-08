import React from 'react';
import starwarsImg1 from '../images/starwars-img1.jpg';
import starwarsImg2 from '../images/starwars-img2.jpg';
import starwarsImg3 from '../images/starwars-img3.jpg';
import starwarsImg4 from '../images/starwars-img4.jpg';
import { useSpring, animated, config } from 'react-spring';

const Slideshow = ({ images }) => {
  const test = useSpring({
    from: { background: 'url(./images/starwars-img1.jpg) no-repeat;' },
    to: { background: 'url(./images/starwars-img4.jpg) no-repeat;' }
  });

  return <div className="slideshow"></div>;
};

export default Slideshow;
