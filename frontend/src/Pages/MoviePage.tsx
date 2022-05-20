import React from "react";
import { useParams } from "react-router-dom"
import {useGetMovie} from "../Hook/useGetMovieList";
import Movie from "../Component/Movie";
import {useEffect, useState} from "react";

export const MoviePage = () => {
  const [movieList, setMovieList] = useState<any[]>([])
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

  const params = useParams();


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
      <Movie />
    </>
  )
}