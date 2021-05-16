import React, { FC } from 'react';

import s from './Heading.module.scss';

interface IProps {
  size?: '72px' | '64px' | '36px' | '24px' | '18px' | '12px' | 'paragraph';
}

const Heading: FC<IProps> = ({ children, size = 'paragraph' }) => {
  let headeingTest;

  if (size === '72px') headeingTest = <h1>{children}</h1>;
  if (size === '64px') headeingTest = <h2>{children}</h2>;
  if (size === '36px') headeingTest = <h3>{children}</h3>;
  if (size === '24px') headeingTest = <h4>{children}</h4>;
  if (size === '18px') headeingTest = <h5>{children}</h5>;
  if (size === '12px') headeingTest = <h6>{children}</h6>;
  if (size === 'paragraph') headeingTest = <p>{children}</p>;

  return <div className={s.root}>{headeingTest}</div>;
};

export default Heading;