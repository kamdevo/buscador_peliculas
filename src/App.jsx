
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useCallback, useEffect, useState } from "react";
import debounce from "just-debounce-it";


function App() {
  const [query, setQuery, error] = useSearch();
  const [sort, setSort] = useState(false);
  const {movies, getMovies} = useMovies({query, sort});


  const debouncedGetMovies = useCallback(
    debounce((query) => {
      getMovies({ query });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({query});
  }

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedGetMovies(newQuery);
  }

  const handleSort = () => {
    setSort(!sort);
  }


  return (
    <div className="section">
      <header>
        <h1>KamFlix</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" value={query} onChange={handleChange}
          type="text"
          placeholder="The Batman..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
