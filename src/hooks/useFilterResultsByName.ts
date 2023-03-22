import { useQuery } from 'react-query';
import { fetchMoviesByNameSearch } from '../services/fetchMoviesServices';
import { QueryResponseType } from '../types/Queries';

export const useFilterResultsByName = (filterValue: string) => {
  const { isLoading, isError, data, error }: QueryResponseType = useQuery({
    queryKey: ['filterResultsByName', filterValue],
    queryFn: ({ queryKey }) => fetchMoviesByNameSearch(queryKey[1]),
  });
  return { isLoading, isError, data, error };
};
