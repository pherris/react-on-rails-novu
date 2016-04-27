import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import Immutable from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

// This provides an example of logging redux actions to the console.
// You'd want to disable this for production.
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import * as reducers from '../reducers';
// import { initialStates } from '../reducers';

// Redux expects to initialize the store using an Object, not an Immutable.Map
export const initialState = {
  $$person: Immutable.Map({ name: name }), // this is the default state that would be used if one were not passed into the store
  $$activities: Immutable.fromJS([])
};

export default props => {
  // This is how we get initial props Rails into redux.
  const { name } = props.name;
  // const { $$helloWorldState } = initialStates;

  //add the rails properties
  const initialStateWithRails = initialState;
  initialStateWithRails.$$person = Immutable.Map({ name: name });

  const reducer = combineReducers(reducers.default);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
    // applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialStateWithRails);

  return store;
};
