import SelectedBehaviorApp from './SelectedBehaviorServer';
import ReactOnRails from 'react-on-rails';

ReactOnRails.setOptions({
  traceTurbolinks: false,
});

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ SelectedBehaviorApp });
