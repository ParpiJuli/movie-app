import MovieDetailsCard from '../components/movieDetails/movieDetailsCard';
import NavBar from '../components/navBar/navBar';
import SearchResultsContainer from '../components/search/searchResultsContainer';
import tw from 'tailwind-styled-components';
import SectionTitle from '../components/shared/sectionTitle';
import { getMoviePoster } from '../services/getApiUrls';
import { getReleaseYear } from '../utils/getReleaseYear';

function StorybookPage() {

  const genres = [
    {
        id: 18,
        name: 'Drama'
    },
    {
        id: 53,
        name: 'Thriller'
    },
  ];

  return (
    <PageContainer>
      <NavBar />
      <Container>
        <SectionTitle title='Storybook' size='text-3xl' isMainTitle={true}/>

        <SectionTitle title='This is the section title component' size='text-3xl' />

        <SectionContainer>
          <SectionTitle title='This is the Navbar' size='text-3xl' />
          <NavBar />
        </SectionContainer>

        <SectionContainer>
          <SectionTitle title='This is the Search results container' size='text-3xl' />
          <SearchResultsContainer query='popular'/>
        </SectionContainer>


        <SectionContainer>
          <SectionTitle title='This is the Movie details card' size='text-3xl' />
            <MovieDetailsCard
              title='Fight Club'
              release_date={`(${getReleaseYear('2018-03-09')})`}
              overview='A young mother-in-law falls in love with her daughter`s boyfriend.'
              genres={genres}
              poster_path={getMoviePoster('/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg')}
              popularity={86.109}
              vote_average={8.431}
              vote_count={26046}
              id={550}
            />
        </SectionContainer>
      </Container>
    </PageContainer>
  );
}

const PageContainer = tw.div`
  mb-5
`;

const Container = tw.div`
  container
  mx-auto
  my-10
`;

const SectionContainer = tw.div`
  !bg-neutral
  rounded-lg
  my-20
`;

export default StorybookPage;
