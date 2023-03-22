import isEmpty from 'lodash/isEmpty';
import tw from 'tailwind-styled-components';
import HeaderContainer from '../components/header/headerContainer';
import SearchBar from '../components/search/searchBar';
import SearchResultsContainer from '../components/search/searchResultsContainer';
import SectionTitle from '../components/shared/sectionTitle';
import React, {useState} from 'react';
import { useFilterResultsByName } from '../hooks/useFilterResultsByName';
import { useFilterResultsByYear } from '../hooks/useFilterResultsByYear';

function HomePage() {
  const [filterValue, setFilterValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('');
  const { data: moviesByName } = useFilterResultsByName(filterValue);
  const { data: moviesByYear } = useFilterResultsByYear(selectValue);

  const getTitle = () => {
    if(!isEmpty(moviesByName?.results) || !isEmpty(moviesByYear?.results)) {
      return 'See results';
    }

    return 'Most Popular';
  };

  return (
    <Page>
      <HeaderContainer />
      <Container>
        <SearchBar
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e?.target?.value)}
          handleSelect={(e: React.ChangeEvent<HTMLInputElement>) => setSelectValue(e?.target?.value)}
        />
        <SectionContainer>
          <SectionTitle title={getTitle()} size='text-3xl' />
          <SearchResultsContainer query='popular' movies={moviesByName?.total_results > 0 ? moviesByName : moviesByYear}/>
        </SectionContainer>
      </Container>
    </Page>
  );
}

const Page = tw.div`
  h-full
  bg-neutral
  pb-24
`;

const Container = tw.div`
  container
  mx-auto
`;

const SectionContainer = tw.div`
  !bg-neutral
  rounded-lg
`;

export default HomePage;
