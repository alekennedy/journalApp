import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterUserData } from '../../actions/auth';


export const RegistreScreen = () => {

  const dispatch = useDispatch();

  const {msgError} = useSelector( state => state.ui);



  const [formValues, handleInputChange] = useForm({
    name:'Alejandro',
    email: 'ale01@email.com',
    password1:'123456',
    password2:'123456'
  })
  
  const {name, email, password1, password2} = formValues;

  const handleRegister = (e)=>{
    e.preventDefault();   
    if(isFormValid()) {
      dispatch(startRegisterUserData(email, password1, name));
    }else{
      console.log('datos invalidos');
    }
    
  }

  const isFormValid = ()=>{
    if(name.trim().length === 0){
      dispatch(setError('El nombre es invalido'));
      return false;
    }else if(!validator.isEmail(email)){
      dispatch(setError('El email es invalido'));
      return false;
    }else if(password1 !== password2 || password1.lenght < 5){
      dispatch(setError('Las contraseñas no coinciden o no cumplen los requisitos'));
      return false;
    }
    
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>  
      <form onSubmit={handleRegister}>
        {
          msgError && (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          )
          
        }
        

        <input 
          type='text' 
          placeholder='Name' 
          name='name'
          autoComplete='off'
          className='auth__input'
          value={name}
          onChange={handleInputChange}></input>
        <input 
          type='text' 
          placeholder='Email' 
          name='email'
          autoComplete='off'
          className='auth__input'
          value={email}
          onChange={handleInputChange}></input>
        <input 
          type='password' 
          placeholder='Password' 
          name='password1'
          className='auth__input'
          value={password1}
          onChange={handleInputChange}></input>
        <input 
          type='password' 
          placeholder='Confirm password' 
          name='password2'
          className='auth__input'
          value={password2}
          onChange={handleInputChange}></input>

          <button className='btn btn-primary btn-block mt-5 mb-5' type='submit'>Login</button>          
                     
          
          <Link className='link' 
            to='/auth/login'>
              Already registered?
          </Link>
      </form>
    </>
  )
}
