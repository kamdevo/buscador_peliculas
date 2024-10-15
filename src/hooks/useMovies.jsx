import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo, useCallback } from "react";

export const useMovies = ({query, sort}) => {
    const [movies, setMovies] = useState([])
    const previousQuery = useRef(query)

    const getMovies = useCallback( async ({query}) => {
            if (query === previousQuery.current) return
            //useCallback for functions
            previousQuery.current = query
            const movies = await searchMovies({query})
            setMovies(movies)
        } 
    ,[]) 

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
        : movies
    },[sort, movies])

    
    return {movies: sortedMovies, getMovies }
}