import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div className="custom-sidenav-wrapper hide-on-med-and-down ">
                <div className="custom-sidenav">
                    <ul>
                        <li className="valign-wrapper">
                            <NavLink to="/" className="sidenav-item valign-wrapper text-dark">
                                <i className="material-icons">note</i>
                                <span>Notes</span>
                            </NavLink>
                            <Link to="/newnote" 
                                className=" btnNewNote waves-effect waves-light btn blue darken-1 btn-flat white-text btn-small"
                                >New Note</Link>
                        </li>
                        <li className="valign-wrapper">
                            <NavLink to="/archives" className="sidenav-item valign-wrapper text-dark">
                                <i className="material-icons">archive</i>
                                <span>Archive</span>
                            </NavLink>
                        </li>
                        <li className="valign-wrapper">
                            <NavLink to="/trash" className="sidenav-item valign-wrapper text-dark">
                                <i className="material-icons">delete</i>
                                <span>Trash</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideNav;