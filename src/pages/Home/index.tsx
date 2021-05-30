import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';


import Layout from '../../components/Layout/index';
import Button from '../../components/Button/index';
import Parallax from '../../components/Parallax/index';
import Heading from '../../components/Heading/index';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemon</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;