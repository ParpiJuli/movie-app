import MovieCardsContainer from '../movieCards/movieCardsContainer';
import { fetchPopularMovies, fetchMoviesByGenre } from '../../services/fetchMoviesServices';
import { QueryResponseType } from '../../types/Queries';
import { SearchResultsType } from '../../types/Search';
import { useQuery } from 'react-query';
interface SearchContainerResultsType {
  query: string,
  displayMoviesByGenre?: boolean
  movies?: SearchResultsType
}

function SearchResultsContainer({query, displayMoviesByGenre, movies}: SearchContainerResultsType) {
  if(movies && movies?.total_results > 0) {
    return ( <MovieCardsContainer movies={movies.results} />);
  }

  const { isLoading, isError, data, error }: QueryResponseType =
  useQuery({
      queryKey: ['movies', query],
      queryFn: ({ queryKey }) => displayMoviesByGenre
        ? fetchMoviesByGenre(queryKey[1])
        : fetchPopularMovies(queryKey[1]),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return ( <MovieCardsContainer movies={data?.results} />);
}

export default SearchResultsContainer;
