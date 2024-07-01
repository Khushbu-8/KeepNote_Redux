export const Add_Note = (data) =>{
    return {
        type: 'ADD_NOTE',
        payload: data

    }


}
export const View_Note = (data) =>{
    return {
        type: 'VIEW_NOTE',
        payload: data

    }
}
export const Delete_Note = (id) =>{
    return {
        type: 'DELETE_NOTE',
        payload: id
    }
}

