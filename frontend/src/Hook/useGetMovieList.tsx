import axios from "axios";

export const useGetMovie = () => {
    return (): Promise<any> => {
        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a5045d90dcaa3e66ea91eaba9bb77458&language=fr&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(res => res.data)
    }
}

export const useGetMovieId = (movieId: any) => {
    return (): Promise<any> => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a5045d90dcaa3e66ea91eaba9bb77458&language=fr`)
            .then(res => res.data)
    }
}
