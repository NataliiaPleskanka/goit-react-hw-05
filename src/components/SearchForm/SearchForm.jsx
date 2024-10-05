import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "../SearchBar/SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formValue = form.elements.search.value.trim();

    if (formValue === "") {
      return toast.error("Please, specify your request.", {
        position: "top-right",
      });
    }
    onSubmit(formValue);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.inputWrapper}>
        <button className={css.btn} type="submit">
          <FaSearch size="18px" />
        </button>
        <input
          className={css.input}
          type="text"
          placeholder="Search movies..."
          name="search"
        />
      </div>
    </form>
  );
}

export default SearchBar;
