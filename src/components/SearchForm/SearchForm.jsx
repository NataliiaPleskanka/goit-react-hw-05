import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    searchParams.set("movie", event.target.elements.movie.value);
    setSearchParams(searchParams);

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="movie"
        autoComplete="off"
        placeholder="Enter title of movies"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
