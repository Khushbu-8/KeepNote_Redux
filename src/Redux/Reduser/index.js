    import { combineReducers } from "redux";
 import NoteReduser from "./NoteReduser";


const rootReduser =combineReducers ({
    note : NoteReduser
})
export default rootReduser