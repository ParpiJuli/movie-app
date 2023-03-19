import { useQuery } from 'react-query';
import { fetchMoviesByReleaseDate } from '../services/fetchMoviesServices';
import { QueryResponseType } from '../types/Queries';

export const SampleComponent = () => {
  const { isLoading, isError, data, error }: QueryResponseType =
    useQuery({
      queryKey: ['movies', 2020],
      queryFn: ({ queryKey }) => fetchMoviesByReleaseDate(queryKey[1]),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  console.log(data);

  return <p>{data?.title}</p>;
};

