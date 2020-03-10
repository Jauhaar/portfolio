import React, { useState } from 'react';
import Icon from '../components/Icon';
import '../App.css';
import {
  faLinkedin,
  faGithubSquare,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [icons] = useState([
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/mohammed-jauhaar-saib-556a80177/',
      size: '3x'
    },
    { icon: faCodepen, link: 'https://codepen.io/Jauhaar/pens/', size: '3x' },
    { icon: faGithubSquare, link: 'https://github.com/jauhaar', size: '3x' }
  ]);

  const [btnSubmitState, setbtnSubmitState] = useState('btn-submit');
  const [showError, setShowError] = useState('error-message');

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

  const expandIn = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 500 }
  });

  const SendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail_service_id',
        'contact_me_template',
        e.target,
        'user_RU4BqrwVab7CrnmdOQfMi'
      )
      .then(
        result => {
          console.log(result.text);
          setbtnSubmitState('btn-submit-success');
        },
        error => {
          console.log(error.text);
          setbtnSubmitState('btn-submit-fail');
          setShowError('error-message show');
        }
      );
  };

  return (
    <animated.div className="contact center" style={fade}>
      <div className="contact-page-grid">
        <div className="grid-heading center">
          <animated.p style={slideInText}>CONTACT ME</animated.p>
          <animated.span className="line" style={slideInLine}></animated.span>
        </div>
        <div className="grid-contact-form ">
          <p className="contact-text">
            Have a question or want to work together?
          </p>
          <animated.form
            style={expandIn}
            className="contact-form"
            onSubmit={SendEmail}
          >
            <input type="text" name="user_name" placeholder="Your name" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email address"
            />
            <textarea name="message" placeholder="Enter your message here" />
            <div className="btn-container">
              <span className={showError}>Please try again.</span>
              <input type="submit" value="SUBMIT" className={btnSubmitState} />
            </div>
          </animated.form>
        </div>
        <div className="grid-contactpage-links center">
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
    </animated.div>
  );
};

export default Contact;
