import React, { PropTypes } from 'react';
import Aside from './aside/Aside';
import Bundle from '../components/behavior/BundleWidget';
import BehaviorList from '../components/behavior/BehaviorListWidget';

export default class TwoColumn extends React.Component {
  static propTypes = {
    $$behaviors: PropTypes.object.isRequired,
  };

  render() {
    const types = this.props.$$behaviors.toJS();
    const bundleList = [];
    const behaviorList = [];
    types.forEach(type => {
      if (type.type === 'bundle') {
        bundleList.push(<Bundle
          key={type.id}
          type="bundle"
          header={type.header}
          description={type.description}
          rewards={type.rewards}
          duration={type.duration}
          behaviors={type.behaviors}
          category={type.category}
        />);
        return;
      }

      behaviorList.push(type);
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 main-column">
            {bundleList}
            <BehaviorList behaviors={behaviorList} />
          </div>

          <div className="col-sm-4">
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
