
export const searchMovies = async ({query}) => {
    if (query === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=1c0a193b&s=${query}`)
        const data = await response.json()
        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }))

    } catch (e) {
        throw new Error('Error searching movies')
    }
}