import React from 'react';
import SelectSearchField from './selectSearchField';
import tw from 'tailwind-styled-components';
interface SearchBarType {
  handleChange: React.ChangeEventHandler,
  handleSelect: React.ChangeEventHandler
}

function SearchBar({handleChange, handleSelect}: SearchBarType) {
  return (
    <Section>
      <SearchInputContainer>
        <SearchInput
          type="text"
          id="simple-search"
          placeholder='Search by name...'
          onChange={(e) => handleChange(e)}
        />
      </SearchInputContainer>

      <SearchInputContainer>
        <SelectSearchField handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSelect(e)}/>
      </SearchInputContainer>
    </Section>
  );
}

const Section = tw.div`
  bg-blue
  rounded-full
  h-[80px]
  !max-w-screen
  relative
  z-10
  drop-shadow-xl
  -m-10
  flex
  mx-auto
  justify-between
`;

const SearchInput = tw.input`
  flex
  border-0
  justify-start;
  px-2
  py-4
  sm:px-2
  lg:px-5
  text-sm
  max-w-[100px]
  sm:max-w-fit
  md:text-md
  focus:outline-none
`;

const SearchInputContainer = tw.div`
  bg-neutral
  px-2
  mx-2
  md:mx-10
  my-auto
  rounded-full
`;

export default SearchBar;
