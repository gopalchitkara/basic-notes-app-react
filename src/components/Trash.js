import React, { Component } from 'react';
import { connect } from 'react-redux'
import { emptyTrash } from '../actions/trashActions'
import M from 'materialize-css';

class Trash extends Component {

    handleEmptyTrashClick = (e) => {
        e.preventDefault();
        this.props.emptyTrash();
        M.toast({ html: 'Trash Empty', classes: 'blue' });
    }

    render() {
        const { trash } = this.props;
        
        const trashItems = trash.length ? (
            trash.map(trashItem => {
                return (
                    <div className="col s6 m4 l3 notes_note-wrapper" key={trashItem.id}>
                        <div className="notes_note ">
                            {trashItem.title.length ? (
                                <div className="notes_note-title ">
                                    <b>{trashItem.title.slice(0, 20)}</b>
                                </div>
                            ) : (
                                    null
                                )}
                            {trashItem.body.length ? (
                                <div className="notes_note-body">
                                    {trashItem.body.length > 140 ? (
                                        <p>
                                            {trashItem.body.slice(0, 140) + '...'}
                                        </p>
                                    ) : (
                                            <p>
                                                {trashItem.body}
                                            </p>
                                        )}
                                </div>
                            ) : (
                                    null
                                )}
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center"><h6>Trash Empty...</h6></div>
            )

        const emptyTrashButton = trashItems.length ? (
            <button className="btnEmptyTrash waves-effect waves-light btn red darken-1"
                onClick={this.handleEmptyTrashClick}>Empty Trash</button>
        ) : (
                <button className="btnEmptyTrash waves-effect waves-light btn disabled"
                    onClick={this.handleEmptyTrashClick}>Empty Trash</button>
            )

        return (
            <div className="content-component">
                <div className="container">
                    <div className="trash-container">
                        <div className="row valign-wrapper">
                            <h3 className="left blue-text lblTrash">Trash</h3>
                            {emptyTrashButton}
                        </div>
                        <div className="row">
                            {trashItems}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trash: state.trash
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        emptyTrash: () => { dispatch(emptyTrash()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trash);