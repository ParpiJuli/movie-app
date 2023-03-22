import { useQuery } from 'react-query';
import { fetchMoviesByReleaseDate } from '../services/fetchMoviesServices';
import { QueryResponseType } from '../types/Queries';

export const useFilterResultsByYear = (yearFrom: string) => {
  const { isLoading, isError, data, error }: QueryResponseType = useQuery({
    queryKey: ['filterResultsByName', yearFrom],
    queryFn: ({ queryKey }) => fetchMoviesByReleaseDate(queryKey[1]),
  });
  return { isLoading, isError, data, error };
};
