const initState = {
    notes: [
        { "id": 3, "title": "Note 1", "body": "This is a sample note" },
        { "id": 4, "title": "Note 2", "body": "This is a sample note" },
        { "id": 5, "title": "Note 3", "body": "This is a sample note" },
        { "id": 6, "title": "Note 4", "body": "This is a sample note" },
        { "id": 7, "title": "Note 5", "body": "This is a sample note" },
        { "id": 8, "title": "Note 6", "body": "This is a sample note" },
        { "id": 9, "title": "Note 7", "body": "This is a sample note" },
        { "id": 10, "title": "Note 8", "body": "This is a sample note" },
        { "id": 11, "title": "Note 9", "body": "This is a sample note" },
        { "id": 12, "title": "Note 10", "body": "This is a sample note" },
        { "id": 13, "title": "Note 11", "body": "This is a sample note" },
        { "id": 14, "title": "Note 12", "body": "This is a sample note" },
        { "id": 15, "title": "Note 13", "body": "This is a sample note" },
        { "id": 16, "title": "Note 14", "body": "This is a sample note" },
    ],
    archives: [
        { "id": 1, "title": "Archived Note 1", "body": "This is sample archived note 1" },
        { "id": 2, "title": "Archived Note 2", "body": "This is sample archived note 2" },
    ],
    trash: []
}

const getIdForNewItem = (state) => {

    let maxIdInNotes = Math.max.apply(null, state.notes.map(item => item.id));
    let maxIdInArchives = Math.max.apply(null, state.archives.map(item => item.id));
    let maxIdInTrash = Math.max.apply(null, state.trash.map(item => item.id));

    return (Math.max((maxIdInNotes <= 0 ? 0 : maxIdInNotes),
                        (maxIdInArchives <= 0 ? 0 : maxIdInArchives), 
                        (maxIdInTrash <= 0 ? 0 : maxIdInTrash)))
                        + 1 ;
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_NEW_NOTE') {
        let newNote = {
            id: getIdForNewItem(state),
            title: action.title,
            body: action.body
        }
        return {
            ...state,
            notes: [...state.notes, newNote],
        };
    }
    else if (action.type === 'DELETE_NOTE') {
        let newNotes = state.notes.filter(note => {
            return action.id !== note.id
        })
        let newTrash = state.notes.find(note => {
            return action.id === note.id
        })
        return {
            ...state,
            notes: newNotes,
            trash: [...state.trash, newTrash]
        };
    }
    else if (action.type === 'ARCHIVE_NOTE') {
        let newNotes = state.notes.filter(note => {
            return action.id !== note.id
        })
        let newArchive = state.notes.find(note => {
            return action.id === note.id
        })
        return {
            ...state,
            notes: newNotes,
            archives: [...state.archives, newArchive]
        };
    }
    else if (action.type === 'UPDATE_NOTE') {
        let updatedNote = {
            id: action.id,
            title: action.title,
            body: action.body
        }
        let otherNotes = state.notes.filter(note => {
            return action.id !== note.id
        })
        let notes = [...otherNotes, updatedNote]

        return {
            ...state,
            notes: notes,
        };
    }
    else if (action.type === 'DELETE_ARCHIVE') {
        let newArchives = state.archives.filter(archive => {
            return action.id !== archive.id
        })
        let newTrash = state.archives.find(archive => {
            return action.id === archive.id
        })
        return {
            ...state,
            archives: newArchives,
            trash: [...state.trash, newTrash]
        };
    }
    else if (action.type === 'MOVE_ARCHIVE') {
        let newArchives = state.archives.filter(archive => {
            return action.id !== archive.id
        })
        let newNote = state.archives.find(archive => {
            return action.id === archive.id
        })
        return {
            ...state,
            archives: newArchives,
            notes: [...state.notes, newNote]
        };
    }
    else if (action.type === 'UPDATE_ARCHIVE') {
        let updatedArchive = {
            id: action.id,
            title: action.title,
            body: action.body
        }
        let otherArchives = state.archives.filter(archive => {
            return action.id !== archive.id
        })
        let archives = [...otherArchives, updatedArchive]

        return {
            ...state,
            archives: archives,
        };
    }
    else if (action.type === 'EMPTY_TRASH') {
        return {
            ...state,
            trash: [],
        };
    }

    return state;
}

export default rootReducer;