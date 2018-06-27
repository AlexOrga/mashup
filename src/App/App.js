import React, { Component } from 'react';

import Mashups from '../components/Mashups/Mashups';
import MashupForm from '../components/MashupForm/MashupForm';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Mashups />
        </div>

        <div className="col-sm-6">
          <MashupForm />
        </div>
      </div>
    );
  }
}

export default App;
