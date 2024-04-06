// import firebase from 'firebase/app'; 
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionType";
import { Provider } from "react-redux";


export const login = () => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const response = await signInWithPopup(auth, provider);
        // const accessToken = await response.accessToken;
        const user = response.user;
        const accessToken = await user.getIdToken();
        const profile = {
            name: user?.displayName,
            photoURL: user?.photoURL
        }

        sessionStorage.setItem('profile', JSON.stringify(profile));
        sessionStorage.setItem('accessToken', accessToken);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: { accessToken, user }
        });
        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}


export const logout = () => async (dispatch) => {
    await auth.signOut();
    dispatch({ type: LOGOUT })
    sessionStorage.removeItem('profile')
    sessionStorage.removeItem('accessToken')
}