import { searchMovies } from "../services/movies";
import { useState } from "react";
import { useRef } from "react";

export const useMovies = ({query}) => {
    const [movies, setMovies] = useState([])
    const previousQuery = useRef(query)
    const getMovies = async () => {
        if (query === previousQuery.current) return

        previousQuery.current = query
        const movies = await searchMovies({query})
        setMovies(movies)
    }

    return {movies, getMovies }
}