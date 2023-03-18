import { useQuery } from 'react-query';
import { fetchAllMovies } from '../services/fethAllMovies';
import { QueryResponseType } from '../types/Queries';

export const SampleComponent = () => {
  const { isLoading, isError, data, error }: QueryResponseType = useQuery('movies', fetchAllMovies);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);

  return <p>{data?.title}</p>;
};

