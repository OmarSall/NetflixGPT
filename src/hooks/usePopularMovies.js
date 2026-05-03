import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addPopularMovies} from "../utils/moviesSlice";
import {useEffect} from "react";


const usePopularMovies =  () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;