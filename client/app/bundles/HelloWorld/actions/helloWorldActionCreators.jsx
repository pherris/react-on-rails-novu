import actionTypes from '../constants/helloWorldConstants';
// //server only
// import { polyfill } from 'es6-promise';
// polyfill();

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
  console.log('client- make request to http://localhost:3000/activity.json');
  return function fetchActivitiesPromise(dispatch) {
    console.log('client- execute function....');
    return fetch('http://localhost:3000/activity.json')
      .then(response => {
        console.log('client- in first then');
        return response.json()
      })
      .then(json => {
        console.log('client- returning ok!');
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(fetchedActivities(json))
      }).catch(reject => {
        console.log('client- FAILURE');
      });
  };
}

function fetchedActivitiesFailure() {
  return {
    type: actionTypes.FETCH_ACTIVITIES_FAILURE,
  };
}

export { updateName, fetchActivities, fetchedActivities, fetchedActivitiesFailure };
