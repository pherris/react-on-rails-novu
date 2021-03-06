import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class HelloWorldWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const fullName = e.target.value;
    this.props.updateName(fullName);
  }

  render() {
    const { fullName } = this.props;
    return (
      <div className="container">
        <h3>
          My name is {fullName}!
        </h3>
        <hr />
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={fullName}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
