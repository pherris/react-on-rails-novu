import actionTypes from '../constants/helloWorldConstants';
import fetch from 'isomorphic-fetch'

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name
  };
}

export function fetchActivities() {
  return function(dispatch) {
    return fetch(`http://localhost:3000/activity.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(fetchedActivities(json))
      );
  }
}

export function fetchedActivities(activities) {
  return {
    type: actionTypes.FETCH_ACTIVITIES_SUCCESS,
    activities: activities
  };
}

export function fetchedActivitiesFailure() {
  return {
    type: actionTypes.FETCH_ACTIVITIES_FAILURE,
    activities: activities
  };
}
