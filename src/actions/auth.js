import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import {types} from '../types/types';
import { uiFinishLoading, uiStartLoading } from './ui';

export const startLoginWithEmailPassword = (email, password)=>{
    return (dispatch)=>{
        dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
            })
            .catch((err)=>{
                dispatch(uiFinishLoading());                
                console.log(err);
                Swal.fire('Error','El usuario o password es incorrecto!','error');
            });
        
    }
}

export const login = (uid, displayName)=>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = ()=>{
    return async (dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = ()=>{
    return {
        type: types.logout
    }
}




export const startRegisterUserData = (email, password, name)=>{
    return (dispatch)=>{
        dispatch(uiStartLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user})=>{
                await user.updateProfile({displayName:name});
                dispatch(login(user.uid, user.displayName));
                dispatch(uiFinishLoading());
            }).catch((err)=>{
                console.log(err);
                Swal.fire('Error','El usuario ya existe!','error');
            });
    }
}

export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        dispatch(uiStartLoading());
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(uiFinishLoading());
            });
    }
}