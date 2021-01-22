import React from 'react';
import Main from './views/Main';
import {Router} from '@reach/router';
import NewAuthor from './components/AddAuthor';
import Update from './views/Update';

function App() {
  return (
    <div className="App" style = {{padding: "15px"}}>
      <h2>Favorite Authors</h2>
      <Router>
        <Main path = "/"/>
        <NewAuthor path = "/new"/> 
        <Update path = "/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
