import React from 'react';
import tw from 'tailwind-styled-components';
import TitleAndDetail from '../shared/titleAndDetail';
import { MovieDetailsInfoType } from '../../types/Movies';

function MovieDetailsInfo({
  title,
  detail,
  movieDescription,
  category,
  categoryDetails= '',
  popularity,
  voteAverage,
  voteCount
}: MovieDetailsInfoType ) {

  return (
    <Container>

      <TitleDescriptionContainer>
        <TitleAndDetail title={title} detail={detail} titleSize='text-2xl md:text-3xl' isMainTitle={true}/>
        <MovieDescription>
          {movieDescription}
        </MovieDescription>
      </TitleDescriptionContainer>

      { category && categoryDetails && (
        <TitleAndDetail title="Genre:" detail={categoryDetails}/>
      )}

      { popularity && (
        <TitleAndDetail title="Popularity:" detail={`${popularity} views`}/>
      )}

      { voteCount && (
        <TitleAndDetail title="Reviews:" detail={`${voteCount} votes`}/>
      )}

      { voteAverage && (
        <TitleAndDetail title="Rate:" detail={voteAverage}/>
      )}

    </Container>
);
}

const Container = tw.div`
  flex
  flex-col
  pt-2
  pb-10
`;

const TitleDescriptionContainer = tw.div`
  flex
  flex-col
`;

const MovieDescription = tw.p`
  flex
  flex-col
  py-5
  md:pt-5
`;

export default MovieDetailsInfo;
