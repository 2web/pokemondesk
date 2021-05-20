import React, { FC } from 'react';
// eslint-disable-next-line import/no-unresolved
import cn from 'classnames';

import s from './Layout.module.scss';

interface IProps {
  className?: string;
}

const Layout: FC<IProps> = ({ children, className = null }) => <div className={cn(s.root, className)}>{children}</div>;

export default Layout;