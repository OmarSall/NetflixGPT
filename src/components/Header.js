import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {LOGO} from "../utils/constants";

const Header = () => {
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
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex">
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