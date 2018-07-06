import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import mashupRequests from '../firebaseRequests/mashups';
import Mashups from '../components/Mashups/Mashups';
import MashupForm from '../components/MashupForm/MashupForm';

import './App.css';

class App extends Component {
  state = {
    mashups: [],
  }

  submitForm = (animal) => {
    mashupRequests.postRequest(animal)
      .then(() => {
        mashupRequests.getRequest()
          .then((mashups) => {
            this.setState({mashups});
          });
      })
      .catch((err) => {
        console.error('error posting new mashup', err);
      });
  }

  componentDidMount () {
    connection();
    mashupRequests.getRequest()
      .then((mashups) => {
        this.setState({mashups});
      })
      .catch((err) => {
        console.error('error loading mashups', err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-8">
          <Mashups
            mashups={this.state.mashups}
          />
        </div>

        <div className="col-sm-4">
          <MashupForm
            onSubmit={this.submitForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
