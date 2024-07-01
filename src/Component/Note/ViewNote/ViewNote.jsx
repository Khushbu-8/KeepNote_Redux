import React, { useEffect } from 'react'
import './Viewnote.css'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_Note, View_Note } from '../../../Redux/Action/NoteAction';

import { MdDeleteForever } from "react-icons/md";

const ViewNote = () => {
    const dispatch = useDispatch();
    const AllNotes = useSelector(state => state.note.NoteList);
    useEffect(() => {
        dispatch(View_Note())
    }, [])

    // Delet Note
    const DeletNotes = (id) =>{
        dispatch(Delete_Note(id))
    }
    return (
        <div>
            <div className="mt-4">
                <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                    {
                        AllNotes.map((item, index) => {
                            return (
                                <div className="col-3 p-2" key={index}>
                                    <div className="note shadow">
                                        <div className="card-body p-3">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text py-3 ">{item.description}</p>
                                            <div className="del d-flex  justify-content-end">
                                                <button onClick={() => DeletNotes(index)} className='btn fs-3 bg-warning d-flex justify-content-center align-items-center text-white'><MdDeleteForever /></button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ViewNote
