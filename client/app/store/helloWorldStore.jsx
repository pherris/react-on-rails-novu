import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import Immutable from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

// This provides an example of logging redux actions to the console.
// You'd want to disable this for production.
// import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import * as reducers from '../reducers';

// Redux expects to initialize the store using an Object, not an
// Immutable.Map, so we'll wrap immutable objects in a simple object.
// This is the default state that would be used if nothing is sent
// from the server.
export const initialState = {
  $$person: Immutable.fromJS({ fullName: '' }),
  $$activities: Immutable.fromJS([]),
  $$statistics: Immutable.fromJS({ strava_api_time: 0 }),
  $$behaviors: Immutable.fromJS([]),
  $$completing: Immutable.fromJS({ behavior: {}, bundle: {} }),
};

// This is how we get initial props Rails into redux.
export default props => {
  const {
    person,
    activities = [],
    statistics = { strava_api_time: 0 },
    behaviors = [],
    completing = { behavior: {}, bundle: {} },
  } = props;

  // add the rails properties
  const initialStateWithRails = initialState;
  initialStateWithRails.$$person = Immutable.fromJS(person);
  initialStateWithRails.$$activities = Immutable.fromJS(activities);
  initialStateWithRails.$$statistics = Immutable.fromJS(statistics);
  initialStateWithRails.$$behaviors = Immutable.fromJS(behaviors);
  initialStateWithRails.$$completing = Immutable.fromJS(completing);

  // connect reducers to the state atom
  const reducer = combineReducers(reducers.default);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialStateWithRails);

  return store;
};
