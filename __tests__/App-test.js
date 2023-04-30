import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import App from '../react-native-macos-reminders/src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
