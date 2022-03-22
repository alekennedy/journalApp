import Swal from "sweetalert2";
import { loadNotes } from "../components/helpers/loadNotes";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startNewNote = ()=>{

    return async (dispatch, getState) =>{
        const {uid} = getState().auth;
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        
        dispatch(activeNote(docRef.id, newNote));

    }
}

export const activeNote = (id, note)=>{
    return {
        type: types.notesActive,
        payload:{
            id,
            ...note
        }
    }
}

export const startLoadingNotes = (uid)=>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes)=>{
    return {
        type: types.notesLoad,
        payload: notes
    };
}

export const refreshNote = (noteId, note) =>{
    return {
        type: types.notesUpdated,
        payload:{
            noteId, 
            note: {
                id:noteId,
                ...note
            }
        }
    }
}

export const startSaveNotes = (note)=>{
    return async (dispatch, getState)=>{
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        try {
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);    
            dispatch(refreshNote(note.id, noteToFirestore));
            Swal.fire('Saved', note.title,'success');
        } catch (error) {
            Swal.fire('Error',`Error al guardar ${note.title}`,'error');
        }
        


    }
}