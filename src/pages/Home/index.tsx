import React from 'react';

import s from './Home.module.scss';

import Header from '../../components/Header/index';
import Layout from '../../components/Layout/index';
import Button from '../../components/Button/index';
import Parallax from '../../components/Parallax/index';
import Heading from '../../components/Heading/index';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading tag="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => console.log('Click!')} color="yellow" >See pokemons</Button>
          <br/>
          <Button onClick={() => console.log('Click!')} size="small" >Read more</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;