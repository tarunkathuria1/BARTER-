import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screen/HomeScreen';
import ReceiverDetailsScreen  from '../screen/ReceiverDetailsScreen';
import NotificationScreen from '../screen/NotificationScreen'



export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Notification : {
     screen : NotificationScreen,
     navigationOptions:{
       headerShown : false
     }
   }
 },


  {
    initialRouteName: 'BarterList'
  }
);
