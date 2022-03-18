import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children, loggIn}) => {
  

  return loggIn ? children : <Navigate to='/auth/login'></Navigate>
}
