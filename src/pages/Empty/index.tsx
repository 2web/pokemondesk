import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Empty.module.scss';

interface IEmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
    return (
        <div className={s.root}>
            <Header />
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag="h1">
                        <span>This is empty page for {title}!</span>
                    </Heading>
                </div>
                <div className={s.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
        </div>
    );
};

export default EmptyPage;