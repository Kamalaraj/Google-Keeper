import { Delete } from '@material-ui/icons';
import React from 'react';

const Note = (props) => {
  return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>
            <Delete onClick={()=> props.deleteNote(props.id)}></Delete>
        </button>
    </div>
  )
}

export default Note;
