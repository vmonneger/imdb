import { useParams } from "react-router-dom"
import {useGetMovieId} from "../Hook/useGetMovieList";
import {useEffect, useState} from "react";

export default function Movie({movie}: { movie: any }) {
    const [theMovie, setTheMovie] = useState({})


    const params = useParams();
    const getTheMovie = useGetMovieId(params.id)

    useEffect(() => {
        getTheMovie()
            .then(data => {
                setTheMovie(data)

            })
      }, [])
      
    return (
        <div className='bg-light rounded p-3 mb-3'>
            <h3>{theMovie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w300${theMovie.poster_path}`} alt="" />
            <p>
                <small>
                    Par : {theMovie.author}
                    <br/>
                    Le : {theMovie.release_date}
                </small>
            </p>
            <p>{theMovie.overview}</p>
        </div>
    )
}
