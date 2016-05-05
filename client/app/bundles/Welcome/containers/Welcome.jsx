import React, { PropTypes } from 'react';

// import HelloWorldWidget from '../components/HelloWorldWidget';
// import ActivitiesWidget from '../components/activities/ActivitiesWidget';

import TwoColumn from './TwoColumn';
import Jumbotron from '../components/welcome/JumbotronWidget';
import Footer from '../../../components/footer/FooterWidget';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
// import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';

function mapStateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  // return { $$helloWorldStore: state.$$helloWorldStore };
  return { state };
}

// Simple example of a React "smart" component
const Welcome = (props) => {
  const { state } = props;

  // const { dispatch, state } = props;
  // const actions = bindActionCreators(helloWorldActionCreators, dispatch);
  // const { updateName } = actions;

  // <HelloWorldWidget {...{ updateName, fullName: state.$$person.get('fullName') }} />
  // <ActivitiesWidget {... {
  //   $$activities: state.$$activities, $$statistics: state.$$statistics }} />

  return (
    <div>
      <Jumbotron {... { $$person: state.$$person }} />
      <TwoColumn {... { $$behaviors: state.$$behaviors }}/>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  state: PropTypes.object.isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export Welcome, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(Welcome);
