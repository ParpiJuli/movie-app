import { useQuery } from 'react-query';
import { fetchMoviesByReleaseDate } from '../services/fetchMoviesServices';
import { QueryResponseType } from '../types/Queries';

export const useFilterResultsByYear = (year: string) => {
  const { isLoading, isError, data, error }: QueryResponseType = useQuery({
    queryKey: ['filterResultsByName', year],
    queryFn: ({ queryKey }) => fetchMoviesByReleaseDate(queryKey[1]),
  });
  console.log(data);
  return { isLoading, isError, data, error };
};
