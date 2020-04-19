import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';
import { deleteNote, archiveNote, updateNote } from '../actions/noteActions'

class Note extends Component {

    state = {
        id: this.props.note.id,
        title: this.props.note.title,
        body: this.props.note.body
    }

    handleDeleteNote = () => {
        this.props.deleteNote(this.props.note.id);
        this.props.history.push('/');
        M.toast({ html: 'Note Deleted', classes: 'blue' });
    }

    handleDiscardNote = () => {
        this.props.history.push('/');
        M.toast({ html: 'Note Discarded', classes: 'blue' });
    }

    handleArchiveNote = () => {
        this.props.archiveNote(this.props.note.id);
        this.props.history.push('/');
        M.toast({ html: 'Note Archived', classes: 'blue' });
    }

    handleUpdateNote = () => {
        this.props.updateNote(this.state);
        this.props.history.push('/');
        M.toast({ html: 'Note Updated', classes: 'blue' });
    }

    handleTitleValueChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleBodyValueChange = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    render() {
        const note = this.props.note ? (
            <div className="container note-container">
                <div className="row">
                    <h3 className="left blue-text lblNotes">Edit Note</h3>
                </div>
                <div className="note-title row">
                    <div className="input-field col s10 m6 ">
                        <input placeholder="" id="note_title" type="text" className="validate"
                            value={this.state.title} onChange={this.handleTitleValueChange} />
                        <label htmlFor="note_title" className="active">Title</label>
                    </div>
                </div>
                <div className="note-body row">
                    <div className="input-field col s10 m8">
                        <textarea id="textarea" className="materialize-textarea" value={this.state.body}
                            onChange={this.handleBodyValueChange}
                        />
                        <label htmlFor="textarea" className="active">Content</label>
                    </div>
                </div>
                <div className="note-buttons row">
                    <div className="col s10 m8">
                        <div className="left">
                            <button className="waves-effect waves-light btn red darken-1"
                                onClick={this.handleDeleteNote}>Delete</button>
                            <button className="waves-effect waves-light btn blue darken-1"
                                onClick={this.handleDiscardNote}>Discard</button>
                            <button className="waves-effect waves-light btn grey darken-1"
                                onClick={this.handleArchiveNote}>Archive</button>
                        </div>
                        <div className="right">
                            <button className="waves-effect waves-light btn green darken-1"
                                onClick={this.handleUpdateNote}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div className=" container loading-note-container valign-wrapper">
                    <div className="mx-auto">
                        <h5>Loading...</h5>
                    </div>
                </div>
            )

        return (
            <div className="content-component">
                {note}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.note_id);
    return {
        note: state.notes.find(note => note.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => { dispatch(deleteNote(id)) },
        archiveNote: (id) => { dispatch(archiveNote(id)) },
        updateNote: ({ id, title, body }) => { dispatch(updateNote(id, title, body)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Note));