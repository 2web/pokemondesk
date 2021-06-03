import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';
import s from './Home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading size="xl">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading size="m">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;