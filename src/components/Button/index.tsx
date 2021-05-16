import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';
import './Button.scss';

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  color?: string;
  small?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, fullWidth = false, color = '', small = false }) => {
  return (
    <button
      className={cn(s.root, fullWidth ? s.full : null, color , small ? s.small : null)}
      type="button"
      onClick={onClick}>
      <span>
      {children}
      </span>
    </button>
  );
};

export default Button;