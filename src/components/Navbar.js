import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';

class Navbar extends Component {

  refreshPage = () => {
    window.location.reload(false);
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225, constrainWidth: false });
  }

  render() {
    return (
      <div className="custom-Navbar z-depth-1 grey-text text-darken-3">
        <div className="navbar-left-items">
          <i className="material-icons">dashboard</i>
          <p>gcNotes</p>
        </div>
        <div className="navbar-right-items">
          <div className="navbar-searchbar-wrapper valign-wrapper">
            <div className="navbar-searchbar valign-wrapper">
              <div className="nav-icon-wrapper valign-wrapper"><i className="material-icons nav-icon">search</i></div>
              <input className="browser-default" type="text" placeholder="Search" />
              <div className="nav-icon-wrapper valign-wrapper"><i className="material-icons nav-icon">clear</i></div>
            </div>
          </div>
          <div className="nav-icon-wrapper valign-wrapper" onClick={this.refreshPage}>
            <i className="material-icons nav-icon">refresh</i>
          </div>
          <div className="nav-icon-wrapper valign-wrapper" onClick={(e) => e.preventDefault()}>
            <i className="material-icons nav-icon">view_agenda</i>
          </div>
          <div className="nav-icon-wrapper valign-wrapper dropdown-trigger" data-target='settings-dropdown'>
            <i className="material-icons nav-icon">settings</i>
            <ul id='settings-dropdown' className='dropdown-content'>
              <li><Link href="#!" className="blue-text">View on Github</Link></li>
              <li><Link href="#!" className="blue-text">About Me</Link></li>
              <li><Link href="#!" className="blue-text">More Projects like this</Link></li>
              <li className="divider" tabIndex="-1"></li>
              <li><Link href="https://gopalchitkara.in/" className="blue-text" target="_blank">GoTo gopalchitkara.in</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar; 