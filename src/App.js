import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Notes from './components/Notes';
import Archives from './components/Archives';
import Archive from './components/Archive';
import Trash from './components/Trash';
import Note from './components/Note';
import NewNote from './components/NewNote';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <SideNav />
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route exact path="/newnote" component={NewNote} />
            <Route path="/archives" component={Archives} />
            <Route path="/trash" component={Trash} />
            <Route path="/note/:note_id" component={Note} />
            <Route path="/archive/:archive_id" component={Archive} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
