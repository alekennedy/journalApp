import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { JornalScreen } from '../components/jornal/JornalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggerdIn, setLoggedIn] = useState(false);

  useEffect( ()=>{
    firebase.auth().onAuthStateChanged( (user)=> {
        if(user?.uid){
          dispatch(login(user.uid, user.displayName));
          setLoggedIn(true);
        }else{
          setLoggedIn(false);
        }
        setChecking(false);
    });
  }, [dispatch,checking]);

  if(checking){
    return(
      <h1>Espere...</h1>
    )
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/*' element={<PublicRoutes loggIn = {isLoggerdIn}><AuthRouter></AuthRouter></PublicRoutes>}>
            </Route>
            <Route path='/main' element={<PrivateRoute loggIn = {isLoggerdIn}><JornalScreen></JornalScreen></PrivateRoute>}>                            
            </Route>
            <Route path='/*' element={<PrivateRoute loggIn = {isLoggerdIn}><JornalScreen></JornalScreen></PrivateRoute>}/> 
        </Routes>        
    </BrowserRouter>

  )
}
