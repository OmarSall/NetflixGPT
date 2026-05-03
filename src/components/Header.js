import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LOGO, SUPPORTED_LANGUAGES} from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";

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

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
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
                    <select
                        className="p-2 m-2 bg-gray-900 text-white"
                        onChange={handleLanguageChange}
                    >
                        {
                            SUPPORTED_LANGUAGES.map((lang) => {
                                return (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                );
                            })
                        }
                    </select>
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