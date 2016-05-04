import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/helloWorldStore';
import Welcome from '../containers/Welcome';

export default props => {
  const store = createStore(props);
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
};
