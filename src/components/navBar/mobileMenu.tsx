import React from 'react';
import tw from 'tailwind-styled-components';
import { getMenuItems } from '../shared/menuItems';

function MobileMenu() {

  return (
    <MobileMenuContainer>
      <Menu>
        {getMenuItems()}
      </Menu>
    </MobileMenuContainer>
  );
}

const MobileMenuContainer = tw.div`
  bg-red
  w-screen
  absolute
  z-30
`;

const Menu = tw.div`
  flex
  flex-col
  gap-10
  m-10
  justify-evenly
`;

export default MobileMenu;
