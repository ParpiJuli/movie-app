import tw from 'tailwind-styled-components';
import map from 'lodash/map';
import { NavLink } from 'react-router-dom';

const itemsMenu = [
  {
    href: '/comedy',
    name: 'Comedy'
  },
  {
    href: '/action',
    name: 'Action'
  },
  {
    href: '/drama',
    name: 'Drama'
  },
  {
    href: '/thriller',
    name: 'Thriller'
  },
  {
    href: '/storybook',
    name: 'Storybook'
  }
];

export const getMenuItems = () => {
  return map(itemsMenu, (item, index) => {
    return (
      <MenuLink to={item.href} key={index}>{item.name}</MenuLink>
    );
  });
};

const MenuLink = tw(NavLink)`
  rounded-xl
`;
