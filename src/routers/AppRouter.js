import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { JornalScreen } from '../components/jornal/JornalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect( ()=>{
    firebase.auth().onAuthStateChanged( (user)=> {
        if(user?.uid){
          dispatch(login(user.uid, user.displayName));
        }
    });
  }, []);

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/*' element={<AuthRouter></AuthRouter>}>
            </Route>
            <Route path='/main' element={<JornalScreen></JornalScreen>}>                            
            </Route>
            <Route path='/*' element={<JornalScreen></JornalScreen>}/>        
        </Routes>        
    </BrowserRouter>

  )
}
