// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import { helloWorldReducer } from './helloWorldReducer';
import { activitiesReducer } from './helloWorldReducer';

// maps the reducers onto the specific part of the atom/store that they are responsible for
export default {
  $$person: helloWorldReducer,
  $$activities: activitiesReducer,
  $$statistics: (state = {}) => state,
};
