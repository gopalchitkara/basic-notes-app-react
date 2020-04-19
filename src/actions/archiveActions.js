export const deleteArchive = (id) => {
    return{
        type: 'DELETE_ARCHIVE',
        id
    }
}

export const moveArchiveToNotes = (id) => {
    return{
        type: 'MOVE_ARCHIVE',
        id
    }
}

export const updateArchive = (id, title, body) => {
    return{
        type: 'UPDATE_ARCHIVE',
        id,
        title,
        body
    }
}