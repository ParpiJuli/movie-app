export const fetchAllMovies = async() => {
  const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=d1631449efef72d4e1ac38a232e1daa8');
  return response.json();
};
