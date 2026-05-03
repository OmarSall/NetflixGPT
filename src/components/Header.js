import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LOGO} from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened
            navigate("/error")
        });
    }

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    return (
        <div className="absolute w-screen px-8 py-2 mx-4 my-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex">
                    <button
                        className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        GPT Search
                    </button>
                    <img
                        className="w-20 h-20 p-2 rounded"
                        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                        alt="user-icon"
                    />
                    <button onClick={handleSignOut}>
                        (Sign out)
                    </button>
                </div>
            )}
        </div>
    )
}
export default Header;