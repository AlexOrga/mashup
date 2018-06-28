import React from 'react';

import './MashupForm.css';

class MashupForm extends React.Component {
  render () {
    return (
      <div className="MashupForm">
        <h2 className="MashupFormHeader">Mashup Form</h2>

        <div className="form-holder">
          <div className="input-group">
            <span className="input-group-addon">Name</span>
            <input type="text" id="name-input" className="form-control" aria-describedby="sizing-addon2"/>
          </div>

          <div className="input-group">
            <span className="input-group-addon">Image Url</span>
            <input type="text" id="img-input" className="form-control" aria-describedby="sizing-addon2"/>
          </div>

          <div className="input-group">
            <span className="input-group-addon">Description</span>
            <input type="text" id="description-input" className="form-control" aria-describedby="sizing-addon2"/>
          </div>

          <button className="btn btn-danger">Add Mashup!</button>
        </div>

      </div>
    );
  }
}

export default MashupForm;
