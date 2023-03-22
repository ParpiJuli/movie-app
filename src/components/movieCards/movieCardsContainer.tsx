import React from 'react';
import tw from 'tailwind-styled-components';
import { MovieType } from '../../types/Movies';
import map from 'lodash/map';
import MovieCard from '../movieCards/movieCard';
import { NavLink } from 'react-router-dom';
import { getMoviePoster } from '../../services/getApiUrls';

function MovieCardsContainer({movies}: {movies: MovieType[]} ) {
  return (
    <CardsContainer>
      {map(movies, (item, key) => (
        <Link key={key} to={`/movies/${item.id}`}>
            <MovieCard moviePoster={getMoviePoster(item.poster_path)}/>
        </Link>
      ))}
    </CardsContainer>
  );
}

const CardsContainer = tw.div`
  flex
  flex-wrap
  justify-center
  m-auto
`;

const Link = tw(NavLink)`
  max-w-[200px]
  md:max-w-[300px]
`;

export default MovieCardsContainer;
