import ErrorPage from './errorPage';
import isNil from 'lodash/isNil';
import MovieDetailsCard from '../components/movieDetails/movieDetailsCard';
import NavBar from '../components/navBar/navBar';
import SearchResultsContainer from '../components/search/searchResultsContainer';
import SectionTitle from '../components/shared/sectionTitle';
import tw from 'tailwind-styled-components';
import { useParams} from 'react-router-dom';
import { QueryResponseType } from '../types/Queries';
import { useQuery } from 'react-query';
import { fetchMovieById } from '../services/fetchMoviesServices';
import { getMoviePoster } from '../services/getApiUrls';
import { getReleaseYear } from '../utils/getReleaseYear';

function DetailsPage() {
  const params = useParams();
  const { id } = params;

  if(isNil(id)) {
    return <ErrorPage />;
  }

  const { isLoading, isError, data, error }: QueryResponseType =
  useQuery({
    queryKey: ['currentMovie', id],
    queryFn: ({ queryKey }) => fetchMovieById(queryKey[1]),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !id) {
    return <span>Error: {error?.message}</span>;
  }

  const suggestedMoviesByGenre = data.genres[0].id.toString();

  return (
    <Container className="App">
      <NavBar />
      <DetailsContainer>
        <MovieDetailsCard
          genres={data.genres}
          id={data.id}
          title={data.title}
          overview={data.overview}
          popularity={data.popularity}
          poster_path={getMoviePoster(data.poster_path)}
          release_date={`(${getReleaseYear(data.release_date)})`}
          vote_average={data.vote_average}
          vote_count={data.vote_count}
        />

        <SectionTitle title={`Other ${data.genres[0].name} Films`} isMainTitle={true} size='text-2xl'/>
        <SearchResultsContainer query={suggestedMoviesByGenre} displayMoviesByGenre={true}/>
      </DetailsContainer>

    </Container>
  );
}

const Container = tw.div`
  !bg-neutral
`;

const DetailsContainer = tw.div`
  !bg-neutral
  rounded-lg
  m-20
`;

export default DetailsPage;
