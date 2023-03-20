import { getOneApiUrl, getMoviesByGenderApiUrl, getMoviesKeywordApiUrl, getMoviesByReleaseDate } from './getApiUrls';

export const fetchPopularMovies = async(path: string) => {
  const response = await fetch(getOneApiUrl(path));
  return response.json();
};

export const fetchMovieById = async(id: number) => {
  const response = await fetch(getOneApiUrl(id));
  return response.json();
};

export const fetchMoviesByGenre = async(genreId: number) => {
  const response = await fetch(getMoviesByGenderApiUrl(genreId));
  return response.json();
};

export const fetchMoviesByNameSearch= async(keyword: string) => {
  const response = await fetch(getMoviesKeywordApiUrl(keyword));
  return response.json();
};


export const fetchMoviesByReleaseDate= async(searchYearfrom: string | number, searchYearTo?:string | number) => {
  const response = await fetch(getMoviesByReleaseDate(searchYearfrom, searchYearTo));
  return response.json();
};


export const fetchMoviesByRateDate= async(searchYearfrom: string | number, searchYearTo?:string | number) => {
  const response = await fetch(getMoviesByReleaseDate(searchYearfrom, searchYearTo));
  return response.json();
};
