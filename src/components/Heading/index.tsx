import React from 'react';

import cn from 'classnames';
import s from './Heading.module.scss';

interface IHeadingLevel {
    [n: string]: number;
}

const HEADING_LEVEL: IHeadingLevel = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5,
};

interface IHeadingProps {
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    className?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, size = 'xl', className = null }) => {
    const headingProps = {
        className: cn(s[size], className),
    };

    return React.createElement(`h${HEADING_LEVEL[size]}`, headingProps, children);
};

export default Heading;