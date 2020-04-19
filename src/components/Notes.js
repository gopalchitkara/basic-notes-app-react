import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Notes extends Component {
    render() {
        const { notes } = this.props;
        const noteList = notes.length ? (
            notes.map(note => {
                return (
                    <div className="col s6 m4 l3 notes_note-wrapper" key={note.id}>
                        <Link to={'/note/' + note.id}>
                            <div className="notes_note ">
                                {note.title.length ? (
                                    <div className="notes_note-title ">
                                        <b>{note.title.slice(0, 20)}</b>
                                    </div>
                                ) : (
                                        null
                                    )}
                                {note.body.length ? (
                                    <div className="notes_note-body">
                                        {note.body.length > 140 ? (
                                            <p>
                                                {note.body.slice(0, 140) + '...'}
                                            </p>
                                        ) : (
                                                <p>
                                                    {note.body}
                                                </p>
                                            )}
                                    </div>
                                ) : (
                                        null
                                    )}
                            </div>
                        </Link>
                    </div>
                )
            })
        ) : (
                <div className="center"><h6>No Note Present...</h6></div>
            )

        const sortedNoteList = noteList.length ? (
            noteList.sort(function (a, b) { return a.key - b.key }).reverse()
        ) : (
                <div>No Note Present...</div>
            )

        return (
            <div className="content-component">
                <div className="container">
                    <div className="notes-container">
                        <div className="row">
                            <h3 className="left blue-text lblNotes">Notes</h3>
                        </div>
                        <div className="row">
                            {sortedNoteList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Notes);