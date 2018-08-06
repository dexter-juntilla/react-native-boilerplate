import { createStackNavigator } from 'react-navigation';

import Home from '../containers/Home';

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
});
