import tw from 'tailwind-styled-components';
import { useQuery } from 'react-query';
import { fetchMoviesByReleaseDate } from '../services/fetchMoviesServices';
import { QueryResponseType } from '../types/Queries';
import ErrorPage from '../pages/errorPage';

export const SampleComponent = () => {
  const { isLoading, isError, data, error }: QueryResponseType =
    useQuery({
      queryKey: ['movies', 2020],
      queryFn: ({ queryKey }) => fetchMoviesByReleaseDate(queryKey[1]),
    });

  if (isLoading) {
    return <Loader>Loading...</Loader>;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return <p>{data?.title}</p>;
};

const Loader = tw.p`
  !bg-neutral
  flex
  m-auto
`;
