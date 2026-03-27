import Header from "./Header";

const Login = () => {
    return (
        <div className="relative min-h-screen">
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/PL-pl-20260323-TRIFECTA-perspective_120a4779-e880-4bb7-8e1e-10d3b5e1b47a_large.jpg"
                    alt="background-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form className="w-1/4 p-12 bg-black bg-opacity-70 text-white rounded">
                    <h1 className="font-bold p-4">Sign In</h1>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-2 mb-4 rounded bg-gray-700 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 rounded bg-gray-700 text-black"
                    />
                    <button className="w-full p-3 bg-red-600 rounded hover:bg-red-700 transition"
                            type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;