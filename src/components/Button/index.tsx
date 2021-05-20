import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  color?: 'green' | 'yellow';
  size?: 'small' | 'wide';
}

const Button: FC<IProps> = ({ children, onClick, color, size }) => {
  return (
    <button
      className={cn(s.root, s[size as keyof typeof s], s[color as keyof typeof s])}
      type="button"
      onClick={onClick}>
      <span>
      {children}
      </span>
    </button>
  );
};

export default Button;