const API_KEY = process.env.REACT_APP_API_URL;
const baseAPi = 'https://api.themoviedb.org/3';

export const getOneApiUrl = (path: string | number) => {
  return `${baseAPi}/movie/${path}?api_key=${API_KEY}`;
};

export const getMoviesKeywordApiUrl = (keyword: string) => {
  return `${baseAPi}/search/movie?api_key=${API_KEY}&query=${keyword}`;
};

// TODO

export const getMoviesByReleaseDate = (searchYearfrom: string | number, searchYearTo?:string | number) => {
  const searchDateLimit = searchYearTo ?? new Date().getFullYear();

  return `${baseAPi}/discover/movie?api_key=${API_KEY}&release_date.gte=${searchYearfrom}&release_date.lte=${searchDateLimit}`;
};

export const getMoviesByGenderApiUrl = (genreId: number) => {
  return `${baseAPi}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
};

export const getMoviesByRateApiUrl = (rate: number) => {
  return `${baseAPi}/discover/movie?api_key=${API_KEY}&vote_average.gte=${rate}`;
};
