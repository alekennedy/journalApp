import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({children, loggIn}) => {
  const {uui} = useSelector(state => state.auth);
  return !loggIn ? children : <Navigate to='/'></Navigate>
}
