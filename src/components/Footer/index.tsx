import cn from 'classnames';
import React from 'react';
import Heading from '../Heading';
import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapContent}>
        <Heading size="s">
          Made with{' '}
          <span role="img" aria-label="love" aria-labelledby="">
            ❤️
          </span>
        </Heading>
      </div>
    </div>
  );
};

export default Footer;