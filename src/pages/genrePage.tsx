import find from 'lodash/find';
import NavBar from '../components/navBar/navBar';
import SearchResultsContainer from '../components/search/searchResultsContainer';
import SectionTitle from '../components/shared/sectionTitle';
import tw from 'tailwind-styled-components';
import { fetchAllGenres } from '../services/fetchMoviesServices';
import { GenreType } from '../types/Movies';
import { useParams} from 'react-router-dom';
import { QueryResponseType } from '../types/Queries';
import { useQuery } from 'react-query';

function GenrePage() {
  const params = useParams();
  const { genre } = params;

  const { isLoading, isError, data, error }: QueryResponseType =
  useQuery({
    queryKey: ['currentGenre'],
    queryFn: () => fetchAllGenres(),
  });

  const getSelectedGenre = (genres: GenreType[]) => {
    return find(genres, (item) => item.name.toUpperCase() === genre?.toUpperCase());
  };
  const currentGenre = getSelectedGenre(data?.genres);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data.genres) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Container>
      <NavBar />
      <SectionTitle title={`${genre} movies`} isMainTitle={true} size='text-3xl'/>
      <SearchResultsContainer query={currentGenre?.id.toString() || ''} displayMoviesByGenre={true}/>
    </Container>
  );
}

const Container = tw.div`
  !bg-neutral
`;

export default GenrePage;
