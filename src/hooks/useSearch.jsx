import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('');
    const isFirstRender = useRef(true);
  
      useEffect(() => {
  
        //to know if it's the first time to render
        if (isFirstRender.current) {
          isFirstRender.current = query === '';
          return
        }
  
        if (query === "") {
        setError('Please enter a movie title')
        return
        }
  
        if (query.match(/^\d+$/)) {
        setError('Numeric value not valid')
        return
        }
  
        if (query.length < 3) {
        setError('Movie title must have at least 3 characters')
        return
        }
  
        setError(null)
      },[query])
      
   
  
    return [query, setQuery, error]
  }