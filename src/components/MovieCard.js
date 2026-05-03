import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null;
    return (
        <div className="w-48 flex-shrink-0">
            <img
                className="w-full rounded-md"
                alt="MovieCard"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    );
}
export default MovieCard;