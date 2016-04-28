import actionTypes from '../constants/helloWorldConstants';
import Immutable from 'immutable';

// to me it makes sense to have the initial state in the store as opposed to in
// with one (of possibly many) reducers, but the link-back to the store here is a bit odd.
import $$initialState from '../store/helloWorldStore';

export function activitiesReducer($$state = [], action) {
  const { type, activities } = action;

  switch (type) {
    case actionTypes.FETCH_ACTIVITIES_REQUEST:
      return $$state;
    case actionTypes.FETCH_ACTIVITIES_FAILURE:
      return $$state;
    case actionTypes.FETCH_ACTIVITIES_SUCCESS:
      return Immutable.fromJS(activities);
    default:
      return $$state;
  }
}

export function helloWorldReducer($$state = $$initialState, action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);
    default:
      return $$state;
  }
}
