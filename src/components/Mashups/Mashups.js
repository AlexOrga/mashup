import React from 'react';

import './Mashups.css';

class Mashups extends React.Component {
  render () {
    const {mashups} = this.props;
    const mashupsCardComponents = mashups.map((mashup) => {
      return (
        <div key={mashup.id} className="card-holder col-sm-4">
          <div className="thumbnail">
            <div className="img-holder">
              <img src={mashup.imgUrl} alt=""/>
            </div>
            <div className="caption">
              <h3>{mashup.name}</h3>
              <p>{mashup.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2 className="Mashups">Mashups</h2>
        <div>{mashupsCardComponents}</div>
      </div>
    );
  }
}

export default Mashups;
