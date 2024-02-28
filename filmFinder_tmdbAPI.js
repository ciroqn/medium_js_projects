// Note front-end files not included here

const tmdbKey = 'apiKey';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

// GET fetch -- gets genres from TMDB using genre URL (see docs on TMDB)
const getGenres = async () => {
  // genre endpoint
  const genreRequestEndpoint = tmdbBaseUrl + '/genre/movie/list';
  const requestParams = '?api_key=' + tmdbKey;
  // construct url to pass to fetch()
  const urlToFetch = genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      // convert to JSON obj
      const jsonResponse = await response.json();
      // check if working
      // console.log(jsonResponse);
      // save genres property
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch(err) {
    console.log(err);
  }
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  // get endpoint
  const discoverMovieEndpoint = '/discover/movie';
  // search parameters setup
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  // url to pass to fetch()
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  // handle success/errors
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      // store results property of response obj
      const movies = jsonResponse.results;
      console.log(movies);
      return movies;
    }

  } catch (err) {
    console.log(err);
  }
};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
