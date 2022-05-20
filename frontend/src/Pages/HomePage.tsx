import React from "react";
import {useGetMovie} from "../Hook/useGetMovieList";
import MovieList from "../Component/MovieList";
import {useEffect, useState} from "react";

export const HomePage = () => {
  const [movieList, setMovieList] = useState<any[]>([])
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)


  const getMovieList = useGetMovie();

  useEffect(() => {
    getMovieList()
        .then(data => {
            setMovieList(data.results)
            setNeedsUpdate(false)
        })
  }, [needsUpdate])

  return (
    <>
      <MovieList movieList={movieList}/>
    </>
  )
}