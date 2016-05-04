import React from 'react';
import Aside from './aside/Aside';
import BundleWidget from '../components/behavior/BundleWidget';

export default class TwoColumn extends React.Component {
  render() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                        'eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 main-column">
            <BundleWidget
              header="Healthy Pregnancy Series"
              description={description}
              rewards={['$50 Gift Card', 'Diapers', 'etc.']}
              duration="Jan 1, 2016 - Dec. 31, 2016"
            />
          </div>

          <div className="col-sm-4">
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
