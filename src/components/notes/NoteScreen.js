import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input 
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
            ></input>
            <textarea 
                className='notes__textarea' 
                placeholder='Whats happen today?'>

            </textarea>
            <div className='notes__image'>
                <img
                    src='https://fondosmil.com/fondo/4278.jpg'
                    alt='imagen'
                ></img>
            </div>
        </div>
    </div>
  )
}
