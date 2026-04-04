import Header from "./Header";
import {useState} from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

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
                    <h1 className="font-bold py-3 mb-4 text-3xl">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {
                        !isSignInForm && (
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full p-2 mb-4 rounded bg-gray-700 text-black"
                            />
                        )
                    }
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
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="py-4 cursor-pointer"
                       onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In now."}
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login;