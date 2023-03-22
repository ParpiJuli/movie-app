import DetailsPage from '../pages/detailsPage';
import ErrorPage from '../pages/errorPage';
import GenrePage from '../pages/genrePage';
import HomePage from '../pages/homePage';
import StorybookPage from '../pages/storybookPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movies/:id',
    element: <DetailsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movies/:id',
    element: <DetailsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:genre',
    element: <GenrePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/storybook',
    element: <StorybookPage />,
    errorElement: <ErrorPage />
  },
];
