import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    if (!movies) return null;

    return (
        <div className="px-6">
            <h1 className="text-3xl font-bold py-6 text-white">{title}</h1>
            <div className="w-full">
                <div
                    className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide"
                    onWheel={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        e.currentTarget.scrollLeft += e.deltaY;
                    }}
                >
                    {movies.map(movie => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default MovieList;