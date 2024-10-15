
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";



function App() {
  const [query, setQuery, error] = useSearch();
  const {movies, getMovies} = useMovies({query});
  

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  }

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(event.target.value);
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
