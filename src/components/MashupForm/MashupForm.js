import React from 'react';
import PropTypes from 'prop-types';

import './MashupForm.css';

class MashupForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    animal: {
      name: '',
    },
  }

  render () {
    return (
      <div className="MashupForm">
        <h2 className="MashupFormHeader">Mashup Form</h2>

        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input className="form-control" id="inputName" placeholder="Name of Animal" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputImageUrl" className="col-sm-2 control-label">Image Url</label>
            <div className="col-sm-10">
              <input className="form-control" id="inputImageUrl" placeholder="https://www.imageUrl.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputDescription" placeholder="Describe the animal here..." />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-danger">Add Mashup</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default MashupForm;
