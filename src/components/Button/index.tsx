import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  yellowColor?: boolean;
  small?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, fullWidth = false, yellowColor = false, small = false }) => {
  return (
    <button
      className={cn(s.root, fullWidth ? s.full : null, yellowColor ? s.yellow : null, small ? s.small : null)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;