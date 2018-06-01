import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotesList from './NotesList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import NavBar from './NavBar';

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route component={NavBar} />
          <Route exact path="/" component={HomePage} />
          <Route path="/notes" component={NotesList} />
          <Route path="/create" component={CreateNote} />
          <Route path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default App;
