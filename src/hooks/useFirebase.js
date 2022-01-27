import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../firebase/firebase.init";
authInit();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const providerGoogle = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, providerGoogle)
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsloading(false)
        })

        return () => unsubscribe;
    }, [auth])
    const logOut = () => {
        setIsloading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            setUsers({})
        })
            .finally(() => setIsloading(false))
    }
    return {
        users,
        setUsers,
        error,
        setError,
        isLoading,
        setIsloading,
        signInUsingGoogle,
        logOut

    }
}
export default useFirebase;