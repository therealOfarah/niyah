import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import Media from '../screens/Media';
import Planner from '../screens/Planner';

const Tab = createBottomTabNavigator();
export default function UserStack() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  options={{headerShown:false}}  component={HomeScreen} />
        <Tab.Screen name="Media"  options={{headerShown:true}} component={Media} />
        <Tab.Screen name="Planner"  options={{headerShown:false}} component={Planner} />
        <Tab.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
