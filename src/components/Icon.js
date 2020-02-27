import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';

const Icon = ({ source, link, size }) => {
  return (
    <IconButton target="_blank" href={link}>
      <FontAwesomeIcon icon={source} size={size} className="icon" />
    </IconButton>
  );
};

export default Icon;
