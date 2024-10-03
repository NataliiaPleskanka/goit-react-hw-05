import {
  NavLink,
  Link,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { fetchMovieById } from "../../services/tmdb-api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong! Please try again later.</p>;

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <>
      <Link to={location.state?.from ?? "/"}>Go back</Link>
      <div>
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
        <div>
          <h1>{movie.title}</h1>
          <p className={css.title}>
            User Score:{" "}
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>
          <h2>Overview</h2>
          <p className={css.title}>{movie.overview}</p>
          <div className={css.genres}>
            <h3>Genres</h3>
            <p>
              {movie.genres
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </p>
          </div>
        </div>
      </div>

      <div className={css.navLinks}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
