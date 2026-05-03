import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import {useSelector} from "react-redux";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    return (
        <>
            <Header />

            {
                showGptSearch ? <GptSearch /> : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }
            {/*
                MainContainer
                - VideoBackground
                - VideoTitle
                SecondaryContainer
                - MovieList * n
                 - cards * n
            */}
        </>

    )
}
export default Browse;