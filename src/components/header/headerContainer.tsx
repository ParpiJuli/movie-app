import React from 'react';
import tw from 'tailwind-styled-components';
import NavBar from '../navBar/navBar';
import headerBackgroundImage from './headerBackgroundImage.jpg';

function HeaderContainer({imageSrc} : {imageSrc?: string}) {
  return (
    <>
      <NavBar />
      <BackgroundImage src={imageSrc ?? headerBackgroundImage} />
    </>
  );
}

const BackgroundImage = tw.img`
  w-screen
`;

export default HeaderContainer;
