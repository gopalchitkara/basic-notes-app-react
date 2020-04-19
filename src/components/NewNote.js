import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';
import { addNewNote } from '../actions/noteActions'

class Note extends Component {

    state = {
        title: "",
        body: ""
    }

    handleDiscardNote = () => {
        this.props.history.push('/');
        M.toast({ html: 'Note Discarded', classes: 'blue' });
    }

    handleAddNote = () => {
        this.props.addNewNote(this.state);
        this.props.history.push('/');
        M.toast({ html: 'Note Added', classes: 'blue' });
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
        return (
            <div className="content-component">
                <div className="container note-container">
                    <div className="row">
                        <h3 className="left blue-text lblNotes">New Note</h3>
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
                            <textarea id="textarea" placeholder="" className="materialize-textarea" value={this.state.body}
                                onChange={this.handleBodyValueChange}
                            />
                            <label htmlFor="textarea" className="active">Content</label>
                        </div>
                    </div>
                    <div className="note-buttons row">
                        <div className="col s10 m8">
                            <div className="right">
                                <button className="waves-effect waves-light btn blue darken-1"
                                    onClick={this.handleDiscardNote}>Discard</button>
                                <button className="waves-effect waves-light btn green darken-1 btnSaveNewNote"
                                    onClick={this.handleAddNote}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewNote: ({ title, body }) => { dispatch(addNewNote(title, body)) }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Note));