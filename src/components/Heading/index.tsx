import React from 'react';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeaderNum = 1 | 2 | 3 | 4 | 5 | 6;
interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: HeaderType | HeaderNum;
  // children: React.ReactNode | undefined;
}

const Heading: React.FC<IProps> = ({ level = 'h1', children, ...props }: IProps) => {
    const Tag = `h${level}`.replace('hh', 'h') as keyof JSX.IntrinsicElements;
    return React.createElement(Tag, { ...props }, children);
};

export default Heading;