import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $red: '#F00',
  $white: '#FFF',
  $black: '#000',
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
