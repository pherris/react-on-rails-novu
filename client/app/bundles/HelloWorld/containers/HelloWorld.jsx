import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';
import ActivitiesWidget from '../components/ActivitiesWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$helloWorldStore: state.$$helloWorldStore };
}

// Simple example of a React "smart" component
const HelloWorld = (props) => {
  const { dispatch, $$helloWorldStore } = props;
  const actions = bindActionCreators(helloWorldActionCreators, dispatch);
  const { updateName } = actions;
  const name = $$helloWorldStore.get('name');
  const activities = $$helloWorldStore.get('activities');

  //let's fetch some stuff from the server
  actions.fetchActivities();
  setTimeout(() => { actions.fetchedActivities() }, 10);
  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <div>
      <HelloWorldWidget {...{ updateName, name }} />
    </div>
  );
};

HelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$helloWorldStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(HelloWorld);
