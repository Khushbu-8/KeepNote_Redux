import React, { useState } from 'react'
import './Addnote.css'
import { useDispatch } from 'react-redux';
import { Add_Note } from '../../../Redux/Action/NoteAction';

const AddNote = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const dispatch = useDispatch()
    const hendeleSubmit =(e) =>{
        e.preventDefault()
        if(!title || !description){
            alert("Title or Description cannot be blank");
            return false;
        }
        let obj = {
            id : Math.floor(Math.random()*100),
             title,
            description,

        }
       dispatch(Add_Note(obj))
        setTitle("");
        setDescription("");


    }
  return (
    <div>
        <div className="note-section w-50" >
            <h4 className="mb-4">Add a Note</h4>
         <form action="" onSubmit={hendeleSubmit} >
         <div className="mb-3">
            <input placeholder='Title' className="form-control" type="text" onChange={(e) => setTitle(e.target.value)}  value={title} />
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="addedtext" placeholder="Write note here..." onChange={(e) => setDescription(e.target.value)}  value={description}></textarea>
            </div>
            <div className="add-button ">
                <button type='submit' className="btn btn-warning text-white">Add</button>
            </div>
         </form>
        </div>
    </div>
  )
}

export default AddNote
