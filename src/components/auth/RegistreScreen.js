import React from 'react'
import { Link } from 'react-router-dom'

export const RegistreScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>  
      <form>
        <input 
          type='text' 
          placeholder='Name' 
          name='name'
          autoComplete='off'
          className='auth__input'></input>
        <input 
          type='text' 
          placeholder='Email' 
          name='email'
          autoComplete='off'
          className='auth__input'></input>
        <input 
          type='password' 
          placeholder='Password' 
          name='password'
          className='auth__input'></input>
        <input 
          type='password' 
          placeholder='Confirm password' 
          name='password2'
          className='auth__input'></input>

          <button className='btn btn-primary btn-block mt-5 mb-5' type='submit'>Login</button>          
                     
          
          <Link className='link' 
            to='/auth/login'>
              Already registered?
          </Link>
      </form>
    </>
  )
}
