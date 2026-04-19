import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./userSlice";

const AuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(
                    addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                }));
            } else {
                dispatch(removeUser());
            }
        });

        // unsubscribes when component unmounts
        return () => unsubscribe();
    }, []);

    return null;
};

export default AuthListener;