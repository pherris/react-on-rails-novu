import React, { PropTypes } from 'react';
import Aside from './aside/Aside';
import BundleWidget from '../components/behavior/BundleWidget';

export default class TwoColumn extends React.Component {
  static propTypes = {
    $$behaviors: PropTypes.array.isRequired,
  };

  render() {
    const behaviors = this.props.$$behaviors.toJS();
    const behaviorList = [];
    behaviors.forEach(behavior => {
      if (behavior.type === 'bundle') {
        behaviorList.push(<BundleWidget
          key={behavior.id}
          type="bundle"
          header={behavior.header}
          description={behavior.description}
          rewards={behavior.rewards}
          duration={behavior.duration}
        />);
      }
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 main-column">
            {behaviorList}
          </div>

          <div className="col-sm-4">
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
