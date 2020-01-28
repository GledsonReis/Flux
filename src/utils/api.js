import Actions from '../actions/Actions';
import { create } from 'apisauce';

class API {
  async searchMovies(movie) {
    const api = create({
      baseURL: 'https://omdbapi.com/?apikey=cba7d66b&s=',
    })

    const response = await api.get(movie.title)

    let movies = (response.data.Search ? response.data.Search : []);
    Actions.showMovieResults(movies);
  }
}
export default new API();