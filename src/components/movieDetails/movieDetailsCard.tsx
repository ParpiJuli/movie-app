import React from 'react';
import MovieDetailsInfo from './movieDetailsInfo';
import tw from 'tailwind-styled-components';
import defaultImage from '../../assets/defaultImage.png';
import { GenreType, MovieType } from '../../types/Movies';
import map from 'lodash/map';

function MovieDetailsCard({
  title,
  release_date,
  overview,
  genres,
  poster_path: moviePoster,
  popularity,
  vote_average: voteAverage,
  vote_count: voteCount
} : MovieType) {

  const image = moviePoster ?? defaultImage;

  const getGenresName = (genres?: GenreType[]) => {
    return map(genres, (item: GenreType) => item.name).toString();
  };

  const getAverage = (voteAverage?: number) => {
    if(!voteAverage) {
      return null;
    }
    return Math.floor(voteAverage);
  };

  return (
    <Container>
      <SectionContainer>
        <ImageContainer>
          <Image src={image} alt="movie-poster" />
        </ImageContainer>

        <MovieDetailsContainer>
          <MovieDetailsInfo
            title={title}
            detail={release_date || ''}
            movieDescription={overview}
            category={'Genre:'}
            categoryDetails={getGenresName(genres)}
            popularity={popularity}
            voteAverage={getAverage(voteAverage)}
            voteCount={voteCount}

          />
        </MovieDetailsContainer>
      </SectionContainer>
    </Container>
  );
}

const Container = tw.div`
  md:container
`;

const SectionContainer = tw.div`
  flex
  flex-col
  lg:flex-row
  py-10
  gap-10
  text-center
  md:text-left
  m-auto
  md:mb-10
`;

const ImageContainer = tw.div`
  hover:drop-shadow-xl
  m-auto
  px-5
`;

const Image = tw.img`
  rounded-xl
`;

const MovieDetailsContainer = tw.div`
  flex
  md:w-3/4
  m-auto
  lg:m-0
  px-5
`;

export default MovieDetailsCard;
