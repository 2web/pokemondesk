import React from 'react';
import s from './Empty.module.scss';

interface EmptyPageProps {
  title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div className={s.root}>
        This is Empty page for {title}!
      </div>
    </div>
  );
}; 

export default EmptyPage;