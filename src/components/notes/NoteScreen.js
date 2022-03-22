import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const {active:note} =useSelector(state => state.notes);
    const [fromValues, handleInputChange, reset] = useForm(note);
    const {body, title} = fromValues;
    const activeId = useRef(note.id);

    useEffect(()=>{
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    },[note, reset]);

    useEffect(()=>{
        dispatch(activeNote(fromValues.id, {...fromValues}));
    }, [fromValues,dispatch])
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input 
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
                name='title'
                value={title}
                onChange={handleInputChange}
            ></input>
            <textarea 
                className='notes__textarea' 
                placeholder='Whats happen today?'
                name='body'
                value={body}
                onChange={handleInputChange}>

            </textarea>
            { 
                note.url &&
                    <div className='notes__image'>
                        <img
                            src='https://fondosmil.com/fondo/4278.jpg'
                            alt='imagen'
                        ></img>
                    </div>
            }
        </div>
    </div>
  )
}
