import React from 'react'

 let initialState = {
   NoteList :JSON.parse(localStorage.getItem ("note")) ? JSON.parse(localStorage.getItem('note')) : [],

}

const NoteReduser = (state = initialState,action) =>{
    switch(action.type){
        case 'ADD_NOTE':
            let List = action.payload;
            let Newstate = [...state.NoteList,List];
            localStorage.setItem('note',JSON.stringify(Newstate));
            return{
                ...state,
                NoteList:Newstate
            }

        case 'VIEW_NOTE':
           return state

            case 'DELETE_NOTE':
                let id = action.payload
                let del = [...state.NoteList.filter((val,index)=> index !== id)]
                localStorage.setItem("note", JSON.stringify(del))
                return{
                    ...state,
                    NoteList:del
                    }
         default:
                return state
    }
}
export default NoteReduser;