import Header from "./Header";
import {useEffect, useRef, useState} from "react";
import {validateSignUp, validateSignIn} from "../utils/validate";
import {auth} from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {USER_AVATAR} from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        if (user) {
            navigate("/browse");
        }
    }, [user, navigate])

    const toggleSignInForm = () => {
        setIsSignInForm((prev) => !prev);
        setErrorMessage(null);
    };

    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current?.value;

        const message = isSignInForm
            ? validateSignIn(email, password)
            : validateSignUp(name, email, password);

        if (message) {
            setErrorMessage(message);
            return;
        }

        setErrorMessage(null);

        const authAction = isSignInForm
            ? signInWithEmailAndPassword(auth, email, password)
            : createUserWithEmailAndPassword(auth, email, password);

        authAction
            .then((userCredential) => {
                updateProfile(
                    user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                });
                console.log(
                    isSignInForm ? "Sign In Success:" : "Sign Up Success:",
                    userCredential.user
                );
                navigate("/browse")
            })
            .catch((error) => {
                setErrorMessage(`${error.code} - ${error.message}`);
            });
    };

    return (
        <div className="relative min-h-screen">
            <Header/>

            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/PL-pl-20260323-TRIFECTA-perspective_120a4779-e880-4bb7-8e1e-10d3b5e1b47a_large.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-1/4 p-12 bg-black bg-opacity-70 text-white rounded"
                >
                    <h1 className="font-bold py-3 mb-4 text-3xl">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    {!isSignInForm && (
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Full name"
                            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                        />
                    )}

                    <input
                        ref={emailRef}
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                    />

                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                    />

                    <p className="text-red-500 font-bold text-lg py-2">
                        {errorMessage}
                    </p>

                    <button
                        type="submit"
                        onClick={handleButtonClick}
                        className="w-full p-3 bg-red-600 rounded hover:bg-red-700 transition"
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p
                        className="py-4 cursor-pointer"
                        onClick={toggleSignInForm}
                    >
                        {isSignInForm
                            ? "New to Netflix? Sign up now"
                            : "Already registered? Sign In now."}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;