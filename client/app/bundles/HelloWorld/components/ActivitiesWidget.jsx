// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class ActivitiesWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    // updateName: PropTypes.func.isRequired,
    activities: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { activities } = this.props;
    return (
      <div className="container">
        <h3>
          Activities: {activities.length}
        </h3>
      </div>
    );
  }
}
