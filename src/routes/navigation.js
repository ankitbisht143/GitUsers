import {StackNavigator, createStackNavigator} from 'react-navigation';
import * as navigationOptions from './navigationOptions'

import HomeScene from '../scenes/homeScene';

const MainNavigator = createStackNavigator({
  home:{screen:HomeScene,navigationOptions:{header:null}},
},{
  navigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
        backgroundColor:'white'
    },
  	headerTintColor:'black'
  }
})

export default MainNavigator;
