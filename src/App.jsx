import React, { useState } from 'react';
import "./App.css";
import Header from './header';
import CreateArea from './CreateArea';
import Note from "./Note";

const App = () => {
  const [notes,setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return[...prevNotes,newNote];
    });
  }

  const deleteNote = (id) =>{
      setNotes((prevNotes) => {
        return prevNotes.filter((item,index)=> {
          return index !== id;
        });
      });    
  }
  
  return (
    <div>
      <Header/>
      <CreateArea addNote = {addNote} />
      {
        notes.map((notesItem,index) => {
          return(
            <Note key={index} title={notesItem.title} content={notesItem.content} deleteNote = {deleteNote} id={index}  />
          )
        })
      }
    </div>
  )
}

export default App
