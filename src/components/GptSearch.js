import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    src={BG_URL}
                    alt="background"
                    className="h-screen object-cover md: w-full h-full object-cover"
                />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </div>
    )
}
export default GptSearch