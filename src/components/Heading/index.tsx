import React from 'react';


interface IProps {
  tag: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

const Heading: React.FC<IProps> = ({ tag = 'p', children }) => {
  return React.createElement(tag, null, children);
};

export default Heading;