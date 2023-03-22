import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import MenuSvg from './menuSvg';
import { getMenuItems } from '../shared/menuItems';
import MobileMenu from './mobileMenu';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(()=> {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <Section>
      <Nav>
        <div>
          <Link to='/'>MOVIE APP</Link>
        </div>
        <Menu>
          {getMenuItems()}
        </Menu>
        <Button onClick={() => setShowMenu(!showMenu)}>
          <MenuSvg />
        </Button>
      </Nav>

      { showMenu && <MobileMenu />}
    </Section>
  );
}

const Section = tw.div`
  bg-red
  h-[80px]
  z-30
  relative
  drop-shadow-lg
`;

const Nav = tw.nav`
  container
  flex
  justify-between
  px-4
  pt-8
  mx-auto
  bg-white
`;

const Menu = tw.div`
  hidden
  space-x-8
  lg:flex
`;

const Button = tw.button`
  md:hidden
`;

const Link = tw(NavLink)`
  text-2xl
  font-medium
  text-blue-500
`;

export default NavBar;
