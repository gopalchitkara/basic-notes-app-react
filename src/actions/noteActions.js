export const deleteNote = (id) => {
    return{
        type: 'DELETE_NOTE',
        id
    }
}

export const archiveNote = (id) => {
    return{
        type: 'ARCHIVE_NOTE',
        id
    }
}

export const updateNote = (id, title, body) => {
    return{
        type: 'UPDATE_NOTE',
        id,
        title,
        body
    }
}

export const addNewNote = (title, body) => {
    return{
        type: 'ADD_NEW_NOTE',
        title,
        body
    }
}
