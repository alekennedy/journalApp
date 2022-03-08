import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistreScreen } from '../components/auth/RegistreScreen'

export const AuthRouter = () => {
  return (
      <div className='auth__main'>
        <div className='auth__box-container'>
          <Routes>            
              <Route path='login' element={<LoginScreen></LoginScreen>}></Route>            
              <Route path='register' element={<RegistreScreen/>}></Route>
              <Route index element={<LoginScreen/>}></Route>
          </Routes>   
        </div>
      </div>
  )
}
