import React from 'react';
import Aside from './aside/Aside';

export default class TwoColumn extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 main-column">

          </div>

          <div className="col-sm-4">
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
