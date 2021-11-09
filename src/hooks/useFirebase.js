import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();



    /************** Google sign in *******/

    const signInUsingGoogle = (location, history) => {
        setLoading(true);
        setError("");
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result?.user);

            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    // ***************By Email Register in************* 

    const registration = (email, password, name, history) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                //send Name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace("/")
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }


    //*****************By email Log In*************/

    const logIn = (email, password, location, history) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const destination = location?.state?.from || "/";
                history.replace(destination)
                setError("");
            })
            .catch(error => {
                setError(error.message)

            }).finally(() => {
                setLoading(false);
            })
    }


    /*********Log Out Function**************/

    const logOut = () => {
        setLoading(true);
        setError("");
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        })

    }


    //*********User State Observer**********
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        registration,
        logOut,
        logIn,
        isLoading,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;