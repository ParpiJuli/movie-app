import React from 'react';
import tw from 'tailwind-styled-components';
import defaultImage from '../../assets/defaultImage.png';

function MovieCard({moviePoster}: {moviePoster?: string}) {
  return (
    <ImageContainer>
      <Image
        src={moviePoster ?? defaultImage}
        alt="movie-poster"
      />
    </ImageContainer>
);
}

const ImageContainer = tw.div`
  hover:drop-shadow-xl
  origin-center
  hover:origin-top-right
  p-5
`;

const Image = tw.img`
  rounded-xl
`;

export default MovieCard;
