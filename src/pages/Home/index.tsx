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
          <Heading size="72px">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading size="36px">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => console.log('Click!')} color="yellow" >See pokemons</Button>
          <br/>
          <Button onClick={() => console.log('Click!')} small >Read more</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;