const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-xl md: text-6xl font-bold">{title}</h1>
            <p className="hidden md: inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 md: m-0">
                <button className="bg-white text-black p-4 px-12 w-15 rounded-lg hover:bg-opacity-80">
                    Play ▶️
                </button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 w-15 bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;