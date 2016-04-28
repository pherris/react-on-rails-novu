import actionTypes from '../constants/helloWorldConstants';
import fetch from 'isomorphic-fetch';

function fetchedActivities(activities) {
  return {
    type: actionTypes.FETCH_ACTIVITIES_SUCCESS,
    activities,
  };
}

function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

function fetchActivities() {
  return function fetchActivitiesPromise(dispatch) {
    return fetch(`http://localhost:3000/activity.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(fetchedActivities(json))
      );
  };
}

function fetchedActivitiesFailure() {
  return {
    type: actionTypes.FETCH_ACTIVITIES_FAILURE,
  };
}

export { updateName, fetchActivities, fetchedActivities, fetchedActivitiesFailure };
