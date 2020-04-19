import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';
import { deleteArchive, moveArchiveToNotes, updateArchive } from '../actions/archiveActions'

class Archive extends Component {

    state = {
        id: this.props.archive.id,
        title: this.props.archive.title,
        body: this.props.archive.body
    }

    handleDeleteArchive = () => {
        this.props.deleteArchive(this.props.archive.id);
        this.props.history.push('/archives');
        M.toast({ html: 'Archive Deleted', classes: 'blue' });
    }

    handleDiscardArchive = () => {
        this.props.history.push('/archives');
        M.toast({ html: 'Archive Discarded', classes: 'blue' });
    }

    handleMoveArchiveToNotes = () => {
        this.props.moveArchiveToNotes(this.props.archive.id);
        this.props.history.push('/archives');
        M.toast({ html: 'Moved to Notes', classes: 'blue' });
    }

    handleUpdateArchive = () => {
        this.props.updateArchive(this.state);
        this.props.history.push('/archives');
        M.toast({ html: 'Archive Updated', classes: 'blue' });
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
        const archive = this.props.archive ? (
            <div className="container note-container">
                <div className="row">
                    <h3 className="left blue-text lblNotes">Edit Archived Note</h3>
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
                                onClick={this.handleDeleteArchive}>Delete</button>
                            <button className="waves-effect waves-light btn blue darken-1"
                                onClick={this.handleDiscardArchive}>Discard</button>
                            <button className="waves-effect waves-light btn grey darken-1"
                                onClick={this.handleMoveArchiveToNotes}>Move To Notes</button>
                        </div>
                        <div className="right">
                            <button className="waves-effect waves-light btn green darken-1"
                                onClick={this.handleUpdateArchive}>Update</button>
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
                {archive}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.archive_id);
    return {
        archive: state.archives.find(archive => archive.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArchive: (id) => { dispatch(deleteArchive(id)) },
        moveArchiveToNotes: (id) => { dispatch(moveArchiveToNotes(id)) },
        updateArchive: ({ id, title, body }) => { dispatch(updateArchive(id, title, body)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Archive));