import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <div className={css.gallery}>
      <ul className={css.movieList}>
        {movies.map((movie) => (
          <li className={css.movie} key={movie.id}>
            <Link
              className={css.movieLinks}
              to={`/movies/${movie.id}`}
              state={location}
            >
              <img
                className={css.poster}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                width={250}
                alt={movie.title}
              />
              <p className={css.title}> {movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
