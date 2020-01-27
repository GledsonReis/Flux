import Actions from '../actions/Actions';
const $ = window.jQuery

class API {
  searchMovies(movie) {
    $.ajax({
      url: 'https://omdbapi.com/?apikey=YOURAPIKEY&s=' + movie.title,
      dataType: 'json',
      cache: false,
      success(data) {
        let movies = (data.Search ? data.Search : []);
        Actions.showMovieResults(movies);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
}
export default new API();