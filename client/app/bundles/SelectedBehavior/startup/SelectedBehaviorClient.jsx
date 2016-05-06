import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../../../store/helloWorldStore';
import SelectedBehaviorScreen from '../containers/SelectedBehaviorScreen';

export default (props) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <SelectedBehaviorScreen />
    </Provider>
  );
  return reactComponent;
};
