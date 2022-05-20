import { Link } from "react-router-dom"

export default function MovieList({movieList}: any) {
    
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les films</h1>
            <div className="row g-5">
                    {movieList.map((movie: any) => (
                        <div className="col-4">
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
