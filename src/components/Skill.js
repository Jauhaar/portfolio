import React from 'react';

const Skill = ({ skills }) => {
  const openingTag = '<';
  const closingTag = ' />';
  return (
    <div className="Skill">
      <p>
        {' '}
        <span className="tag">{openingTag}</span>
        <span className="item">{skills}</span>
        <span className="tag">{closingTag}</span>{' '}
      </p>
    </div>
  );
};

export default Skill;
