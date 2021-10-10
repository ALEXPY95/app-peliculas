import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";



export function MoviesGrid() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const search = query.get("search")

  useEffect(() => {
    setLoading(true)
    const searchUrl = search? "/search/movie?query=" + search
    : "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results)
      setLoading(false)
    })
  }, [search])

  if(loading){
    return <Spinner />
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}