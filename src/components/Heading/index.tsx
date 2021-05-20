import React, { FC } from 'react';


interface IProps {
  tag: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

const Heading: FC<IProps> = ({ tag = 'p', children }) => {
  const Tag = tag as keyof JSX.IntrinsicElements
  return <Tag className='root'>{children}</Tag>
};

export default Heading;