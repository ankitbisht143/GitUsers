import {StackNavigator, createStackNavigator} from 'react-navigation';
import * as navigationOptions from './navigationOptions'

import HomeScene from '../scenes/homeScene';
import ProfileScene from '../scenes/profileScene';
import RepositoriesScene from '../scenes/repositoriesScene';

const MainNavigator = createStackNavigator({
  home:{screen:HomeScene,navigationOptions:{header:null}},
  userProfile:{screen:ProfileScene,navigationOptions:navigationOptions.profile},
  repositories:{screen:RepositoriesScene,navigationOptions:navigationOptions.repositories}
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
