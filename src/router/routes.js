import DetailsPage from '../pages/detailsPage';
import GenrePage from '../pages/genrePage';
import HomePage from '../pages/homePage';
import StorybookPage from '../pages/storybookPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movies/:genre',
    element: <GenrePage />,
  },
  {
    path: '/movies/:id',
    element: <DetailsPage />,
  },
  {
    path: '/storybook',
    element: <StorybookPage />,
  },
];
