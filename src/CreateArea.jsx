import React, { useState } from 'react';
import {Fab,Zoom} from '@material-ui/core';
import { Add } from '@material-ui/icons';

const CreateArea = ({addNote}) => {
    const [isExpanded,setIsExpanded] = useState(false);
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    const expand = () => {
        setIsExpanded(true);
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            }
        });  
    }
    const submitNote = (event) => {
        addNote(note);
        setNote({
            title:"",
            content:"",
        });
    }
    
  return (
    <div>
      <form className='create-note'>
        {isExpanded && (<input type='text' name="title" placeholder='Title' value={note.title} onChange={handleChange}/>)}
        <textarea type="text" name="content" placeholder='Take a note...' rows={isExpanded ? 3:1} onClick={expand} value={note.content} onChange={handleChange}/>
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
                <Add></Add>
            </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea;
