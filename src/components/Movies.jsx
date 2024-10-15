 export const MoviesRendering = ({movies}) => {
    return <ul className="movies">
         {
               movies.map((movie) => (
                 <li className="movie" key={movie.id}>
                   <h3>{movie.title}</h3>
                   <p>{movie.year}</p>
                   <img src={movie.poster} alt={movie.title} />
                 </li>
               ))
         }
     </ul>
   }
 

 export const NoMoviesResults = () => {
     return(<h4>No movies found</h4>) 
   }


export const Movies = ({movies}) => {
  const availableMovies = movies?.length > 0

  return (
    availableMovies ? (
      <MoviesRendering movies={movies} />
    ) : (
      <NoMoviesResults />
    )
  )
}
