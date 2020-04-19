import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Archives extends Component {
    render() {
        const { archives } = this.props;
        const archiveList = archives.length ? (
            archives.map(archive => {
                return (
                    <div className="col s6 m4 l3 notes_note-wrapper" key={archive.id}>
                        <Link to={'/archive/' + archive.id}>
                            <div className="notes_note ">
                                {archive.title.length ? (
                                    <div className="notes_note-title ">
                                        <b>{archive.title.slice(0, 20)}</b>
                                    </div>
                                ) : (
                                        null
                                    )}
                                {archive.body.length ? (
                                    <div className="notes_note-body">
                                        {archive.body.length > 140 ? (
                                            <p>
                                                {archive.body.slice(0, 140) + '...'}
                                            </p>
                                        ) : (
                                                <p>
                                                    {archive.body}
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
                <div className="center"><h6>Loading Archives...</h6></div>
            )

        const sortedArchivesList = archiveList.length ? (
            archiveList.sort(function (a, b) { return a.key - b.key }).reverse()
        ) : (
                <div>Archives Empty...</div>
            )

        return(
            <div className="content-component">
                <div className="container">
                    <div className="archives-container">
                        <div className="row">
                            <h3 className="left blue-text lblArchives">Archives</h3>
                        </div>
                        <div className="row">
                        {sortedArchivesList}
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        archives: state.archives
    }
}

export default connect(mapStateToProps)(Archives);