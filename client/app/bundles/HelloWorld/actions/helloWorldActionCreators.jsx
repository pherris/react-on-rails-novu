import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name
  };
}

export function fetchActivities() {
  return {
    type: actionTypes.FETCH_ACTIVITIES_REQUEST
  };
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
