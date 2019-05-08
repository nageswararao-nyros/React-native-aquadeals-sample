import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Elements  from '../screens/elements';
import Home from '../screens/Home';

export default createStackNavigator({
    Home:{
      screen: Home, 
      navigationOptions:{
        header: () => null,
      },
    },
    Elements: {
      screen: Elements,
      navigationOptions: ({ navigation }) => ({
        header: () => null,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);