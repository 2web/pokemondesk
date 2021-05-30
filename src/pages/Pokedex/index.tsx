import React, { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import req from '../../utils/request';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

const usePokemons = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsloading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
  
    useEffect(() => {
      const getPokemons = async () => {
        try {
          const response = await req('getPokemons');
          setData(response);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsloading(false);
        }
      };
  
      getPokemons();
    }, []);
  
    return {
      isLoading,
      isError,
      data,
    };
};


const PokedexPage = () => {
    const { isLoading, isError, data } = usePokemons();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Something wrong...</div>;
    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag="h1">
                        {data.total} <b>Pokemons</b> for you to choose your favorite
                    </Heading>
                </div>
                <div className={s.contentGallery}>
                    {data.pokemons.map((pokemon: any) => {
                        // eslint-disable-next-line camelcase
                        const { id, name_clean, stats, types, img } = pokemon;
                        return (
                            <PokemonCard
                                // eslint-disable-next-line camelcase
                                name={name_clean}     
                                key={id} 
                                attack={stats.attack} 
                                defense={stats.defense} 
                                types={types} 
                                img={img} 
                            />
                        );
                    })}
                </div>
            </Layout>
        </div>
    );
};

export default PokedexPage;