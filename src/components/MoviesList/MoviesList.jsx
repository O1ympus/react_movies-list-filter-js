import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filterMovie(query, arr) {
  return arr.filter(
    movie =>
      movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(query.trim().toLowerCase()),
  );
}

export const MoviesList = ({ query, movies }) => (
  <div className="movies">
    {filterMovie(query, movies).map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
